import { db } from "@/firebase/config";

async function getResults(table) {
    const collectionRef = db.collection(table);
    const querySnapshot = await collectionRef.get();

    const results = [];

    // Use a `for...of` loop to await the result of each candidate
    for (const doc of querySnapshot.docs) {
        const data = doc.data();
        const voterCount = data.voter && Array.isArray(data.voter) ? data.voter.length : 0;

        // Fetch candidate data from the 'candidates' collection using data.id
        const candidateSnapshot = await db.collection("candidates").doc(doc.id).get();
        const candidateData = candidateSnapshot.data();

        // Combine candidate data with voter count and document ID
        results.push({
            documentId: doc.id,
            ...candidateData,
            voterCount, // Add voter count to the document's data
        });
    }

    return results;
}

export default getResults;
