import UserProfileSearch from "../../utils/interfaces/UserProfileSearch"
import {
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
    Avatar,
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
    console.log('logging querieduser.stats:')
    console.log(queriedUser.stats)
  },[])

    const boxStyle = {
    
        weight: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.2s", // Add a smooth transition effect
        backgroundColor: "green",
        color: "white",
      };
    
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
    

    return(
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
          height="40vh"
          mb="1rem"
        >
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(
                parseInt(queriedUser.stats.CF_p)
              ),
              color: calculateTextColor(queriedUser.stats.CF_p),
            }}
            gridArea="CF"
          >
            CF ({queriedUser.stats.CF_p})
          </Box>

          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.SS_p),
              color: calculateTextColor(queriedUser.stats.SS_p),
            }}
            gridArea="SS"
          >
            SS ({queriedUser.stats.SS_p})
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
            LWF ({queriedUser.stats.LWF_p})
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
            RWF ({queriedUser.stats.RWF_p})
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
            LMF ({queriedUser.stats.LMF_p})
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
            AMF ({queriedUser.stats.AMF_p})
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
            RMF ({queriedUser.stats.RMF_p})
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
            CMF ({queriedUser.stats.CMF_p})
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
            DMF ({queriedUser.stats.DMF_p})
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.LB_p),
              color: calculateTextColor(queriedUser.stats.LB_p),
            }}
            gridArea="LB"
          >
            LB ({queriedUser.stats.LB_p})
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.CB_p),
              color: calculateTextColor(queriedUser.stats.CB_p),
            }}
            gridArea="CB"
          >
            CB ({queriedUser.stats.CB_p})
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.RB_p),
              color: calculateTextColor(queriedUser.stats.RB_p),
            }}
            gridArea="RB"
          >
            RB ({queriedUser.stats.RB_p})
          </Box>
          <Box
            style={{
              ...boxStyle,
              backgroundColor: calculateBackgroundColor(queriedUser.stats.GK_p),
              color: calculateTextColor(queriedUser.stats.GK_p),
            }}
            gridArea="GK"
          >
            GK ({queriedUser.stats.GK_p})
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
                  ).toFixed(2)
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
                isNaN(queriedUser.stats.matchDuration /(queriedUser.stats.assistsProvided +queriedUser.stats.goalsScored))
                  ? "0.0"
                  : (queriedUser.stats.matchDuration /(queriedUser.stats.assistsProvided +queriedUser.stats.goalsScored)).toFixed(1)
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
        <Divider mt={2}  />

        <Box>

          <MatchHighlightsTable overallStatsData={queriedUser.stats} />
          
          </Box>
        
        </>
    )

}

export default SearchUserProfileOverall