<template>
<div class="sm:ml-64  bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
    <!-- Page Header -->
    <header class="bg-blue-700 text-white py-8 dark:bg-blue-800">
        <div class="container mx-auto text-center">
            <h1 class="text-5xl font-extrabold">Voting Policy</h1>
            <p class="mt-3 text-xl">A fair and transparent voting process for all students.</p>
        </div>
    </header>

    <div class="p-5 md:p-20">
        <!-- Overview Section -->
        <section class="space-y-8">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Overview</h2>
            <p class="text-lg text-gray-800 leading-relaxed prose text-justify dark:text-gray-300">
                The voting process is designed to ensure fairness and transparency in selecting the King and Queen
                for each academic major.
                As a student, you are allowed to vote for one King and one Queen from your respective major. This
                policy helps maintain
                the integrity of the voting process and ensures an unbiased selection.
            </p>
        </section>

        <!-- Eligibility Requirements Section -->
        <section class="space-y-8 mt-10">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Eligibility Requirements</h2>
            <div class="space-y-4">
                <p class="text-lg text-gray-700 prose text-justify dark:text-gray-300">
                    To participate in the voting process, ensure that you meet the following requirements:
                </p>
                <ul class="list-disc pl-6 text-gray-700 space-y-2 prose text-justify dark:text-gray-300">
                    <li>You must be an active student at the university.</li>
                    <li>You must be enrolled in one of the participating majors.</li>
                    <li>Each student is allowed one vote for King and one vote for Queen within their major.</li>
                </ul>
            </div>
        </section>

        <!-- Voting Process Section -->
        <section class="space-y-8 mt-10">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Voting Process</h2>
            <div class="space-y-4">
                <p class="text-lg text-gray-700 prose text-justify dark:text-gray-300">
                    The voting process is simple and can be completed in a few easy steps. Here's how:
                </p>
                <ol class="list-decimal pl-6 text-gray-700 space-y-2 prose text-justify dark:text-gray-300">
                    <li>Login to your student portal with your university credentials.</li>
                    <li>Navigate to the “Vote Now” section.</li>
                    <li>Select your King and Queen candidates from the list of nominees in your major.</li>
                    <li>Click “Submit” to cast your vote.</li>
                    <li>Your vote is final, and cannot be changed once submitted.</li>
                </ol>
            </div>
        </section>

        <!-- Voting Rules Section -->
        <section class="space-y-8 mt-10">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Voting Rules</h2>
            <div class="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border dark:border-gray-700">
                <ul class="list-disc pl-6 text-gray-700 space-y-2 prose text-justify dark:text-gray-300">
                    <li><strong>One vote per student:</strong> You may cast one vote for the King and one vote for
                        the Queen.</li>
                    <li><strong>Vote within your major:</strong> Only vote for candidates from your academic major.
                    </li>
                    <li><strong>Confidentiality:</strong> Your vote is private, and each student is only allowed one
                        vote for each title.</li>
                    <li><strong>Rule violations:</strong> Any violations of these rules may result in
                        disqualification.</li>
                </ul>
            </div>
        </section>

        <!-- Voting Period Section -->
        <section class="space-y-8 mt-10 bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg dark:bg-yellow-200 dark:border-yellow-500">
            <h2 class="text-3xl font-semibold text-yellow-600 dark:text-yellow-500">Voting Period</h2>
            <p class="text-lg text-gray-800 prose text-justify dark:text-gray-300">
                The voting period will begin on <strong>January 10, 2024</strong> and will close on <strong>January
                    20, 2024</strong>.
                <span class="text-red-500 font-semibold">Make sure to cast your vote within this timeframe!</span>
            </p>
            <p id="countdown" class="text-lg text-gray-700 font-semibold dark:text-gray-200"></p>
        </section>

        <!-- Frequently Asked Questions (FAQ) -->
        <section class="space-y-8 mt-10">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Frequently Asked Questions (FAQ)
            </h2>
            <div class="space-y-6 text-lg text-gray-700 dark:text-gray-300">
                <!-- FAQ Item 1 -->
                <div class="faq-item">
                    <div class="faq-question cursor-pointer flex items-center justify-between bg-blue-100 p-4 rounded-md shadow-sm hover:bg-blue-200 transition-all duration-300 dark:bg-blue-800 dark:text-white" onclick="toggleAnswer('answer1')">
                        <p class="font-semibold">Q: Can I change my vote after submission?</p>
                        <span id="icon1" class="faq-icon text-blue-600 dark:text-blue-300">+</span>
                    </div>
                    <div id="answer1" class="faq-answer hidden max-h-0 overflow-hidden bg-gray-50 p-4 transition-all duration-300 ease-in-out dark:bg-gray-700 dark:text-gray-300">
                        <p>A: No, once you submit your vote, it is final. Please ensure you make your selection
                            carefully before submitting.</p>
                    </div>
                </div>

                <!-- FAQ Item 2 -->
                <div class="faq-item">
                    <div class="faq-question cursor-pointer flex items-center justify-between bg-blue-100 p-4 rounded-md shadow-sm hover:bg-blue-200 transition-all duration-300 dark:bg-blue-800 dark:text-white" onclick="toggleAnswer('answer2')">
                        <p class="font-semibold">Q: How do I know if I am eligible to vote?</p>
                        <span id="icon2" class="faq-icon text-blue-600 dark:text-blue-300">+</span>
                    </div>
                    <div id="answer2" class="faq-answer hidden max-h-0 overflow-hidden bg-gray-50 p-4 transition-all duration-300 ease-in-out dark:bg-gray-700 dark:text-gray-300">
                        <p>A: You are eligible if you are currently enrolled in a participating major. If you are
                            unsure, please reach out to the student registration office.</p>
                    </div>
                </div>

                <!-- FAQ Item 3 -->
                <div class="faq-item">
                    <div class="faq-question cursor-pointer flex items-center justify-between bg-blue-100 p-4 rounded-md shadow-sm hover:bg-blue-200 transition-all duration-300 dark:bg-blue-800 dark:text-white" onclick="toggleAnswer('answer3')">
                        <p class="font-semibold">Q: What should I do if I encounter a problem while voting?</p>
                        <span id="icon3" class="faq-icon text-blue-600 dark:text-blue-300">+</span>
                    </div>
                    <div id="answer3" class="faq-answer hidden max-h-0 overflow-hidden bg-gray-50 p-4 transition-all duration-300 ease-in-out dark:bg-gray-700 dark:text-gray-300">
                        <p>A: If you face any issues, contact support immediately at <a href="mailto:support@example.com" class="text-blue-600 hover:underline dark:text-blue-400">support@example.com</a> or
                            call
                            +1 (123)
                            456-7890.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Information -->
        <section class="space-y-8 mt-10">
            <h2 class="text-3xl font-semibold text-blue-600 dark:text-blue-400">Need Assistance?</h2>
            <p class="text-lg text-gray-700 prose text-justify dark:text-gray-300">
                If you have any questions or face any issues during the voting process, feel free to contact our
                support team:
            </p>
            <p class="text-lg text-blue-600 dark:text-blue-400">Email: <a href="mailto:support@example.com">support@example.com</a></p>
            <p class="text-lg text-blue-600 dark:text-blue-400">Phone: +1 (123) 456-7890</p>
        </section>

        <!-- Privacy Policy Link -->
        <section class="mt-10">
            <p class="text-center text-blue-500 dark:text-blue-300">
                <a href="./policy.php" class="hover:underline">Privacy Policy</a>
            </p>
        </section>
    </div>

</div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import redirect from '@/composables/redirect';

export default {

    props: ['userData'],

    components: {
        SideBar
    },

    setup(props) {
        redirect(props.userData)
    }

}
</script>

<style scoped>
/* Add custom dark mode styles if needed */
</style>
