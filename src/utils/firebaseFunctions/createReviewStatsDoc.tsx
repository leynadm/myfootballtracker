import { setDoc, doc, collection} from "firebase/firestore";
import { db } from "../../config/firebase";

async function createReviewStatsDoc(userId:string) {

  try {

    const userDocRef = doc(db, "users", userId);
    const userStatsColRef = collection(userDocRef, "stats");

    const newMatchRef = doc(userStatsColRef,"review-stats");

    await setDoc(newMatchRef, {
        sprint:0,
        acceleration:0,
        finishing:0,
        longShots:0,
        shotPower:0,
        curl:0,
        weakFootUsage:0,
        shortPassing:0,
        longPassing:0,
        vision:0,
        crossing:0,
        weakFootAccuracy:0,
        ballControl:0,
        composure:0,
        balance:0,
        agility:0,
        strength:0,
        stamina:0,
        jumping:0,
        reactions:0,
        numberOfReviews:0,
        headingAccuracy:0,
        marking:0,
        interceptions:0,
        standingTackle:0,
        slidingTackle:0,
        gKReflexes:0,
        gKCatching:0,
        gKClearing:0,
        gKReach:0,
        gKPositioning:0,
        SPD:0,
        SHO:0,
        PAS:0,
        DRI:0,
        DEF:0,
        PHY:0,
        GKP:0,
        TDF:0,
        usersThatSentReviews:[]
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default createReviewStatsDoc;
