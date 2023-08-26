import { useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  where,
  startAfter,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/Auth";
import ReviewCard from "../../components/ReviewCard";
import RatingDataToSubmit from "../../utils/interfaces/ratingDataToSubmit";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Text,
  Button,
} from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi";
import { Box } from "@chakra-ui/react";
import UserRatingForm from "../../components/UserRatingForm";
import { OverallStatsContext } from "../../context/OverallStats";
function Reviews() {
  const { currentUser } = useContext(AuthContext);
  const [pendingReviews, setPendingReviews] = useState<RatingDataToSubmit[]>(
    []
  ); // Update the state type
  const [previousReviews, setPreviousReviews] = useState<RatingDataToSubmit[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [checkPreviousReview, setCheckPreviousReview] = useState(false);
  const [previousReviewDate, setPreviousReviewData] = useState("");
  const { reviewsData } = useContext(OverallStatsContext);
  const [refreshReviewsCounter, setRefreshReviewsCounter] = useState(0);
  const [loadPendingReviewsBtnStatus, setLoadPendingReviewsBtnStatus] =
    useState(false);
  const [loadPrevReviewsBtnStatus, setLoadPrevReviewsBtnStatus] =
    useState(false);
  const [latestPrevDoc, setLatestPrevDoc] = useState<any>(null);
  const [latestPendingDoc, setLatestPendingDoc] = useState<any>(null);
  const triggerReviewsComponentRefresh = () => {
    setRefreshReviewsCounter((prevCounter) => prevCounter + 1);
    setPendingReviews([])
    setPendingReviews([])
  };

  useEffect(() => {

    const fetchData = async () => {
      await getPendingReviews();
      await getHistoryReviews();
      setLoading(false);
    };

    fetchData();

  }, [loading, refreshReviewsCounter]);

  useEffect(()=>{
    if (reviewsData.usersThatWereReviewed.length > 0) {
      reviewsData.usersThatWereReviewed.forEach((obj) => {
        const previousReviewId = obj.userId;

        if (previousReviewId === currentUser.uid) {
          setCheckPreviousReview(true);
          const dateObject = obj.createdAt.toDate();

          // Format the date as a human-readable string
          const formattedDate = dateObject.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          // Calculate the difference in milliseconds between current date and dateObject
          const currentDate = new Date();
          const timeDifference = currentDate - dateObject;

          const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
          setPreviousReviewData(formattedDate);

          if (daysDifference >= 90) {
            setCheckPreviousReview(false);
          }
        }
      });
    }
  },[])

  async function getHistoryReviews() {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      const userReviewsColRef = collection(userDocRef, "reviews");

      // Query the subcollection documents where reviewStats is "pending"
      let q;
      if (latestPrevDoc) {
        q = query(
          userReviewsColRef,
          startAfter(latestPrevDoc),
          where("reviewStatus", "==", "approved"),
          limit(1)
        );
      } else {
        q = query(
          userReviewsColRef,
          where("reviewStatus", "==", "approved"),
          limit(1)
        );
      }

      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        setLatestPrevDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      if (querySnapshot.empty) {
        setLoadPrevReviewsBtnStatus(true);
      }

      // Convert the querySnapshot to an array of document data
      const previousReviewsData = querySnapshot.docs.map((doc) => doc.data());

      if (latestPrevDoc) {
        setPreviousReviews((prevReviewsData) => [
          ...prevReviewsData,
          ...previousReviewsData,
        ]);
      } else {
        setPreviousReviews(previousReviewsData);
      }
    } catch (error) {
      console.error("Error getting pending reviews:", error);
    }
  }

  async function getPendingReviews() {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      const userReviewsColRef = collection(userDocRef, "reviews");

      // Query the subcollection documents where reviewStats is "pending"

      let q;
      if (latestPendingDoc) {
        q = query(
          userReviewsColRef,
          startAfter(latestPendingDoc),
          where("reviewStatus", "==", "pending"),
          limit(1)
        );
      } else {
        q = query(
          userReviewsColRef,
          where("reviewStatus", "==", "pending"),
          limit(1)
        );
      }
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length > 0) {
        setLatestPendingDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }

      // Convert the querySnapshot to an array of document data
      const pendingReviewsData = querySnapshot.docs.map((doc) => doc.data());

      if (latestPendingDoc) {
        setPendingReviews((prevPendingReviewsData) => [
          ...prevPendingReviewsData,
          ...pendingReviewsData,
        ]);
      } else {
        setPendingReviews(pendingReviewsData);
      }

      if (querySnapshot.empty) {
        setLoadPendingReviewsBtnStatus(true);
      }
    } catch (error) {
      console.error("Error getting pending reviews:", error);
    }
  }

  return (
    <>
      <Container>
        <Tabs
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={0}
          m={0}
        >
          <TabList>
            <Tab>Pending</Tab>
            <Tab>Approved</Tab>
            <Tab>Self-Review</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0} m={0}>
              {pendingReviews.length === 0 && loading === false ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pt="20px"
                >
                  <Text>You have no pending reviews.</Text>
                </Box>
              ) : (
                <Box
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                  gap={3}
                  pb="50px"
                >
                  {pendingReviews.map((review, index) => (
                    <Box key={index} p={0} m={0}>
                      <ReviewCard
                        review={review}
                        triggerReviewsComponentRefresh={
                          triggerReviewsComponentRefresh
                        }
                      />
                    </Box>
                  ))}

                  {pendingReviews.length !== 0 && loading === false && (
                    <Button
                      isDisabled={loadPendingReviewsBtnStatus}
                      rightIcon={<HiUpload />}
                      colorScheme="blue"
                      variant="solid"
                      m={3}
                      type="submit"
                      onClick={getPendingReviews}
                    >
                      Load More Reviews
                    </Button>
                  )}
                </Box>
              )}
            </TabPanel>
            <TabPanel p={0} m={0}>
              {previousReviews.length === 0 && loading === false ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  pt="20px"
                >
                  <Text>You didn't approve any reviews yet.</Text>
                </Box>
              ) : (
                <Box
                  justifyContent="center"
                  display="flex"
                  flexDirection="column"
                  gap={3}
                  pb="50px"
                >
                  {previousReviews.map((review, index) => (
                    <Box key={index}>
                      <ReviewCard
                        review={review}
                        triggerReviewsComponentRefresh={
                          triggerReviewsComponentRefresh
                        }
                      />
                    </Box>
                  ))}

                  {previousReviews.length !== 0 && loading === false && (
                    <Button
                      isDisabled={loadPrevReviewsBtnStatus}
                      rightIcon={<HiUpload />}
                      colorScheme="blue"
                      variant="solid"
                      m={3}
                      type="submit"
                      onClick={getHistoryReviews}
                    >
                      Load More Reviews
                    </Button>
                  )}
                </Box>
              )}
            </TabPanel>
            <TabPanel pb="50px">
              {checkPreviousReview ? (
                <Text textAlign="center">
                  You already did a self-assessment on {previousReviewDate}.
                </Text>
              ) : (
                <UserRatingForm
                  queriedUserId={currentUser.uid}
                  queriedUserReviewsStats={reviewsData}
                />
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}

export default Reviews;
