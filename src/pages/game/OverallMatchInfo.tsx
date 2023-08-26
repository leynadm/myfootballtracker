import playerTshirt from "../../assets/player_tshirt.png";
import LoadingSkeleton from "../../components/LoadingSkeleton";
import {
  Text,
  Stack,
  Box,
  Container,
  Grid,
  Divider,
  Tag,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

import getTagTextColor from "../../utils/colorFunctions/getTagBackground";
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
    flexDirection: "column",
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

  const [totalPositions, setTotalPositions] = useState(0);

  function calculatePositionsPlayed() {
    let positionsPlayed = 0;
    for (const value of Object.values(overallStatsData.positionsPlayed)) {
      positionsPlayed += value;
    }

    setTotalPositions(positionsPlayed);
  }

  const calculateBackgroundColor = (value: number) => {


    const colorRange = [
      "#228B22", // Forestgreen
      "#00A36C", // Olive
      "#8FBC8F", // Mediumseagreen
      "#9ACD32", // Yellowgreen
      "#32CD32", // Lime Green
      "#00FF00", // Lime
      "#ADFF2F", // Greenyellow
    ];

    let backgroundColorToUse = "";
    if (value === 0) {
      backgroundColorToUse = "green";
    } else if (value >= 1 && value <= 20) {
      backgroundColorToUse = colorRange[0];
    } else if (value >= 21 && value <= 40) {
      backgroundColorToUse = colorRange[1];
    } else if (value >= 41 && value <= 50) {
      backgroundColorToUse = colorRange[2];
    } else if (value >= 51 && value <= 60) {
      backgroundColorToUse = colorRange[3];
    } else if (value >= 61 && value <= 70) {
      backgroundColorToUse = colorRange[4];
    } else if (value >= 71 && value <= 80) {
      backgroundColorToUse = colorRange[5];
    } else if (value >= 81 && value <= 100) {
      backgroundColorToUse = colorRange[6];
    } else if (value >= 101) {
      backgroundColorToUse = "#FFD700";
    }

    return backgroundColorToUse;
  };

  const calculateTextColor = (value: number) => {
    const colorRange = [
      "#000000", // Dark Blue
    ];

    const index = Math.floor(((value - 1) / 100) * (colorRange.length - 1));
    return colorRange[index];
  };

  useEffect(() => {}, [dataLoadedTrigger]);

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
                <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor(currentUserData.preferredPosition),
                  }}
                >
                  {currentUserData.preferredPosition}
                </Tag>
              ) : (
                <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor(currentUserData.preferredPosition),
                  }}
                >
                  Bench
                </Tag>
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
                p={1}
              >
                <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CF"),
                  }}
                >
                  CF
                </Tag>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.CF_p})</Text>
                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.CF_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.CF_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
              p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("SS"),
                  }}
                >
                  SS
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.SS_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.SS_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.SS_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LWF"),
                  }}
                >
                  LWF
                </Tag>
                <Text>({overallStatsData.LWF_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.LWF_p /
                        overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.LWF_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RWF"),
                  }}
                >
                  RWF
                </Tag>
                <Text>({overallStatsData.RWF_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.RWF_p /
                        overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.RWF_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LMF"),
                  }}
                >
                  LMF
                </Tag>
                <Text>({overallStatsData.LMF_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.LMF_p /
                        overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.LMF_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
                p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("AMF"),
                  }}
                >
                  AMF
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.AMF_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.AMF_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.AMF_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RMF"),
                  }}
                >
                  RMF
                </Tag>
                <Text>({overallStatsData.RMF_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.RMF_p /
                        overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.RMF_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
                p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CMF"),
                  }}
                >
                  CMF
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.CMF_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.CMF_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.CMF_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
                p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("DMF"),
                  }}
                >
                  DMF
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.DMF_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.DMF_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.DMF_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LB"),
                  }}
                >
                  LB
                </Tag>
                <Text>({overallStatsData.LB_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.LB_p / overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.LB_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
                p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CB"),
                  }}
                >
                  CB
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.CB_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.CB_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.CB_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RB"),
                  }}
                >
                  RB
                </Tag>
                <Text>({overallStatsData.RB_p})</Text>

                <Text>
                  {`${
                    isNaN(
                      (overallStatsData.RB_p / overallStatsData.numberOfPositionsPlayed) *
                        100
                    )
                      ? 0
                      : (
                          (overallStatsData.RB_p /
                            overallStatsData.numberOfPositionsPlayed) *
                          100
                        ).toFixed(0)
                  } %`}
                </Text>
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
                p={1}
              >
               <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("GK"),
                  }}
                >
                  GK
                </Tag>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                >
                  <Text>({overallStatsData.GK_p})</Text>

                  <Text>
                    {`${
                      isNaN(
                        (overallStatsData.GK_p /
                          overallStatsData.numberOfPositionsPlayed) *
                          100
                      )
                        ? 0
                        : (
                            (overallStatsData.GK_p /
                              overallStatsData.numberOfPositionsPlayed) *
                            100
                          ).toFixed(0)
                    } %`}
                  </Text>
                </Box>
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
