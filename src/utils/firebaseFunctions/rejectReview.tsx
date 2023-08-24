import { doc, collection, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

async function rejectReview(currentUserId: string, docId: string) {
    const userDocRef = doc(db, "users", currentUserId);

    const reviewsSubcolRef = collection(userDocRef, "reviews");

    const subcollectionDocumentRef = doc(reviewsSubcolRef, docId);

    try {
      await updateDoc(subcollectionDocumentRef, {
        reviewStatus: "rejected",
      });
    } catch (error) {
      console.error("Error fetching document data:", error);
    }
  }

  export default rejectReview