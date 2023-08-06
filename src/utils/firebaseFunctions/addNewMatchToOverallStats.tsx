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

async function addNewMatchToOverallStats(
  dataToSubmit: MatchDataToSubmit,
  userId: string
) {
  try {
    const overallStatsDocRef = doc(db, "users", userId, "stats/overall-stats");

    const docSnap = await getDoc(overallStatsDocRef);

    if (docSnap.exists()) {
      
      console.log('logging positions')

      console.log(dataToSubmit.positionsPlayed.RWF)
      const previousOverallStats = docSnap.data();
      const updateGK_p = dataToSubmit.positionsPlayed.GK
        ? previousOverallStats.GK_p + 1
        : previousOverallStats.GK_p;
      const updateCB_p = dataToSubmit.positionsPlayed.CB
        ? previousOverallStats.CB_p + 1
        : previousOverallStats.CB_p;
      const updateLB_p = dataToSubmit.positionsPlayed.LB
        ? previousOverallStats.LB_p + 1
        : previousOverallStats.LB_p;
      const updateRB_p = dataToSubmit.positionsPlayed.RB
        ? previousOverallStats.RB_p + 1
        : previousOverallStats.RB_p;
      const updateDMF_p = dataToSubmit.positionsPlayed.DMF
        ? previousOverallStats.DMF_p + 1
        : previousOverallStats.DMF_p;
      const updateCMF_p = dataToSubmit.positionsPlayed.CMF
        ? previousOverallStats.CMF_p + 1
        : previousOverallStats.CMF_p;
      const updateRMF_p = dataToSubmit.positionsPlayed.RMF
        ? previousOverallStats.RMF_p + 1
        : previousOverallStats.RMF_p;
      const updateLMF_p = dataToSubmit.positionsPlayed.LMF
        ? previousOverallStats.LMF_p + 1
        : previousOverallStats.LMF_p;
      const updateAMF_p = dataToSubmit.positionsPlayed.AMF
        ? previousOverallStats.AMF_p + 1
        : previousOverallStats.AMF_p;
      const updateSS_p = dataToSubmit.positionsPlayed.SS
        ? previousOverallStats.SS_p + 1
        : previousOverallStats.SS_p;
      const updateLWF_p = dataToSubmit.positionsPlayed.LWF
        ? previousOverallStats.LWF_p + 1
        : previousOverallStats.LWF_p;
      const updateRWF_p = dataToSubmit.positionsPlayed.RWF
        ? previousOverallStats.RWF_p + 1
        : previousOverallStats.RWF_p;
      const updateCF_p = dataToSubmit.positionsPlayed.CF
        ? previousOverallStats.CF_p + 1
        : previousOverallStats.CF_p;
      const updateGetOnTheScoresheet = dataToSubmit.getOnTheScoresheet
        ? previousOverallStats.getOnTheScoresheet + 1
        : previousOverallStats.getOnTheScoresheet;
      const updateBagABrace = dataToSubmit.bagABrace
        ? previousOverallStats.bagABrace + 1
        : previousOverallStats.bagABrace;
      const updateScoreAHattrick = dataToSubmit.scoreAHattrick
        ? previousOverallStats.scoreAHattrick + 1
        : previousOverallStats.scoreAHattrick;
      const updateFantasticFour = dataToSubmit.fantasticFour
        ? previousOverallStats.fantasticFour + 1
        : previousOverallStats.fantasticFour;
      const updatePokerMaster = dataToSubmit.pokerMaster
        ? previousOverallStats.pokerMaster + 1
        : previousOverallStats.pokerMaster;
      const updateHistoryMaker = dataToSubmit.historyMaker
        ? previousOverallStats.historyMaker + 1
        : previousOverallStats.historyMaker;
      const updateLetTheShowBegin = dataToSubmit.letTheShowBegin
        ? previousOverallStats.letTheShowBegin + 1
        : previousOverallStats.letTheShowBegin;
      const updateHawkeye = dataToSubmit.hawkeye
        ? previousOverallStats.hawkeye + 1
        : previousOverallStats.hawkeye;
      const updateCannonball = dataToSubmit.cannonball
        ? previousOverallStats.cannonball + 1
        : previousOverallStats.cannonball;
      const updateNoExcuses = dataToSubmit.noExcuses
        ? previousOverallStats.noExcuses + 1
        : previousOverallStats.noExcuses;
      const updateCornerstonePresence = dataToSubmit.cornerstonePresence
        ? previousOverallStats.cornerstonePresence + 1
        : previousOverallStats.cornerstonePresence;
      const updateMarksman = dataToSubmit.marksman
        ? previousOverallStats.marksman + 1
        : previousOverallStats.marksman;
      const updateColdBloodedBeast = dataToSubmit.coldBloodedBeast
        ? previousOverallStats.coldBloodedBeast + 1
        : previousOverallStats.coldBloodedBeast;
      const updateAerialThreat = dataToSubmit.aerialThreat
        ? previousOverallStats.aerialThreat + 1
        : previousOverallStats.aerialThreat;
      const updateSilkySmooth = dataToSubmit.silkySmooth
        ? previousOverallStats.silkySmooth + 1
        : previousOverallStats.silkySmooth;
      const updateLuckyCharm = dataToSubmit.luckyCharm
        ? previousOverallStats.luckyCharm + 1
        : previousOverallStats.luckyCharm;
      const updateHeelOfAGoal = dataToSubmit.heelOfAGoal
        ? previousOverallStats.heelOfAGoal + 1
        : previousOverallStats.heelOfAGoal;
      const updateInnateTalent = dataToSubmit.innateTalent
        ? previousOverallStats.innateTalent + 1
        : previousOverallStats.innateTalent;
      const updateLaPulga = dataToSubmit.laPulga
        ? previousOverallStats.laPulga + 1
        : previousOverallStats.laPulga;
      const updateOneInAMillion = dataToSubmit.oneInAMillion
        ? previousOverallStats.oneInAMillion + 1
        : previousOverallStats.oneInAMillion;
      const updateLastMinuteHero = dataToSubmit.lastMinuteHero
        ? previousOverallStats.lastMinuteHero + 1
        : previousOverallStats.lastMinuteHero;
      const updateFinalWord = dataToSubmit.finalWord
        ? previousOverallStats.finalWord + 1
        : previousOverallStats.finalWord;
      const updateHeartRate = dataToSubmit.heartRate
        ? previousOverallStats.heartRate + 1
        : previousOverallStats.heartRate;
      const updateAPleasureDoingBusiness = dataToSubmit.aPleasureDoingBusiness
        ? previousOverallStats.aPleasureDoingBusiness + 1
        : previousOverallStats.aPleasureDoingBusiness;
      const updateFoodOnTheTable = dataToSubmit.foodOnTheTable
        ? previousOverallStats.foodOnTheTable + 1
        : previousOverallStats.foodOnTheTable;
      const updateAssistsMaestro = dataToSubmit.assistsMaestro
        ? previousOverallStats.assistsMaestro + 1
        : previousOverallStats.assistsMaestro;
      const updateIndustrialProvider = dataToSubmit.industrialProvider
        ? previousOverallStats.industrialProvider + 1
        : previousOverallStats.industrialProvider;
      const updatePuppetMaster = dataToSubmit.puppetMaster
        ? previousOverallStats.puppetMaster + 1
        : previousOverallStats.puppetMaster;
      const updateOmniscient = dataToSubmit.omniscient
        ? previousOverallStats.omniscient + 1
        : previousOverallStats.omniscient;
      const updateYouShallNotPass = dataToSubmit.youShallNotPass
        ? previousOverallStats.youShallNotPass + 1
        : previousOverallStats.youShallNotPass;
      const updateTacklingTitan = dataToSubmit.tacklingTitan
        ? previousOverallStats.tacklingTitan + 1
        : previousOverallStats.tacklingTitan;
      const updateLeadFromTheBack = dataToSubmit.leadFromTheBack
        ? previousOverallStats.leadFromTheBack + 1
        : previousOverallStats.leadFromTheBack;
      const updateTheSaviour = dataToSubmit.theSaviour
        ? previousOverallStats.theSaviour + 1
        : previousOverallStats.theSaviour;
      const updateCounterAttackingCatalyst =
        dataToSubmit.counterAttackingCatalyst
          ? previousOverallStats.counterAttackingCatalyst + 1
          : previousOverallStats.counterAttackingCatalyst;
      const updateLivingInAFortress = dataToSubmit.livingInAFortress
        ? previousOverallStats.livingInAFortress + 1
        : previousOverallStats.livingInAFortress;
      const updateTheOnlyHero = dataToSubmit.theOnlyHero
        ? previousOverallStats.theOnlyHero + 1
        : previousOverallStats.theOnlyHero;
      const updateInstantReflexes = dataToSubmit.instantReflexes
        ? previousOverallStats.instantReflexes + 1
        : previousOverallStats.instantReflexes;
      const distanceUnitKey = dataToSubmit.matchDate;
      const updateDistanceUnit = { distanceUnitKey: dataToSubmit.distanceUnit };

      await updateDoc(overallStatsDocRef, {
        positionsPlayed: {
          GK_p: updateGK_p,
          CB_p: updateCB_p,
          RB_p: updateRB_p,
          LB_p: updateLB_p,
          DMF_p: updateDMF_p,
          CMF_p: updateCMF_p,
          AMF_p: updateAMF_p,
          RMF_p: updateRMF_p,
          LMF_p: updateLMF_p,
          LWF_p: updateLWF_p,
          RWF_p: updateRWF_p,
          SS_p: updateSS_p,
          CF_p: updateCF_p,
        },
        matchesPlayed: previousOverallStats.matchesPlayed + 1,
        matchDateArr: arrayUnion(dataToSubmit.matchDate),
        matchDurationArr: arrayUnion(dataToSubmit.matchDuration),
        matchDuration:
          previousOverallStats.matchDuration + dataToSubmit.matchDuration,
        cityNameArr: arrayUnion(dataToSubmit.cityName),
        stadiumNameArr: arrayUnion(dataToSubmit.stadiumName),
        matchTypeArr: arrayUnion(dataToSubmit.matchType),
        homeTeamGoals:
          previousOverallStats.homeTeamGoals + dataToSubmit.homeTeamGoals,
        awayTeamGoals:
          previousOverallStats.awayTeamGoals + dataToSubmit.awayTeamGoals,
        goalsScoredArr: arrayUnion(dataToSubmit.goalsScored),
        goalsScored:
          previousOverallStats.goalsScored + dataToSubmit.goalsScored,
        assistsProvidedArr: arrayUnion(dataToSubmit.assistsProvided),
        assistsProvided:
          previousOverallStats.assistsProvided + dataToSubmit.assistsProvided,
        yellowCardsReceived:
          previousOverallStats.yellowCardsReceived +
          dataToSubmit.yellowCardsReceived,
        redCardsReceived:
          previousOverallStats.redCardsReceived + dataToSubmit.redCardsReceived,
        foulsCommited:
          previousOverallStats.foulsCommited + dataToSubmit.foulsCommited,
        foulsObtained:
          previousOverallStats.foulsObtained + dataToSubmit.foulsObtained,
        getOnTheScoresheet: updateGetOnTheScoresheet,
        bagABrace: updateBagABrace,
        scoreAHattrick: updateScoreAHattrick,
        fantasticFour: updateFantasticFour,
        pokerMaster: updatePokerMaster,
        historyMaker: updateHistoryMaker,
        letTheShowBegin: updateLetTheShowBegin,
        hawkeye: updateHawkeye,
        cannonball: updateCannonball,
        noExcuses: updateNoExcuses,
        cornerstonePresence: updateCornerstonePresence,
        marksman: updateMarksman,
        coldBloodedBeast: updateColdBloodedBeast,
        aerialThreat: updateAerialThreat,
        silkySmooth: updateSilkySmooth,
        luckyCharm: updateLuckyCharm,
        heelOfAGoal: updateHeelOfAGoal,
        innateTalent: updateInnateTalent,
        laPulga: updateLaPulga,
        oneInAMillion: updateOneInAMillion,
        lastMinuteHero: updateLastMinuteHero,
        finalWord: updateFinalWord,
        heartRate: updateHeartRate,
        distance: previousOverallStats.distance + dataToSubmit.distance,
        distanceUnitArr: {
          ...previousOverallStats.distanceUnit,
          updateDistanceUnit,
        },
        matchPerformance:
          previousOverallStats.matchPerformance + dataToSubmit.matchPerformance,
        aPleasureDoingBusiness: updateAPleasureDoingBusiness,
        foodOnTheTable: updateFoodOnTheTable,
        assistsMaestro: updateAssistsMaestro,
        industrialProvider: updateIndustrialProvider,
        puppetMaster: updatePuppetMaster,
        omniscient: updateOmniscient,
        youShallNotPass: updateYouShallNotPass,
        tacklingTitan: updateTacklingTitan,
        leadFromTheBack: updateLeadFromTheBack,
        theSaviour: updateTheSaviour,
        counterAttackingCatalyst: updateCounterAttackingCatalyst,
        livingInAFortress: updateLivingInAFortress,
        theOnlyHero: updateTheOnlyHero,
        instantReflexes: updateInstantReflexes,
        GK_p: updateGK_p,
        CB_p: updateCB_p,
        RB_p: updateRB_p,
        LB_p: updateLB_p,
        DMF_p: updateDMF_p,
        CMF_p: updateCMF_p,
        AMF_p: updateAMF_p,
        RMF_p: updateRMF_p,
        LMF_p: updateLMF_p,
        LWF_p: updateLWF_p,
        RWF_p: updateRWF_p,
        SS_p: updateSS_p,
        CF_p: updateCF_p,
      });
    }
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default addNewMatchToOverallStats;
