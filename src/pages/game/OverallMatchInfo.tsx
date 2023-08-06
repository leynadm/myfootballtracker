import playerTshirt from "../../assets/player_tshirt.png";
import {
  Button,
  Text,
  useColorModeValue,
  Stack,
  Input,
  Box,
  Container,
  Grid,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormControl,
  Divider,
  FormErrorMessage,
  useToast,
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

  return (
    <>
      <Container pb="50px">
        <Stack spacing={1}>
          <WrapItem
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
            gap={2}
          >
            <WrapItem justifyContent="center" alignItems="center" gap={1}>
              <Text fontSize="1.5rem" fontWeight="bold">
                7
              </Text>
              <img src={playerTshirt} alt="tshirt" width="20rem" />
            </WrapItem>
            <Text fontSize="1.5rem" fontWeight="bold">
              Daniel Matei
            </Text>
            <Badge fontSize="1.5rem">LWF</Badge>
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
            <Box style={boxStyle} gridArea="CF">
              CF ({2})
            </Box>

            <Box style={boxStyle} gridArea="SS" backgroundColor="gold">
              SS
            </Box>

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
          <Divider />

          <Box display="flex" gap={1}>
            <Stat textAlign="center" borderRadius="5px" bg="blue.100">
              <StatLabel>Victories</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <FaHandPeace fontSize="1.5rem" />
                <StatNumber textAlign="center">9</StatNumber>
              </WrapItem>
              <StatHelpText fontSize="small">Win %</StatHelpText>
            </Stat>

            <Stat textAlign="center" borderRadius="5px" bg="blue.100">
              <StatLabel>Draws</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <FaRegHandshake fontSize="1.5rem" />
                <StatNumber textAlign="center">3</StatNumber>
              </WrapItem>
              <StatHelpText fontSize="small">Draw %</StatHelpText>
            </Stat>

            <Stat textAlign="center" borderRadius="5px" bg="blue.100">
              <StatLabel>Defeats</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <AiOutlineDislike fontSize="1.5rem" />
                <StatNumber textAlign="center">1</StatNumber>
              </WrapItem>
              <StatHelpText fontSize="small">Loss %</StatHelpText>
            </Stat>
          </Box>
          <Divider mt={2} />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Stat textAlign="center" borderRadius="5px" bg="gray.100">
              <StatLabel>Goals Scored</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <PiSoccerBallFill fontSize="1.5rem" />
                <StatNumber>14</StatNumber>
              </WrapItem>
              <StatHelpText fontSize="small">GPM</StatHelpText>
            </Stat>

            <Stat textAlign="center" borderRadius="5px" bg="gray.100">
              <StatLabel>Assists Provided</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <GiBarefoot fontSize="1.5rem" />
                <StatNumber textAlign="center">9</StatNumber>
              </WrapItem>
              <StatHelpText fontSize="small">APM </StatHelpText>
            </Stat>
          </Box>
          <Divider mt={2} />
          <Box display="flex" gap={1}>
            <Stat textAlign="center" borderRadius="5px" bg="green.100">
              <StatLabel>Yellow Received</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <TbRectangleVerticalFilled color="yellow" fontSize="1.5rem" />
                <StatNumber>2</StatNumber>
              </WrapItem>
            </Stat>

            <Stat textAlign="center" borderRadius="5px" bg="green.100">
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
                <StatNumber>0</StatNumber>
              </WrapItem>
            </Stat>
            <Stat textAlign="center" borderRadius="5px" bg="green.100">
              <StatLabel>Fouls Committed</StatLabel>
              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <GiWhistle fontSize="1.5rem" />

                <StatNumber>7</StatNumber>
              </WrapItem>
            </Stat>
            <Stat textAlign="center" borderRadius="5px" bg="green.100">
              <StatLabel>Fouls Obtained</StatLabel>

              <WrapItem gap={1} alignItems="center" justifyContent="center">
                <BiPlusMedical fontSize="1.5rem" />
                <StatNumber>2</StatNumber>
              </WrapItem>
            </Stat>
          </Box>
          <Divider mt={2} />

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
                            x 4
                          </Td>
                        </Tr>

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
                            Bag a brace
                          </Td>
                          <Td pl={0} pr={0} textAlign="center">
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            Fantastic Four
                          </Td>
                          <Td pl={0} pr={0} textAlign="center">
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>
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
                        <Tr textAlign="center">
                          <Td p={0} m={0} textAlign="center">
                            <IconButton
                              aria-label="highlight icon"
                              icon={<FaHandsHelping />}
                              fontSize="1.5rem"
                              bg="teal.200"
                            />
                          </Td>
                          <Td
                            pl={0}
                            pr={0}
                            textAlign="start"
                            fontSize="smaller"
                          >
                            A Pleasure Doing Business
                          </Td>
                          <Td pl={0} pr={0} textAlign="center">
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>
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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

                        <Tr textAlign="center">
                          <Td p={0} m={0} textAlign="center">
                            <IconButton
                              aria-label="highlight icon"
                              icon={<PiArrowsCounterClockwiseDuotone />}
                              fontSize="1.5rem"
                              bg="blue.200"
                            />
                          </Td>
                          <Td
                            pl={0}
                            pr={0}
                            textAlign="start"
                            fontSize="smaller"
                          >
                            Counter-Attacking Catalyst
                          </Td>
                          <Td pl={0} pr={0} textAlign="center">
                            x 4
                          </Td>
                        </Tr>
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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>

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
                            x 4
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
