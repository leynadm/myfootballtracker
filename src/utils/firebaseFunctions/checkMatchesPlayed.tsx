import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

import MatchDataToSubmit from "../interfaces/matchDataToSubmit";

async function checkMatchesPlayed(
  dataToSubmit: MatchDataToSubmit,
  userId: string
) {
  try {
    const userOverallStatsDoc = doc(db, "users", userId, "stats/overall-stats");

    const docSnap = await getDoc(userOverallStatsDoc);

    if (docSnap.exists()) {
      const previousOverallStats = docSnap.data();
      const previousMatchDateArrOnly = previousOverallStats.matchDateArrOnly;

      if (previousMatchDateArrOnly.includes(dataToSubmit.matchDate)) {
        return "duplicate match";
      }
    }
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default checkMatchesPlayed;
