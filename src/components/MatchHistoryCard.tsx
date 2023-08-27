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
  Grid,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  WrapItem,
  Tag,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
  Textarea,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import deleteMatch from "../utils/firebaseFunctions/deleteMatch";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbMathFunctionOff } from "react-icons/tb";
import { PiRoadHorizonFill } from "react-icons/pi";
import { PiKeyholeFill } from "react-icons/pi";
import { TbOlympics } from "react-icons/tb";
import { TbNeedleThread } from "react-icons/tb";
import { GiFox, GiSteeltoeBoots } from "react-icons/gi";
import { PiHighHeelFill } from "react-icons/pi";
import { GiPuppet } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { TbMathMax } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
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
import { GiMoonOrbit } from "react-icons/gi";
import { GiGiant } from "react-icons/gi";
import { FaMonument } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { GiMaze } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GoTelescope } from "react-icons/go";
import { BsFillSignStopFill } from "react-icons/bs";
import { GiAngryEyes } from "react-icons/gi";
import { FaGitkraken } from "react-icons/fa";
import { GiAngelWings } from "react-icons/gi";
import { GiGalaxy } from "react-icons/gi";

import { GiPathDistance } from "react-icons/gi";
import { GiSlingshot } from "react-icons/gi";
import { GiWingfoot } from "react-icons/gi";
import { LuFlagTriangleLeft } from "react-icons/lu";
import { PiHighHeel } from "react-icons/pi";
import { BiCross } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";
import { AuthContext } from "../context/Auth";
import { useContext } from "react";
import { OverallStatsContext } from "../context/OverallStats";
interface Props {
  match: any;
  triggerMatchHistoryComponentRefresh?: () => void;
}

function MatchHistoryCard({
  match,
  triggerMatchHistoryComponentRefresh,
}: Props) {
  const { currentUser } = useContext(AuthContext);
  const {triggerDataRefresh} = useContext(OverallStatsContext)
  const toast = useToast();
  const boxStyle = {
    weight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s", // Add a smooth transition effect
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };

  const calculateBackgroundColor = (value: boolean) => {
    let backgroundColorToUse = "";
    if (!value) {
      backgroundColorToUse = "green";
    } else {
      backgroundColorToUse = "#00FF00";
    }

    return backgroundColorToUse;
  };

  const calculateTextColor = (value: boolean) => {
    let textColorToUse = "";
    if (!value) {
      textColorToUse = "white";
    } else {
      textColorToUse = "black";
    }

    return textColorToUse;
  };

  async function handleDeleteMatch() {
    
    await deleteMatch(match, currentUser.uid);

    toast({
      title: "Your match was successfully deleted!",
      status: "success",
      isClosable: true,
      position: "top",
    });
    if(triggerMatchHistoryComponentRefresh){
      triggerMatchHistoryComponentRefresh();
    }
    triggerDataRefresh()
  } 

  return (
    <>
      <Card variant="elevated">
        <CardHeader pb={0} mb={0} display="flex" justifyContent="space-between">
          <Heading fontSize="1rem">
            {match.matchDate.replace("T", " ")} - {match.stadiumName}
            <Box display="flex" alignItems="center" gap={2}>
              {match.homeTeamGoals}-{match.awayTeamGoals}{" "}
              {match.winValue === "win" && (
                <Tag
                  fontSize="1em"
                  fontWeight="bold"
                  colorScheme="orange"
                  height="100%"
                >
                  {match.winValue.toUpperCase()}
                </Tag>
              )}
              {match.winValue === "draw" && (
                <Tag
                  fontSize="1em"
                  colorScheme="blue"
                  fontWeight="bold"
                  height="100%"
                >
                  {match.winValue.toUpperCase()}
                </Tag>
              )}
              {match.winValue === "loss" && (
                <Tag
                  fontSize="1em"
                  colorScheme="red"
                  fontWeight="bold"
                  height="100%"
                >
                  {match.winValue.toUpperCase()}
                </Tag>
              )}
            </Box>
          </Heading>
          {match.userId === currentUser.uid && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<BsThreeDotsVertical />}
                variant="filled"
              />

              <MenuList>
                <MenuItem onClick={handleDeleteMatch}>Delete Match</MenuItem>
              </MenuList>
            </Menu>
          )}
        </CardHeader>
        <CardBody justifyContent="center" p={2}>
          <Divider variant="solid" color="black" borderColor="blackAlpha.300" />

          <Tabs variant="solid-rounded" colorScheme="green" pt={2}>
            <TabList>
              <Tab _selected={{ color: "white", bg: "blue.500" }}>Match</Tab>

              {match.matchImage !== null && (
                <Tab _selected={{ color: "white", bg: "red.400" }}>Photo</Tab>
              )}

              {match.matchRecordingLink !== "" && (
                <Tab _selected={{ color: "white", bg: "gray.400" }}>Video</Tab>
              )}
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
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.CF_p),
                        color: calculateTextColor(match.CF_p),
                      }}
                      gridArea="CF"
                    >
                      CF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.SS_p),
                        color: calculateTextColor(match.SS_p),
                      }}
                    >
                      SS
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.LWF_p),
                        color: calculateTextColor(match.LWF_p),
                      }}
                      gridArea="LWF"
                    >
                      LWF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.RWF_p),
                        color: calculateTextColor(match.RWF_p),
                      }}
                      gridArea="RWF"
                    >
                      RWF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.LMF_p),
                        color: calculateTextColor(match.LMF_p),
                      }}
                      gridArea="LMF"
                    >
                      LMF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.AMF_p),
                        color: calculateTextColor(match.AMF_p),
                      }}
                      gridArea="AMF"
                    >
                      AMF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.RMF_p),
                        color: calculateTextColor(match.RMF_p),
                      }}
                      gridArea="RMF"
                    >
                      RMF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.CMF_p),
                        color: calculateTextColor(match.CMF_p),
                      }}
                      gridArea="CMF"
                    >
                      CMF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.DMF_p),
                        color: calculateTextColor(match.DMF_p),
                      }}
                      gridArea="DMF"
                    >
                      DMF
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.LB_p),
                        color: calculateTextColor(match.LB_p),
                      }}
                      gridArea="LB"
                    >
                      LB
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.CB_p),
                        color: calculateTextColor(match.CB_p),
                      }}
                      gridArea="CB"
                    >
                      CB
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.RB_p),
                        color: calculateTextColor(match.RB_p),
                      }}
                      gridArea="RB"
                    >
                      RB
                    </Box>
                    <Box
                      style={{
                        ...boxStyle,
                        backgroundColor: calculateBackgroundColor(match.GK_p),
                        color: calculateTextColor(match.GK_p),
                      }}
                      gridArea="GK"
                    >
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

              {match.matchImage !== "" && (
                <TabPanel>
                  <Image
                    src={match.matchImage}
                    alt="match snapshot"
                    width="100%"
                    height="100%"
                    padding={0}
                    margin={0}
                    borderRadius="5px"
                  />
                </TabPanel>
              )}

              {match.matchRecordingLink !== "" && (
                <TabPanel>
                  <a href={match.matchRecordingLink} target="_blank">
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
                </TabPanel>
              )}
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

                  {match.slingshot && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiSlingshot />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Slingshot</Text>
                    </Box>
                  )}

                  {match.aroundThePlanet && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiMoonOrbit />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Around The Planet</Text>
                    </Box>
                  )}

                  {match.hawkeye && (
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

                  {match.foxInTheBox && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiFox />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Fox In The Box</Text>
                    </Box>
                  )}

                  {match.mathGenius && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<TbMathFunctionOff />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Math Genius</Text>
                    </Box>
                  )}

                  {match.freePath && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiRoadHorizonFill />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Free Path</Text>
                    </Box>
                  )}

                  {match.sneakIn && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiKeyholeFill />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Sneak In</Text>
                    </Box>
                  )}

                  {match.olimpico && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<TbOlympics />}
                        fontSize="1rem"
                        bg="red.200"
                      />
                      <Text>Olimpico</Text>
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

                  {match.telescopeVision && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GoTelescope />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Telescope Vision</Text>
                    </Box>
                  )}

                  {match.threadTheNeedle && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<TbNeedleThread />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Thread The Needle</Text>
                    </Box>
                  )}

                  {match.equallyImpressive && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiSteeltoeBoots />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Equally Impressive</Text>
                    </Box>
                  )}

                  {match.heelOfAnAssist && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<PiHighHeelFill />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Heel Of An Assist</Text>
                    </Box>
                  )}

                  {match.cleverDummy && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiPuppet />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Clever Dummy</Text>
                    </Box>
                  )}

                  {match.bigBrain && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiBrain />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Big Brain</Text>
                    </Box>
                  )}

                  {match.lobbedWonder && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<TbMathMax />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Lobbed Wonder</Text>
                    </Box>
                  )}

                  {match.servedOnAPlate && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<MdFastfood />}
                        fontSize="1rem"
                        bg="teal.200"
                      />
                      <Text>Served On A Plate</Text>
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
                  {match.theGiant && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiGiant />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>The Giant</Text>
                    </Box>
                  )}

                  {match.oneManArmy && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiHumanPyramid />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>One Man Army</Text>
                    </Box>
                  )}

                  {match.theMonument && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaMonument />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>The Monument</Text>
                    </Box>
                  )}

                  {match.thePathBreaker && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiMaze />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>The Path Breaker</Text>
                    </Box>
                  )}

                  {match.theMountain && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiMountaintop />}
                        fontSize="1rem"
                        bg="blue.200"
                      />
                      <Text>The Mountain</Text>
                    </Box>
                  )}

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
                  {match.youStopHere && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<BsFillSignStopFill />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>You Stop Here!</Text>
                    </Box>
                  )}

                  {match.imNotKidding && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiAngryEyes />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>I'm Not Kidding</Text>
                    </Box>
                  )}

                  {match.theKraken && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<FaGitkraken />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>The Kraken</Text>
                    </Box>
                  )}

                  {match.guardianAngel && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiAngelWings />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>Guardian Angel</Text>
                    </Box>
                  )}

                  {match.protectorOfTheGalaxy && (
                    <Box textAlign="center">
                      <IconButton
                        aria-label="highlight icon"
                        icon={<GiGalaxy />}
                        fontSize="1rem"
                        bg="orange.200"
                      />
                      <Text>Protector Of The Galaxy</Text>
                    </Box>
                  )}

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
