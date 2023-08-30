import { useParams, useLocation, useNavigate } from "react-router-dom";
import SearchUserProfileOverall from "./SearchUserProfileOverall";
import { Routes, Route } from "react-router-dom";
import SearchUserProfileMatches from "./SearchUserProfileMatches";
import {
  Button,
  ButtonGroup,
  Text,
  Box,
  Container,
  Divider,
  Tag,
  WrapItem,
  Avatar,
  IconButton,
  Tooltip,
  useToast
} from "@chakra-ui/react";
import {
  doc,
  getDoc,
  collection,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import getCardBackgroundColor from "../../utils/colorFunctions/getCardBackgroundColor";
import getCardTextColor from "../../utils/colorFunctions/getCardTextColor";
import getTagTextColor from "../../utils/colorFunctions/getTagBackground";
import PlayerComparison from "./PlayerComparison";
import UserRating from "./UserRating";
import { db } from "../../config/firebase";
import { useContext, useState } from "react";
import Achievements from "../game/Achievements";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import ChartDataInterface from "../../utils/interfaces/chartDataInterface";
import { AuthContext } from "../../context/Auth";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import playerTshirt from "../../assets/player_tshirt.png";
import { MdVerified } from "react-icons/md";
import { GiFootprint } from "react-icons/gi";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { useEffect } from "react";
import { MdOutlineRateReview } from "react-icons/md";
import { AiOutlineLineChart } from "react-icons/ai";
import { GoGitCompare } from "react-icons/go";
import { RiRunFill } from "react-icons/ri";
import { OverallStatsContext } from "../../context/OverallStats";
import OverallStats from "../statistics/OverallStats";

function SearchUserProfile() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const { currentUser } = useContext(AuthContext);
  const [follow, setFollow] = useState<string>("");
  const [userFollowers, setUserFollowers] = useState<number>(0);
  const navigate = useNavigate();
  const [queriedUserChartsData, setQueriedUserChartsData] =
    useState<ChartDataInterface>({});
  // Access the queriedUser state from location.state
  const [queriedUserReviewsStats, setQueriedUserReviewsStats] = useState<any>(
    {}
  );

  const toast=useToast()
  const {setUserIndividualFollowers,setUserIndividualFollowingData} = useContext(OverallStatsContext)
  const queriedUser = location.state.queriedUser;


  useEffect(() => {
    getRelationshipStatus();
    getChartsDoc(queriedUser.id);
    getReviewsStatsDoc(queriedUser.id);
  }, []);

  function handleFollowButtonClick() {
    if (follow === "Follow") {
      followUser();
    } else {
      unfollowUser();
    }
  }

  function handleNoProfile(){

    toast({
      title: `The player didn't link his account.`,
      status: "info",
      isClosable: true,
      position: "top",
    });

  }

  async function getReviewsStatsDoc(docId: string) {
    const reviewStatsDocRef = doc(db, "users", docId, "stats/review-stats");
    const reviewStatsDocSnap = await getDoc(reviewStatsDocRef);

    if (reviewStatsDocSnap.exists()) {
      const userReviewStatsData =
        reviewStatsDocSnap.data() as ChartDataInterface;
      setQueriedUserReviewsStats(userReviewStatsData);
    }
  }

  async function getChartsDoc(docId: string) {
    const overallChartsDocRef = doc(db, "users", docId, "stats/chart-stats");
    const overallChartsDocSnap = await getDoc(overallChartsDocRef);

    if (overallChartsDocSnap.exists()) {
      const userOverallChartsData =
        overallChartsDocSnap.data() as ChartDataInterface;
      setQueriedUserChartsData(userOverallChartsData);
    }
  }

  async function getRelationshipStatus() {
    try {
      const socialDocRef = doc(
        db,
        "users",
        queriedUser.id,
        "social/social-relationships"
      );

      const socialDocRefSnapshot = await getDoc(socialDocRef);

      if (socialDocRefSnapshot.exists()) {
        const data = socialDocRefSnapshot.data();
        const followers = data.followers || [];
        setUserFollowers(followers.length);
        if (followers.includes(currentUser.uid)) {
          setFollow("Unfollow");
        } else {
          setFollow("Follow");
        }
      } else {
        setFollow("Follow");
      }
    } catch (error) {
      // Handle the error here
      console.error("Error getting relationship status:", error);
      // You can also show a user-friendly error message to the user
      // For example: setErrorState("Failed to get relationship status. Please try again later.");
    }
  }

  async function followUser() {
    try {
      /* 
      if (currentUser.emailVerified === false) {
        console.log('user needs to verify his email first')
        return;
      } */

      const queriedUserDoc = doc(db, "users", queriedUser.id);
      const userSocialColRef = collection(queriedUserDoc, "social");

      const queriedUserSocialDocRef = doc(
        userSocialColRef,
        "social-relationships"
      );

      const queriedUserSocialDocSnap = await getDoc(queriedUserSocialDocRef);

      if (!queriedUserSocialDocSnap.exists()) {
        await setDoc(queriedUserSocialDocRef, {
          followers: arrayUnion(currentUser.uid),
          following: [],
        });

      } else {
        const queriedUserSocialDocData = queriedUserSocialDocSnap.data();
        const queriedUserFollowers = queriedUserSocialDocData.followers;

        if (queriedUserFollowers.length <= 100) {
          await updateDoc(queriedUserSocialDocRef, {
            followers: arrayUnion(currentUser.uid),
          });
        } else {
          console.log("too many people following");
        }
      }

      const currentUserDoc = doc(db, "users", currentUser.uid);
      const currentUserSocialColRef = collection(currentUserDoc, "social");

      const currentUserSocialDocRef = doc(
        currentUserSocialColRef,
        "social-relationships"
      );

      const currentUserSocialDocSnap = await getDoc(currentUserSocialDocRef);

      if (!currentUserSocialDocSnap.exists()) {
        await setDoc(currentUserSocialDocRef, {
          followers: [],
          following: arrayUnion(queriedUser.id),
        });
      } else {
        await updateDoc(currentUserSocialDocRef, {
          following: arrayUnion(queriedUser.id),
        });
        console.log('updating the doc.')
      }

      setUserFollowers(userFollowers + 1);
      setFollow("Unfollow");
      setUserIndividualFollowingData([])
      setUserIndividualFollowers([])

    } catch (error) {
      // Handle any errors that occur during the execution of the function
      console.error("Error in followUser():", error);
      // You can add specific error handling here based on the error type if needed.
    }
  }

  async function unfollowUser() {
    try {
      const queriedUserDoc = doc(db, "users", queriedUser.id);
      const userSocialColRef = collection(queriedUserDoc, "social");

      const queriedUserSocialDocRef = doc(
        userSocialColRef,
        "social-relationships"
      );
      const queriedUserSocialDocSnap = await getDoc(queriedUserSocialDocRef);

      if (!queriedUserSocialDocSnap.exists()) {
        // If the followers feed document doesn't exist, there's nothing to unfollow
        return;
      }
      const queriedUserFollowersData = queriedUserSocialDocSnap.data();
      if (!queriedUserFollowersData.followers.includes(currentUser.uid)) {
        // If the current user is not in the users array, they're not following this user
        return;
      }

      await updateDoc(queriedUserSocialDocRef, {
        followers: arrayRemove(currentUser.uid),
      });

      setFollow("Follow");
      setUserFollowers(userFollowers - 1);

      const currentUserDoc = doc(db, "users", currentUser.uid);
      const currentUserSocialColRef = collection(currentUserDoc, "social");

      const currentUserSocialDocRef = doc(
        currentUserSocialColRef,
        "social-relationships"
      );

      await updateDoc(currentUserSocialDocRef, {
        following: arrayRemove(queriedUser.id),
      });

      setUserIndividualFollowingData([])
      setUserIndividualFollowers([])
    } catch (error) {
      // Handle any errors that occur during the execution of the function
      console.error("Error in unfollowUser():", error);
      // You can add specific error handling here based on the error type if needed.
    }
  }



  return (
    <>
      <Container pb="50px">
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="space-around"
          w="100%"
          borderRadius="5px"
          p={1}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={0}
            p={2}
            borderRadius="5px"
          >
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

            {queriedUser.preferredPosition !== "" ? (
              <Tag
                fontSize="1rem"
                fontWeight="bold"
                bg="black"
                sx={{
                  color: getTagTextColor(queriedUser.preferredPosition),
                }}
              >
                {queriedUser.preferredPosition}
              </Tag>
            ) : (
              <Tag
                fontSize="1rem"
                fontWeight="bold"
                bg="black"
                sx={{
                  color: getTagTextColor(queriedUser.preferredPosition),
                }}
              >
                Bench
              </Tag>
            )}

            {queriedUser.country.country !== "" ? (
              <img
                src={`https://flagsapi.com/${queriedUser.country.countryCode}/flat/32.png`}
                alt="Country Flag"
              />
            ) : (
              <Box w="2.5rem" bg="black" height="1.5rem" m={2}></Box>
            )}

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
          </Box>

          <Box display="grid" gap={2}
          
          >
            <WrapItem display="flex" justifyContent="center">
              <Avatar
                size="2xl"
                name={`${queriedUser.firstName} ${queriedUser.lastName}`}
                src={queriedUser.profileImage}
                loading="lazy"
              />{" "}
            </WrapItem>
            <Button
              rightIcon={
                follow === "Follow" ? (
                  <RiUserFollowFill />
                ) : (
                  <RiUserUnfollowFill />
                )
              }
              colorScheme="gray"
              variant="outline"
              fontSize="smaller"
              onClick={handleFollowButtonClick}
            >
              {follow}
            </Button>
          </Box>
        </Box>

        <WrapItem
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <Text textAlign="center" fontWeight="bold" p={1} fontSize="2rem">
            {`${queriedUser.firstName} ${queriedUser.lastName}`}
          </Text>
          {queriedUser.verified && <MdVerified size="2rem" />}
        </WrapItem>

        <Divider borderWidth="1px" />

        <Box display="flex" justifyContent="space-evenly" p={2}>
          {queriedUser.instagramProfile !== "" ? (
            <a href={queriedUser.instagramProfile} target="_blank">
<FaInstagramSquare fontSize="1.5rem" onClick={handleNoProfile} />

            </a>
          ) : (
            <FaInstagramSquare fontSize="1.5rem" onClick={handleNoProfile} />
          )}

          {queriedUser.facebookProfile !== "" ? (
            <a href={queriedUser.facebookProfile} target="_blank">
<FaFacebook fontSize="1.5rem" onClick={handleNoProfile} />

            </a>
          ) : (
            <FaFacebook fontSize="1.5rem" onClick={handleNoProfile} />
          )}

          {queriedUser.youtubeChannel !== "" ? (
            <a href={queriedUser.youtubeChannel} target="_blank">
              <BsYoutube fontSize="1.5rem" onClick={handleNoProfile} />
            </a>
          ) : (
            <BsYoutube fontSize="1.5rem" onClick={handleNoProfile} />
          )}
        </Box>

        <Divider borderWidth="1px" />

        <Box display="flex" justifyContent="space-around" p={2} gap={2}>
          <Tooltip label="Overview" aria-label="Overview">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Overview"
              icon={<RiRunFill />}
              onClick={() => navigate("", { state: { queriedUser } })}
              variant="solid"
            />
          </Tooltip>
          <Tooltip label="Matches" aria-label="Matches">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Matches"
              icon={<PiTelevisionSimpleBold />}
              onClick={() => navigate("matches", { state: { queriedUser } })}
              variant="solid"
            />
          </Tooltip>
          <Tooltip label="Achievements" aria-label="Achievements">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Achievements"
              icon={<GiLaurelsTrophy />}
              onClick={() =>
                navigate("player-achievements", {
                  state: { queriedUser, overallStatsData: queriedUser.stats },
                })
              }
              variant="solid"
            />
          </Tooltip>

          <Tooltip label="Reviews" aria-label="Reviews">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Reviews"
              icon={<MdOutlineRateReview />}
              onClick={() => navigate("reviews", { state: { queriedUser } })}
              variant="solid"
            />
          </Tooltip>
          <Tooltip label="Statistics" aria-label="Statistics">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Statistics"
              icon={<AiOutlineLineChart />}
              onClick={() => navigate("charts", { state: { queriedUser } })}
              variant="solid"
            />
          </Tooltip>
          <Tooltip label="Comparison" aria-label="Comparison">
            <IconButton
              bg="black"
              colorScheme="black"
              color="white"
              aria-label="Comparison"
              icon={<GoGitCompare />}
              onClick={() =>
                navigate("comparison", {
                  state: { queriedUser },
                })
              }
              variant="solid"
            />
          </Tooltip>
        </Box>

        <Divider borderWidth="1px" />
        {/*
        <Box display="flex" justifyContent="center" p={1}>
           
          <PlayerComparisonModal queriedUser={queriedUser} />
 
          </Box>
         */}
        <Routes>
          <Route
            path=""
            element={<SearchUserProfileOverall queriedUser={queriedUser} />}
          />

          <Route
            path="matches"
            element={<SearchUserProfileMatches queriedUser={queriedUser} />}
          />

          <Route
            path="player-achievements"
            element={
              <Achievements
                overallStatsData={queriedUser.stats}
                queriedUser={queriedUser}
                overallChartsData={queriedUserChartsData}
              />
            }
          />

          <Route
            path="reviews"
            element={
              <UserRating
                queriedUserId={queriedUser.id}
                queriedUserReviewsStats={queriedUserReviewsStats}
              />
            }
          />
          <Route
            path="charts"
            element={
              <OverallStats
                chartsData={queriedUserChartsData}
                userCheck="queriedUser"
              />
            }
          />

          <Route
            path="comparison"
            element={<PlayerComparison queriedUser={queriedUser} />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default SearchUserProfile;
