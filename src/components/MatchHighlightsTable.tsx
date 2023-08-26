import {
  Box,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { GiFox } from "react-icons/gi";
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
import { GiSlingshot } from "react-icons/gi";
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
import { GiPathDistance } from "react-icons/gi";
import { GiWingfoot } from "react-icons/gi";
import { LuFlagTriangleLeft } from "react-icons/lu";
import { PiHighHeel } from "react-icons/pi";
import { BiCross } from "react-icons/bi";
import { TbMathFunctionOff } from "react-icons/tb";
import { PiRoadHorizonFill } from "react-icons/pi";
import { PiKeyholeFill } from "react-icons/pi";
import { TbOlympics } from "react-icons/tb";
import { TbNeedleThread } from "react-icons/tb";
import { GiSteeltoeBoots } from "react-icons/gi";
import { PiHighHeelFill } from "react-icons/pi";
import { GiPuppet } from "react-icons/gi";
import { GiBrain } from "react-icons/gi";
import { TbMathMax } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import OverallStatsDataInterface from "../utils/interfaces/overallStatsDataInterface";

interface Props {
  overallStatsData: OverallStatsDataInterface;
}

function MatchHighlightsTable({ overallStatsData }: Props) {
  return (
    <>
      <Box>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Attack Highlights
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0} m={0}>
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Icon</Th>
                      <Th>Highlight Name</Th>
                      <Th>Times</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {overallStatsData.getOnTheScoresheet !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<BiBullseye />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Get on the scoresheet
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.getOnTheScoresheet}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.bagABrace !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<BsBraces />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Bag a Brace
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.bagABrace}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.scoreAHattrick !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GoGoal />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Score a Hat-Trick
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.scoreAHattrick}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.fantasticFour !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiNumberFourFill />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          {overallStatsData.fantasticFour}
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.fantasticFour}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.pokerMaster !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiPokerHand />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Poker Master
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.pokerMaster}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.historyMaker !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaBook />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          History Maker
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.historyMaker}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.letTheShowBegin !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<MdTheaterComedy />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Let the Show Begin
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.letTheShowBegin}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.slingshot !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiSlingshot />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Slingshot
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.slingshot}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.aroundThePlanet !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiMoonOrbit />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Around The Planet
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.aroundThePlanet}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.foxInTheBox !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiFox />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Fox In The Box
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.foxInTheBox}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.hawkeye !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiBowman />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Hawkeye
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.hawkeye}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.cannonball !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiLuciferCannon />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Cannonball
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.cannonball}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.mathGenius !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<TbMathFunctionOff />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Math Genius
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.mathGenius}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.freePath !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiRoadHorizonFill />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Free Path
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.freePath}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.sneakIn !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiKeyholeFill />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Sneak In
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.sneakIn}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.olimpico !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<TbOlympics />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Olimpico
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.olimpico}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.noExcuses !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiWingfoot />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          No Excuses
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.noExcuses}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.coldBloodedBeast !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiSnakeBite />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Cold-blooded Beast
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.coldBloodedBeast}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.aerialThreat !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiCommercialAirplane />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Aerial Threat
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.aerialThreat}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.silkySmooth !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaFeatherAlt />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Silky Smooth
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.silkySmooth}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.luckyCharm !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiHorseshoe />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Lucky Charm
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.luckyCharm}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.heelOfAGoal !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiHighHeel />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Heel Of A Goal
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.heelOfAGoal}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.innateTalent !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiAcrobatic />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Innate Talent
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.innateTalent}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.laPulga !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiPathDistance />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          La Pulga
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.laPulga}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.oneInAMillion !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiScorpionTail />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          One In A Million
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.oneInAMillion}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.lastMinuteHero !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<MdBalance />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Last Minute Hero
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.lastMinuteHero}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.finalWord !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiTrophyCup />}
                            fontSize="1.5rem"
                            bg="red.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Final Word
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.finalWord}
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Midfield Highlights
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0} m={0}>
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Icon</Th>
                      <Th>Highlight Name</Th>
                      <Th>Times</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {overallStatsData.aPleasureDoingBusiness !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaHandsHelping />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start" fontSize="smaller">
                          A Pleasure Doing Business
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.aPleasureDoingBusiness}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.foodOnTheTable !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaBreadSlice />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Food On The Table
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.foodOnTheTable}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.assistsMaestro !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<ImMagicWand />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Assist Maestro
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.assistsMaestro}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.industrialProvider !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<ImTruck />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Industrial Provider
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.industrialProvider}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.puppetMaster !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiMagicPalm />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Puppet Master
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.puppetMaster}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.omniscient !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaRegEye />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Omniscient
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.omniscient}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.cornerstonePresence !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<LuFlagTriangleLeft />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Cornerstone Presence
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.cornerstonePresence}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.marksman !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<BiCross />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Marksman
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.marksman}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.telescopeVision !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GoTelescope />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Telescope Vision
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.telescopeVision}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.threadTheNeedle !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<TbNeedleThread />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Thread The Needle
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.threadTheNeedle}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.equallyImpressive !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiSteeltoeBoots />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Equally Impressive
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.equallyImpressive}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.heelOfAnAssist !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiHighHeelFill />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Heel Of An Assist
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.heelOfAnAssist}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.cleverDummy !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiPuppet />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Clever Dummy
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.cleverDummy}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.bigBrain !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiBrain />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Big Brain
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.bigBrain}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.lobbedWonder !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<TbMathMax />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Lobbed Wonder
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.lobbedWonder}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.servedOnAPlate !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<MdFastfood />}
                            fontSize="1.5rem"
                            bg="teal.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Served On A Plate
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.servedOnAPlate}
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Defence Highlights
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0} m={0}>
              <TableContainer>
                <Table variant="striped" colorScheme="blue">
                  <Thead>
                    <Tr>
                      <Th>Icon</Th>
                      <Th>Highlight Name</Th>
                      <Th>Times</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {overallStatsData.theGiant !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiGiant />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Giant
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theGiant}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.oneManArmy !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiHumanPyramid />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          One Man Army
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.oneManArmy}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.theMonument !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaMonument />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Monument
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theMonument}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.thePathBreaker !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiMaze />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Path Breaker
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.thePathBreaker}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.theMountain !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiMountaintop />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Mountain
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theMountain}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.youShallNotPass !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiBrickWall />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          You Shall Not Pass
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.youShallNotPass}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.tacklingTitan !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiColombianStatue />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Tackling Titan
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.tacklingTitan}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.leadFromTheBack !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiCaptainHatProfile />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Lead From The Back
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.leadFromTheBack}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.theSaviour !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<LiaCrossSolid />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Saviour
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theSaviour}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.counterAttackingCatalyst !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<PiArrowsCounterClockwiseDuotone />}
                            fontSize="1.5rem"
                            bg="blue.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start" fontSize="smaller">
                          Counter-Attacking Catalyst
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.counterAttackingCatalyst}
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Goalkeeping Highlights
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={0} m={0}>
              <TableContainer>
                <Table variant="striped" colorScheme="orange">
                  <Thead>
                    <Tr>
                      <Th>Icon</Th>
                      <Th>Highlight Name</Th>
                      <Th>Times</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {overallStatsData.youStopHere !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<BsFillSignStopFill />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          You Stop Here!
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.youStopHere}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.imNotKidding !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiAngryEyes />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          I'm Not Kidding
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.imNotKidding}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.theKraken !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<FaGitkraken />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Kraken
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theKraken}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.guardianAngel !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiAngelWings />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Guardian Angel
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.guardianAngel}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.protectorOfTheGalaxy !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiGalaxy />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Protector Of The Galaxy
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.protectorOfTheGalaxy}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.livingInAFortress !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiLockedFortress />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Living In A Fortress
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.livingInAFortress}
                        </Td>
                      </Tr>
                    )}
                    {overallStatsData.theOnlyHero !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiGoalKeeper />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          The Only Hero
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.theOnlyHero}
                        </Td>
                      </Tr>
                    )}

                    {overallStatsData.instantReflexes !== 0 && (
                      <Tr textAlign="center">
                        <Td p={0} m={0} textAlign="center">
                          <IconButton
                            aria-label="highlight icon"
                            icon={<GiFeline />}
                            fontSize="1.5rem"
                            bg="orange.200"
                          />
                        </Td>
                        <Td pl={0} pr={0} textAlign="start">
                          Instant Reflexes
                        </Td>
                        <Td pl={0} pr={0} textAlign="center">
                          x {overallStatsData.instantReflexes}
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}

export default MatchHighlightsTable;
