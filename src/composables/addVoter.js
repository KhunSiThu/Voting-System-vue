import firebase from "firebase/app"; // Ensure Firebase is imported
import { db } from "@/firebase/config"; // Firestore configuration

const addVoter = async (col,voteId, voterId) => {
  try {
    // Reference the document in the "vote-major-king" collection
    const docRef = db.collection(col).doc(voteId);

    // Check if the document exists
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      // If document does not exist, set it with the initial voter array
      await docRef.set({
        voter: [voterId],
      });
      console.log(`Document ${voteId} created and voter ${voterId} added successfully.`);
      return { success: true, message: `Document ${voteId} created and voter ${voterId} added successfully.` };
    }

    // Add the voter ID to the existing voter array
    await docRef.update({
      voter: firebase.firestore.FieldValue.arrayUnion(voterId),
    });

    console.log(`Voter ${voterId} added successfully to ${voteId}.`);
    return { success: true, message: `Voter ${voterId} added successfully.` };
  } catch (error) {
    console.error("Error adding voter:", error.message);
    return { success: false, error: error.message };
  }
};

export default addVoter;
