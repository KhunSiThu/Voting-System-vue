<?php

// Allow from any origin
header("Access-Control-Allow-Origin: http://localhost:8080");

// Allow specific methods (GET, POST, etc.)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Allow headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
exit; // Exit early for OPTIONS request, as no further processing is needed
}

session_start();

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Debugging: Print the raw input data
$input = file_get_contents("php://input");
file_put_contents("php://stdout", $input); // This will print the raw input to the console for debugging
$input = json_decode($input, true);

// Debugging: Check if the decoded data is correct
if (!$input) {
echo json_encode(['success' => false, 'message' => 'Invalid JSON data received']);
exit; // Stop execution if the input is invalid
}

if (isset($input['email']) && isset($input['password'])) {
$email = $input['email'];
$password = $input['password'];

// Generate a random 4-digit verification code
$verification_code = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);

// Store the verification code in the session
$_SESSION['verification_code'] = $verification_code;

// User details
$user_email = $input['email'];
$user_name = $input['name'];

require "../sendEmail/vendor/autoload.php";

$mail = new PHPMailer(true);

try {
// Configure SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;
$mail->Username = "khunsithuaung65@gmail.com";
$mail->Password = "usfb tkha xhhz iygs";
$mail->setFrom($user_email, "Voting App");
$mail->addAddress($user_email);
$mail->Subject = "Account Verification";
$mail->Body = "Hello $user_name,\n\nYour verification code is: $verification_code\n\nPlease use this code to complete your account verification.";

if ($mail->send()) {
echo json_encode(['success' => true, 'message' => 'Verification code sent', 'verityCode' => $verification_code]);
} else {
echo json_encode(['success' => false, 'message' => 'Failed to send verification email']);
}
} catch (Exception $e) {
echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
}
} else {
echo json_encode(['success' => false, 'message' => 'Email and password are required']);
}