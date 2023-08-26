import ReAttributesHexChart from "../statistics/ReAttributesHexChart";
import { Box, Text } from "@chakra-ui/react";
import UserRatingForm from "../../components/UserRatingForm";
import { AuthContext } from "../../context/Auth";
import { OverallStatsContext } from "../../context/OverallStats";
interface Props {
  queriedUserId: string;
  queriedUserReviewsStats: any;
}
import { useContext, useEffect, useState } from "react";

function UserRating({ queriedUserId, queriedUserReviewsStats }: Props) {
  const [statsHex, setStatsHex] = useState({});
  const [checkPreviousReview, setCheckPreviousReview] = useState(false);
  const [previousReviewDate, setPreviousReviewData] = useState("");
  const { reviewsData } = useContext(OverallStatsContext);

  useEffect(() => {
    console.log("logging reviewsData");
    console.log(reviewsData);
    const statsHexArray = [
      {
        attribute: "SPD",
        score:
          (queriedUserReviewsStats.SPD /
            (20 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
      {
        attribute: "SHO",
        score:
          (queriedUserReviewsStats.SHO /
            (50 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
      {
        attribute: "PAS",
        score:
          (queriedUserReviewsStats.PAS /
            (50 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
      {
        attribute: "DRI",
        score:
          (queriedUserReviewsStats.DRI /
            (40 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
      {
        attribute: "DEF",
        score:
          (queriedUserReviewsStats.TDF /
            (50 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
      {
        attribute: "PHY",
        score:
          (queriedUserReviewsStats.PHY /
            (50 * queriedUserReviewsStats.numberOfReviews)) *
          100,
      },
    ];

    setStatsHex(statsHexArray);

    if (queriedUserReviewsStats.usersThatSentReviews.length > 0) {
      queriedUserReviewsStats.usersThatSentReviews.forEach((obj) => {
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


    if (reviewsData.usersThatWereReviewed.length > 0) {

      reviewsData.usersThatWereReviewed.forEach((obj) => {
        const previousReviewId = obj.userId;

        if (previousReviewId === queriedUserId) {
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
  }, []);

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        flexDirection="column"
      >
        <ReAttributesHexChart data={statsHex} />

        {checkPreviousReview ? (
          <Text textAlign="center">
            You already reviewed this user on {previousReviewDate}.
          </Text>
        ) : (
          <Box>
            <Text textAlign="center">
              You can send an honest review to the player if you played together
              before.
            </Text>

            <UserRatingForm
              queriedUserId={queriedUserId}
              queriedUserReviewsStats={queriedUserReviewsStats}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
export default UserRating;
