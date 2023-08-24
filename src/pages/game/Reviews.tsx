import { useContext, useEffect, useState } from "react";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/Auth";
import ReviewCard from "../../components/ReviewCard";
import RatingDataToSubmit from "../../utils/interfaces/ratingDataToSubmit";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function Reviews() {
  const { currentUser } = useContext(AuthContext);
  const [pendingReviews, setPendingReviews] = useState<RatingDataToSubmit[]>(
    []
  ); // Update the state type
 const [previousReviews, setPreviousReviews] = useState<RatingDataToSubmit[]>(
    []);
     
  useEffect(() => {
    getPendingReviews();
    getHistoryReviews();
  }, []);

  async function getHistoryReviews() {
    try {
      const userDocRef = doc(db, "users", currentUser.uid);

      const userReviewsColRef = collection(userDocRef, "reviews");

      // Query the subcollection documents where reviewStats is "pending"
      const q = query(
        userReviewsColRef,
        where("reviewStatus", "==", "approved")
      );
      const querySnapshot = await getDocs(q);

      // Convert the querySnapshot to an array of document data
      const previousReviewsData = querySnapshot.docs.map((doc) => doc.data());

      // Update the state with the previous reviews
      console.log("doesnt work!!!");

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
        where("reviewStatus", "==", "pending")
      );
      const querySnapshot = await getDocs(q);

      // Convert the querySnapshot to an array of document data
      const pendingReviewsData = querySnapshot.docs.map((doc) => doc.data());

      console.log(pendingReviewsData);
      // Update the state with the pending reviews
      console.log("doesnt work!!!");

      setPendingReviews(pendingReviewsData);
    } catch (error) {
      console.error("Error getting pending reviews:", error);
    }
  }

  return (
    <>
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
          <TabPanel>
            {pendingReviews.map((review, index) => (
              <Box key={index}>
                <ReviewCard review={review} />
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
          {previousReviews.map((review, index) => (
              <Box key={index}>
                <ReviewCard review={review} />
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Reviews;
