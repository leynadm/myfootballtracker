import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Container,
  Stack,
  Box,
  Grid,
  Avatar,
  WrapItem,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
} from "@chakra-ui/react";
import { GiFootprint } from "react-icons/gi";
import playerTshirt from "../../assets/player_tshirt.png";
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
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

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

import { useContext, useEffect } from "react";
import { OverallStatsContext } from "../../context/OverallStats";
import { AuthContext } from "../../context/Auth";
interface Props {
  queriedUser: any;
}

function PlayerComparison({ queriedUser }: Props) {
  const { overallStatsData } = useContext(OverallStatsContext);
  const { currentUSer, currentUserData } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box
    justifyContent="space-between"
    display="flex"
    flexDirection="column"
    alignItems="center"
    width="100%"
    gap={3}
    >
        
        
        <Text fontWeight="bold">Player Comparison</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Avatar
            size="md"
            name={`${queriedUser.firstName} ${queriedUser.lastName}`}
            src={queriedUser.profileImage}
            loading="lazy"
          />{" "}
          <Avatar
            size="md"
            name={`${currentUserData.firstName} ${currentUserData.lastName}`}
            src={currentUserData.profileImage}
            loading="lazy"
          />{" "}
        </Box>
    

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>T-Shirt Number</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <WrapItem alignItems="center" gap={1}>
            {queriedUser.shirtNumber !== "" ? (
              <Text fontSize="1.25rem" fontWeight="bold">
                {queriedUser.shirtNumber}
              </Text>
            ) : (
              <Text fontSize="1.25rem">0</Text>
            )}

            <img src={playerTshirt} alt="tshirt" width="15rem" />
          </WrapItem>

          <WrapItem alignItems="center" gap={1}>
            {currentUserData.shirtNumber !== "" ? (
              <Text fontSize="1.25rem" fontWeight="bold">
                {currentUserData.shirtNumber}
              </Text>
            ) : (
              <Text fontSize="1.25rem">0</Text>
            )}

            <img src={playerTshirt} alt="tshirt" width="15rem" />
          </WrapItem>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Preferred Position</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <WrapItem>
            {queriedUser.preferredPosition !== "" ? (
              <Badge
                borderRadius="5px"
                fontSize="1rem"
                fontWeight="bold"
                bg="black"
                color="white"
                m={1}
              >
                {queriedUser.preferredPosition}
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

          <WrapItem>
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
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Country</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <WrapItem>
            {queriedUser.country.country !== "" ? (
              <img
                src={`https://flagsapi.com/${queriedUser.country.countryCode}/flat/32.png`}
                alt="Country Flag"
              />
            ) : (
              <Box w="2.5rem" bg="black" height="1.5rem" m={2}></Box>
            )}
          </WrapItem>

          <WrapItem>
            {currentUserData.country.country !== "" ? (
              <img
                src={`https://flagsapi.com/${currentUserData.country.countryCode}/flat/32.png`}
                alt="Country Flag"
              />
            ) : (
              <Box w="2.5rem" bg="black" height="1.5rem" m={2}></Box>
            )}
          </WrapItem>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Preferred Foot</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <WrapItem>
            {queriedUser.preferredFoot === "right" && (
              <GiFootprint
                fontSize="2rem"
                style={{
                  transform: "rotateY(180deg)",
                }}
              />
            )}

            {queriedUser.preferredFoot === "left" && (
              <GiFootprint fontSize="2rem" />
            )}

            {(queriedUser.preferredFoot === "both" ||
              queriedUser.preferredFoot === "") && (
              <Box display="flex">
                <GiFootprint
                  fontSize="1.5rem"
                  style={{
                    transform: "rotate(320deg)",
                  }}
                />

                <GiFootprint
                  fontSize="1.5rem"
                  style={{
                    transform: "rotateY(180deg) rotate(-40deg)",
                  }}
                />
              </Box>
            )}
          </WrapItem>

          <WrapItem>
            {currentUserData.preferredFoot === "right" && (
              <GiFootprint
                fontSize="2rem"
                style={{
                  transform: "rotateY(180deg)",
                }}
              />
            )}

            {currentUserData.preferredFoot === "left" && (
              <GiFootprint fontSize="2rem" />
            )}

            {(currentUserData.preferredFoot === "both" ||
              currentUserData.preferredFoot === "") && (
              <Box display="flex">
                <GiFootprint
                  fontSize="1.5rem"
                  style={{
                    transform: "rotate(320deg)",
                  }}
                />

                <GiFootprint
                  fontSize="1.5rem"
                  style={{
                    transform: "rotateY(180deg) rotate(-40deg)",
                  }}
                />
              </Box>
            )}
          </WrapItem>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Matches Played</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.matchesPlayed >
            overallStatsData.matchesPlayed ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.matchesPlayed}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.matchesPlayed}</Text>
            {queriedUser.stats.matchesPlayed >
            overallStatsData.matchesPlayed ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Avg. Match Performance</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.matchPerformance /
              queriedUser.stats.matchesPlayed >
            overallStatsData.matchPerformance /
              overallStatsData.matchesPlayed ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>
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
            </Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>
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
            </Text>
            {queriedUser.stats.matchPerforomance /
              queriedUser.stats.matchesPlayed >
            overallStatsData.matchPerformance /
              overallStatsData.matchesPlayed ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Wins</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.wins > overallStatsData.wins ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.wins}</Text>
            <Text>{`(${
              isNaN(queriedUser.stats.wins / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.wins / queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.wins}</Text>
            <Text>{`(${
              isNaN(overallStatsData.wins / overallStatsData.matchesPlayed)
                ? "0.00%"
                : (
                    (overallStatsData.wins / overallStatsData.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}</Text>
            {queriedUser.stats.wins > overallStatsData.wins ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Draws</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.draws > overallStatsData.draws ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.draws}</Text>
            {`(${
              isNaN(queriedUser.stats.draws / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.draws /
                      queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.draws}</Text>
            {`(${
              isNaN(overallStatsData.draws / overallStatsData.matchesPlayed)
                ? "0.00%"
                : (
                    (overallStatsData.draws / overallStatsData.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}
            {queriedUser.stats.draws > overallStatsData.draws ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Defeats</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.defeats > overallStatsData.defeats ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.defeats}</Text>
            {`(${
              isNaN(queriedUser.stats.defeats / queriedUser.stats.matchesPlayed)
                ? "0.00%"
                : (
                    (queriedUser.stats.defeats /
                      queriedUser.stats.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.defeats}</Text>
            {`(${
              isNaN(overallStatsData.defeats / overallStatsData.matchesPlayed)
                ? "0.00%"
                : (
                    (overallStatsData.defeats /
                      overallStatsData.matchesPlayed) *
                    100
                  ).toFixed(1)
            }%)`}
            {queriedUser.stats.defeats > overallStatsData.defeats ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Goals Scored</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.goalsScored > overallStatsData.goalsScored ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.goalsScored}</Text>
            <Text>
              {`(GPM ${
                isNaN(
                  queriedUser.stats.goalsScored /
                    queriedUser.stats.matchesPlayed
                )
                  ? "0.0"
                  : (
                      queriedUser.stats.goalsScored /
                      queriedUser.stats.matchesPlayed
                    ).toFixed(1)
              })`}
            </Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.goalsScored}</Text>
            <Text>
              {`(GPM ${
                isNaN(
                  overallStatsData.goalsScored / overallStatsData.matchesPlayed
                )
                  ? "0.0"
                  : (
                      overallStatsData.goalsScored /
                      overallStatsData.matchesPlayed
                    ).toFixed(1)
              })`}
            </Text>
            {queriedUser.stats.goalsScored > overallStatsData.goalsScored ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Assists Provided</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.assistsProvided >
            overallStatsData.assistsProvided ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.assistsProvided}</Text>
            <Text>
              {`(APM ${
                isNaN(
                  queriedUser.stats.assistsProvided /
                    queriedUser.stats.matchesPlayed
                )
                  ? "0.0"
                  : (
                      queriedUser.stats.assistsProvided /
                      queriedUser.stats.matchesPlayed
                    ).toFixed(1)
              })`}
            </Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.assistsProvided}</Text>
            <Text>
              {`(APM ${
                isNaN(
                  overallStatsData.assistsProvided /
                    overallStatsData.matchesPlayed
                )
                  ? "0.0"
                  : (
                      overallStatsData.assistsProvided /
                      overallStatsData.matchesPlayed
                    ).toFixed(1)
              })`}
            </Text>
            {queriedUser.stats.assistsProvided >
            overallStatsData.assistsProvided ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Goal Contributions</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.goalsScored + queriedUser.stats.assistsProvided >
            overallStatsData.goalsScored + overallStatsData.assistsProvided ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>
              {queriedUser.stats.goalsScored +
                queriedUser.stats.assistsProvided}
            </Text>
            <Text>
              {`(GC/${
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
              } min)`}
            </Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>
              {overallStatsData.goalsScored + overallStatsData.assistsProvided}
            </Text>
            <Text>
              {`(GC/${
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
              } min)`}
            </Text>
            {queriedUser.stats.goalsScored + queriedUser.stats.assistsProvided >
            overallStatsData.goalsScored + overallStatsData.assistsProvided ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Yellow Received</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.yellowCardsReceived >
            overallStatsData.yellowCardsReceived ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.yellowCardsReceived}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.yellowCardsReceived}</Text>
            {queriedUser.stats.yellowCardsReceived >
            overallStatsData.yellowCardsReceived ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Red Received</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.redCardsReceived >
            overallStatsData.redCardsReceived ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.redCardsReceived}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.redCardsReceived}</Text>
            {queriedUser.stats.redCardsReceived >=
            overallStatsData.redCardsReceived ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Fouls Commited</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.foulsCommited >
            overallStatsData.foulsCommited ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.foulsCommited}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.foulsCommited}</Text>
            {queriedUser.stats.foulsCommited >=
            overallStatsData.foulsCommited ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>
      <Box
        justifyContent="space-between"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        bg="lightblue"
        borderRadius="10px"
      >
        <Text>Fouls Obtained</Text>
        <Box display="flex" w="100%" justifyContent="space-around">
          <Box display="flex" alignItems="center" gap={1}>
            {queriedUser.stats.foulsObtained >
            overallStatsData.foulsObtained ? (
              <MdKeyboardDoubleArrowUp color="green" />
            ) : (
              <MdKeyboardDoubleArrowDown color="red" />
            )}
            <Text>{queriedUser.stats.foulsObtained}</Text>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Text>{overallStatsData.foulsObtained}</Text>
            {queriedUser.stats.foulsObtained >=
            overallStatsData.foulsObtained ? (
              <MdKeyboardDoubleArrowDown color="green" />
            ) : (
              <MdKeyboardDoubleArrowUp color="red" />
            )}
          </Box>
        </Box>
      </Box>

      <Accordion allowMultiple w="100%">
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
            <Box>
              <Text textAlign="center">Get on the scoresheet</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.getOnTheScoresheet >
                  overallStatsData.getOnTheScoresheet ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.getOnTheScoresheet}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<BiBullseye />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.getOnTheScoresheet}</Text>
                  {queriedUser.stats.getOnTheScoresheet >=
                  overallStatsData.getOnTheScoresheet ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Bag a Brace</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.bagABrace > overallStatsData.bagABrace ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.bagABrace}</Text>
                </Box>

                <IconButton
                  aria-label="highlight icon"
                  icon={<BsBraces />}
                  fontSize="1.5rem"
                  bg="red.200"
                />

                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.bagABrace}</Text>
                  {queriedUser.stats.bagABrace >= overallStatsData.bagABrace ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Score A Hattrick</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.scoreAHattrick >
                  overallStatsData.scoreAHattrick ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.scoreAHattrick}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GoGoal />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.scoreAHattrick}</Text>
                  {queriedUser.stats.scoreAHattrick >=
                  overallStatsData.scoreAHattrick ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Fantastic Four</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.fantasticFour >
                  overallStatsData.fantasticFour ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.fantasticFour}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<PiNumberFourFill />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.fantasticFour}</Text>
                  {queriedUser.stats.fantasticFour >=
                  overallStatsData.fantasticFour ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Poker Master</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.pokerMaster >
                  overallStatsData.pokerMaster ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.pokerMaster}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiPokerHand />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.pokerMaster}</Text>
                  {queriedUser.stats.pokerMaster >=
                  overallStatsData.pokerMaster ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">History Maker</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.historyMaker >
                  overallStatsData.historyMaker ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.historyMaker}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaBook />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.historyMaker}</Text>
                  {queriedUser.stats.historyMaker >=
                  overallStatsData.historyMaker ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Let the Show Begin</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.letTheShowBegin >
                  overallStatsData.letTheShowBegin ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.letTheShowBegin}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<MdTheaterComedy />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.letTheShowBegin}</Text>
                  {queriedUser.stats.letTheShowBegin >=
                  overallStatsData.letTheShowBegin ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Slingshot</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.slingshot > overallStatsData.slingshot ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.slingshot}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiSlingshot />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.slingshot}</Text>
                  {queriedUser.stats.slingshot >= overallStatsData.slingshot ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Around The Planet</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.aroundThePlanet >
                  overallStatsData.aroundThePlanet ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.aroundThePlanet}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiMoonOrbit />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.aroundThePlanet}</Text>
                  {queriedUser.stats.aroundThePlanet >=
                  overallStatsData.aroundThePlanet ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Hawkeye</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.hawkeye > overallStatsData.hawkeye ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.hawkeye}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiBowman />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.hawkeye}</Text>
                  {queriedUser.stats.hawkeye >= overallStatsData.hawkeye ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Cannonball</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.cannonball >
                  overallStatsData.cannonball ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.cannonball}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiLuciferCannon />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.cannonball}</Text>
                  {queriedUser.stats.cannonball >=
                  overallStatsData.cannonball ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">No Excuses</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.noExcuses > overallStatsData.noExcuses ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.noExcuses}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiWingfoot />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.noExcuses}</Text>
                  {queriedUser.stats.noExcuses >= overallStatsData.noExcuses ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Cold-blooded Beast</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.coldBloodedBeast >
                  overallStatsData.coldBloodedBeast ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.coldBloodedBeast}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiSnakeBite />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.coldBloodedBeast}</Text>
                  {queriedUser.stats.coldBloodedBeast >=
                  overallStatsData.coldBloodedBeast ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Aerial Threat</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.aerialThreat >
                  overallStatsData.aerialThreat ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.aerialThreat}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiCommercialAirplane />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.aerialThreat}</Text>
                  {queriedUser.stats.aerialThreat >=
                  overallStatsData.aerialThreat ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Silky Smooth</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.slikySmooth >
                  overallStatsData.slikySmooth ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.slikySmooth}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaFeatherAlt />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.slikySmooth}</Text>
                  {queriedUser.stats.slikySmooth >=
                  overallStatsData.slikySmooth ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Lucky Charm</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.luckyCharm >
                  overallStatsData.luckyCharm ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.luckyCharm}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiHorseshoe />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.luckyCharm}</Text>
                  {queriedUser.stats.luckyCharm >=
                  overallStatsData.luckyCharm ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Heel Of A Goal</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.heelOfAGoal >
                  overallStatsData.heelOfAGoal ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.heelOfAGoal}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<PiHighHeel />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.heelOfAGoal}</Text>
                  {queriedUser.stats.heelOfAGoal >=
                  overallStatsData.heelOfAGoal ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Innate Talent</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.innateTalent >
                  overallStatsData.innateTalent ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.innateTalent}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiAcrobatic />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.innateTalent}</Text>
                  {queriedUser.stats.innateTalent >=
                  overallStatsData.innateTalent ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">La Pulga</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.laPulga > overallStatsData.laPulga ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.laPulga}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiPathDistance />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.laPulga}</Text>
                  {queriedUser.stats.laPulga >= overallStatsData.laPulga ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">One In A Million</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.oneInAMillion >
                  overallStatsData.oneInAMillion ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.oneInAMillion}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiScorpionTail />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.oneInAMillion}</Text>
                  {queriedUser.stats.oneInAMillion >=
                  overallStatsData.oneInAMillion ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Last Minute Hero</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.lastMinuteHero >
                  overallStatsData.lastMinuteHero ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.lastMinuteHero}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<MdBalance />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.lastMinuteHero}</Text>
                  {queriedUser.stats.lastMinuteHero >=
                  overallStatsData.lastMinuteHero ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Final Word</Text>
              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.finalWord > overallStatsData.finalWord ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.finalWord}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiTrophyCup />}
                  fontSize="1.5rem"
                  bg="red.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.finalWord}</Text>
                  {queriedUser.stats.finalWord >= overallStatsData.finalWord ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>
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
            <Box>
              <Text textAlign="center">A Pleasure Doing Business</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.aPleasureDoingBusiness >
                  overallStatsData.aPleasureDoingBusiness ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.aPleasureDoingBusiness}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaHandsHelping />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.aPleasureDoingBusiness}</Text>
                  {queriedUser.stats.aPleasureDoingBusiness >=
                  overallStatsData.aPleasureDoingBusiness ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Food On The Table</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.foodOnTheTable >
                  overallStatsData.foodOnTheTable ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.foodOnTheTable}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaBreadSlice />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.foodOnTheTable}</Text>
                  {queriedUser.stats.foodOnTheTable >=
                  overallStatsData.foodOnTheTable ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Assists Maestro</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.assistsMaestro >
                  overallStatsData.assistsMaestro ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.assistsMaestro}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<ImMagicWand />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.assistsMaestro}</Text>
                  {queriedUser.stats.assistsMaestro >=
                  overallStatsData.assistsMaestro ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Industrial Provider</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.industrialProvider >
                  overallStatsData.industrialProvider ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.industrialProvider}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<ImTruck />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.industrialProvider}</Text>
                  {queriedUser.stats.industrialProvider >=
                  overallStatsData.industrialProvider ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Puppet Master</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.puppetMaster >
                  overallStatsData.puppetMaster ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.puppetMaster}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiMagicPalm />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.puppetMaster}</Text>
                  {queriedUser.stats.puppetMaster >=
                  overallStatsData.puppetMaster ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Omniscient</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.omniescient >
                  overallStatsData.omniescient ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.omniescient}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaRegEye />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.omniescient}</Text>
                  {queriedUser.stats.omniescient >=
                  overallStatsData.omniescient ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Cornerstone Presence</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.cornerstonePresence >
                  overallStatsData.cornerstonePresence ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.cornerstonePresence}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<LuFlagTriangleLeft />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.cornerstonePresence}</Text>
                  {queriedUser.stats.cornerstonePresence >=
                  overallStatsData.cornerstonePresence ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Marksman</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.marksman > overallStatsData.marksman ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.marksman}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<BiCross />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.marksman}</Text>
                  {queriedUser.stats.marksman >= overallStatsData.marksman ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Telescope Vision</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.telescopeVision >
                  overallStatsData.telescopeVision ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.telescopeVision}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GoTelescope />}
                  fontSize="1.5rem"
                  bg="teal.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.telescopeVision}</Text>
                  {queriedUser.stats.telescopeVision >=
                  overallStatsData.telescopeVision ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>
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
            <Box>
              <Text textAlign="center">The Giant</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theGiant > overallStatsData.theGiant ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theGiant}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiGiant />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theGiant}</Text>
                  {queriedUser.stats.theGiant >= overallStatsData.theGiant ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">One Man Army</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.oneManArmy >
                  overallStatsData.oneManArmy ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.oneManArmy}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiHumanPyramid />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.oneManArmy}</Text>
                  {queriedUser.stats.oneManArmy >=
                  overallStatsData.oneManArmy ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Monument</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theMonument >
                  overallStatsData.theMonument ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theMonument}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaMonument />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theMonument}</Text>
                  {queriedUser.stats.theMonument >=
                  overallStatsData.theMonument ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Path Breaker</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.thePathBreaker >
                  overallStatsData.thePathBreaker ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.thePathBreaker}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiMaze />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.thePathBreaker}</Text>
                  {queriedUser.stats.thePathBreaker >=
                  overallStatsData.thePathBreaker ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Mountain</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theMountain >
                  overallStatsData.theMountain ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theMountain}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiMountaintop />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theMountain}</Text>
                  {queriedUser.stats.theMountain >=
                  overallStatsData.theMountain ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">You Shall Not Pass</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.youShallNotPass >
                  overallStatsData.youShallNotPass ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.youShallNotPass}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiBrickWall />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.youShallNotPass}</Text>
                  {queriedUser.stats.youShallNotPass >=
                  overallStatsData.youShallNotPass ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Tackling Titan</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.tacklingTitan >
                  overallStatsData.tacklingTitan ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.tacklingTitan}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiColombianStatue />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.tacklingTitan}</Text>
                  {queriedUser.stats.tacklingTitan >=
                  overallStatsData.tacklingTitan ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Lead From The Back</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.leadFromTheBack >
                  overallStatsData.leadFromTheBack ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.leadFromTheBack}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiCaptainHatProfile />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.leadFromTheBack}</Text>
                  {queriedUser.stats.leadFromTheBack >=
                  overallStatsData.leadFromTheBack ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Saviour</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theSaviour >
                  overallStatsData.theSaviour ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theSaviour}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<LiaCrossSolid />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theSaviour}</Text>
                  {queriedUser.stats.theSaviour >=
                  overallStatsData.theSaviour ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Counter-Attacking Catalyst</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.counterAttackingCatalyst >
                  overallStatsData.counterAttackingCatalyst ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.counterAttackingCatalyst}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<PiArrowsCounterClockwiseDuotone />}
                  fontSize="1.5rem"
                  bg="blue.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.counterAttackingCatalyst}</Text>
                  {queriedUser.stats.counterAttackingCatalyst >=
                  overallStatsData.counterAttackingCatalyst ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>
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
            <Box>
              <Text textAlign="center">You Stop Here!</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.youStopHere >
                  overallStatsData.youStopHere ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.youStopHere}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<BsFillSignStopFill />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.youStopHere}</Text>
                  {queriedUser.stats.youStopHere >=
                  overallStatsData.youStopHere ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">I'm Not Kidding</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.imNotKidding >
                  overallStatsData.imNotKidding ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.imNotKidding}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiAngryEyes />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.imNotKidding}</Text>
                  {queriedUser.stats.imNotKidding >=
                  overallStatsData.imNotKidding ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Kraken</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theKraken > overallStatsData.theKraken ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theKraken}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<FaGitkraken />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theKraken}</Text>
                  {queriedUser.stats.theKraken >= overallStatsData.theKraken ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Guardian Angel</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.guardianAngel >
                  overallStatsData.guardianAngel ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.guardianAngel}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiAngelWings />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.guardianAngel}</Text>
                  {queriedUser.stats.guardianAngel >=
                  overallStatsData.guardianAngel ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Protector Of The Galaxy</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.protectorOfTheGalaxy >
                  overallStatsData.protectorOfTheGalaxy ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.protectorOfTheGalaxy}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiGalaxy />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.protectorOfTheGalaxy}</Text>
                  {queriedUser.stats.protectorOfTheGalaxy >=
                  overallStatsData.protectorOfTheGalaxy ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Living In A Fortress</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.livingInAFortress >
                  overallStatsData.livingInAFortress ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.livingInAFortress}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiLockedFortress />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.livingInAFortress}</Text>
                  {queriedUser.stats.livingInAFortress >=
                  overallStatsData.livingInAFortress ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">The Only Hero</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.theOnlyHero >
                  overallStatsData.theOnlyHero ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.theOnlyHero}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiGoalKeeper />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.theOnlyHero}</Text>
                  {queriedUser.stats.theOnlyHero >=
                  overallStatsData.theOnlyHero ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>

            <Box>
              <Text textAlign="center">Instant Reflexes</Text>

              <Box display="flex" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.instantReflexes >
                  overallStatsData.instantReflexes ? (
                    <MdKeyboardDoubleArrowUp color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowDown color="red" />
                  )}
                  <Text>{queriedUser.stats.instantReflexes}</Text>
                </Box>
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiFeline />}
                  fontSize="1.5rem"
                  bg="orange.200"
                />
                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.instantReflexes}</Text>
                  {queriedUser.stats.instantReflexes >=
                  overallStatsData.instantReflexes ? (
                    <MdKeyboardDoubleArrowDown color="green" />
                  ) : (
                    <MdKeyboardDoubleArrowUp color="red" />
                  )}
                </Box>
              </Box>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Box>
    </>
  );
}

export default PlayerComparison;
