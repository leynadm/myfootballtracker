import {
  doc,
  collection,
  serverTimestamp,
  Timestamp,
  runTransaction,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import MatchDataToSubmit from "../interfaces/matchDataToSubmit";

async function addNewMatchData(
  dataToSubmit: MatchDataToSubmit,
  userId: string
) {
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
    await runTransaction(db, async (transaction) => {
      // Get the overall-stats document
      const overallStatsDocRef = doc(
        db,
        "users",
        userId,
        "stats/overall-stats"
      );

      const overallStatsDocSnapRef = await transaction.get(overallStatsDocRef);

      // Get reference for new match document to add:

      // Get the overall-stats document
      const chartStatsDocRef = doc(db, "users", userId, "stats/chart-stats");

      // Add the new match data to the matches collection
      const userDocRef = doc(db, "users", userId);
      const userMatchesColRef = collection(userDocRef, "matches");

      const newMatchRef = doc(userMatchesColRef);

      const serverTimestampObj = serverTimestamp();
      const timestamp = Timestamp.fromMillis(Date.now());
 
      const chartCombinedData = {
        assistsProvided:dataToSubmit.assistsProvided,
        cityName:dataToSubmit.cityName,
        distance:dataToSubmit.distance,
        distanceUnit:dataToSubmit.distanceUnit,
        foulsCommited:dataToSubmit.foulsCommited,
        foulsObtained:dataToSubmit.foulsObtained,
        goalsScored:dataToSubmit.goalsScored,
        heartRate:dataToSubmit.heartRate,
        matchDate:dataToSubmit.matchDate,
        matchPerformance:dataToSubmit.matchPerformance,
        matchType:dataToSubmit.matchType,
        opponentTeamName:dataToSubmit.opponentTeamName,
        redCards:dataToSubmit.redCardsReceived,
        resultValue:dataToSubmit.winValue,
        stadiumName:dataToSubmit.stadiumName,
        yellowCards:dataToSubmit.yellowCardsReceived,

      }

      if (overallStatsDocSnapRef.exists()) {
        const previousOverallStats = overallStatsDocSnapRef.data();

        const previousMatchDateArrOnly = previousOverallStats.matchDateArrOnly;

        if (previousMatchDateArrOnly.includes(dataToSubmit.matchDate)) {
          return "duplicate match";
        }

        const myproperty = `${dataToSubmit.matchDate}_${dataToSubmit.cityName}_${dataToSubmit.stadiumName}`;

        const newGoalsStat = {
          [myproperty]: dataToSubmit.goalsScored,
        };
        const newAssistsStat = {
          [myproperty]: dataToSubmit.assistsProvided,
        };
        const newWinStat = {
          [myproperty]: dataToSubmit.winValue,
        };

        const newYellowCardsStat = {
          [myproperty]: dataToSubmit.yellowCardsReceived,
        };

        const newRedCardsStat = {
          [myproperty]: dataToSubmit.redCardsReceived,
        };

        const newFoulsCommitedStat = {
          [myproperty]: dataToSubmit.foulsCommited,
        };

        const newFoulsObtainedStat = {
          [myproperty]: dataToSubmit.foulsObtained,
        };

        const newMatchPerformanceStat = {
          [myproperty]: dataToSubmit.matchPerformance,
        };

        const newMatchDateStat = {
          [myproperty]: dataToSubmit.matchDate,
        };

        const newCityNameStat = {
          [myproperty]: dataToSubmit.cityName,
        };

        const newOpponentTeamNameStat = {
          [myproperty]: dataToSubmit.opponentTeamName,
        };

        const newStadiumNameStat = {
          [myproperty]: dataToSubmit.stadiumName,
        };

        const newHeartRateStat = {
          [myproperty]: dataToSubmit.heartRate,
        };

        const newDistanceStat = {
          [myproperty]: dataToSubmit.distance,
        };

        const newDistanceUnitStat = {
          [myproperty]: dataToSubmit.distanceUnit,
        };

        const newMatchTypeStat = {
          [myproperty]: dataToSubmit.matchType,
        };

        const newMatchDurationStat = {
          [myproperty]: dataToSubmit.matchDuration,
        };

        transaction.update(chartStatsDocRef, {
          goalsScored: arrayUnion(newGoalsStat),
          assistsProvided: arrayUnion(newAssistsStat),
          resultValue: arrayUnion(newWinStat),
          yellowCards: arrayUnion(newYellowCardsStat),
          redCards: arrayUnion(newRedCardsStat),
          foulsCommited: arrayUnion(newFoulsCommitedStat),
          foulsObtained: arrayUnion(newFoulsObtainedStat),
          matchPerformance: arrayUnion(newMatchPerformanceStat),
          matchDate: arrayUnion(newMatchDateStat),
          cityName: arrayUnion(newCityNameStat),
          opponentTeamName: arrayUnion(newOpponentTeamNameStat),
          stadiumName: arrayUnion(newStadiumNameStat),
          heartRate: arrayUnion(newHeartRateStat),
          distance: arrayUnion(newDistanceStat),
          distanceUnit: arrayUnion(newDistanceUnitStat),
          matchType: arrayUnion(newMatchTypeStat),
          combinedStats:arrayUnion(chartCombinedData)
        });
 

        transaction.set(newMatchRef, {
          matchImage:dataToSubmit.matchImage,
          matchRecordingLink:dataToSubmit.matchRecordingLink,
          matchComments: dataToSubmit.matchComments,
          winValue: dataToSubmit.winValue,
          positionsPlayed: dataToSubmit.positionsPlayed,
          matchDate: dataToSubmit.matchDate,
          matchDuration: dataToSubmit.matchDuration,
          cityName: dataToSubmit.cityName,
          opponentTeamName: dataToSubmit.opponentTeamName,
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
          slingshot: dataToSubmit.slingshot,
          aroundThePlanet: dataToSubmit.aroundThePlanet,
          foxInTheBox: dataToSubmit.foxInTheBox,
          cannonball: dataToSubmit.cannonball,
          noExcuses: dataToSubmit.noExcuses,
          cornerstonePresence: dataToSubmit.cornerstonePresence,
          marksman: dataToSubmit.marksman,
          telescopeVision: dataToSubmit.telescopeVision,
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
          youStopHere: dataToSubmit.youStopHere,
          imNotKidding: dataToSubmit.imNotKidding,
          theKraken: dataToSubmit.theKraken,
          guardianAngel: dataToSubmit.guardianAngel,
          protectorOfTheGalaxy: dataToSubmit.protectorOfTheGalaxy,
          theGiant: dataToSubmit.theGiant,
          oneManArmy: dataToSubmit.oneManArmy,
          theMonument: dataToSubmit.theMonument,
          thePathBreaker: dataToSubmit.thePathBreaker,
          theMountain: dataToSubmit.theMountain,
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
          timestamp: timestamp,
          createdAt: serverTimestampObj,
        });

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
        const updateSlingshot = dataToSubmit.slingshot
          ? previousOverallStats.slingshot + 1
          : previousOverallStats.slingshot;
          const updateAroundThePlanet = dataToSubmit.aroundThePlanet
          ? previousOverallStats.aroundThePlanet + 1
          : previousOverallStats.aroundThePlanet;
          const updateFoxInTheBox = dataToSubmit.foxInTheBox
          ? previousOverallStats.foxInTheBox + 1
          : previousOverallStats.foxInTheBox;
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
        const updateTelescopeVision = dataToSubmit.telescopeVision
          ? previousOverallStats.telescopeVision + 1
          : previousOverallStats.telescopeVision;
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

          const updateWins = dataToSubmit.winValue==="win"
          ? previousOverallStats.wins + 1
          : previousOverallStats.wins;

          const updateDraws = dataToSubmit.winValue==="draw"
          ? previousOverallStats.draws + 1
          : previousOverallStats.draws;

          const updateDefeats = dataToSubmit.winValue==="loss"
          ? previousOverallStats.defeats + 1
          : previousOverallStats.defeats;

          const updateYouStopHere = dataToSubmit.youStopHere
          ? previousOverallStats.youStopHere + 1
          : previousOverallStats.youStopHere;

          const updateImNotKidding = dataToSubmit.imNotKidding
          ? previousOverallStats.imNotKidding + 1
          : previousOverallStats.imNotKidding;

          const updateTheKraken = dataToSubmit.theKraken
          ? previousOverallStats.theKraken + 1
          : previousOverallStats.theKraken;

          const updateGuardianAngel = dataToSubmit.guardianAngel
          ? previousOverallStats.guardianAngel + 1
          : previousOverallStats.guardianAngel;

          const updateProtectorOfTheGalaxy = dataToSubmit.protectorOfTheGalaxy
          ? previousOverallStats.protectorOfTheGalaxy + 1
          : previousOverallStats.protectorOfTheGalaxy;

          const updateTheGiant = dataToSubmit.theGiant
          ? previousOverallStats.theGiant + 1
          : previousOverallStats.theGiant;

          const updateOneManArmy = dataToSubmit.oneManArmy
          ? previousOverallStats.oneManArmy + 1
          : previousOverallStats.oneManArmy;

          const updateTheMonument = dataToSubmit.theMonument
          ? previousOverallStats.theMonument + 1
          : previousOverallStats.theMonument;

          const updateThePathBreaker = dataToSubmit.thePathBreaker
          ? previousOverallStats.thePathBreaker + 1
          : previousOverallStats.thePathBreaker;

          const updateTheMountain = dataToSubmit.theMountain
          ? previousOverallStats.theMountain + 1
          : previousOverallStats.theMountain;


        const distanceUnitKey = dataToSubmit.matchDate;

        transaction.update(overallStatsDocRef, {
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
          matchDateArr: arrayUnion(newMatchDateStat),
          matchDurationArr: arrayUnion(newMatchDurationStat),
          opponentTeamNameArr:arrayUnion(newOpponentTeamNameStat),
          matchDuration:
            previousOverallStats.matchDuration + dataToSubmit.matchDuration,
          cityNameArr: arrayUnion(newCityNameStat),
          stadiumNameArr: arrayUnion(newStadiumNameStat),
          matchTypeArr: arrayUnion(newMatchTypeStat),
          homeTeamGoals:
            previousOverallStats.homeTeamGoals + dataToSubmit.homeTeamGoals,
          awayTeamGoals:
            previousOverallStats.awayTeamGoals + dataToSubmit.awayTeamGoals,
          goalsScoredArr: arrayUnion(newGoalsStat),
          goalsScored:
            previousOverallStats.goalsScored + dataToSubmit.goalsScored,
          assistsProvidedArr: arrayUnion(newAssistsStat),
          assistsProvided:
            previousOverallStats.assistsProvided + dataToSubmit.assistsProvided,
          yellowCardsReceived:
            previousOverallStats.yellowCardsReceived +
            dataToSubmit.yellowCardsReceived,
          redCardsReceived:
            previousOverallStats.redCardsReceived +
            dataToSubmit.redCardsReceived,
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
          slingshot:updateSlingshot,
          aroundThePlanet:updateAroundThePlanet,
          foxInTheBOx:updateFoxInTheBox,
          cannonball: updateCannonball,
          noExcuses: updateNoExcuses,
          cornerstonePresence: updateCornerstonePresence,
          marksman: updateMarksman,
          telescopeVision: updateTelescopeVision,
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
          distanceUnitArr: arrayUnion(newDistanceUnitStat),
          matchPerformance:
            previousOverallStats.matchPerformance +
            dataToSubmit.matchPerformance,
          matchPerformanceArr: arrayUnion(newMatchPerformanceStat),
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
          matchDateArrOnly: arrayUnion(dataToSubmit.matchDate),
          wins:updateWins,
          draws:updateDraws,
          defeats:updateDefeats,
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
          youStopHere: updateYouStopHere,
          imNotKidding: updateImNotKidding,
          theKraken: updateTheKraken,
          guardianAngel: updateGuardianAngel,
          protectorOfTheGalaxy: updateProtectorOfTheGalaxy,
          theGiant: updateTheGiant,
          oneManArmy: updateOneManArmy,
          theMonument: updateTheMonument,
          thePathBreaker: updateThePathBreaker,
          theMountain: updateTheMountain,
        });
      }
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default addNewMatchData;
