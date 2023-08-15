import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  Stack,
  Text,
  Heading,
  ButtonGroup,
  Button,
  Grid,
  Box,
  Container,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  WrapItem,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
  Textarea,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from "@chakra-ui/react";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";
import { AiOutlineDislike } from "react-icons/ai";

import { GoGoal } from "react-icons/go";
import { BsBraces } from "react-icons/bs";
import { BiBullseye } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";
import { PiNumberFourFill } from "react-icons/pi";
import { GiBowman } from "react-icons/gi";
import { GiLuciferCannon } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { GiSnakeBite } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { FaFeatherAlt } from "react-icons/fa";
import { GiHorseshoe } from "react-icons/gi";
import { MdBalance } from "react-icons/md";
import { GiAcrobatic } from "react-icons/gi";
import { GiScorpionTail } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { ImTruck } from "react-icons/im";
import { GiMagicPalm } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { GiCaptainHatProfile } from "react-icons/gi";
import { GiColombianStatue } from "react-icons/gi";
import { LiaCrossSolid } from "react-icons/lia";
import { PiArrowsCounterClockwiseDuotone } from "react-icons/pi";
import { GiLockedFortress } from "react-icons/gi";
import { GiGoalKeeper } from "react-icons/gi";
import { GiFeline } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineScoreboard } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { GiWingfoot } from "react-icons/gi";
import { LuFlagTriangleLeft } from "react-icons/lu";
import { PiHighHeel } from "react-icons/pi";
import { BiCross } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";
import { GiSoccerField } from "react-icons/gi";
function MatchHistoryCard({ match }: { match: any }) {
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

  return (
    <>
      <Card variant="elevated">
        <CardHeader pb={0} mb={0}>
          <Heading fontSize="1rem">
            {match.matchDate.replace("T", " ")} - {match.stadiumName}
            <Box display="flex" alignItems="center" gap={2}>
              {match.homeTeamGoals}-{match.awayTeamGoals}{" "}
              {match.winValue === "win" && (
                <Badge fontSize="1em" colorScheme="green" height="100%">
                  {match.winValue}
                </Badge>
              )}
              {match.winValue === "draw" && (
                <Badge fontSize="1em" colorScheme="blue">
                  {match.winValue}
                </Badge>
              )}
              {match.winValue === "loss" && (
                <Badge fontSize="1em" colorScheme="red">
                  {match.winValue}
                </Badge>
              )}
            </Box>
          </Heading>
        </CardHeader>
        <CardBody justifyContent="center" p={2}>
          <Divider variant="solid" color="black" borderColor="blackAlpha.300" />

          <Tabs variant="solid-rounded" colorScheme="green" pt={2}>
            <TabList>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Match</Tab>
              <Tab _selected={{ color: "white", bg: "red.400" }}>Photo</Tab>

              {
                match.matchRecordingLink!==""&&
                <Tab _selected={{ color: "white", bg: "gray.400" }}>Video</Tab>}
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  justifyContent="center"
                  gap={2}
                  alignItems="center"
                >
                  <Grid
                    templateAreas={`"LWF CF RWF"
                          "LWF SS RWF"
                          "LMF AMF RMF"
                          "LMF CMF RMF"
                          "LMF DMF RMF"
                          "LB CB RB"
                          "LB GK RB"`}
                    gap="1"
                    justifyContent="center"
                    alignItems="center"
                    gridAutoColumns="1fr 2fr 1fr"
                    color="blackAlpha.700"
                    marginTop="0.5rem"
                    fontSize="small"
                  >
                    <Box style={boxStyle} gridArea="CF">
                      CF
                    </Box>
                    <Box style={boxStyle}>SS</Box>
                    <Box style={boxStyle} gridArea="LWF">
                      LWF
                    </Box>
                    <Box style={boxStyle} gridArea="RWF">
                      RWF
                    </Box>
                    <Box style={boxStyle} gridArea="LMF">
                      LMF
                    </Box>
                    <Box style={boxStyle} gridArea="AMF">
                      AMF
                    </Box>
                    <Box style={boxStyle} gridArea="RMF">
                      RMF
                    </Box>
                    <Box style={boxStyle} gridArea="CMF">
                      CMF
                    </Box>
                    <Box style={boxStyle} gridArea="DMF">
                      DMF
                    </Box>
                    <Box style={boxStyle} gridArea="LB">
                      LB
                    </Box>
                    <Box style={boxStyle} gridArea="CB">
                      CB
                    </Box>
                    <Box style={boxStyle} gridArea="RB">
                      RB
                    </Box>
                    <Box style={boxStyle} gridArea="GK">
                      GK
                    </Box>
                  </Grid>

                  <Stat
                    textAlign="center"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <StatLabel>
                      Match
                      <br /> Performance
                    </StatLabel>

                    <WrapItem
                      gap={1}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <BsStarHalf fontSize="1.5rem" />
                      <StatNumber textAlign="center">
                        {match.matchPerformance}
                      </StatNumber>
                    </WrapItem>
                    <StatHelpText fontSize="small"></StatHelpText>
                  </Stat>
                </Box>
              </TabPanel>
              <TabPanel>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  width="100%"
                  height="100%"
                  padding={0}
                  margin={0}
                  borderRadius="5px"
                />
              </TabPanel>
              <TabPanel>

              <a href={match.matchRecordingLink}> 
              <Image
                  src="https://images.unsplash.com/photo-1641135698530-8d919344c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Green double couch with wooden legs"
                  width="100%"
                  height="100%"
                  padding={0}
                  margin={0}
                  borderRadius="5px"
                /> 
</a> 
                {/* 
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  width="100%"
                  height="100%"
                  padding={0}
                  margin={0}
                  borderRadius="5px"
                /> */}

              </TabPanel>
            </TabPanels>
          </Tabs>

          <Stack mt="1" spacing="3">
            <Heading size="sm">
              Your match stats vs {match.opponentTeamName}
            </Heading>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
            >
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="blue.100"
                alignSelf="stretch"
              >
                <StatLabel>Goals Scored</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <PiSoccerBallFill fontSize="1.5rem" />
                  <StatNumber>{match.goalsScored}</StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  GPMin{" "}
                  {match.goalsScored !== 0 && match.matchDuration !== 0
                    ? `${(match.matchDuration / match.goalsScored).toFixed(1)}`
                    : 0}
                </StatHelpText>
              </Stat>

              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="blue.100"
                alignSelf="stretch"
              >
                <StatLabel>Assists Provided</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <GiBarefoot fontSize="1.5rem" />
                  <StatNumber textAlign="center">
                    {match.assistsProvided}
                  </StatNumber>
                </WrapItem>
                <StatHelpText fontSize="small">
                  APMin{" "}
                  {match.assistsProvided !== 0 && match.matchDuration !== 0
                    ? `${(match.matchDuration / match.assistsProvided).toFixed(
                        0
                      )}`
                    : 0}
                </StatHelpText>
              </Stat>
            </Box>

            <Box display="flex" gap={1}>
              <Stat
                textAlign="center"
                borderRadius="5px"
                bg="green.100"
                alignSelf="stretch"
              >
                <StatLabel>Yellow Received</StatLabel>

                <WrapItem gap={1} alignItems="center" justifyContent="center">
                  <TbRectangleVerticalFilled color="yellow" fontSize="1.5rem" />
                  <StatNumber>{match.yellowCardsReceived}</StatNumber>
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
                  <StatNumber>{match.redCardsReceived}</StatNumber>
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

                  <StatNumber>{match.foulsCommited}</StatNumber>
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
                  <StatNumber>{match.foulsObtained}</StatNumber>
                </WrapItem>
              </Stat>
            </Box>

            {match.matchComments !== "" && (
              <Textarea
                value={match.matchComments}
                variant="filled"
                colorScheme="white"
                isReadOnly
              ></Textarea>
            )}
          </Stack>
        </CardBody>

        <Divider />
        <CardFooter display="flex">
          <Accordion allowMultiple width="100%">
            <AccordionItem>
              <h2>
                <AccordionButton justifyContent="space-between">
                  <Box as="span" textAlign="center">
                    Match Highlights
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={2}
                  justifyContent="center"
                  alignItems="flex-start"
                  fontSize="smaller"
                >
                  {match.getOnTheScoresheet && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<BiBullseye />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Get on the Scoresheet</Text>
                    </Box>
                  )}

                  {match.bagABrace && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<BsBraces />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Bag a Brace</Text>
                    </Box>
                  )}

                  {match.scoreAHattrick && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GoGoal />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Score a Hat-Trick</Text>
                    </Box>
                  )}

                  {match.fantasticFour && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiNumberFourFill />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Fantastic Four</Text>
                    </Box>
                  )}

                  {match.pokerMaster && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiPokerHand />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Poker Master</Text>
                    </Box>
                  )}

                  {match.historyMaker && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaBook />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>History Maker</Text>
                    </Box>
                  )}

                  {match.letTheShowBegin && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<MdTheaterComedy />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Let the Show Begin</Text>
                    </Box>
                  )}

                  {match.Hawkeye && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiBowman />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Hawkeye</Text>
                    </Box>
                  )}

                  {match.cannonball && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiLuciferCannon />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Cannonball</Text>
                    </Box>
                  )}

                  {match.noExcuses && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiWingfoot />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>No Excuses</Text>
                    </Box>
                  )}

                  {match.coldBloodedBeast && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiSnakeBite />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Cold-blooded Beast</Text>
                    </Box>
                  )}

                  {match.aerialThreat && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiCommercialAirplane />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Aerial Threat</Text>
                    </Box>
                  )}

                  {match.silkySmooth && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaFeatherAlt />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Silky Smooth</Text>
                    </Box>
                  )}

                  {match.luckyCharm && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiHorseshoe />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Lucky Charm</Text>
                    </Box>
                  )}

                  {match.heelOfAGoal && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiHighHeel />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Heel of A Goal</Text>
                    </Box>
                  )}

                  {match.innateTalent && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiAcrobatic />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Innate Talent</Text>
                    </Box>
                  )}

                  {match.laPulga && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiPathDistance />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>La Pulga</Text>
                    </Box>
                  )}

                  {match.oneInAMillion && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiScorpionTail />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>One In A Million</Text>
                    </Box>
                  )}

                  {match.lastMinuteHero && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<MdBalance />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Last Minute Hero</Text>
                    </Box>
                  )}

                  {match.finalWord && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiTrophyCup />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Final Word</Text>
                    </Box>
                  )}
                </Grid>

                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={2}
                  justifyContent="center"
                  alignItems="flex-start"
                  fontSize="smaller"
                  mt={2}
                >
                  {match.aPleasureDoingBusiness && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaHandsHelping />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>A Pleasure Doing Business</Text>
                    </Box>
                  )}

                  {match.foodOnTheTable && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaBreadSlice />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Foot On The Table</Text>
                    </Box>
                  )}

                  {match.asisstsMaestro && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<ImMagicWand />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Asissts Maestro</Text>
                    </Box>
                  )}

                  {match.industrialProvider && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<ImTruck />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Industrial Provider</Text>
                    </Box>
                  )}

                  {match.puppetMaster && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiMagicPalm />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Puppet Master</Text>
                    </Box>
                  )}

                  {match.omniscient && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaRegEye />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Omniscient</Text>
                    </Box>
                  )}

                  {match.cornerstonePresence && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<LuFlagTriangleLeft />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Cornerstone Presence</Text>
                    </Box>
                  )}

                  {match.marksman && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<BiCross />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Marksman</Text>
                    </Box>
                  )}
                </Grid>

                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={2}
                  justifyContent="center"
                  alignItems="flex-start"
                  fontSize="smaller"
                  mt={2}
                >
                  {match.youShallNotPass && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiBrickWall />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>You Shall Not Pass</Text>
                    </Box>
                  )}

                  {match.tacklingTitan && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiColombianStatue />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>Tackling Titan</Text>
                    </Box>
                  )}

                  {match.leadFromTheBack && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiCaptainHatProfile />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>Lead From The Back</Text>
                    </Box>
                  )}

                  {match.theSaviour && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<LiaCrossSolid />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>The Saviour</Text>
                    </Box>
                  )}

                  {match.counterAttackingCatalyst && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiArrowsCounterClockwiseDuotone />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>Counter-Attacking Catalyst</Text>
                    </Box>
                  )}
                </Grid>

                <Grid
                  templateColumns="repeat(3, 1fr)"
                  gap={2}
                  justifyContent="center"
                  alignItems="flex-start"
                  fontSize="smaller"
                  mt={2}
                >
                  {match.livingInAFortress && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiBrickWall />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>Living In A Fortress</Text>
                    </Box>
                  )}

                  {match.theOnlyHero && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiColombianStatue />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>The Only Hero</Text>
                    </Box>
                  )}

                  {match.instantReflexes && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiCaptainHatProfile />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>Instant Reflexes</Text>
                    </Box>
                  )}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    </>
  );
}

export default MatchHistoryCard;
