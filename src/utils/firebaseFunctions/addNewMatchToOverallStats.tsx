import { setDoc, doc, collection,getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import MatchDataToSubmit from "../interfaces/matchDataToSubmit";

async function addNewMatchToOverallStats(dataToSubmit: MatchDataToSubmit, userId:string) {

    try {
    

    const overallStatsDocRef = doc(db, "overall-matches-stats", userId);
    const docSnap = await getDoc(overallStatsDocRef);

    if(docSnap.exists()){

        const userStats = docSnap.data()
        console.log('logging current data:')
        console.log(userStats)
    }
     
    
/* 
    await setDoc(overallStatsDocRef, {
     
      });
    } catch (error) {
      // Handle the error here
      console.error("Error creating followers feed document:", error);
      // You can also throw the error again to propagate it to the caller of this function
      throw error;
    
    }
  */   
  }
}
  export default addNewMatchToOverallStats;
  