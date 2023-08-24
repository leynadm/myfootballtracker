import UserProfileSearch from "../../utils/interfaces/UserProfileSearch"
import {
    Box,
    Grid,
    Divider,
    WrapItem,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Text
  } from "@chakra-ui/react";

interface Props{
    queriedUser:UserProfileSearch;
}

import MatchHighlightsTable from "../../components/MatchHighlightsTable";

import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";
import { GiSoccerKick } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { GiSoccerField } from "react-icons/gi";
import { useEffect } from "react";

function SearchUserProfileOverall({queriedUser}:Props){


  useEffect(()=>{
  },[])

    const boxStyle = {
    
      weight: "100%",
      height: "100%",
      display: "flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      transition: "background-color 0.2s", // Add a smooth transition effect
      /*  */
      backgroundColor: "green",
      color: "white",
      };
    
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
    

    return (
      <>
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
          mb="1rem"
        >
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                queriedUser.stats.CF_p
              ),
              color: calculateTextColor(queriedUser.stats.CF_p),
            }}
            gridArea="CF"
          >
            <Text textAlign="center">CF</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.CF_p})</Text>
              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.CF_p / queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.CF_p /
                          queriedUser.stats.matchesPlayed) *
                        100
                      ).toFixed(0)
                } %`}
              </Text>
            </Box>
          </Box>

          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.SS_p),
              color: calculateTextColor(queriedUser.stats.SS_p),
            }}
            gridArea="SS"
          >
            <Text textAlign="center">SS</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.SS_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.SS_p / queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.SS_p /
                          queriedUser.stats.matchesPlayed) *
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
                queriedUser.stats.LWF_p
              ),
              color: calculateTextColor(queriedUser.stats.LWF_p),
            }}
            gridArea="LWF"
          >
            <Text textAlign="center">LWF</Text>
            <Text>({queriedUser.stats.LWF_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.LWF_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.LWF_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                queriedUser.stats.RWF_p
              ),
              color: calculateTextColor(queriedUser.stats.RWF_p),
            }}
            gridArea="RWF"
          >
            <Text textAlign="center">RWF</Text>
            <Text>({queriedUser.stats.RWF_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.RWF_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.RWF_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                queriedUser.stats.LMF_p
              ),
              color: calculateTextColor(queriedUser.stats.LMF_p),
            }}
            gridArea="LMF"
          >
            <Text textAlign="center">LMF</Text>
            <Text>({queriedUser.stats.LMF_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.LMF_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.LMF_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                queriedUser.stats.AMF_p
              ),
              color: calculateTextColor(queriedUser.stats.AMF_p),
            }}
            gridArea="AMF"
          >
            <Text textAlign="center">AMF</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.AMF_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.AMF_p /
                      queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.AMF_p /
                          queriedUser.stats.matchesPlayed) *
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
                queriedUser.stats.RMF_p
              ),
              color: calculateTextColor(queriedUser.stats.RMF_p),
            }}
            gridArea="RMF"
          >
            <Text textAlign="center">RMF</Text>
            <Text>({queriedUser.stats.RMF_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.RMF_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.RMF_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                queriedUser.stats.CMF_p
              ),
              color: calculateTextColor(queriedUser.stats.CMF_p),
            }}
            gridArea="CMF"
          >
            <Text textAlign="center">CMF</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.CMF_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.CMF_p /
                      queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.CMF_p /
                          queriedUser.stats.matchesPlayed) *
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
                queriedUser.stats.DMF_p
              ),
              color: calculateTextColor(queriedUser.stats.DMF_p),
            }}
            gridArea="DMF"
          >
            <Text textAlign="center">DMF</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.DMF_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.DMF_p /
                      queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.DMF_p /
                          queriedUser.stats.matchesPlayed) *
                        100
                      ).toFixed(0)
                } %`}
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.LB_p),
              color: calculateTextColor(queriedUser.stats.LB_p),
            }}
            gridArea="LB"
          >
            <Text textAlign="center">LB</Text>
            <Text>({queriedUser.stats.LB_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.LB_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.LB_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.CB_p),
              color: calculateTextColor(queriedUser.stats.CB_p),
            }}
            gridArea="CB"
          >
            <Text textAlign="center">CB</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.CB_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.CB_p / queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.CB_p /
                          queriedUser.stats.matchesPlayed) *
                        100
                      ).toFixed(0)
                } %`}
              </Text>
            </Box>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.RB_p),
              color: calculateTextColor(queriedUser.stats.RB_p),
            }}
            gridArea="RB"
          >
            <Text textAlign="center">RB</Text>
            <Text>({queriedUser.stats.RB_p})</Text>

            <Text>
              {`${
                isNaN(
                  (queriedUser.stats.RB_p / queriedUser.stats.matchesPlayed) *
                    100
                )
                  ? 0
                  : (
                      (queriedUser.stats.RB_p /
                        queriedUser.stats.matchesPlayed) *
                      100
                    ).toFixed(0)
              } %`}
            </Text>
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.GK_p),
              color: calculateTextColor(queriedUser.stats.GK_p),
            }}
            gridArea="GK"
          >
            <Text textAlign="center">GK</Text>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Text>({queriedUser.stats.GK_p})</Text>

              <Text>
                {`${
                  isNaN(
                    (queriedUser.stats.GK_p / queriedUser.stats.matchesPlayed) *
                      100
                  )
                    ? 0
                    : (
                        (queriedUser.stats.GK_p /
                          queriedUser.stats.matchesPlayed) *
                        100
                      ).toFixed(0)
                } %`}
              </Text>
            </Box>
          </Box>
        </Grid>

        <Divider borderWidth="1px" />

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
                {queriedUser.stats.matchesPlayed}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">
              Avg. Length{" "}
              {`${
                isNaN(
                  queriedUser.stats.matchDuration /
                    queriedUser.stats.matchesPlayed
                )
                  ? 0
                  : (
                      queriedUser.stats.matchDuration /
                      queriedUser.stats.matchesPlayed
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
                    queriedUser.stats.matchPerformance /
                      queriedUser.stats.matchesPlayed
                  )
                    ? "0.0"
                    : (
                        queriedUser.stats.matchPerformance /
                        queriedUser.stats.matchesPlayed
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
                {queriedUser.stats.wins}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">{`${
              isNaN(queriedUser.stats.wins / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.wins / queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
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
                {queriedUser.stats.draws}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">{`${
              isNaN(queriedUser.stats.draws / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.draws /
                      queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
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
                {queriedUser.stats.defeats}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">{`${
              isNaN(queriedUser.stats.defeats / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.defeats /
                      queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%`}</StatHelpText>
          </Stat>
        </Box>
        <Divider mt={2} />
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Stat
            textAlign="center"
            borderRadius="5px"
            bg="gray.100"
            alignSelf="stretch"
          >
            <StatLabel>Goals Scored</StatLabel>

            <WrapItem gap={1} alignItems="center" justifyContent="center">
              <PiSoccerBallFill fontSize="1.5rem" />
              <StatNumber>{queriedUser.stats.goalsScored}</StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">
              GPM{" "}
              {`${
                isNaN(
                  queriedUser.stats.goalsScored /
                    queriedUser.stats.matchesPlayed
                )
                  ? "0.0"
                  : (
                      queriedUser.stats.goalsScored /
                      queriedUser.stats.matchesPlayed
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
                {queriedUser.stats.assistsProvided}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">
              APM{" "}
              {`${
                isNaN(
                  queriedUser.stats.assistsProvided /
                    queriedUser.stats.matchesPlayed
                )
                  ? "0.0"
                  : (
                      queriedUser.stats.assistsProvided /
                      queriedUser.stats.matchesPlayed
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
                {queriedUser.stats.assistsProvided +
                  queriedUser.stats.goalsScored}
              </StatNumber>
            </WrapItem>
            <StatHelpText fontSize="small">
              Min/GC{" "}
              {`${
                isNaN(
                  queriedUser.stats.matchDuration /
                    (queriedUser.stats.assistsProvided +
                      queriedUser.stats.goalsScored)
                )
                  ? "0.0"
                  : (
                      queriedUser.stats.matchDuration /
                      (queriedUser.stats.assistsProvided +
                        queriedUser.stats.goalsScored)
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
              <StatNumber>{queriedUser.stats.yellowCardsReceived}</StatNumber>
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
              <StatNumber>{queriedUser.stats.redCardsReceived}</StatNumber>
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

              <StatNumber>{queriedUser.stats.foulsCommited}</StatNumber>
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
              <StatNumber>{queriedUser.stats.foulsObtained}</StatNumber>
            </WrapItem>
          </Stat>
        </Box>
        <Divider mt={2} />

        <Box>
          <MatchHighlightsTable overallStatsData={queriedUser.stats} />
        </Box>
      </>
    );

}

export default SearchUserProfileOverall