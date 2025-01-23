<template>

<div v-if="userData && filterCandidates">
    <SideBar :userData="userData"></SideBar>

    <div  class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">
        <!-- Hero Section -->
        <section class="text-center relative bg-cover bg-center pb-10 mx-auto">

            <div class="bg-white z-10 flex flex-col items-center py-5 px-3 sticky w-full header dark:bg-gray-800">
                <div class="md:w-60 w-40 mb-4 overflow-hidden object-cover border border-gray-300 rounded dark:border-gray-500">
                    <img v-if="userData.major === 'Electronic Engineering'" src="@/Images/EC.png" alt="">
                    <img v-if="userData.major === 'Electrical Power Engineering'" src="@/Images/EP.png" alt="">
                    <img v-if="userData.major === 'Mechanical Engineering'" src="@/Images/CE.png" alt="">
                    <img v-if="userData.major === 'Civil Engineering'" src="@/Images/ME.png" alt="">
                </div>
                <h1 class="text-blue-500 text-2xl sm:text-4xl md:text-4xl font-bold py-4">{{ userData.major }}</h1>
                <p class="text-sm text-black sm:text-xl md:text-2xl mb-2 opacity-50 dark:text-gray-300">
                    Help your favorite contestants shine by casting your vote today!
                </p>

                <!-- <div class="flex gap-3 md:gap-12 sm:gap-12 mt-10">
                <div>
                    <h2 class="font-bold text-2xl mb-5 dark:text-white">KING ?</h2>
                    <div class="w-40 mb-4 h-30 overflow-hidden object-cover border-2 border-gray-300 rounded dark:border-gray-500">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-3d-icon-download-in-png-blend-fbx-gltf-file-formats--help-ask-user-interface-pack-icons-4652954.png?f=webp" alt="">
                    </div>
                </div>

                <div>
                    <h2 class="font-bold text-2xl mb-5 dark:text-white">QUEEN ?</h2>
                    <div class="w-40 mb-4 h-30 overflow-hidden object-cover border-2 border-gray-300 rounded dark:border-gray-500">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-3d-icon-download-in-png-blend-fbx-gltf-file-formats--help-ask-user-interface-pack-icons-4652954.png?f=webp" alt="">
                    </div>
                </div>
            </div> -->

                <!-- Voting Timer -->
                <div id="timer" class="space-y-2 relative md:absolute sm:absolute md:bottom-10 md:right-10">
                    <h1 class="text-lg opacity-50 dark:text-gray-300">Voting Ends In</h1>
                    <div class="flex justify-center gap-4 text-sm items-center">
                        <div class="flex flex-col items-center text-yellow-300">
                            <span id="days" class="text-3xl font-bold">{{ dayString }}</span>
                            <span>Days</span>
                        </div>
                        <div class="flex flex-col items-center text-blue-500">
                            <span id="hours" class="text-3xl font-bold">{{ hourString }}</span>
                            <span>Hours</span>
                        </div>
                        <div class="flex flex-col items-center text-green-400">
                            <span id="minutes" class="text-3xl font-bold">{{ minString }}</span>
                            <span>Minutes</span>
                        </div>
                        <div class="flex flex-col items-center text-red-600">
                            <span id="seconds" class="text-3xl font-bold">{{ secString }}</span>
                            <span>Seconds</span>
                        </div>
                    </div>
                    <p id="expired" class="hidden text-xl font-semibold text-red-500">
                        Voting has ended!
                    </p>
                </div>

            </div>

            <div class="max-w-8xl mx-auto mt-10">

                <!-- Content for King and Queen -->
                <div class="mx-auto flex flex-col justify-start items-center md:block w-full sm:flex-row">
                    <!-- Filter Buttons -->
                    <div class="flex w-full  md:flex-row flex-col justify-between items-center mb-5">
                        <div class="flex gap-12 md:mx-0 mx-3">
                            <button @click="filterSelected('male')"
                                class="flex justify-center w-24 md:w-40 items-center bg-blue-500 text-lg md:text-2xl font-bold text-white py-3 px-5 rounded hover:bg-blue-700 transition dark:bg-blue-700 dark:hover:bg-blue-600">
                                <i class="fas fa-crown text-white mr-2 md:mr-4 cursor-pointer" id="kingIcon"></i>
                                <span>King</span>
                            </button>

                            <button @click="filterSelected('female')"
                                class="flex justify-center w-24 md:w-40 items-center bg-pink-500 text-lg md:text-2xl font-bold text-white py-3 px-5 rounded hover:bg-pink-700 transition dark:bg-pink-700 dark:hover:bg-pink-600">
                                <i class="fas fa-crown text-white mr-2 md:mr-4 cursor-pointer" id="queenIcon"></i>
                                <span>Queen</span>
                            </button>
                        </div>

                        <div class="h3 flex justify-center items-center mt-4 md:mt-0"
                            :class="king_queen === 'KING' ? 'text-blue-400' : 'text-pink-400'">
                            <h3 class="text-xl md:text-4xl sm:text-4xl font-bold mr-5">Candidates For {{ king_queen }}
                            </h3>
                            <i class="fas fa-crown cursor-pointer text-3xl" id="kingIcon"></i>
                        </div>

                        <div class="hidden md:block">
                            <input v-model="searchValue" id="searchInput"
                                placeholder="Search by Name or Candidate Number"
                                class="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md mx-auto text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        </div>
                    </div>
                    <!-- 
        <div class="h3 flex justify-center items-center" :class="king_queen === 'KING' ? 'text-blue-400' : 'text-pink-400'">
            <h3 class="text-xl md:text-4xl sm:text-4xl font-bold mr-5">Candidates For {{ king_queen }} </h3>
            <i class="fas fa-crown cursor-pointer text-3xl" id="kingIcon"></i>
        </div> -->

                </div>

                <!-- Loading -->

                <div v-if="loading" class="flex items-center justify-center w-full py-20">
                    <div role="status">
                        <svg aria-hidden="true"
                            class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>

                <!-- No results found message -->
                <div v-else-if="!loading && filterCandidates.length === 0" class="w-full flex justify-center">
                    <div class="text-center p-6 bg-red-100 border border-red-300 rounded-lg mt-6">
                        <p class="text-lg font-semibold text-red-600">Sorry, no candidates match your search criteria.
                        </p>
                        <p class="text-sm text-red-500 mb-4">Please try adjusting your search terms or filters to find
                            the
                            candidates you're looking for. If you need assistance, feel free to reach out to the student
                            council.</p>
                        <button @click="resetFilters"
                            class="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150">
                            Reset Filters
                        </button>
                    </div>
                </div>

                <!-- Contestants Grid for King -->
                <div v-else id="filter_king"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 p-4 border dark:border-gray-700 rounded-lg">
                    <div v-if="error">
                        <p class="text-red-500">{{ error }}</p>
                    </div>
                    <!-- Candidate Card -->
                    <div v-for="candidate in filterCandidates" :key="candidate.rollno"
                        class=" p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border dark:border-gray-700"
                        :class="(candidate.rollno === userData.voteMajorKing ? 'bg-blue-100 dark:bg-blue-800' : (candidate.rollno === userData.voteMajorQueen ? 'bg-pink-100 dark:bg-pink-800' : 'bg-white dark:bg-gray-800'))">
                        <div class="relative flex flex-col items-center ">
                            <div class="relative w-full h-60 rounded overflow-hidden shadow-lg border"
                                :class="candidate.gender === 'male' ? 'border-blue-400' : 'border-pink-400'">
                                <img :src="candidate.profileImage" alt="Candidate Name"
                                    class="w-full h-full object-cover">
                            </div>

                            <div class="absolute left-2 -bottom-6 md:-bottom-8 items-center text-sm">
                                <span
                                    class="md:w-16 md:h-16 w-12 h-12  md:text-3xl text-xl font-bold text-white flex items-center justify-center rounded-full mr-3"
                                    :class="candidate.gender === 'male' ? 'bg-blue-400' : 'bg-pink-400'">
                                    {{ candidate.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ candidate.name }}</h2>
                        <p class="font-bold text-gray-700 dark:text-gray-300">Major - {{ candidate.major }}</p>
                        <button @click="openModal(candidate)"
                            class=" mt-7 w-28 font-bold hover:text-white border rounded-lg py-2 px-3 transition" :class="[
                                candidate.gender === 'male'
                                    ? 'text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400'
                                    : 'text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400'
                            ]">
                            <span v-if="clickId != candidate.rollno">Vote Now</span>
                            <div v-else role="status" class="flex justify-center">
                                <svg aria-hidden="true"
                                    class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                        </button>

                    </div>
                </div>

            </div>

            <!-- Confirm model Box -->

            <div v-if="showModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
                <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full">
                    <!-- Close Button -->
                    <button @click="closeModal"
                        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition">
                        <i class="fas fa-times text-2xl"></i>
                    </button>

                    <!-- Modal Header -->
                    <div class="text-center mb-6">
                        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">Confirm Your Vote</h2>
                        <p class="text-base text-gray-600 mt-2 dark:text-gray-400">
                            Every vote matters. Make sure your choice is final!
                        </p>
                    </div>

                    <!-- Candidate Details -->
                    <div class="text-center mb-8">
                        <div class="relative mx-auto w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4"
                            :class="selectedCandidate.gender === 'male' ? 'border-blue-400' : 'border-pink-400'">
                            <img :src="selectedCandidate.profileImage" alt="Candidate Name"
                                class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-2xl font-bold mt-4 text-gray-800 dark:text-white">
                            {{ selectedCandidate.name }}
                        </h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Major : {{ selectedCandidate.major }}
                        </p>
                    </div>

                    <!-- Voting Policy Section -->
                    <div class="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg mb-8 shadow-md">
                        <h4 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Voting Policy</h4>
                        <ul
                            class="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-2 prose text-justify">
                            <li>Each student can vote for one King and one Queen in their major.</li>
                            <li>Votes are restricted to candidates within your academic major.</li>
                            <li>Once confirmed, votes cannot be changed or revoked.</li>
                            <li>Suspicious activities or duplicate votes will result in disqualification.</li>
                            <li>Voting will close strictly at the deadline. Late votes will not be counted.</li>
                        </ul>
                    </div>

                    <!-- Modal Actions -->
                    <div class="flex justify-center gap-4">
                        <button @click="confirmVote(selectedCandidate)"
                            class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                            <span v-if="clickId != selectedCandidate.rollno">Comfirm</span>
                            <div v-else role="status" class="flex justify-center">
                                <svg aria-hidden="true"
                                    class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </button>
                        <button @click="closeModal"
                            class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

            <!-- Success Modal Box -->
            <div v-if="showSuccessModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
                <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full m-4">
                    <!-- Close Button -->
                    <button @click="closeSuccessModal"
                        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition">
                        <i class="fas fa-times text-2xl"></i>
                    </button>

                    <div>
                        <img src="../Images/success-tick-dribbble.gif" class="w-30" alt="">
                    </div>

                    <!-- Modal Header -->
                    <div class="text-center mb-6">
                        <h2 class="text-3xl font-extrabold text-green-500">Success!</h2>
                        <p class="text-base text-gray-600 mt-2 dark:text-gray-400">
                            Your vote has been successfully confirmed.
                        </p>
                    </div>

                    <!-- Modal Actions -->
                    <div class="flex justify-center gap-4">
                        <button @click="closeSuccessModal"
                            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                            Close
                        </button>
                    </div>
                </div>
            </div>

            <!-- CanNotVote Modal Box -->
            <div v-if="showCanNotVoteModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">

                <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full m-4">
                    <button @click="closeCanNotVoteModal" class="absolute top-4 right-4 text-2xl text-gray-600"><i
                            class="fas fa-times"></i></button>
                    <div class="mb-10">
                        <i class="fa-solid fa-triangle-exclamation fa-beat text-9xl" style="color: #ff3814;"></i>
                    </div>
                    <h2 class="text-2xl font-bold text-red-500">Can't Vote</h2>
                    <p class="mt-2">You have already voted for a King or Queen.</p>
                    <button @click="closeCanNotVoteModal"
                        class="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-400 transition-all mt-4">Close</button>
                </div>
            </div>

        </section>
    </div>
</div>

<Loading v-else></Loading>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import { ref, computed, onMounted } from 'vue';
import getUserData from '@/composables/getUserData';
import getAllCandidates from '@/composables/getAllCandidates';
import checkVote from '@/composables/checkVote';
import addVoter from '@/composables/addVoter';
import deadLine from '@/composables/deadLine';
import { db } from '@/firebase/config';

export default {
    components: { SideBar },
    setup() {
        // State and references
        const userId = localStorage.getItem("userId");
        const searchValue = ref("");
        const select = ref("male");
        const king_queen = ref("KING");
        const loading = ref(true);
        const clickId = ref(null);

        // User Data
        const { userData, load: loadUserData } = getUserData();
        const isLoading = ref(true);

        // Candidates
        const { candidates, error, loadCan } = getAllCandidates();

        // Deadline
        const { dayString, hourString, minString, secString, updateCountdown } = deadLine();

        // Modal State
        const showModal = ref(false);
        const selectedCandidate = ref(null);
        const showSuccessModal = ref(false);
        const showCanNotVoteModal = ref(false);

        // Methods
        const filterSelected = (sel) => {
            select.value = sel;
            king_queen.value = sel === "male" ? "KING" : "QUEEN";
        };

        const filterCandidates = computed(() => {
            const search = searchValue.value.toLowerCase();
            return candidates.value.filter(candidate => {
                const matchesSearch =
                    candidate.name.toLowerCase().includes(search) ||
                    candidate.number.toString().includes(search);
                return (
                    candidate.gender === select.value &&
                    candidate.major === userData.value.major &&
                    matchesSearch
                );
            });
        });

        const openModal = async (candidate) => {
            const voterId = userData.value.rollno;
            const collectionName = candidate.gender === "male" ? "voteMajorKing" : "voteMajorQueen";

            try {
                const { hasVoted } = await checkVote(collectionName, voterId);

                if (hasVoted) {
                    showCanNotVoteModal.value = true;
                } else {
                    selectedCandidate.value = candidate;
                    showModal.value = true;
                }
            } catch (err) {
                console.error("Error checking vote:", err);
            } finally {
                clickId.value = null;
            }
        };

        const confirmVote = async (selectedCandidate) => {
            const voterId = userData.value.rollno;
            const collectionName = selectedCandidate.gender === "male" ? "voteMajorKing" : "voteMajorQueen";

            try {
                const result = await addVoter(collectionName, selectedCandidate.rollno, voterId);

                if (result.success) {
                    await db.collection("students")
                        .doc(userData.value.id)
                        .set({ [collectionName]: selectedCandidate.rollno }, { merge: true });

                    showSuccessModal.value = true;
                    closeModal();
                } else {
                    console.error("Failed to confirm vote:", result.error);
                }
            } catch (err) {
                console.error("Error confirming vote:", err);
            } finally {
                clickId.value = null;
            }
        };

        const closeModal = () => {
            showModal.value = false;
            selectedCandidate.value = null;
        };

        const resetFilters = () => {
            searchValue.value = "";
        };

        const closeSuccessModal = () => {
            showSuccessModal.value = false;
        };

        const closeCanNotVoteModal = () => {
            showCanNotVoteModal.value = false;
        };

        // Lifecycle Hooks
        onMounted(async () => {
            if (!userId) {
                console.warn("User ID not found in localStorage");
                isLoading.value = false;
                return;
            }

            try {
                await loadUserData();
                await loadCan();
                updateCountdown();
            } catch (err) {
                console.error("Initialization error:", err);
            } finally {
                isLoading.value = false;
                loading.value = false;
            }
        });

        return {
            searchValue,
            select,
            king_queen,
            loading,
            filterCandidates,
            filterSelected,
            resetFilters,

            showModal,
            selectedCandidate,
            openModal,
            closeModal,
            confirmVote,

            showSuccessModal,
            closeSuccessModal,
            showCanNotVoteModal,
            closeCanNotVoteModal,

            dayString,
            hourString,
            minString,
            secString,
            userData,
            isLoading
        };
    }
};
</script>


<style></style>
