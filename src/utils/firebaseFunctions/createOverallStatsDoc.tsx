import { setDoc, doc, collection} from "firebase/firestore";
import { db } from "../../config/firebase";

async function createOverallStatsDoc(userId:string) {

  try {

    const userDocRef = doc(db, "users", userId);
    const userStatsColRef = collection(userDocRef, "stats");

    const newMatchRef = doc(userStatsColRef,"overall-stats");

    await setDoc(newMatchRef, {
      positionsPlayed: {
        GK_p:0,
        CB_p:0,
        RB_p:0,
        LB_p:0,
        DMF_p:0,
        CMF_p:0,
        AMF_p:0,
        RMF_p:0,
        LMF_p:0,
        LWF_p:0,
        RWF_p:0,
        SS_p:0,
        CF_p:0,
      },
      matchesPlayed:0,
      matchDateArr: [],
      matchDurationArr: [],
      matchDuration:0,
      cityNameArr: [],
      stadiumNameArr: [],
      matchTypeArr: [],
      homeTeamGoals: 0,
      awayTeamGoals: 0,
      goalsScoredArr: [],
      goalsScored: 0,
      assistsProvidedArr: [],
      assistsProvided: 0,
      yellowCardsReceived: 0,
      redCardsReceived: 0,
      foulsCommited: 0,
      foulsObtained: 0,
      getOnTheScoresheet: 0,
      bagABrace: 0,
      scoreAHattrick: 0,
      fantasticFour: 0,
      pokerMaster: 0,
      historyMaker: 0,
      letTheShowBegin: 0,
      hawkeye: 0,
      cannonball: 0,
      noExcuses: 0,
      cornerstonePresence: 0,
      marksman: 0,
      coldBloodedBeast: 0,
      aerialThreat: 0,
      silkySmooth: 0,
      luckyCharm: 0,
      heelOfAGoal: 0,
      innateTalent: 0,
      laPulga: 0,
      oneInAMillion: 0,
      lastMinuteHero: 0,
      finalWord: 0,
      heartRate: 0,
      distance: 0,
      distanceUnitArr: [],
      matchPerformance: 0,
      aPleasureDoingBusiness: 0,
      foodOnTheTable: 0,
      assistsMaestro: 0,
      industrialProvider: 0,
      puppetMaster: 0,
      omniscient: 0,
      youShallNotPass: 0,
      tacklingTitan: 0,
      leadFromTheBack: 0,
      theSaviour: 0,
      counterAttackingCatalyst: 0,
      livingInAFortress: 0,
      theOnlyHero: 0,
      instantReflexes: 0,
      foxInTheBox:0,
      matchDateArrOnly:[],
      wins:0,
      defeats:0,
      draws:0,
      GK_p:0,
      CB_p:0,
      RB_p:0,
      LB_p:0,
      DMF_p:0,
      CMF_p:0,
      AMF_p:0,
      RMF_p:0,
      LMF_p:0,
      LWF_p:0,
      RWF_p:0,
      SS_p:0,
      CF_p:0,
      slingshot: 0,
      aroundThePlanet:0,
      youStopHere:0,
      imNotKidding:0,
      theKraken:0,
      guardianAngel:0,
      protectorOfTheGalaxy:0,
      theGiant:0,
      oneManArmy:0,
      theMonument:0,
      thePathBreaker:0,
      theMountain:0,
      telescopeVision:0,
      mathGenius:0,
      freePath:0,
      sneakIn:0,
      olimpico:0,
      threadTheNeedle:0,
      equallyImpressive:0,
      heelOfAnAssist:0,
      cleverDummy:0,
      bigBrain:0,
      lobbedWonder:0,
      servedOnAPlate:0,
      numberOfPositionsPlayed:0
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default createOverallStatsDoc;
