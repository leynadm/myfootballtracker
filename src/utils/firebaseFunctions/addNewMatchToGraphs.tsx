import {
    setDoc,
    doc,
    collection,
    getDoc,
    updateDoc,
    arrayUnion,
  } from "firebase/firestore";
  import { db } from "../../config/firebase";
  import MatchDataToSubmit from "../interfaces/matchDataToSubmit";
  
  async function addNewMatchToGraphs(
    dataToSubmit: MatchDataToSubmit,
    userId: string
  ) {
    try {
      const chartStatsDocRef = doc(db, "users", userId, "stats/chart-stats");
  
      const chartDocSnap = await getDoc(chartStatsDocRef);
  
      if (chartDocSnap.exists()) {
        
        const previousOverallStats = chartDocSnap.data();

        
        const myproperty = `${dataToSubmit.matchDate}_${dataToSubmit.cityName}_${dataToSubmit.stadiumName}`
        
        const newGoalsStat = {
            [myproperty]:dataToSubmit.goalsScored
        }

        await updateDoc(chartStatsDocRef, {

          goalsScored: 
            arrayUnion(newGoalsStat)
        });
      }
    } catch (error) {
      // Handle the error here
      console.error("Error creating followers feed document:", error);
      // You can also throw the error again to propagate it to the caller of this function
      throw error;
    }
  }
  
  export default addNewMatchToGraphs;
  