import {
  doc,
  collection,
  serverTimestamp,
  Timestamp,
  runTransaction,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import MatchDataToSubmit from "../interfaces/matchDataToSubmit";
import MatchDataToDelete from "../interfaces/matchDataToDelete";
import uuid from "react-uuid";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { getApp } from "firebase/app";

type PositionsPlayedType = {
  [key: string]: boolean | undefined;
};

async function deleteMatch(matchData: MatchDataToDelete, userId: string) {
  console.log(matchData);

  let positionsPlayedCount = 0;
  const positionsPlayedObj: PositionsPlayedType = matchData.positionsPlayed;

  for (const key in positionsPlayedObj) {
    if (positionsPlayedObj[key] === true) {
      positionsPlayedCount++;
    }
  }

  try {
    await runTransaction(db, async (transaction) => {
      
        const matchRefDoc = doc(
            db,
            "users",
            userId,
            `matches/${matchData.postId}`
          );
      
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
      const chartStatsDocSnapRef = await transaction.get(chartStatsDocRef);

      const chartCombinedData = {
        assistsProvided: matchData.assistsProvided,
        cityName: matchData.cityName,
        distance: matchData.distance,
        distanceUnit: matchData.distanceUnit,
        foulsCommited: matchData.foulsCommited,
        foulsObtained: matchData.foulsObtained,
        goalsScored: matchData.goalsScored,
        heartRate: matchData.heartRate,
        matchDate: matchData.matchDate,
        matchPerformance: matchData.matchPerformance,
        matchType: matchData.matchType,
        opponentTeamName: matchData.opponentTeamName,
        redCards: matchData.redCardsReceived,
        resultValue: matchData.winValue,
        stadiumName: matchData.stadiumName,
        yellowCards: matchData.yellowCardsReceived,
      };

      if (overallStatsDocSnapRef.exists()) {
        const previousOverallStats = overallStatsDocSnapRef.data();

        const myproperty = `${matchData.matchDate}_${matchData.cityName}_${matchData.stadiumName}`;

        const newGoalsStat = {
          [myproperty]: matchData.goalsScored,
        };
        const newAssistsStat = {
          [myproperty]: matchData.assistsProvided,
        };
        const newWinStat = {
          [myproperty]: matchData.winValue,
        };

        const newYellowCardsStat = {
          [myproperty]: matchData.yellowCardsReceived,
        };

        const newRedCardsStat = {
          [myproperty]: matchData.redCardsReceived,
        };

        const newFoulsCommitedStat = {
          [myproperty]: matchData.foulsCommited,
        };

        const newFoulsObtainedStat = {
          [myproperty]: matchData.foulsObtained,
        };

        const newMatchPerformanceStat = {
          [myproperty]: matchData.matchPerformance,
        };

        const newMatchDateStat = {
          [myproperty]: matchData.matchDate,
        };

        const newCityNameStat = {
          [myproperty]: matchData.cityName,
        };

        const newOpponentTeamNameStat = {
          [myproperty]: matchData.opponentTeamName,
        };

        const newStadiumNameStat = {
          [myproperty]: matchData.stadiumName,
        };

        const newHeartRateStat = {
          [myproperty]: matchData.heartRate,
        };

        const newDistanceStat = {
          [myproperty]: matchData.distance,
        };

        const newDistanceUnitStat = {
          [myproperty]: matchData.distanceUnit,
        };

        const newMatchTypeStat = {
          [myproperty]: matchData.matchType,
        };

        const newMatchDurationStat = {
          [myproperty]: matchData.matchDuration,
        };

        transaction.update(chartStatsDocRef, {
          goalsScored: arrayRemove(newGoalsStat),
          assistsProvided: arrayRemove(newAssistsStat),
          resultValue: arrayRemove(newWinStat),
          yellowCards: arrayRemove(newYellowCardsStat),
          redCards: arrayRemove(newRedCardsStat),
          foulsCommited: arrayRemove(newFoulsCommitedStat),
          foulsObtained: arrayRemove(newFoulsObtainedStat),
          matchPerformance: arrayRemove(newMatchPerformanceStat),
          matchDate: arrayRemove(newMatchDateStat),
          cityName: arrayRemove(newCityNameStat),
          opponentTeamName: arrayRemove(newOpponentTeamNameStat),
          stadiumName: arrayRemove(newStadiumNameStat),
          heartRate: arrayRemove(newHeartRateStat),
          distance: arrayRemove(newDistanceStat),
          distanceUnit: arrayRemove(newDistanceUnitStat),
          matchType: arrayRemove(newMatchTypeStat),
          combinedStats: arrayRemove(chartCombinedData),
        });


        
        const updateGK_p = matchData.positionsPlayed.GK
          ? previousOverallStats.GK_p - 1
          : previousOverallStats.GK_p;
        const updateCB_p = matchData.positionsPlayed.CB
          ? previousOverallStats.CB_p - 1
          : previousOverallStats.CB_p;
        const updateLB_p = matchData.positionsPlayed.LB
          ? previousOverallStats.LB_p - 1
          : previousOverallStats.LB_p;
        const updateRB_p = matchData.positionsPlayed.RB
          ? previousOverallStats.RB_p - 1
          : previousOverallStats.RB_p;
        const updateDMF_p = matchData.positionsPlayed.DMF
          ? previousOverallStats.DMF_p - 1
          : previousOverallStats.DMF_p;
        const updateCMF_p = matchData.positionsPlayed.CMF
          ? previousOverallStats.CMF_p - 1
          : previousOverallStats.CMF_p;
        const updateRMF_p = matchData.positionsPlayed.RMF
          ? previousOverallStats.RMF_p - 1
          : previousOverallStats.RMF_p;
        const updateLMF_p = matchData.positionsPlayed.LMF
          ? previousOverallStats.LMF_p - 1
          : previousOverallStats.LMF_p;
        const updateAMF_p = matchData.positionsPlayed.AMF
          ? previousOverallStats.AMF_p - 1
          : previousOverallStats.AMF_p;
        const updateSS_p = matchData.positionsPlayed.SS
          ? previousOverallStats.SS_p - 1
          : previousOverallStats.SS_p;
        const updateLWF_p = matchData.positionsPlayed.LWF
          ? previousOverallStats.LWF_p - 1
          : previousOverallStats.LWF_p;
        const updateRWF_p = matchData.positionsPlayed.RWF
          ? previousOverallStats.RWF_p - 1
          : previousOverallStats.RWF_p;
        const updateCF_p = matchData.positionsPlayed.CF
          ? previousOverallStats.CF_p - 1
          : previousOverallStats.CF_p;
        const updateGetOnTheScoresheet = matchData.getOnTheScoresheet
          ? previousOverallStats.getOnTheScoresheet - 1
          : previousOverallStats.getOnTheScoresheet;
        const updateBagABrace = matchData.bagABrace
          ? previousOverallStats.bagABrace - 1
          : previousOverallStats.bagABrace;
        const updateScoreAHattrick = matchData.scoreAHattrick
          ? previousOverallStats.scoreAHattrick - 1
          : previousOverallStats.scoreAHattrick;
        const updateFantasticFour = matchData.fantasticFour
          ? previousOverallStats.fantasticFour - 1
          : previousOverallStats.fantasticFour;
        const updatePokerMaster = matchData.pokerMaster
          ? previousOverallStats.pokerMaster - 1
          : previousOverallStats.pokerMaster;
        const updateHistoryMaker = matchData.historyMaker
          ? previousOverallStats.historyMaker - 1
          : previousOverallStats.historyMaker;
        const updateLetTheShowBegin = matchData.letTheShowBegin
          ? previousOverallStats.letTheShowBegin - 1
          : previousOverallStats.letTheShowBegin;
        const updateHawkeye = matchData.hawkeye
          ? previousOverallStats.hawkeye - 1
          : previousOverallStats.hawkeye;
        const updateSlingshot = matchData.slingshot
          ? previousOverallStats.slingshot - 1
          : previousOverallStats.slingshot;
        const updateAroundThePlanet = matchData.aroundThePlanet
          ? previousOverallStats.aroundThePlanet - 1
          : previousOverallStats.aroundThePlanet;
        const updateFoxInTheBox = matchData.foxInTheBox
          ? previousOverallStats.foxInTheBox - 1
          : previousOverallStats.foxInTheBox;
        const updateCannonball = matchData.cannonball
          ? previousOverallStats.cannonball - 1
          : previousOverallStats.cannonball;
        const updateNoExcuses = matchData.noExcuses
          ? previousOverallStats.noExcuses - 1
          : previousOverallStats.noExcuses;
        const updateCornerstonePresence = matchData.cornerstonePresence
          ? previousOverallStats.cornerstonePresence - 1
          : previousOverallStats.cornerstonePresence;
        const updateMarksman = matchData.marksman
          ? previousOverallStats.marksman - 1
          : previousOverallStats.marksman;
        const updateTelescopeVision = matchData.telescopeVision
          ? previousOverallStats.telescopeVision - 1
          : previousOverallStats.telescopeVision;
        const updateColdBloodedBeast = matchData.coldBloodedBeast
          ? previousOverallStats.coldBloodedBeast - 1
          : previousOverallStats.coldBloodedBeast;
        const updateAerialThreat = matchData.aerialThreat
          ? previousOverallStats.aerialThreat - 1
          : previousOverallStats.aerialThreat;
        const updateSilkySmooth = matchData.silkySmooth
          ? previousOverallStats.silkySmooth - 1
          : previousOverallStats.silkySmooth;
        const updateLuckyCharm = matchData.luckyCharm
          ? previousOverallStats.luckyCharm - 1
          : previousOverallStats.luckyCharm;
        const updateHeelOfAGoal = matchData.heelOfAGoal
          ? previousOverallStats.heelOfAGoal - 1
          : previousOverallStats.heelOfAGoal;
        const updateInnateTalent = matchData.innateTalent
          ? previousOverallStats.innateTalent - 1
          : previousOverallStats.innateTalent;
        const updateLaPulga = matchData.laPulga
          ? previousOverallStats.laPulga - 1
          : previousOverallStats.laPulga;
        const updateOneInAMillion = matchData.oneInAMillion
          ? previousOverallStats.oneInAMillion - 1
          : previousOverallStats.oneInAMillion;
        const updateLastMinuteHero = matchData.lastMinuteHero
          ? previousOverallStats.lastMinuteHero - 1
          : previousOverallStats.lastMinuteHero;
        const updateFinalWord = matchData.finalWord
          ? previousOverallStats.finalWord - 1
          : previousOverallStats.finalWord;
        const updateHeartRate = matchData.heartRate
          ? previousOverallStats.heartRate - 1
          : previousOverallStats.heartRate;
        const updateAPleasureDoingBusiness = matchData.aPleasureDoingBusiness
          ? previousOverallStats.aPleasureDoingBusiness - 1
          : previousOverallStats.aPleasureDoingBusiness;
        const updateFoodOnTheTable = matchData.foodOnTheTable
          ? previousOverallStats.foodOnTheTable - 1
          : previousOverallStats.foodOnTheTable;
        const updateAssistsMaestro = matchData.assistsMaestro
          ? previousOverallStats.assistsMaestro - 1
          : previousOverallStats.assistsMaestro;
        const updateIndustrialProvider = matchData.industrialProvider
          ? previousOverallStats.industrialProvider - 1
          : previousOverallStats.industrialProvider;
        const updatePuppetMaster = matchData.puppetMaster
          ? previousOverallStats.puppetMaster - 1
          : previousOverallStats.puppetMaster;
        const updateOmniscient = matchData.omniscient
          ? previousOverallStats.omniscient - 1
          : previousOverallStats.omniscient;
        const updateYouShallNotPass = matchData.youShallNotPass
          ? previousOverallStats.youShallNotPass - 1
          : previousOverallStats.youShallNotPass;
        const updateTacklingTitan = matchData.tacklingTitan
          ? previousOverallStats.tacklingTitan - 1
          : previousOverallStats.tacklingTitan;
        const updateLeadFromTheBack = matchData.leadFromTheBack
          ? previousOverallStats.leadFromTheBack - 1
          : previousOverallStats.leadFromTheBack;
        const updateTheSaviour = matchData.theSaviour
          ? previousOverallStats.theSaviour - 1
          : previousOverallStats.theSaviour;
        const updateCounterAttackingCatalyst =
          matchData.counterAttackingCatalyst
            ? previousOverallStats.counterAttackingCatalyst - 1
            : previousOverallStats.counterAttackingCatalyst;
        const updateLivingInAFortress = matchData.livingInAFortress
          ? previousOverallStats.livingInAFortress - 1
          : previousOverallStats.livingInAFortress;
        const updateTheOnlyHero = matchData.theOnlyHero
          ? previousOverallStats.theOnlyHero - 1
          : previousOverallStats.theOnlyHero;
        const updateInstantReflexes = matchData.instantReflexes
          ? previousOverallStats.instantReflexes - 1
          : previousOverallStats.instantReflexes;

        const updateWins =
          matchData.winValue === "win"
            ? previousOverallStats.wins - 1
            : previousOverallStats.wins;

        const updateDraws =
          matchData.winValue === "draw"
            ? previousOverallStats.draws - 1
            : previousOverallStats.draws;

        const updateDefeats =
          matchData.winValue === "loss"
            ? previousOverallStats.defeats - 1
            : previousOverallStats.defeats;

        const updateYouStopHere = matchData.youStopHere
          ? previousOverallStats.youStopHere - 1
          : previousOverallStats.youStopHere;

        const updateImNotKidding = matchData.imNotKidding
          ? previousOverallStats.imNotKidding - 1
          : previousOverallStats.imNotKidding;

        const updateNumberOfPositionsPlayed = positionsPlayedCount
          ? previousOverallStats.numberOfPositionsPlayed - positionsPlayedCount
          : previousOverallStats.numberOfPositionsPlayed;

        const updateTheKraken = matchData.theKraken
          ? previousOverallStats.theKraken - 1
          : previousOverallStats.theKraken;

        const updateGuardianAngel = matchData.guardianAngel
          ? previousOverallStats.guardianAngel - 1
          : previousOverallStats.guardianAngel;

        const updateProtectorOfTheGalaxy = matchData.protectorOfTheGalaxy
          ? previousOverallStats.protectorOfTheGalaxy - 1
          : previousOverallStats.protectorOfTheGalaxy;

        const updateTheGiant = matchData.theGiant
          ? previousOverallStats.theGiant - 1
          : previousOverallStats.theGiant;

        const updateOneManArmy = matchData.oneManArmy
          ? previousOverallStats.oneManArmy - 1
          : previousOverallStats.oneManArmy;

        const updateTheMonument = matchData.theMonument
          ? previousOverallStats.theMonument - 1
          : previousOverallStats.theMonument;

        const updateThePathBreaker = matchData.thePathBreaker
          ? previousOverallStats.thePathBreaker - 1
          : previousOverallStats.thePathBreaker;

        const updateTheMountain = matchData.theMountain
          ? previousOverallStats.theMountain - 1
          : previousOverallStats.theMountain;

        const updateMathGenius = matchData.mathGenius
          ? previousOverallStats.mathGenius - 1
          : previousOverallStats.mathGenius;

        const updateFreePath = matchData.freePath
          ? previousOverallStats.freePath - 1
          : previousOverallStats.freePath;

        const updateSneakIn = matchData.sneakIn
          ? previousOverallStats.sneakIn - 1
          : previousOverallStats.sneakIn;

        const updateOlimpico = matchData.olimpico
          ? previousOverallStats.olimpico - 1
          : previousOverallStats.olimpico;

        const updateThreadTheNeedle = matchData.threadTheNeedle
          ? previousOverallStats.threadTheNeedle - 1
          : previousOverallStats.threadTheNeedle;

        const updateEquallyImpressive = matchData.equallyImpressive
          ? previousOverallStats.equallyImpressive - 1
          : previousOverallStats.equallyImpressive;

        const updateHeelOfAnAssist = matchData.heelOfAnAssist
          ? previousOverallStats.heelOfAnAssist - 1
          : previousOverallStats.heelOfAnAssist;

        const updateCleverDummy = matchData.cleverDummy
          ? previousOverallStats.cleverDummy - 1
          : previousOverallStats.cleverDummy;

        const updateBigBrain = matchData.bigBrain
          ? previousOverallStats.bigBrain - 1
          : previousOverallStats.bigBrain;

        const updateLobbedWonder = matchData.lobbedWonder
          ? previousOverallStats.lobbedWonder - 1
          : previousOverallStats.lobbedWonder;

        const updateServedOnAPlate = matchData.servedOnAPlate
          ? previousOverallStats.servedOnAPlate - 1
          : previousOverallStats.servedOnAPlate;

        const distanceUnitKey = matchData.matchDate;

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
          numberOfPositionsPlayed: updateNumberOfPositionsPlayed,
          matchesPlayed: previousOverallStats.matchesPlayed - 1,
          matchDateArr: arrayRemove(newMatchDateStat),
          matchDurationArr: arrayRemove(newMatchDurationStat),
          opponentTeamNameArr: arrayRemove(newOpponentTeamNameStat),
          matchDuration:
            previousOverallStats.matchDuration - matchData.matchDuration,
          cityNameArr: arrayRemove(newCityNameStat),
          stadiumNameArr: arrayRemove(newStadiumNameStat),
          matchTypeArr: arrayRemove(newMatchTypeStat),
          homeTeamGoals:
            previousOverallStats.homeTeamGoals - matchData.homeTeamGoals,
          awayTeamGoals:
            previousOverallStats.awayTeamGoals - matchData.awayTeamGoals,
          goalsScoredArr: arrayRemove(newGoalsStat),
          goalsScored: previousOverallStats.goalsScored - matchData.goalsScored,
          assistsProvidedArr: arrayRemove(newAssistsStat),
          assistsProvided:
            previousOverallStats.assistsProvided - matchData.assistsProvided,
          yellowCardsReceived:
            previousOverallStats.yellowCardsReceived -
            matchData.yellowCardsReceived,
          redCardsReceived:
            previousOverallStats.redCardsReceived - matchData.redCardsReceived,
          foulsCommited:
            previousOverallStats.foulsCommited - matchData.foulsCommited,
          foulsObtained:
            previousOverallStats.foulsObtained - matchData.foulsObtained,
          getOnTheScoresheet: updateGetOnTheScoresheet,
          bagABrace: updateBagABrace,
          scoreAHattrick: updateScoreAHattrick,
          fantasticFour: updateFantasticFour,
          pokerMaster: updatePokerMaster,
          historyMaker: updateHistoryMaker,
          letTheShowBegin: updateLetTheShowBegin,
          hawkeye: updateHawkeye,
          slingshot: updateSlingshot,
          aroundThePlanet: updateAroundThePlanet,
          foxInTheBox: updateFoxInTheBox,
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
          distance: previousOverallStats.distance - matchData.distance,
          distanceUnitArr: arrayRemove(newDistanceUnitStat),
          matchPerformance:
            previousOverallStats.matchPerformance - matchData.matchPerformance,
          matchPerformanceArr: arrayRemove(newMatchPerformanceStat),
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
          matchDateArrOnly: arrayRemove(matchData.matchDate),
          wins: updateWins,
          draws: updateDraws,
          defeats: updateDefeats,
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
          mathGenius: updateMathGenius,
          freePath: updateFreePath,
          sneakIn: updateSneakIn,
          olimpico: updateOlimpico,
          threadTheNeedle: updateThreadTheNeedle,
          equallyImpressive: updateEquallyImpressive,
          heelOfAnAssist: updateHeelOfAnAssist,
          cleverDummy: updateCleverDummy,
          bigBrain: updateBigBrain,
          lobbedWonder: updateLobbedWonder,
          servedOnAPlate: updateServedOnAPlate,
        });

        transaction.delete(matchRefDoc)
        
      }
    });
  } catch (error) {
    // Handle the error here
    console.error("Error creating followers feed document:", error);
    // You can also throw the error again to propagate it to the caller of this function
    throw error;
  }
}

export default deleteMatch;
