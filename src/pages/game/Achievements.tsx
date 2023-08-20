import { Text, Box, Container, Grid, Image, Progress } from "@chakra-ui/react";
import "../../styles/Achievements.css";
import "../../styles/CardText.css";
import { AiFillCheckCircle } from "react-icons/ai";
import UserProfileSearch from "../../utils/interfaces/UserProfileSearch";
import OverallStatsDataInterface from "../../utils/interfaces/overallStatsDataInterface";
import ChartDataInterface from "../../utils/interfaces/chartDataInterface";
import { useEffect, useState } from "react";
interface Props {
  queriedUser?: UserProfileSearch;
  overallStatsData: OverallStatsDataInterface;
  overallChartsData: ChartDataInterface;
}

function Achievements({
  overallStatsData,
  overallChartsData,
  queriedUser,
}: Props) {
  useEffect(() => {
    calculateBronzePerformance();
    calculateSilverPerformance();
    calculateGoldPerformance();
    calculateDiamondPerformance();
    calculateKeeperSaves();
    calculateDefenderStops();
  }, []);

  const [matchPerfBronze, setMatchPerfBronze] = useState(0);
  const [matchPerfSilver, setMatchPerfSilver] = useState(0);
  const [matchPerfGold, setMatchPerfGold] = useState(0);
  const [matchPerfDiamond, setMatchPerfDiamond] = useState(0);
  const [keeperSavesPerformance, setKeperSavesPerformance] = useState(0);
  const [defenderPerformance, setDefenderPerformance] = useState(0);
  function calculateKeeperSaves() {
    const matchesWith2Saves = overallStatsData.youStopHere * 2;
    const matchesWith5Saves = overallStatsData.imNotKidding * 5;
    const matchesWith8Saves = overallStatsData.theKraken * 8;
    const matchesWith12Saves = overallStatsData.guardianAngel * 12;
    const matchesWith15Saves = overallStatsData.protectorOfTheGalaxy * 17;

    const totalSaves =
      matchesWith2Saves +
      matchesWith5Saves +
      matchesWith8Saves +
      matchesWith12Saves +
      matchesWith15Saves;
    setKeperSavesPerformance(totalSaves);
  }

  function calculateDefenderStops() {
    const matchesWith2Stops = overallStatsData.theGiant * 2;
    const matchesWith5Stops = overallStatsData.oneManArmy * 5;
    const matchesWith8Stops = overallStatsData.theMonument * 8;
    const matchesWith12Stops = overallStatsData.thePathBreaker * 12;
    const matchesWith15Stops = overallStatsData.theMountain * 17;

    const totalStops =
      matchesWith2Stops +
      matchesWith5Stops +
      matchesWith8Stops +
      matchesWith12Stops +
      matchesWith15Stops;
    console.log("logging total defender stops:");
    console.log(totalStops);
    setDefenderPerformance(totalStops);
  }

  function calculateBronzePerformance() {
    let matchesWithRatingHigherThan6 = 0;
    for (const match of overallChartsData.matchPerformance) {
      for (const key in match) {
        const matchRating = match[key];

        console.log(matchRating > 6);

        if (matchRating >= 6) {
          matchesWithRatingHigherThan6++;
          console.log({ matchesWithRatingHigherThan6 });
        }
      }
      setMatchPerfBronze(matchesWithRatingHigherThan6);
    }
  }

  function calculateSilverPerformance() {
    let matchesWithRatingHigherThan7dot5 = 0;
    for (const match of overallChartsData.matchPerformance) {
      for (const key in match) {
        const matchRating = match[key];

        console.log(matchRating > 6);

        if (matchRating >= 7.5) {
          matchesWithRatingHigherThan7dot5++;
          console.log({ matchesWithRatingHigherThan7dot5 });
        }
      }
      setMatchPerfSilver(matchesWithRatingHigherThan7dot5);
    }
  }

  function calculateGoldPerformance() {
    let matchesWithRatingHigherThan9 = 0;
    for (const match of overallChartsData.matchPerformance) {
      for (const key in match) {
        const matchRating = match[key];

        console.log(matchRating > 6);

        if (matchRating >= 9) {
          matchesWithRatingHigherThan9++;
          console.log({ matchesWithRatingHigherThan9 });
        }
      }
      setMatchPerfGold(matchesWithRatingHigherThan9);
    }
  }

  function calculateDiamondPerformance() {
    let matchesWithRating10 = 0;
    for (const match of overallChartsData.matchPerformance) {
      for (const key in match) {
        const matchRating = match[key];

        console.log(matchRating > 6);

        if (matchRating === 10) {
          matchesWithRating10++;
          console.log({ matchesWithRating10 });
        }
      }
      setMatchPerfDiamond(matchesWithRating10);
    }
  }

  return (
    <>
      <Container
        justifyContent="center"
        display="flex"
        flexDirection="column"
        alignItems="center"
        pb="80px"
        gap={3}
      >
        <Text>Your Trophy Cabinet</Text>

        <Text fontSize="larger">Match Appearances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fappearance_01_bronze.jpeg?alt=media&token=d8b8ecba-26be-4846-9a5a-42a2be088213"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Play 25 matches</Text>
              {overallStatsData.matchesPlayed >= 25 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            <Progress max={25} value={overallStatsData.matchesPlayed} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fappearance_02_silver.jpeg?alt=media&token=c57de894-bf02-4ab2-af24-722a2708ca36"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Play 50 matches</Text>
              {overallStatsData.matchesPlayed >= 50 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            {overallStatsData.matchesPlayed >= 25 && (
              <Progress max={50} value={overallStatsData.matchesPlayed} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fappearance_03_gold.jpeg?alt=media&token=ff296f3a-c3e4-46fd-885e-a38d72fdc4d8"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Play 75 matches</Text>
              {overallStatsData.matchesPlayed >= 75 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.wins >= 50 && (
              <Progress max={75} value={overallStatsData.wins} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fappearance_04_diamond.jpeg?alt=media&token=0933c477-9ef7-4986-858f-9f6031702e9d"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Play 100 matches</Text>
              {overallStatsData.matchesPlayed >= 100 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.matchesPlayed >= 75 && (
              <Progress max={100} value={overallStatsData.matchesPlayed} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Wins</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fcup_01_bronze.jpeg?alt=media&token=cffa540e-548f-42af-a1e8-8994b7b2fd4c"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Win 25 matches</Text>
              {overallStatsData.wins >= 25 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            <Progress max={25} value={overallStatsData.wins} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fcup_02_silver.jpeg?alt=media&token=c4b3a640-6e3d-4c8e-a555-b34aef6c158e"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Win 50 matches</Text>
              {overallStatsData.wins >= 50 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            {overallStatsData.wins >= 25 && (
              <Progress max={50} value={overallStatsData.wins} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fcup_03_gold.jpeg?alt=media&token=9dac9a91-22a1-4452-9a1a-8f18fef0b497"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Win 75 matches</Text>
              {overallStatsData.wins >= 75 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            {overallStatsData.wins >= 50 && (
              <Progress max={75} value={overallStatsData.wins} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fcup_04_diamond.jpeg?alt=media&token=4aa11ebf-981b-41de-8a31-0f86e80b874a"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Win 100 matches</Text>
              {overallStatsData.wins >= 100 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.wins >= 75 && (
              <Progress max={100} value={overallStatsData.wins} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Performances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fperformance_01_bronze.jpeg?alt=media&token=a2571f72-f4b9-493e-89bd-7354910ea4ba"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Get 35 match ratings of 6 or more</Text>
              {matchPerfBronze >= 35 && <AiFillCheckCircle color="green" />}
            </Box>

            <Progress max={35} value={matchPerfBronze} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fperformance_02_silver.jpeg?alt=media&token=b3ad1e80-f643-40d7-a142-fb4bd599eaa7"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">
                Get 30 match ratings of 7.5 or more
              </Text>
              {matchPerfSilver >= 30 && <AiFillCheckCircle color="green" />}
            </Box>

            {matchPerfBronze === 35 && (
              <Progress max={30} value={matchPerfSilver} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fperformance_03_gold.jpeg?alt=media&token=82b14ef1-0bdb-4ea6-b6e0-7c1f8c52e25a"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Get 25 match ratings of 9 or more</Text>
              {matchPerfGold >= 25 && <AiFillCheckCircle color="green" />}
            </Box>

            {matchPerfSilver === 30 && (
              <Progress max={25} value={matchPerfGold} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fperformance_04_diamond.jpeg?alt=media&token=c90dfb96-6df4-4150-b267-80e39d8dc06e"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Get 10 match ratings of perfect 10</Text>
              {matchPerfDiamond >= 10 && <AiFillCheckCircle color="green" />}
            </Box>

            {matchPerfGold === 25 && (
              <Progress max={10} value={matchPerfDiamond} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Attacking Performances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_01_bronze.jpeg?alt=media&token=9740efcc-d2b0-4d8d-a394-31a3c27c929c"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.goalsScored <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text>Score 25 goals</Text>
              {overallStatsData.goalsScored >= 25 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            <Progress max={25} value={overallStatsData.goalsScored} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_02_silver.jpeg?alt=media&token=9241caa5-fa5f-403e-9b18-89669b0650c3"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.goalsScored <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Score 50 goals</Text>
              {overallStatsData.goalsScored >= 50 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            {overallStatsData.goalsScored >= 25 && (
              <Progress max={50} value={overallStatsData.goalsScored} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_03_golden.jpeg?alt=media&token=bc6006e0-093f-45e1-8615-46fdbe39b5f8"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.goalsScored <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Score 75 goals</Text>
              {overallStatsData.goalsScored >= 75 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.goalsScored >= 50 && (
              <Progress max={75} value={overallStatsData.goalsScored} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_04_diamond.jpeg?alt=media&token=3c40d07c-7fb1-4d6d-8915-8949a5a7f4ef"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.goalsScored <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Score 100 goals</Text>
              {overallStatsData.goalsScored >= 100 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>
            {overallStatsData.goalsScored >= 75 && (
              <Progress max={100} value={overallStatsData.goalsScored} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Playmaking Performances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_01_bronze.jpeg?alt=media&token=3f017be6-beb2-4a3d-8e6a-35dbca59252a"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.assistsProvided <= 25
                      ? "blur(5px)"
                      : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Give 25 assists</Text>
              {overallStatsData.assistsProvided >= 25 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            <Progress max={25} value={overallStatsData.assistsProvided} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_02_silver.jpeg?alt=media&token=262881a1-0a92-4e9a-a073-8ccc40dd463b"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.assistsProvided <= 50
                      ? "blur(5px)"
                      : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Give 50 assists</Text>
              {overallStatsData.assistsProvided >= 50 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.assistsProvided >= 25 && (
              <Progress max={50} value={overallStatsData.assistsProvided} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_03_gold.jpeg?alt=media&token=bd5669f0-0ec7-49bb-8301-25b07654fb0a"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.assistsProvided <= 75
                      ? "blur(5px)"
                      : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Give 75 assists</Text>
              {overallStatsData.assistsProvided >= 75 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.assistsProvided >= 50 && (
              <Progress max={75} value={overallStatsData.assistsProvided} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_04_diamond.jpeg?alt=media&token=fe67bce2-509b-4ded-94c0-708e52216dc5"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.assistsProvided <= 100
                      ? "blur(5px)"
                      : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Give 100 assists</Text>
              {overallStatsData.assistsProvided >= 100 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {overallStatsData.assistsProvided >= 75 && (
              <Progress max={100} value={overallStatsData.assistsProvided} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Defensive Performances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fdefend_01_bronze_1024x1024.jpeg?alt=media&token=ea53669f-dea1-4178-a062-e5fcf583ed40"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Stop 250 opponents attacks</Text>
              {defenderPerformance >= 250 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            <Progress max={250} value={defenderPerformance} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fdefend_02_silver_1024x1024.jpeg?alt=media&token=5b85b18d-35f7-4bbc-aef4-2c616b0621a0"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Stop 500 opponents attacks</Text>
              {defenderPerformance >= 500 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {defenderPerformance >= 250 && (
              <Progress max={500} value={defenderPerformance} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fdefend_03_gold_1024x1024.jpeg?alt=media&token=5aa69751-84da-42f6-bf84-7b8befc8f4a6"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Stop 750 opponents attacks</Text>
              {defenderPerformance >= 750 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {defenderPerformance >= 500 && (
              <Progress max={750} value={defenderPerformance} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fdefend_04_diamond_1024x1024.jpeg?alt=media&token=19e102bb-45db-4800-80d6-4d46c583c380"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Stop 1000 opponents attacks</Text>
              {defenderPerformance >= 1000 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {defenderPerformance >= 750 && (
              <Progress max={1000} value={defenderPerformance} />
            )}
          </Box>
        </Grid>

        <Text fontSize="larger">Goalkeeping Performances</Text>
        <Grid templateColumns="repeat(2,1fr)" gap={2}>
          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #CD7F32 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fglove_01_bronze.jpeg?alt=media&token=963edebe-6314-48df-9b73-5bd0eb1b17c5"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 25 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Perform 250 saves</Text>
              {keeperSavesPerformance >= 250 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            <Progress max={250} value={keeperSavesPerformance} />
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #C0C0C0 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fglove_02_silver.jpeg?alt=media&token=3f33fc44-d990-49d3-9d71-b82810e66bfc"
                alt="goal"
                style={{
                  filter:
                    overallStatsData.matchesPlayed <= 50 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Perform 500 saves</Text>
              {keeperSavesPerformance >= 500 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {keeperSavesPerformance >= 250 && (
              <Progress max={500} value={keeperSavesPerformance} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #FFD700 solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fglove_03_gold.jpeg?alt=media&token=c7638ce3-8570-4f36-9e97-88e931880102"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 75 ? "blur(5px)" : "none",
                }}
              />
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Perform 750 saves</Text>
              {keeperSavesPerformance >= 750 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {keeperSavesPerformance >= 500 && (
              <Progress max={750} value={keeperSavesPerformance} />
            )}
          </Box>

          <Box>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
              justifyContent="center"
              alignItems="center"
              border="5px #b9f2ff solid"
              className="image-wrapper"
            >
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fglove_04_diamond.jpeg?alt=media&token=6d691034-35f4-420f-8081-7b7e79909fe2"
                alt="goal"
                style={{
                  filter: overallStatsData.wins <= 100 ? "blur(5px)" : "none",
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              justifyContent="center"
            >
              <Text textAlign="center">Perform 1000 saves</Text>
              {keeperSavesPerformance >= 1000 && (
                <AiFillCheckCircle color="green" />
              )}
            </Box>

            {keeperSavesPerformance >= 750 && (
              <Progress max={1000} value={keeperSavesPerformance} />
            )}
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Achievements;
