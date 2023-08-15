import playerTshirt from "../../assets/player_tshirt.png";
import LoadingSkeleton from "../../components/LoadingSkeletin";
import {
  Button,
  Text,
  Stack,
  Box,
  Container,
  Grid,
  IconButton,
  Divider,
  Badge,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { GiSoccerKick } from "react-icons/gi";
import { BsStarHalf } from "react-icons/bs";
import { GiSoccerField } from "react-icons/gi";

import { OverallStatsContext } from "../../context/OverallStats";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";

import MatchHighlightsTable from "../../components/MatchHighlightsTable";
export default function OverallMatchInfo() {
  const boxStyle = {
    /*  */
    weight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s", // Add a smooth transition effect
    /*  */
    backgroundColor: "green",
    color: "white",
  };

  const { currentUserData } = useContext(AuthContext);
  
  const { overallStatsData, dataLoadedTrigger } =
    useContext(OverallStatsContext);

  const calculateBackgroundColor = (value: number) => {

    const colorRange = [
      "#008000", // Dark Blue
      "#BFFF00",
      "#0000C0",
      "#0000E0",
      "#0000FF", // Blue
      "#00A000", // Light Green
      "#00C000",
      "#00E000",
      "#00FF00",
      "#40FF00",
      "#80FF00",
      "#BFFF00",
      "#FFFF00", // Gold
      "#FFD700",
      "#FFAA00",
    ];

    const index = Math.min(
      Math.max(Math.floor(((value - 1) / 100) * (colorRange.length - 1)), 0),
      14
    );

    return colorRange[index];
  };

  const calculateTextColor = (value: number) => {
    const colorRange = [
      "#000000", // Dark Blue
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#0000FF", // Blue
      "#000000", // Light Green
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000", // Gold
      "#000000",
      "#000000",
    ];

    const index = Math.floor(((value - 1) / 100) * (colorRange.length - 1));
    return colorRange[index];
  };

  useEffect(() => {

    console.log(overallStatsData)
  }, [dataLoadedTrigger]);

  useEffect(()=>{
    
  },[])


  return (
    <>
      {dataLoadedTrigger ? (
        <Container pb="50px">
          <Stack spacing={1}>
            {currentUserData.clubName !== "" ? (
              <Text>{currentUserData.clubName}</Text>
            ) : (
              <Text>Free Agent</Text>
            )}

            <WrapItem display="flex" alignItems="center" gap={2}>
              <Box display="flex" alignItems="center" gap={2}>
                {currentUserData.country.country !== "" && (
                  <img
                    src={`https://flagsapi.com/${currentUserData.country.countryCode}/flat/32.png`}
                    alt="Country Flag"
                  />
                )}

                {currentUserData.shirtNumber !== "" ? (
                  <Text fontSize="1.25rem" fontWeight="bold">
                    {currentUserData.shirtNumber}
                  </Text>
                ) : (
                  <Text fontSize="1.25rem">0</Text>
                )}

                <img src={playerTshirt} alt="tshirt" width="20rem" />
              </Box>
              <Text fontSize="1.5rem" fontWeight="bold" flexGrow={1}>
                {currentUserData.shirtName}
              </Text>

              {currentUserData.preferredPosition !== "" ? (
              <Badge
                borderRadius="5px"
                fontSize="1rem"
                fontWeight="bold"
                bg="black"
                color="white"
                m={1}
              >
                {currentUserData.preferredPosition}
              </Badge>
            ) : (
              <Badge
                borderRadius="5px"
                fontSize="1rem"
                fontWeight="bold"
                bg="black"
                color="white"
                m={1}
              >
                Bench
              </Badge>
            )}
            </WrapItem>

            <Divider />
            <Grid
              templateAreas={`"LWF CF RWF"
                          "LWF SS RWF"
                          "LMF AMF RMF"
                          "LMF CMF RMF"
                          "LMF DMF RMF"
                          "LB CB RB"
                          "LB GK RB"`}
              gap="1"
              gridAutoColumns="1fr 2fr 1fr"
              color="blackAlpha.700"
              fontWeight="bold"
              marginTop="0.5rem"
              height="50vh"
            >
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    parseInt(overallStatsData.CF_p)
                  ),
                  color: calculateTextColor(overallStatsData.CF_p),
                }}
                gridArea="CF"
              >
                CF ({overallStatsData.CF_p})
              </Box>

              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.SS_p
                  ),
                  color: calculateTextColor(overallStatsData.SS_p),
                }}
                gridArea="SS"
              >
                SS ({overallStatsData.SS_p})
              </Box>

              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.LWF_p
                  ),
                  color: calculateTextColor(overallStatsData.LWF_p),
                }}
                gridArea="LWF"
              >
                LWF ({overallStatsData.LWF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.RWF_p
                  ),
                  color: calculateTextColor(overallStatsData.RWF_p),
                }}
                gridArea="RWF"
              >
                RWF ({overallStatsData.RWF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.LMF_p
                  ),
                  color: calculateTextColor(overallStatsData.LMF_p),
                }}
                gridArea="LMF"
              >
                LMF ({overallStatsData.LMF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.AMF_p
                  ),
                  color: calculateTextColor(overallStatsData.AMF_p),
                }}
                gridArea="AMF"
              >
                AMF ({overallStatsData.AMF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.RMF_p
                  ),
                  color: calculateTextColor(overallStatsData.RMF_p),
                }}
                gridArea="RMF"
              >
                RMF ({overallStatsData.RMF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.CMF_p
                  ),
                  color: calculateTextColor(overallStatsData.CMF_p),
                }}
                gridArea="CMF"
              >
                CMF ({overallStatsData.CMF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.DMF_p
                  ),
                  color: calculateTextColor(overallStatsData.DMF_p),
                }}
                gridArea="DMF"
              >
                DMF ({overallStatsData.DMF_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.LB_p
                  ),
                  color: calculateTextColor(overallStatsData.LB_p),
                }}
                gridArea="LB"
              >
                LB ({overallStatsData.LB_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.CB_p
                  ),
                  color: calculateTextColor(overallStatsData.CB_p),
                }}
                gridArea="CB"
              >
                CB ({overallStatsData.CB_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.RB_p
                  ),
                  color: calculateTextColor(overallStatsData.RB_p),
                }}
                gridArea="RB"
              >
                RB ({overallStatsData.RB_p})
              </Box>
              <Box
                style={{
                  ...boxStyle,
                  backgroundColor: calculateBackgroundColor(
                    overallStatsData.GK_p
                  ),
                  color: calculateTextColor(overallStatsData.GK_p),
                }}
                gridArea="GK"
              >
                GK ({overallStatsData.GK_p})
              </Box>
            </Grid>
            <Divider />

            <Box display="flex" gap={1}>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="gray.100"
                alignSelf="stretch"
              >
                <StatLabel>Matches Played</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <GiSoccerField fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.matchesPlayed}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  Avg. Length{" "}
                  {`${
                    isNaN(
                      overallStatsData.matchDuration /
                        overallStatsData.matchesPlayed
                    )
                      ? 0
                      : (
                          overallStatsData.matchDuration /
                          overallStatsData.matchesPlayed
                        ).toFixed(0)
                  } min`}
                </StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="gray.100"
                alignSelf="stretch"
              >
                <StatLabel>Avg. Match Perf.</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <BsStarHalf fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {`${
                      isNaN(
                        overallStatsData.matchPerformance /
                          overallStatsData.matchesPlayed
                      )
                        ? "0.0"
                        : (
                            overallStatsData.matchPerformance /
                            overallStatsData.matchesPlayed
                          ).toFixed(1)
                    }`}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">Highest Score 9.0</StatHelpText>
              </Stat>
            </Box>
            <Divider mt={2} />

            <Box display="flex" gap={1}>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="blue.100"
                alignSelf="stretch"
              >
                <StatLabel>Wins</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <FaHandPeace fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.wins}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">{`${
                  isNaN(overallStatsData.wins / overallStatsData.matchesPlayed)
                    ? "0.00%"
                    : (
                        (overallStatsData.wins /
                          overallStatsData.matchesPlayed) *
                        100
                      ).toFixed(2)
                }%`}</StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="blue.100"
                alignSelf="stretch"
              >
                <StatLabel>Draws</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <FaRegHandshake fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.draws}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">{`${
                  isNaN(overallStatsData.draws / overallStatsData.matchesPlayed)
                    ? "0.00%"
                    : (
                        (overallStatsData.draws /
                          overallStatsData.matchesPlayed) *
                        100
                      ).toFixed(2)
                }%`}</StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="blue.100"
                alignSelf="stretch"
              >
                <StatLabel>Defeats</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <AiOutlineDislike fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.defeats}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">{`${
                  isNaN(
                    overallStatsData.defeats / overallStatsData.matchesPlayed
                  )
                    ? "0.00%"
                    : (
                        (overallStatsData.defeats /
                          overallStatsData.matchesPlayed) *
                        100
                      ).toFixed(2)
                }%`}</StatHelpText>
              </Stat>
            </Box>
            <Divider mt={2} />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="gray.100"
                alignSelf="stretch"
              >
                <StatLabel>Goals Scored</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <PiSoccerBallFill fontSize="1.5rem" />
                  <StatNumber>{overallStatsData.goalsScored}</StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  GPM{" "}
                  {`${
                    isNaN(
                      overallStatsData.goalsScored /
                        overallStatsData.matchesPlayed
                    )
                      ? "0.0"
                      : (
                          overallStatsData.goalsScored /
                          overallStatsData.matchesPlayed
                        ).toFixed(1)
                  }`}
                </StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="gray.100"
                alignSelf="stretch"
              >
                <StatLabel>Assists Provided</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <GiBarefoot fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.assistsProvided}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  APM{" "}
                  {`${
                    isNaN(
                      overallStatsData.assistsProvided /
                        overallStatsData.matchesPlayed
                    )
                      ? "0.0"
                      : (
                          overallStatsData.assistsProvided /
                          overallStatsData.matchesPlayed
                        ).toFixed(1)
                  }`}
                </StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="gray.100"
                alignSelf="stretch"
              >
                <StatLabel>Goal Contrib.</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <GiSoccerKick fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {overallStatsData.assistsProvided +
                      overallStatsData.goalsScored}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  Min/GC{" "}
                  {`${
                    isNaN(
                      overallStatsData.matchDuration /
                        (overallStatsData.assistsProvided +
                          overallStatsData.goalsScored)
                    )
                      ? "0.0"
                      : (
                          overallStatsData.matchDuration /
                          (overallStatsData.assistsProvided +
                            overallStatsData.goalsScored)
                        ).toFixed(1)
                  }`}{" "}
                  min
                </StatHelpText>
              </Stat>
            </Box>
            <Divider mt={2} />
            <Box display="flex" gap={1}>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="green.100"
                alignSelf="stretch"
              >
                <StatLabel>
                  Yellow <br />
                  Received
                </StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <TbRectangleVerticalFilled color="yellow" fontSize="1.5rem" />
                  <StatNumber>
                    {overallStatsData.yellowCardsReceived}
                  </StatNumber>
                </WrapItem>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="green.100"
                alignSelf="stretch"
              >
                <StatLabel>
                  Red <br />
                  Received
                </StatLabel>
                <WrapItem
                  gap={1}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="5px"
                  bg="green.100"
                >
                  <TbRectangleVerticalFilled color="red" fontSize="1.5rem" />
                  <StatNumber>{overallStatsData.redCardsReceived}</StatNumber>
                </WrapItem>
              </Stat>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="green.100"
                alignSelf="stretch"
              >
                <StatLabel>Fouls Committed</StatLabel>
                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <GiWhistle fontSize="1.5rem" />

                  <StatNumber>{overallStatsData.foulsCommited}</StatNumber>
                </WrapItem>
              </Stat>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="green.100"
                alignSelf="stretch"
              >
                <StatLabel>Fouls Obtained</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <BiPlusMedical fontSize="1.5rem" />
                  <StatNumber>{overallStatsData.foulsObtained}</StatNumber>
                </WrapItem>
              </Stat>
            </Box>
            <Divider mt={2} />

            <Box>
              <MatchHighlightsTable overallStatsData={overallStatsData} />
            </Box>
          </Stack>
        </Container>
      ) : (
        // Display the Skeleton while data is loading
        <LoadingSkeleton />
      )}
    </>
  );
}
