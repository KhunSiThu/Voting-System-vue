<template>
<div v-if="userData" class="text-center">

    <VoteSideBar :userData="userData"></VoteSideBar>

    <div class="sm:ml-64 bg-gray-100 text-gray-900 rounded-lg dark:bg-gray-900 dark:text-gray-200">

        <div class="md:hidden flex w-full sticky top-0 left-0 z-40 flex-row justify-between items-center mb-5 bg-white dark:bg-gray-800 p-5 border-b border-gray-100 dark:border-gray-900">

            <!-- Back Button -->
            <button @click="goBack" class=" text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white text-sm flex items-center transition-all duration-300">
                <i class="fa-solid fa-arrow-left mr-2"></i>
                Back
            </button>

            <div class="w-3/4 md:w-1/4 flex items-center space-x-3 text-base md:text-xl">
                <label for="searchInput">Search</label><input v-model="searchValue" id="searchInput" placeholder="Enter Name or Candidate Number" class="px-4 py-2 border w-full border-gray-300 rounded-lg max-w-md mx-auto text-xs md:text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            </div>
        </div>

        <!-- Confirm model Box -->

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
            <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full">
                <!-- Close Button -->
                <button @click="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition">
                    <i class="fas fa-times text-2xl"></i>
                </button>

                <!-- Modal Header -->
                <div class="text-center mb-6">
                    <h2 class="md:text-3xl text-xl font-extrabold text-gray-900 dark:text-white">Confirm Your Vote
                    </h2>

                </div>

                <!-- Candidate Details -->
                <div class="text-center mb-8">
                    <div class="relative w-32 h-32 mx-auto md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4" :class="selectedCandidate.gender === 'male' ? 'border-blue-400' : 'border-pink-400'">
                        <img :src="selectedCandidate.profileImage" alt="Candidate Name" class="w-full h-full object-cover">
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
                    <ul class="list-disc list-inside md:text-sm text-xs text-gray-600 dark:text-gray-300 space-y-2 prose text-justify">
                        <li>Every student can vote for one King and one Queen. You may select one candidate for
                            each
                            role, regardless of your major.</li>
                        <li>Your vote is final once cast. Make sure you're satisfied with your choices before
                            confirming your vote.</li>
                        <li>Attempting to vote for more than one King or one Queen will not be counted. You can
                            only
                            cast one vote per role.</li>
                        <li>Any vote placed after the election deadline will be excluded from the results.
                            Please
                            ensure you cast your vote before the cutoff date!</li>
                    </ul>

                </div>

                <!-- Modal Actions -->
                <div class="flex justify-center gap-4">
                    <button @click="confirmVote(selectedCandidate)" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                        <span v-if="clickId != selectedCandidate.rollno">Comfirm</span>
                        <div v-else role="status" class="flex justify-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </button>
                    <button @click="closeModal" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition">
                        Cancel
                    </button>
                </div>
            </div>
        </div>

        <!-- Success Modal Box -->
        <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
            <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full m-4">
                <button @click="closeSuccessModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300 transition">
                    <i class="fas fa-times text-2xl"></i>
                </button>
                <div>
                    <img src="../Images/success-tick-dribbble.gif" class="w-30" alt="">
                </div>
                <h2 class="text-3xl font-extrabold text-green-500">Success!</h2>
                <p class="text-base text-gray-600 mt-2 dark:text-gray-400 prose text-justify">
                    Your vote has been successfully submitted! Thank you for taking part in the election.
                </p>
                <div class="flex justify-center gap-4">
                    <button @click="closeSuccessModal" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition mt-4">
                        Close
                    </button>
                </div>
            </div>
        </div>

        <!-- CanNotVote Modal Box -->
        <div v-if="showCanNotVoteModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
            <div class="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full m-4">
                <button @click="closeCanNotVoteModal" class="absolute top-4 right-4 text-2xl text-gray-600"><i class="fas fa-times"></i></button>
                <div class="mb-10">
                    <i class="fa-solid fa-triangle-exclamation fa-beat text-9xl" style="color: #ff3814;"></i>
                </div>
                <h2 class="text-2xl font-bold text-red-500">You Can't Vote</h2>
                <p class="mt-2 prose text-justify">You have already voted for either a King or a Queen. You can
                    only vote for one of
                    each. Please confirm your choices and proceed with casting your final vote.</p>
                <button @click="closeCanNotVoteModal" class="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-400 transition-all mt-4">Close</button>
            </div>
        </div>

        <div v-if="showVotingEndModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 bg-blur">
            <div class="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-2xl p-10 sm:p-14 w-full sm:w-3/4 lg:w-1/2 text-center border border-gray-300 dark:border-gray-700">
                <!-- Close Button -->
                <button @click="showVotingEndModal = false" class="absolute top-4 right-4 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 p-2 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                    ✕
                </button>

                <!-- Title -->
                <h1 class="text-3xl sm:text-5xl font-extrabold dark:text-white">
                    🚫 Voting is Closed
                </h1>

                <p class="text-gray-500 dark:text-gray-300 text-sm sm:text-lg mt-4">
                    Sorry, the voting period has ended. Thank you for your interest!
                </p>

                <p class="text-sm sm:text-lg text-gray-600 dark:text-gray-300 mt-4">
                    Stay tuned for the final results.
                </p>

                <!-- View Results Buttons -->
                <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <router-link :to="{name:'Results'}">
                        <button class="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                            View Overall Results
                        </button>
                    </router-link>

                    <router-link :to="{name:'Results'}">
                        <button class="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                            View Results by Major
                        </button>
                    </router-link>
                </div>

                <!-- Contact Section -->
                <div class="mt-6">
                    <p class="text-sm sm:text-base text-gray-500 dark:text-gray-300">
                        Have questions?
                        <router-link to="/contact">
                            <span class="text-yellow-500 hover:text-yellow-600 font-semibold">Contact Us</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>

        <!-- Filter Section -->
        <section class="hidden pb-10 text-center lg:block my-10">
            <div class="max-w-6xl mx-auto px-0 sm:px-0 lg:px-8">
                <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">Filter Candidates by Major</h2>
                <div class="flex flex-wrap justify-center gap-5 ">
                    <button class="bg-blue-500 text-white p-3 rounded text-sm sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('all')">All Candidates</button>
                    <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Civil Engineering')">Civil Engineering</button>
                    <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Electrical Power Engineering')">Electrical Power Engineering</button>
                    <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Electronic Engineering')">Electronic Engineering</button>
                    <button class="bg-blue-500 text-white p-3 rounded text-md sm:text-base dark:bg-blue-600 dark:text-white" @click="filterByMajor('Mechanical Engineering')">Mechanical Engineering</button>
                </div>
            </div>
        </section>

        <!-- Candidate Show -->

        <div class=" max-w-8xl mx-auto ">
            <!-- Content for King and Queen -->
            <div class="mx-auto flex flex-col justify-start items-center md:block w-full sm:flex-row">
                <!-- Filter Buttons -->
                <div class="flex w-full  md:flex-row flex-col justify-between items-center mb-5">

                    <div class="h3 flex justify-center items-center mt-4 md:mt-0" :class="king_queen === 'KING' ? 'text-blue-400' : 'text-pink-400'">
                        <h3 class="text-xl md:text-4xl sm:text-4xl font-bold mr-5">Candidates For {{ king_queen }}
                        </h3>
                        <i class="fas fa-crown cursor-pointer text-3xl" id="kingIcon"></i>
                    </div>

                    <div class="hidden md:block">
                        <input v-model="searchValue" id="searchInput" placeholder="Search by Name or Candidate Number" class="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-md mx-auto text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <!-- No results found message -->
            <div v-if="!loading && filterCandidates.length === 0" class="w-full flex justify-center">
                <div class="text-center p-6 bg-red-100 border border-red-300 rounded-lg mt-6">
                    <p class="text-lg font-semibold text-red-600">Sorry, no candidates match your search criteria.
                    </p>
                    <p class="text-sm text-red-500 mb-4">Please try adjusting your search terms or filters to find
                        the
                        candidates you're looking for. If you need assistance, feel free to reach out to the student
                        council.</p>
                    <button @click="resetFilters" class="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150">
                        Reset Filters
                    </button>
                </div>
            </div>

            <!-- Candidate Sections -->
            <section class="border p-3 dark:border-gray-700 rounded-lg text-center bg-gray-100 dark:bg-gray-900">
                <div v-if="error">
                    <p class="text-red-500">{{ error }}</p>
                </div>

                <div v-else id="candidates-show-con" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-16">
                    <div v-for="candidate in filterCandidates" :key="candidate.rollno" class="p-3 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border dark:border-gray-700" :class="(candidate.rollno === userData.voteWholeKing ? 'bg-blue' : (candidate.rollno === userData.voteWholeQueen ? 'bg-pink' : 'bg-white dark:bg-gray-800'))">
                        <div class="relative flex flex-col items-center">
                            <div class="relative w-full h-24 md:h-60 rounded overflow-hidden shadow-lg border" :class="candidate.gender === 'male' ? 'border-blue-500' : 'border-pink-400'">
                                <img :src="candidate.profileImage" alt="Candidate Name" class="w-full h-full object-cover">
                            </div>

                            <div class="absolute left-2 -bottom-3 md:-bottom-8 items-center text-sm">
                                <span class="md:w-16 md:h-16 w-6 h-6  md:text-3xl text-xs font-bold text-white flex items-center justify-center rounded-full mr-3" :class="candidate.gender === 'male' ? 'bg-blue-500' : 'bg-pink-400'">
                                    {{ candidate.number }}
                                </span>
                            </div>
                        </div>
                        <h2 class="text-base md:text-2xl font-bold text-blue-800 dark:text-white mt-4 mb-2">{{ candidate.name }}
                        </h2>
                        <p class="text-xs md:text-xl text-gray-700 dark:text-gray-300">{{ candidate.major }} Major</p>
                        <button @click="openModal(candidate)" class="mt-3 md:mt-7 w-16 md:w-28 text-xs md:text-lg font-bold hover:text-white border rounded-md md:py-2 py-1 transition" :class="[
                                    candidate.gender === 'male'
                                        ? 'text-blue-400 hover:bg-blue-400 border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-400'
                                        : 'text-pink-400 hover:bg-pink-400 border-pink-400 bg-pink-50 dark:border-pink-500 dark:bg-transparent dark:hover:bg-pink-400'
                                ]">
                            <span v-if="clickId != candidate.rollno">Vote Now</span>
                            <div v-else role="status" class="flex justify-center">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>

                        </button>

                    </div>
                </div>

            </section>
        </div>

    </div>
</div>
<Loading v-else></Loading>
</template>

<script>
import VoteSideBar from '../components/VoteSideBar'
import deadLine from "@/composables/deadLine";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import getAllCandidates from "@/composables/getAllCandidates";
import {
    computed,
    onMounted,
    ref
} from "vue";
import addVoter from "@/composables/addVoter";
import checkVote from "@/composables/checkVote";
import {
    db
} from "@/firebase/config";
import getUserData from "@/composables/getUserData";

import {
    useRouter
} from 'vue-router';

export default {
    components: {
        VoteSideBar,
        Loading,
        SideBar,
    },
    props: ["id"],
    setup(props) {
        // State Variables
        const searchValue = ref("");
        const selectedMajor = ref("all");
        const loading = ref(true);
        const clickId = ref(null);
        const select = ref(props.id);
        const king_queen = ref("KING");

        const showModal = ref(false);
        const selectedCandidate = ref(null);
        const showSuccessModal = ref(false);
        const showCanNotVoteModal = ref(false);
        const showVotingEndModal = ref(false);

        const userId = localStorage.getItem("userId");
        const isLoading = ref(true);

        let router = useRouter()

        const goBack = () => {
            router.back(); // Adjust based on your routing logic
        };

        // User Data
        const {
            userData,
            load: loadUserData
        } = getUserData();

        // Candidates
        const {
            candidates,
            error,
            loadCan
        } = getAllCandidates();

        // Deadline
        const {
            dayString,
            hourString,
            minString,
            secString,
            updateCountdown,
            votingEnd
        } = deadLine();
        updateCountdown();

        // Functions
        const filterSelected = (sel) => {
            select.value = sel;
            king_queen.value = sel === "male" ? "KING" : "QUEEN";
        };

        const filterCandidates = computed(() => {
            const search = searchValue.value.toLowerCase();
            return candidates.value.filter((candidate) => {
                const matchesSearch =
                    candidate.name.toLowerCase().includes(search) ||
                    candidate.number.toString().includes(search);
                const matchesMajor =
                    selectedMajor.value === "all" ||
                    candidate.major.toLowerCase() === selectedMajor.value.toLowerCase();
                return matchesSearch && matchesMajor && candidate.gender === select.value;
            });
        });

        const resetFilters = () => {
            searchValue.value = "";
            selectedMajor.value = "all";
        };

        const filterByMajor = (major) => {
            selectedMajor.value = major;
        };

        const openModal = async (candidate) => {
            const voterId = userData.value.rollno;
            const collectionName = candidate.gender === "male" ? "voteWholeKing" : "voteWholeQueen";

            clickId.value = candidate.rollno;

            try {

                if (votingEnd.value) {
                    showVotingEndModal.value = true;
                } else {
                    const {
                        hasVoted
                    } = await checkVote(collectionName, voterId);

                    if (hasVoted) {
                        showCanNotVoteModal.value = true;
                    } else {
                        selectedCandidate.value = candidate;
                        showModal.value = true;
                    }
                }
            } catch (error) {
                console.error("Error checking vote:", error.message);
            } finally {
                clickId.value = null;
            }
        };

        const closeModal = () => {
            showModal.value = false;
            selectedCandidate.value = null;
        };

        const confirmVote = async (candidate) => {
            const voteId = candidate.rollno;
            const voterId = userData.value.rollno;
            const collectionName = candidate.gender === "male" ? "voteWholeKing" : "voteWholeQueen";

            clickId.value = voteId;

            try {
                const result = await addVoter(collectionName, voteId, voterId);

                if (result.success) {
                    await db
                        .collection("students")
                        .doc(userData.value.id)
                        .set({
                            [collectionName]: voteId
                        }, {
                            merge: true
                        });

                    showSuccessModal.value = true;
                    closeModal();
                } else {
                    console.error("Vote confirmation failed:", result.error);
                }
            } catch (err) {
                console.error("Error confirming vote:", err);
            } finally {
                clickId.value = null;
            }
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
            } catch (err) {
                console.error("Error initializing data:", err);
            } finally {
                isLoading.value = false;
                loading.value = false;
            }
        });

        return {

            filterCandidates,
            error,
            searchValue,
            filterByMajor,
            resetFilters,
            loading,
            filterSelected,
            select,
            king_queen,
            showModal,
            selectedCandidate,
            openModal,
            closeModal,
            confirmVote,
            showSuccessModal,
            closeSuccessModal,
            showCanNotVoteModal,
            closeCanNotVoteModal,
            showVotingEndModal,

            clickId,
            userData,
            goBack
        };
    },
};
</script>

<style>
/* You can add additional styles for dark mode here if needed */
#hero {
    background-image: url('../Images/school.png');
}
</style>
