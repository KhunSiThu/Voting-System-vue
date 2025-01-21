import { db } from "@/firebase/config"; // Firestore configuration

const checkVote = async (collectionName, voterId) => {
    try {
        // Query the collection to check if voterId exists in any document
        const querySnapshot = await db.collection(collectionName).where("voter", "array-contains", voterId).get();

        if (!querySnapshot.empty) {
            const documentNames = querySnapshot.docs.map((doc) => doc.id);
            console.log(`Voter ${voterId} has already voted in ${collectionName}.`);
            console.log("Documents containing the voter:", documentNames);

            return {
                hasVoted: true,
                documentNames, // Document IDs where the voter is found
            };
        }

        console.log(`Voter ${voterId} has not voted in ${collectionName}.`);
        return {
            hasVoted: false,
            documentNames: [], // No documents found
        };
    } catch (error) {
        console.error("Error checking voter status:", error.message);
        throw new Error(`Failed to check vote status: ${error.message}`);
    }
};

export default checkVote;
