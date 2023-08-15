import { setDoc, doc, collection} from "firebase/firestore";
import { db } from "../../config/firebase";

async function createChartStatsDoc(userId:string) {

  try {

    const userDocRef = doc(db, "users", userId);
    const userStatsColRef = collection(userDocRef, "stats");

    const newMatchRef = doc(userStatsColRef,"chart-stats");

    await setDoc(newMatchRef, {
        assistsProvided:[],
        cityName:[],
        distance:[],
        distanceUnit:[],
        foulsCommited:[],
        foulsObtained:[],
        goalsScored:[],
        heartRate:[],
        matchDate:[],
        matchPerformance:[],
        matchType:[],
        redCards:[],
        resultValue:[],
        stadiumName:[],
        yellowCards:[],
        combinedStats:[]
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default createChartStatsDoc;
