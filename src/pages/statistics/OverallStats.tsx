import { useContext, useEffect, useState } from "react";
import { OverallStatsContext } from "../../context/OverallStats";
import ReStackedBarChart from "./ReStackedBarChart";
import ReDoubleLineChart from "./ReDoubleLineChart";
import ReSingleLineChart from "./ReSingleLineChart";
import ReBarChart from "./ReBarChart";
import { groupBy } from "lodash";
import { AuthContext } from "../../context/Auth";
import ReAttributesHexChart from "./ReAttributesHexChart";
import {
  Box,
  Stack,
  Text,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import ReStackedAreaChart from "./ReStackedAreaChart";
import ChartDataInterface from "../../utils/interfaces/chartDataInterface";

interface Props {
  chartsData:ChartDataInterface,
  userCheck:string
}

function OverallStats({chartsData,userCheck}:Props) {


  const [modeledChartData, setModeledChartData] = useState<Array<any>>([]); // Use the correct type
  const [dataFilter, setDataFilter] = useState("match");
  const {reviewsData} = useContext(OverallStatsContext)
  const [statsHex, setStatsHex]= useState({})

  const {currentUser} = useContext(AuthContext)
  useEffect(()=>{

    const statsHexArray = [
      { attribute: 'SPD', score: (reviewsData.SPD/(20* reviewsData.numberOfReviews)*100) },
      { attribute: 'SHO', score: (reviewsData.SHO/(50* reviewsData.numberOfReviews)*100) },
      { attribute: 'PAS', score: (reviewsData.PAS/(50* reviewsData.numberOfReviews)*100) },
      { attribute: 'DRI', score: (reviewsData.DRI/(40* reviewsData.numberOfReviews)*100) },
      { attribute: 'DEF', score: (reviewsData.TDF/(50* reviewsData.numberOfReviews)*100) },
      { attribute: 'PHY', score: (reviewsData.PHY/(50* reviewsData.numberOfReviews)*100) },
    ];

    setStatsHex(statsHexArray);

  },[])

  function handleModelChartDataPerMatch() {
    const dataPerMatch = chartsData.combinedStats;

    dataPerMatch.sort((a, b) => {
      const dateA = new Date(a.matchDate); // Replace 'T' with a space for proper parsing
      const dateB = new Date(b.matchDate);

      return dateA - dateB;
    });

    const startIndex = 0; // Starting index
    const endIndex = 10; // Ending index (exclusive)

    for (const obj of dataPerMatch) {
      const newDate = obj.matchDate.substring(startIndex, endIndex);

      if (obj.resultValue === "win") {
        obj.wins = 1;
        obj.draws = 0;
        obj.defeats = 0;
      } else if (obj.resultValue === "draw") {
        obj.wins = 0;
        obj.draws = 1;
        obj.defeats = 0;
      } else if (obj.resultValue === "loss") {
        obj.wins = 0;
        obj.draws = 0;
        obj.defeats = 1;
      }
      obj.matchDate = newDate;
    }

    setModeledChartData(dataPerMatch);
  }

  function handleModelChartDataPerYear() {
    const groupedChartDataPerYear = groupBy(
      chartsData.combinedStats,
      ({ matchDate }) => getYearFromDate(matchDate)
    );

    const summedChartDataPerYear = {};

    Object.entries(groupedChartDataPerYear).forEach(([year, yearArray]) => {
      console.log(`year: ${year}`);
      console.log(yearArray);
      const totalMatchesPlayed = yearArray.length;
      const totalAssists = yearArray.reduce(
        (sum, item) => sum + item.assistsProvided,
        0
      );
      const totalGoalsScored = yearArray.reduce(
        (sum, item) => sum + item.goalsScored,
        0
      );
      const totalGoalContributions = totalAssists + totalGoalsScored;
      const totalFoulsCommited = yearArray.reduce(
        (sum, item) => sum + item.foulsCommited,
        0
      );
      const totalFoulsObtained = yearArray.reduce(
        (sum, item) => sum + item.foulsObtained,
        0
      );
      const totalYellowCards = yearArray.reduce(
        (sum, item) => sum + item.yellowCards,
        0
      );
      const totalRedCards = yearArray.reduce(
        (sum, item) => sum + item.redCards,
        0
      );
      const totalMatchPerformance = yearArray.reduce(
        (sum, item) => sum + item.matchPerformance,
        0
      );
      const avgMatchPerformance = (totalMatchPerformance / totalMatchesPlayed).toFixed(1);
      const totalHeartRate = yearArray.reduce(
        (sum, item) => sum + item.heartRate,
        0
      );
      const avgHeartRate = totalHeartRate / totalMatchesPlayed;
      const totalDistance = yearArray.reduce(
        (sum, item) => sum + item.distance,
        0
      );
      const avgDistance = totalDistance / totalMatchesPlayed;

      const totalMatchResults= yearArray.reduce(
        (concatenatedString, item) =>
          concatenatedString
            ? concatenatedString + " " + item.resultValue
            : item.resultValue,
        "")

      const totalMatchResultsArr = totalMatchResults.split(" ");
  
      const totalWins = totalMatchResultsArr.filter(item => item === "win").length;      
      const totalDraws = totalMatchResultsArr.filter(item => item === "draw").length;
      const totalLosses = totalMatchResultsArr.filter(item => item === "loss").length;  
      

      summedChartDataPerYear[year] = {
        assistsProvided: totalAssists,
        goalsScored: totalGoalsScored,
        goalContributions: totalGoalContributions,
        foulsCommited: totalFoulsCommited,
        foulsObtained: totalFoulsObtained,
        matchesPlayed: totalMatchesPlayed,
        yellowCards: totalYellowCards,
        redCards: totalRedCards,
        matchPerformance: avgMatchPerformance,
        heartRate: avgHeartRate,
        distance: avgDistance,
        wins:totalWins,
        draws:totalDraws,
        defeats:totalLosses
      };
    });

    console.log(typeof summedChartDataPerYear);
    console.log(summedChartDataPerYear);

    const dataArray = Object.entries(summedChartDataPerYear).map(
      ([key, value]) => ({
        ...value,
        matchDate: key,
      })
    );

    setModeledChartData(dataArray);
  }

  function handleModelChartDataPerMonth() {

    const groupedChartDataPerMonth = groupBy(
      chartsData.combinedStats,
      ({ matchDate }) => getMonthFromDate(matchDate)
    );

    const summedChartDataPerMonth = {};

    Object.entries(groupedChartDataPerMonth).forEach(([month, monthArray]) => {
      console.log(`month: ${month}`);
      console.log(monthArray);
      const totalMatchesPlayed = monthArray.length;
      const totalAssists = monthArray.reduce(
        (sum, item) => sum + item.assistsProvided,
        0
      );
      const totalGoalsScored = monthArray.reduce(
        (sum, item) => sum + item.goalsScored,
        0
      );
      const totalGoalContributions = totalAssists + totalGoalsScored;
      const totalFoulsCommited = monthArray.reduce(
        (sum, item) => sum + item.foulsCommited,
        0
      );
      const totalFoulsObtained = monthArray.reduce(
        (sum, item) => sum + item.foulsObtained,
        0
      );
      const totalYellowCards = monthArray.reduce(
        (sum, item) => sum + item.yellowCards,
        0
      );
      const totalRedCards = monthArray.reduce(
        (sum, item) => sum + item.redCards,
        0
      );
      const totalMatchPerformance = monthArray.reduce(
        (sum, item) => sum + item.matchPerformance,
        0
      );
      const avgMatchPerformance = (totalMatchPerformance / totalMatchesPlayed).toFixed(1);
      const totalHeartRate = monthArray.reduce(
        (sum, item) => sum + item.heartRate,
        0
      );
      const avgHeartRate = totalHeartRate / totalMatchesPlayed;
      const totalDistance = monthArray.reduce(
        (sum, item) => sum + item.distance,
        0
      );
      const avgDistance = totalDistance / totalMatchesPlayed;

      const totalMatchResults= monthArray.reduce(
        (concatenatedString, item) =>
          concatenatedString
            ? concatenatedString + " " + item.resultValue
            : item.resultValue,
        "")

      const totalMatchResultsArr = totalMatchResults.split(" ");
  
      const totalWins = totalMatchResultsArr.filter(item => item === "win").length;      
      const totalDraws = totalMatchResultsArr.filter(item => item === "draw").length;
      const totalLosses = totalMatchResultsArr.filter(item => item === "loss").length;  
      

      summedChartDataPerMonth[month] = {
        assistsProvided: totalAssists,
        goalsScored: totalGoalsScored,
        goalContributions: totalGoalContributions,
        foulsCommited: totalFoulsCommited,
        foulsObtained: totalFoulsObtained,
        matchesPlayed: totalMatchesPlayed,
        yellowCards: totalYellowCards,
        redCards: totalRedCards,
        matchPerformance: avgMatchPerformance,
        heartRate: avgHeartRate,
        distance: avgDistance,
        wins:totalWins,
        draws:totalDraws,
        defeats:totalLosses
      };
    });

    console.log(typeof summedChartDataPerMonth);
    console.log(summedChartDataPerMonth);

    const dataArray = Object.entries(summedChartDataPerMonth).map(
      ([key, value]) => ({
        ...value,
        matchDate: key,
      })
    );

    setModeledChartData(dataArray);
  }

  function handleModelChartDataPerWeek() {
    const groupedChartDataPerWeek = groupBy(
      chartsData.combinedStats,
      ({ matchDate }) => getWeekNumberFromDate(matchDate)
    );
    const summedChartDataPerWeek = {};

    console.log(groupedChartDataPerWeek)
    Object.entries(groupedChartDataPerWeek).forEach(([week, weekArray]) => {

      const totalMatchesPlayed = weekArray.length;
      const totalAssists = weekArray.reduce(
        (sum, item) => sum + item.assistsProvided,
        0
      );
      const totalGoalsScored = weekArray.reduce(
        (sum, item) => sum + item.goalsScored,
        0
      );
      const totalGoalContributions = totalAssists + totalGoalsScored;
      const totalFoulsCommited = weekArray.reduce(
        (sum, item) => sum + item.foulsCommited,
        0
      );
      const totalFoulsObtained = weekArray.reduce(
        (sum, item) => sum + item.foulsObtained,
        0
      );
      const totalYellowCards = weekArray.reduce(
        (sum, item) => sum + item.yellowCards,
        0
      );
      const totalRedCards = weekArray.reduce(
        (sum, item) => sum + item.redCards,
        0
      );
      
      const totalMatchPerformance = weekArray.reduce(
        (sum, item) => sum + item.matchPerformance,
        0
      );
      const avgMatchPerformance = (totalMatchPerformance / totalMatchesPlayed).toFixed(1);
      const totalHeartRate = weekArray.reduce(
        (sum, item) => sum + item.heartRate,
        0
      );
      const avgHeartRate = (totalHeartRate / totalMatchesPlayed).toFixed(0);
      const totalDistance = weekArray.reduce(
        (sum, item) => sum + item.distance,
        0
      );
      const totalMatchResults= weekArray.reduce(
        (concatenatedString, item) =>
          concatenatedString
            ? concatenatedString + " " + item.resultValue
            : item.resultValue,
        "")

      const totalMatchResultsArr = totalMatchResults.split(" ");
  
      const totalWins = totalMatchResultsArr.filter(item => item === "win").length;      
      const totalDraws = totalMatchResultsArr.filter(item => item === "draw").length;
      const totalLosses = totalMatchResultsArr.filter(item => item === "loss").length;  
      
      const avgDistance = (totalDistance / totalMatchesPlayed).toFixed(0);

      summedChartDataPerWeek[week] = {
        assistsProvided: totalAssists,
        goalsScored: totalGoalsScored,
        goalContributions: totalGoalContributions,
        foulsCommited: totalFoulsCommited,
        foulsObtained: totalFoulsObtained,
        matchesPlayed: totalMatchesPlayed,
        yellowCards: totalYellowCards,
        redCards: totalRedCards,
        matchPerformance: avgMatchPerformance,
        heartRate: avgHeartRate,
        distance: avgDistance,
        wins:totalWins,
        draws:totalDraws,
        defeats:totalLosses
      };
    });

    console.log(typeof summedChartDataPerWeek);
    console.log(summedChartDataPerWeek);

    const dataArray = Object.entries(summedChartDataPerWeek).map(
      ([key, value]) => ({
        ...value,
        matchDate: "WK " + key,
      })
    );

    setModeledChartData(dataArray);
  }

  function getWeekNumberFromDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);
    const daysOffset = 6 - firstDayOfYear.getDay(); // Adjust t the first Saturday
    const daysElapsed =
      Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000)) + 1;
    const weekNumber = Math.ceil((daysElapsed - daysOffset) / 7);
    return `${weekNumber}-${year}`;
  }

  function getMonthFromDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    return `${month}-${year}`;
  }
  function getYearFromDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;
  }

  useEffect(() => {

    console.log("clicked data filter:");
    if (dataFilter === "match") {
      handleModelChartDataPerMatch();
    } else if (dataFilter === "week") {
      handleModelChartDataPerWeek();
    } else if (dataFilter === "month") {
      handleModelChartDataPerMonth();
    } else if (dataFilter === "year") {
      handleModelChartDataPerYear();
    }
  }, [dataFilter]);

  return (
    <>
      <Box
        height="100%"
        width="100%"
        p={0}
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        pb="80px"
      >
        <RadioGroup onChange={setDataFilter} value={dataFilter}>
          <Stack direction="row" gap={5}>
            <Radio value="match">Match</Radio>
            <Radio value="week">Week</Radio>
            <Radio value="month">Month</Radio>
            <Radio value="year">Year</Radio>
          </Stack>
        </RadioGroup>

        {userCheck === "currentUser" && (
          <Box
            display="flex"
            flexDirection="column"
            w="100%"
            borderRadius="5px"
          >
            <Text textAlign="center">Performance Hexagon</Text>

            <ReAttributesHexChart data={statsHex} />
          </Box>
        )}

        <Box display="flex" flexDirection="column" w="100%" borderRadius="5px">
          <Text textAlign="center">Goals Scored & Assists</Text>
          <ReDoubleLineChart data={modeledChartData} />
        </Box>
        <Box display="flex" flexDirection="column" w="100%" borderRadius="5px">
          <Text textAlign="center">Match Performance Rating</Text>
          <ReSingleLineChart
            data={modeledChartData}
            firstKPI={"matchPerformance"}
          />
        </Box>

        <Box display="flex" flexDirection="column" w="100%" borderRadius="5px">
          <Text textAlign="center">Goal Contributions</Text>
          <ReStackedBarChart
            data={modeledChartData}
            firstKPI={"goalsScored"}
            secondKPI={"assistsProvided"}
            topValues="goalContributions"
          />
        </Box>

        <Box display="flex" flexDirection="column" w="100%" borderRadius="5px">
          <Text textAlign="center">Fouls</Text>
          <ReBarChart
            data={modeledChartData}
            firstKPI={"foulsObtained"}
            secondKPI={"foulsCommited"}
          />
        </Box>

        <Box display="flex" flexDirection="column" w="100%" borderRadius="5px">
          <Text textAlign="center">Match Results</Text>
          <ReStackedAreaChart
            data={modeledChartData}
            firstKPI={"wins"}
            secondKPI={"draws"}
            thirdKPI={"defeats"}
          />
        </Box>
      </Box>
    </>
  );
}

export default OverallStats;
