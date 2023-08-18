import { useEffect } from "react";
import User from "../../utils/interfaces/User";
import UserProfileSearch from "../../utils/interfaces/UserProfileSearch";
import { Routes, Route } from "react-router-dom";
import SearchUserProfile from "./SearchUserProfile";
import playerTshirt from "../../assets/player_tshirt.png";
import "../../styles/CardText.css";
import {
  Box,
  Text,
  Container,
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
  Card,
  CardHeader,
  CardBody,
  GridItem,
  CardFooter,
  Heading,
  Image,
  Grid,
  Avatar
} from "@chakra-ui/react";
import { BsStarHalf } from "react-icons/bs";
import { GiFootprint } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { GiWhistle } from "react-icons/gi";
import { FaHandPeace } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
interface ParentProps {
  usersFound: UserProfileSearch[];
}

function UsersSearchResults({ usersFound }: ParentProps) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(usersFound);
  }, []);
  return (
    <>
      <Container pb='50px'>
        {usersFound.map((user: UserProfileSearch, index: number) => (
          <Box
            key={index}
            onClick={() =>
              navigate(`u/${user.id}`, { state: { queriedUser: user } })
            }
          >
            <Card
              maxW="md"
/* 
              bg="radial-gradient(circle, rgba(192,192,192,1) 0%, rgba(171,144,144,1) 100%)"
    */
   bg="#eeeeee"
              m={4}
              mt={0}
              p={1}
              boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
            >
              <CardHeader p={1}>
                <Grid templateRows="2fr 8fr" templateColumns="2fr 8fr" gap={4}>
                  <GridItem rowSpan={2} colSpan={1} textAlign="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap={0}
                      p={2}
                    >
                      <WrapItem alignItems="center" gap={1}>
                        {user.shirtNumber !== "" ? (
                          <Text fontSize="1.25rem" fontWeight="bold">
                            {user.shirtNumber}
                          </Text>
                        ) : (
                          <Text fontSize="1.25rem">0</Text>
                        )}

                        <img src={playerTshirt} alt="tshirt" width="15rem" />
                      </WrapItem>

                      {user.preferredPosition !== "" ? (
                        <Badge
                          borderRadius="5px"
                          fontSize="1rem"
                          fontWeight="bold"
                          bg="black"
                          color="white"
                          m={1}
                        >
                          {user.preferredPosition}
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

                      {user.country.country !== "" ? (
                        <img
                          src={`https://flagsapi.com/${user.country.countryCode}/flat/32.png`}
                          alt="Country Flag"
                        />
                      ) : (
                        <Box w="2.5rem" bg="black" height="1.5rem" m={2}></Box>
                      )}

                      {user.preferredFoot === "right" && (
                        <GiFootprint
                          fontSize="2rem"
                          style={{
                            transform: "rotateY(180deg)",
                          }}
                        />
                      )}

                      {user.preferredFoot === "left" && (
                        <GiFootprint fontSize="2rem" />
                      )}

                      {(user.preferredFoot === "both" ||
                        user.preferredFoot === "") && (
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
                    </Box>
                  </GridItem>
                  <GridItem rowSpan={2} colSpan={1} justifyContent="center" alignContent="center" display="flex">
                  
    <Avatar size='2xl' name={`${user.firstName} ${user.lastName}`} src={user.profileImage} />{' '}
  
                  </GridItem>
                </Grid>
              </CardHeader>

              <CardBody p={1} className="shiny">
                <Divider />

                <Text textAlign="center" fontSize="1.5rem" fontWeight="bold" 
                              bg="radial-gradient(circle, rgba(192,192,192,1) 0%, rgba(171,144,144,1) 100%)"
                >
                  { `${user.firstName} ${user.lastName}`}
                </Text>
                <Divider />
                <Grid
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(2, 1fr)"
                  gap={1}
                  justifyContent="left"
                  alignItems="center"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Matches
                      <br />
                      Played:
                    </Text>
                    <GiSoccerField fontSize="3rem" />
                    <Text>{user.stats.matchesPlayed}</Text>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Matches
                      <br />
                      Won:
                    </Text>
                    <FaHandPeace fontSize="2rem" />
                    <Text>{user.stats.wins}</Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Goals
                      <br />
                      Scored:
                    </Text>
                    <PiSoccerBallFill fontSize="2rem" />
                    <Text>{user.stats.goalsScored}</Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Assists
                      <br />
                      Provided:
                    </Text>
                    <GiBarefoot fontSize="2rem" />
                    <Text>{user.stats.assistsProvided}</Text>
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Fouls
                      <br />
                      Caused:
                    </Text>
                    <GiWhistle fontSize="2rem" />
                    <Text>{user.stats.foulsCommited}</Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    justifyContent="space-evenly"
                  >
                    <Text fontSize="small">
                      Avg. Match
                      <br />
                      Perf.:
                    </Text>
                    <BsStarHalf fontSize="2rem" />
                    <Text>
                      {user.stats && user.stats.matchesPlayed > 0
                        ? (
                            user.stats.matchPerformance /
                            user.stats.matchesPlayed
                          ).toFixed(1)
                        : "0"}
                    </Text>
                  </Box>
                </Grid>
              </CardBody>

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
                p={1}
              >
                <Text fontSize="smaller">Last Match: 30/01/2020</Text>
              </CardFooter>
            </Card>
            <Divider borderWidth="2px" />
          </Box>
        ))}
      </Container>
    </>
  );
}

export default UsersSearchResults;
