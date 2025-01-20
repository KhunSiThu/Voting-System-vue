import { db } from "@/firebase/config"; // Firestore configuration

const checkVote = async (collectionName, voterId) => {
    try {
        // Query the collection to check if voterId exists in any document
        const querySnapshot = await db.collection(collectionName).where("voter", "array-contains", voterId).get();

        if (!querySnapshot.empty) {
            console.log(`Voter ${voterId} has already voted in ${collectionName}.`);
            return true; // Voter has voted
        }

        console.log(`Voter ${voterId} has not voted in ${collectionName}.`);
        return false; // Voter has not voted
    } catch (error) {
        console.error("Error checking voter status:", error.message);
        throw new Error(`Failed to check vote status: ${error.message}`);
    }
};

export default checkVote;
