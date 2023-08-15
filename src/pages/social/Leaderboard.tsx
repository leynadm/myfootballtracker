import {
  Button,
  Text,
  Stack,
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
  GridItem,
  Avatar,
} from "@chakra-ui/react";
import { OverallStatsContext } from "../../context/OverallStats";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { FaHandPeace } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import { GiSoccerField } from "react-icons/gi";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { LeaderboardUserData } from "../../utils/interfaces/LeaderboardUserData";
function Leaderboard() {
  const { currentUser } = useContext(AuthContext);
  const {userIndividualFollowingData,setUserIndividualFollowingData,userIndividualFollowers,setUserIndividualFollowers} = useContext(OverallStatsContext)
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  /* 
  const [userIndividualFollowingData, setUserIndividualFollowingData] =
    useState<LeaderboardUserData[]>([]);
  const [userIndividualFollowers, setUserIndividualFollowers] = useState([]);
 */
  useEffect(() => {
    console.log(userIndividualFollowers.length)
    console.log(userIndividualFollowingData.length)
    if (userIndividualFollowers.length === 0) {
      getFollowing();
    }    
  }, []);

  useEffect(() => {
    if(userIndividualFollowingData.length===0){
      fetchUserIndividualFollowingData();
    }
  }, [userIndividualFollowers]);

  const resultsPerPage = 5;

  async function getFollowing() {
    try {
      const currentUserDoc = doc(db, "users", currentUser.uid);
      const currentUserSocialColRef = collection(currentUserDoc, "social");

      const currentUserSocialDocRef = doc(
        currentUserSocialColRef,
        "social-relationships"
      );

      const currentUserSocialDocSnapshot = await getDoc(
        currentUserSocialDocRef
      );

      if (currentUserSocialDocSnapshot.exists()) {
        const data = currentUserSocialDocSnapshot.data();
        const following = data.following || [];
        console.log("users that Im following are:");
        console.log({ following });
        setUserIndividualFollowers(following);
      }
    } catch (error) {
      // Handle the error here
      console.error("Error fetching profile followers:", error);
      // You can also show a user-friendly error message to the user
      // For example: setErrorState("Failed to fetch followers data. Please try again later.");
    }
  }

  async function fetchUserIndividualFollowingData() {
    try {
      setLoading(true);
      const startIdx = (currentPage - 1) * resultsPerPage;
      const endIdx = startIdx + resultsPerPage;

      const tempData = [...userIndividualFollowingData]; // Copy the existing array

      for (const docId of userIndividualFollowers.slice(startIdx, endIdx)) {
        try {
          const documentData = await getUserDocumentById(docId);
          if (documentData) {
            tempData.push(documentData);
            
          }
        } catch (error) {
          // Handle the error for an individual user document fetch
          console.error(
            `Error fetching data for user with ID ${docId}:`,
            error
          );
          // You can choose to continue with the loop and skip the problematic user
          // or handle it in a way that fits your specific use case.
        }
      }
      tempData.sort((a, b) => b.matchesPlayed - a.matchesPlayed);

      setUserIndividualFollowingData(tempData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Handle any other unexpected errors that might occur during the function execution
      console.error("An unexpected error occurred:", error);
      // You can show a user-friendly error message or take appropriate actions.
    }
  }

  async function getUserDocumentById(documentId: string) {
    try {
      const userDocRef = doc(db, "users", documentId); // Replace with your collection name

      const currentUserSocialColRef = collection(userDocRef, "stats");
      const currentUserStatsDocRef = doc(
        currentUserSocialColRef,
        "overall-stats"
      );
      const userDocRefSnapshot = await getDoc(userDocRef);
      const currentUserStatDocSnapshot = await getDoc(currentUserStatsDocRef);

      if (userDocRefSnapshot.exists()) {
        const userDocumentData = userDocRefSnapshot.data();
        const currentUserStatData = currentUserStatDocSnapshot.data();

        // Combine user document data, current user stat data, and ID
        return {
          ...userDocumentData,
          ...currentUserStatData,
          id: userDocRefSnapshot.id,
        };
      }

      return null;
    } catch (error) {
      // Handle the error here
      console.error("Error fetching user document by ID:", error);
      // You can also show a user-friendly error message to the user
      // For example: setErrorState("Failed to fetch user data. Please try again later.");
      throw error; // Re-throw the error to propagate it to the calling function if needed.
    }
  }

  return (
    <>
      <Container gap={1}>
        <TableContainer p={0} m={0}>
          <Table variant="striped" colorScheme="blackAlpha" width="100%">
            <TableCaption>Leaderboard for followed users</TableCaption>
            <Thead>
              <Tr>
                <Th m={1} p={2} width="5%" textAlign="center">
                  #
                </Th>
                <Th m={1} p={2} width="20%" textAlign="center">
                  User
                </Th>
                <Th m={1} p={2} width="15%" textAlign="center">
                  Pos.
                </Th>
                <Th m={1} p={2} width="15%" textAlign="center">
                  Pld.
                </Th>
                <Th m={1} p={2} width="15%" textAlign="center">
                  Won
                </Th>
                <Th m={1} p={2} width="15%" textAlign="center">
                  Perf.
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {userIndividualFollowingData.map((user, index) => (
                <Tr textAlign="center">
                  <Td m={0} p={1} textAlign="center" whiteSpace="normal">
                    #{index+1}
                  </Td>
                  <Td m={0} p={1} textAlign="center">
                    <Box>
                      {
                        <Avatar
                          size={"sm"}
                          src={
                            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                          }
                        />
                      }
                      <Text></Text>
                    </Box>
                  </Td>
                  <Td m={0} p={1} textAlign="center">
                    {user.preferredPosition !== "" ? (
                      <Badge
                        borderRadius="5px"
                        fontSize="0.75rem"
                        fontWeight="bold"
                        bg="black"
                        color="white"
                        m={1}
                        width="100%"
                      >
                        {user.preferredPosition}
                      </Badge>
                    ) : (
                      <Badge
                        borderRadius="5px"
                        fontSize="0.75rem"
                        fontWeight="bold"
                        bg="black"
                        color="white"
                        m={1}
                        width="100%"
                      >
                        Bench
                      </Badge>
                    )}
                  </Td>

                  <Td m={0} p={1} textAlign="center">
                    <Box
                      display="flex"
                      gap={2}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <GiSoccerField />
                      {user.matchesPlayed}
                    </Box>
                  </Td>

                  <Td m={0} p={1} textAlign="center">
                    <Box
                      display="flex"
                      gap={2}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <FaHandPeace />
                      {user.wins}
                    </Box>
                  </Td>

                  <Td m={0} p={1} textAlign="center">
                    <Box
                      display="flex"
                      gap={2}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <BsStarHalf />
                      {`${
                        isNaN(user.matchPerformance / user.matchesPlayed)
                          ? "0.0"
                          : (
                              user.matchPerformance / user.matchesPlayed
                            ).toFixed(1)
                      }`}
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Leaderboard;
