import {
  setDoc,
  doc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import RatingDataToSubmit from "../interfaces/ratingDataToSubmit";
async function addNewRating(
  reviewToSubmit: RatingDataToSubmit,
  queriedUserId: string,
  currentUserId: string
) {
  try {
    const userDocRef = doc(db, "users", queriedUserId);
    const userReviewsColRef = collection(userDocRef, "reviews");
    const subcollectionDocRef = doc(userReviewsColRef, currentUserId);
    const serverTimestampObj = serverTimestamp();
    const timestamp = Timestamp.fromMillis(Date.now());

    await setDoc(subcollectionDocRef, {

      firstName: reviewToSubmit.firstName,
      lastName: reviewToSubmit.lastName,
      shirtName: reviewToSubmit.shirtName,
      profileImage: reviewToSubmit.profileImage,
      country:reviewToSubmit.country,
      sprint: reviewToSubmit.sprint,
      acceleration: reviewToSubmit.acceleration,
      finishing: reviewToSubmit.finishing,
      longShots: reviewToSubmit.longShots,
      shotPower: reviewToSubmit.shotPower,
      curl: reviewToSubmit.curl,
      weakFootUsage: reviewToSubmit.weakFootUsage,
      shortPassing: reviewToSubmit.shortPassing,
      longPassing: reviewToSubmit.longPassing,
      vision: reviewToSubmit.vision,
      crossing: reviewToSubmit.crossing,
      weakFootAccuracy: reviewToSubmit.weakFootAccuracy,
      ballControl: reviewToSubmit.ballControl,
      composure: reviewToSubmit.composure,
      balance: reviewToSubmit.balance,
      agility: reviewToSubmit.agility,
      strength: reviewToSubmit.strength,
      stamina: reviewToSubmit.stamina,
      jumping: reviewToSubmit.jumping,
      reactions: reviewToSubmit.reactions,
      headingAccuracy: reviewToSubmit.headingAccuracy,
      marking: reviewToSubmit.marking,
      interceptions: reviewToSubmit.interceptions,
      standingTackle: reviewToSubmit.standingTackle,
      slidingTackle: reviewToSubmit.slidingTackle,
      gKReflexes: reviewToSubmit.gKReflexes,
      gKCatching: reviewToSubmit.gKCatching,
      gKClearing: reviewToSubmit.gKClearing,
      timestamp: timestamp,
      createdAt: serverTimestampObj,
      reviewStatus: "pending",
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default addNewRating;
