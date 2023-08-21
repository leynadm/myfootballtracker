import { setDoc, doc, collection,serverTimestamp,Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

import MatchDataToSubmit from "../interfaces/matchDataToSubmit";


async function updateOverallStatsDoc(dataToSubmit: MatchDataToSubmit, userId:string) {
  const { GK, CB, RB, LB, DMF, CMF, AMF, RMF, LMF, LWF, RWF, SS, CF } =
    dataToSubmit.positionsPlayed;

  const GK_p = GK ?? null;
  const CB_p = CB ?? null;
  const RB_p = RB ?? null;
  const LB_p = LB ?? null;
  const DMF_p = DMF ?? null;
  const CMF_p = CMF ?? null;
  const AMF_p = AMF ?? null;
  const LMF_p = LMF ?? null;
  const RMF_p = RMF ?? null;
  const LWF_p = LWF ?? null;
  const RWF_p = RWF ?? null;
  const SS_p = SS ?? null;
  const CF_p = CF ?? null;
  
  try {

    const userDocRef = doc(db, "users", userId);
    const userMatchesColRef = collection(userDocRef, "matches");

    const newMatchRef = doc(userMatchesColRef);
    
    const serverTimestampObj = serverTimestamp();
    const timestamp = Timestamp.fromMillis(Date.now());

    await setDoc(newMatchRef, {
      positionsPlayed: dataToSubmit.positionsPlayed,
      matchDate: dataToSubmit.matchDate,
      matchDuration: dataToSubmit.matchDuration,
      cityName: dataToSubmit.cityName,
      stadiumName: dataToSubmit.stadiumName,
      matchType: dataToSubmit.matchType,
      homeTeamGoals: dataToSubmit.homeTeamGoals,
      awayTeamGoals: dataToSubmit.awayTeamGoals,
      goalsScored: dataToSubmit.goalsScored,
      assistsProvided: dataToSubmit.assistsProvided,
      yellowCardsReceived: dataToSubmit.yellowCardsReceived,
      redCardsReceived: dataToSubmit.redCardsReceived,
      foulsCommited: dataToSubmit.foulsCommited,
      foulsObtained: dataToSubmit.foulsObtained,
      getOnTheScoresheet: dataToSubmit.getOnTheScoresheet,
      bagABrace: dataToSubmit.bagABrace,
      scoreAHattrick: dataToSubmit.scoreAHattrick,
      fantasticFour: dataToSubmit.fantasticFour,
      pokerMaster: dataToSubmit.pokerMaster,
      historyMaker: dataToSubmit.historyMaker,
      letTheShowBegin: dataToSubmit.letTheShowBegin,
      hawkeye: dataToSubmit.hawkeye,
      cannonball: dataToSubmit.cannonball,
      noExcuses: dataToSubmit.noExcuses,
      cornerstonePresence: dataToSubmit.cornerstonePresence,
      marksman: dataToSubmit.marksman,
      coldBloodedBeast: dataToSubmit.coldBloodedBeast,
      aerialThreat: dataToSubmit.aerialThreat,
      silkySmooth: dataToSubmit.silkySmooth,
      luckyCharm: dataToSubmit.luckyCharm,
      heelOfAGoal: dataToSubmit.heelOfAGoal,
      innateTalent: dataToSubmit.innateTalent,
      laPulga: dataToSubmit.laPulga,
      oneInAMillion: dataToSubmit.oneInAMillion,
      lastMinuteHero: dataToSubmit.lastMinuteHero,
      finalWord: dataToSubmit.finalWord,
      heartRate: dataToSubmit.heartRate,
      distance: dataToSubmit.distance,
      distanceUnit: dataToSubmit.distanceUnit,
      matchPerformance: dataToSubmit.matchPerformance,
      aPleasureDoingBusiness: dataToSubmit.aPleasureDoingBusiness,
      foodOnTheTable: dataToSubmit.foodOnTheTable,
      assistsMaestro: dataToSubmit.assistsMaestro,
      industrialProvider: dataToSubmit.industrialProvider,
      puppetMaster: dataToSubmit.puppetMaster,
      omniscient: dataToSubmit.omniscient,
      youShallNotPass: dataToSubmit.youShallNotPass,
      tacklingTitan: dataToSubmit.tacklingTitan,
      leadFromTheBack: dataToSubmit.leadFromTheBack,
      theSaviour: dataToSubmit.theSaviour,
      counterAttackingCatalyst: dataToSubmit.counterAttackingCatalyst,
      livingInAFortress: dataToSubmit.livingInAFortress,
      theOnlyHero: dataToSubmit.theOnlyHero,
      instantReflexes: dataToSubmit.instantReflexes,
      GK_p,
      CB_p,
      RB_p,
      LB_p,
      DMF_p,
      CMF_p,
      AMF_p,
      RMF_p,
      LMF_p,
      LWF_p,
      RWF_p,
      SS_p,
      CF_p,
      timestamp:timestamp,
      createdAt:serverTimestampObj
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default updateOverallStatsDoc;
