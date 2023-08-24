import { setDoc, doc, collection} from "firebase/firestore";
import { db } from "../../config/firebase";

async function createSocialRelationshipsDoc(userId:string) {

  try {

    const userDocRef = doc(db, "users", userId);
    const userSocialColRef = collection(userDocRef, "social");

    const socialRelationshipsDocRef = doc(userSocialColRef,"social-relationships");

    await setDoc(socialRelationshipsDocRef, {
        followers:[],
        following:[]
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default createSocialRelationshipsDoc;
