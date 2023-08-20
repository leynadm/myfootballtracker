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
  Badge
} from "@chakra-ui/react";
import { GiFootprint } from "react-icons/gi";
import playerTshirt from "../../assets/player_tshirt.png"
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

import { useContext, useEffect } from "react";
import { OverallStatsContext } from "../../context/OverallStats";
import { AuthContext } from "../../context/Auth";
interface Props{
    queriedUser:any
}


function PlayerComparisonModal({queriedUser}:Props) {
  
    const {overallStatsData} = useContext(OverallStatsContext)
  const {currentUSer, currentUserData} = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap={3}>
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
            </Box>

            <Box
              justifyContent="space-between"
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
                    (overallStatsData.draws /
                      overallStatsData.matchesPlayed) *
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
            >
              <Text>Goals Scored</Text>
              <Box display="flex" w="100%" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.goalsScored >
                  overallStatsData.goalsScored ? (
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
              })`}</Text>
                </Box>

                <Box display="flex" alignItems="center" gap={1}>
                  <Text>{overallStatsData.goalsScored}</Text>
                  <Text>
                  {`(GPM ${
                isNaN(
                  overallStatsData.goalsScored /
                    overallStatsData.matchesPlayed
                )
                  ? "0.0"
                  : (
                      overallStatsData.goalsScored /
                      overallStatsData.matchesPlayed
                    ).toFixed(1)
              })`}</Text>
                  {queriedUser.stats.goalsScored >
                  overallStatsData.goalsScored ? (
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
            >
              <Text>Goal Contributions</Text>
              <Box display="flex" w="100%" justifyContent="space-around">
                <Box display="flex" alignItems="center" gap={1}>
                  {queriedUser.stats.goalsScored +
                    queriedUser.stats.assistsProvided >
                  overallStatsData.goalsScored +
                    overallStatsData.assistsProvided ? (
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
                    {overallStatsData.goalsScored +
                      overallStatsData.assistsProvided}
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
                  {queriedUser.stats.goalsScored +
                    queriedUser.stats.assistsProvided >
                  overallStatsData.goalsScored +
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
              bg="lightgray"
              borderRadius="25px"
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PlayerComparisonModal;
