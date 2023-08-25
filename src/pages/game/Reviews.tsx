import { useContext, useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  where,
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
  Text
} from "@chakra-ui/react";
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

  const triggerReviewsComponentRefresh = () => {
    setRefreshReviewsCounter((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    console.log('Inside Reviews UseEffect:');
    console.log(refreshReviewsCounter);
  
    const fetchData = async () => {
      await getPendingReviews();
      await getHistoryReviews();
      setLoading(false)
    };
  
    fetchData();

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

  }, [loading, refreshReviewsCounter]);
  

  async function getHistoryReviews() {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      const userReviewsColRef = collection(userDocRef, "reviews");

      // Query the subcollection documents where reviewStats is "pending"
      const q = query(
        userReviewsColRef,
        where("reviewStatus", "==", "approved"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      // Convert the querySnapshot to an array of document data
      const previousReviewsData = querySnapshot.docs.map((doc) => doc.data());

      setPreviousReviews(previousReviewsData);
    } catch (error) {
      console.error("Error getting pending reviews:", error);
    }
  }

  async function getPendingReviews() {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      const userReviewsColRef = collection(userDocRef, "reviews");

      // Query the subcollection documents where reviewStats is "pending"
      const q = query(
        userReviewsColRef,
        where("reviewStatus", "==", "pending"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      
      // Convert the querySnapshot to an array of document data
      const pendingReviewsData = querySnapshot.docs.map((doc) => doc.data());

      setPendingReviews(pendingReviewsData);
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
                pendingReviews.map((review, index) => (
                  <Box key={index} p={0} m={0}>
                    <ReviewCard
                      review={review}
                      triggerReviewsComponentRefresh={
                        triggerReviewsComponentRefresh
                      }
                    />
                  </Box>
                ))
              )}
            </TabPanel>
            <TabPanel p={0} m={0}>
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
