import { useParams, useLocation,useNavigate } from "react-router-dom";
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
  Badge,
  WrapItem,
  Avatar,
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
import { db } from "../../config/firebase";
import { useContext, useState } from "react";
import Achievements from "../game/Achievements";
import { GiLaurelsTrophy } from "react-icons/gi";
import { BsFillHeartbreakFill, BsYoutube } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { SlUserFollow,SlUserFollowing,SlUserUnfollow } from "react-icons/sl";
import { RiUserFollowFill,RiUserUnfollowFill} from "react-icons/ri";
import ChartDataInterface from "../../utils/interfaces/chartDataInterface";
import { AuthContext } from "../../context/Auth";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BsClipboard2Data } from "react-icons/bs";
import playerTshirt from "../../assets/player_tshirt.png";
import { MdVerified } from "react-icons/md";
import { GiFootprint } from "react-icons/gi";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { useEffect } from "react";

function SearchUserProfile() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const {currentUser} = useContext(AuthContext)
  const [follow, setFollow] = useState<string>("");
  const [userFollowers, setUserFollowers] = useState<number>(0);
  const navigate = useNavigate()
  const [queriedUserChartsData, setQueriedUserChartsData] = useState<ChartDataInterface>({})
  // Access the queriedUser state from location.state

  const queriedUser = location.state.queriedUser;


  useEffect(()=>{
    getRelationshipStatus()
    getChartsDoc(queriedUser.id)
  },[])

  function handleFollowButtonClick() {

    console.log('checking if Follow = Unfollow')
    console.log({follow})
    console.log(follow==='Unfollow')
    if (follow === "Follow") {
      followUser();
    } else {
      unfollowUser();
    }
  }

  async function getChartsDoc(docId: string) {
    console.log("inside getStatsDoc function");
    const overallChartsDocRef = doc(db, "users", docId, "stats/chart-stats");
    const overallChartsDocSnap = await getDoc(overallChartsDocRef);

    console.log(overallChartsDocSnap);
    if (overallChartsDocSnap.exists()) {
      const userOverallChartsData = overallChartsDocSnap.data() as ChartDataInterface;
      setQueriedUserChartsData(userOverallChartsData)
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

      console.log('inside follow user')
      /* 
      if (currentUser.emailVerified === false) {
        console.log('user needs to verify his email first')
        return;
      } */
  
      const queriedUserDoc = doc(db, "users", queriedUser.id);
      const userSocialColRef = collection(queriedUserDoc, "social");

      const queriedUserSocialDocRef = doc(userSocialColRef, "social-relationships");
      const queriedUserSocialDocSnap = await getDoc(queriedUserSocialDocRef);

      if (!queriedUserSocialDocSnap.exists()) {
        await setDoc(queriedUserSocialDocRef, {
          followers: arrayUnion(currentUser.uid),
          following: [],
        });
        setFollow("Unfollow");
        setUserFollowers(userFollowers + 1);
      } else {
        const queriedUserSocialDocData = queriedUserSocialDocSnap.data();
        const queriedUserFollowers = queriedUserSocialDocData.followers;

        if (queriedUserFollowers.length <= 100) {
          await updateDoc(queriedUserSocialDocRef, {
            followers: arrayUnion(currentUser.uid),
          });

          const currentUserDoc = doc(db, "users", currentUser.uid);
          const currentUserSocialColRef = collection(currentUserDoc, "social");

          const currentUserSocialDocRef = doc(
            currentUserSocialColRef,
            "social-relationships"
          );

          await updateDoc(currentUserSocialDocRef, {
            following: arrayUnion(queriedUser.id),
          });

          setFollow("Unfollow");
          setUserFollowers(userFollowers + 1);
        } else {
          console.log("too many people following");
        }
      }
    } catch (error) {
      // Handle any errors that occur during the execution of the function
      console.error("Error in followUser():", error);
      // You can add specific error handling here based on the error type if needed.
    }
  }



  async function unfollowUser() {

    try {

      console.log('inside unfollow')
      const queriedUserDoc = doc(db, "users", queriedUser.id);
      const userSocialColRef = collection(queriedUserDoc, "social");

      const queriedUserSocialDocRef = doc(userSocialColRef, "social-relationships");
      const queriedUserSocialDocSnap = await getDoc(queriedUserSocialDocRef);

      console.log('working well')
      if (!queriedUserSocialDocSnap.exists()) {
        // If the followers feed document doesn't exist, there's nothing to unfollow
        console.log('doc does not exist')
        return;
      }  
      console.log('working well again')
      const queriedUserFollowersData = queriedUserSocialDocSnap.data();
      if (!queriedUserFollowersData.followers.includes(currentUser.uid)) {
        // If the current user is not in the users array, they're not following this user
        console.log('doc does not exist')
        return;
      }
  
      
      console.log('about to remove the user from doc')
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
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={0}
            p={2}
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

          <Box display='grid' gap={2}>
            <WrapItem display="flex" justifyContent="center">
              <Avatar size="2xl" name={`${queriedUser.firstName} ${queriedUser.lastName}`} src={queriedUser.profileImage} />{" "}
            </WrapItem>
            <Button
              rightIcon={follow ==="Follow"? (<RiUserFollowFill />) : (<RiUserUnfollowFill />)}
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
          gap={2}
        >
          <Text textAlign="center" fontWeight="bold" p={1} fontSize="2rem">
            {`${queriedUser.firstName} ${queriedUser.lastName}`}
          </Text>
          {queriedUser.verified && <MdVerified size="2rem" />}
        </WrapItem>

        <Divider borderWidth="1px" />

        <Box display="flex" justifyContent="space-evenly" p={2}>
          <ButtonGroup>
            <Button
              rightIcon={<BsClipboard2Data />}
              colorScheme="gray"
              variant="outline"
              fontSize="smaller"
              onClick={() => navigate("", { state: { queriedUser } })}
            >
              Overview
            </Button>
            <Button
              rightIcon={<PiTelevisionSimpleBold />}
              colorScheme="gray"
              variant="outline"
              fontSize="smaller"
              onClick={() => navigate("matches", { state: { queriedUser } })}
            >
              Matches
            </Button>

            <Button
              rightIcon={<GiLaurelsTrophy />}
              colorScheme="gray"
              variant="outline"
              fontSize="smaller"
              onClick={() => navigate("player-achievements", { state: { queriedUser,overallStatsData: queriedUser.stats  } })}
            >
              Achievements
            </Button>
          </ButtonGroup>
        </Box>
        <Divider borderWidth="1px" />

        <Box display="flex" justifyContent="space-evenly" p={2}>
          <FaInstagramSquare fontSize="1.5rem" />
          <FaFacebook fontSize="1.5rem" />
          <BsYoutube fontSize="1.5rem" />
        </Box>

        <Divider borderWidth="1px" />

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
            element={<Achievements overallStatsData={queriedUser.stats} queriedUser={queriedUser} overallChartsData={queriedUserChartsData}  />}
          />

        </Routes>
      </Container>
    </>
  );
}

export default SearchUserProfile;
