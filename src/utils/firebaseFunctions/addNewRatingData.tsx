import {
    doc,
    collection,
    serverTimestamp,
    Timestamp,
    runTransaction,
  } from "firebase/firestore";
  import { db } from "../../config/firebase";
  import RatingDataToSubmit from "../interfaces/ratingDataToSubmit";
  
  async function addNewRatingData(
    reviewToSubmit: RatingDataToSubmit,
    queriedUserId: string,
    currentUserId:string
  ) {

    try {
      await runTransaction(db, async (transaction) => {
        // Get the overall-stats document
        const reviewStatsDocRef = doc(
          db,
          "users",
          queriedUserId,
          "stats/review-stats"
        );
  
        const reviewStatsDocSnapRef = await transaction.get(reviewStatsDocRef);
  
        // Add the new match data to the matches collection        
        const userDocRef = doc(db, "users", currentUserId);
        
        const userReviewsColRef = collection(userDocRef, "reviews");
        
        const newReviewRef = doc(userReviewsColRef);
        
        const serverTimestampObj = serverTimestamp();
        
        const timestamp = Timestamp.fromMillis(Date.now());

        console.log(reviewStatsDocSnapRef.exists())
        if (reviewStatsDocSnapRef.exists()) {

          const previousReviewStats = reviewStatsDocSnapRef.data();
   
  
          transaction.set(newReviewRef, {
            sprint:reviewToSubmit.sprint,
            acceleration:reviewToSubmit.acceleration,
            finishing:reviewToSubmit.finishing,
            longShots:reviewToSubmit.longShots,
            shotPower:reviewToSubmit.shotPower,
            curl:reviewToSubmit.curl,
            weakFootUsage:reviewToSubmit.weakFootUsage,
            shortPassing:reviewToSubmit.shortPassing,
            longPassing:reviewToSubmit.longPassing,
            vision:reviewToSubmit.vision,
            crossing:reviewToSubmit.crossing,
            weakFootAccuracy:reviewToSubmit.weakFootAccuracy,
            ballControl:reviewToSubmit.ballControl,
            composure:reviewToSubmit.composure,
            balance:reviewToSubmit.balance,
            agility:reviewToSubmit.agility,
            strength:reviewToSubmit.strength,
            stamina:reviewToSubmit.stamina,
            jumping:reviewToSubmit.jumping,
            reactions:reviewToSubmit.reactions,
            headingAccuracy:reviewToSubmit.headingAccuracy,
            marking:reviewToSubmit.marking,
            interceptions:reviewToSubmit.interceptions,
            standingTackle:reviewToSubmit.standingTackle,
            slidingTackle:reviewToSubmit.slidingTackle,
            gKReflexes:reviewToSubmit.gKReflexes,
            gKCatching:reviewToSubmit.gKCatching,
            gKClearing:reviewToSubmit.gKClearing,
            timestamp: timestamp,
            createdAt: serverTimestampObj,
          });
  
          const updateSprint = reviewToSubmit.sprint + previousReviewStats.sprint
          const updateAcceleration = reviewToSubmit.acceleration + previousReviewStats.acceleration
          const updateFinishing = reviewToSubmit.finishing + previousReviewStats.finishing
          const updateLongShots = reviewToSubmit.longShots + previousReviewStats.longShots
          const updateShotPower = reviewToSubmit.shotPower + previousReviewStats.shotPower
          const updateCurl = reviewToSubmit.curl + previousReviewStats.curl
          const updateWeakFootUsage = reviewToSubmit.weakFootUsage + previousReviewStats.weakFootUsage
          const updateShortPassing = reviewToSubmit.shortPassing + previousReviewStats.shortPassing
          const updateLongPassing = reviewToSubmit.longPassing + previousReviewStats.longPassing
          const updateVision = reviewToSubmit.vision + previousReviewStats.vision
          const updateCrossing = reviewToSubmit.crossing + previousReviewStats.crossing
          const updateWeakFootAccuracy = reviewToSubmit.weakFootAccuracy + previousReviewStats.weakFootAccuracy
          const updateBallControl = reviewToSubmit.ballControl + previousReviewStats.ballControl
          const updateComposure = reviewToSubmit.composure + previousReviewStats.composure
          const updateBalance = reviewToSubmit.balance + previousReviewStats.balance
          const updateAgility = reviewToSubmit.agility + previousReviewStats.agility
          const updateStrength = reviewToSubmit.strength + previousReviewStats.strength
          const updateStamina = reviewToSubmit.stamina + previousReviewStats.stamina
          const updateJumping = reviewToSubmit.jumping + previousReviewStats.jumping
          const updateReactions = reviewToSubmit.reactions + previousReviewStats.reactions
          const updateHeadingAccuracy = reviewToSubmit.headingAccuracy + previousReviewStats.headingAccuracy
          const updateMarking = reviewToSubmit.marking + previousReviewStats.marking
          const updateInterceptions = reviewToSubmit.interceptions + previousReviewStats.interceptions
          const updateStandingTackle = reviewToSubmit.standingTackle + previousReviewStats.standingTackle
          const updateSlidingTackle = reviewToSubmit.slidingTackle + previousReviewStats.slidingTackle
          const updateGKReflexes = reviewToSubmit.gKReflexes + previousReviewStats.gKReflexes
          const updateGKCatching = reviewToSubmit.gKCatching + previousReviewStats.gKCatching
          const updateGKClearing = reviewToSubmit.gKClearing + previousReviewStats.gKClearing
          

          transaction.update(reviewStatsDocRef, {
            numberOfReviews:previousReviewStats.numberOfReviews+1,
            sprint:updateSprint,
            acceleration:updateAcceleration,
            finishing:updateFinishing,
            longShots:updateLongShots,
            shotPower:updateShotPower,
            curl:updateCurl,
            weakFootUsage:updateWeakFootUsage,
            shortPassing:updateShortPassing,
            longPassing:updateLongPassing,
            vision:updateVision,
            crossing:updateCrossing,
            weakFootAccuracy:updateWeakFootAccuracy,
            ballControl:updateBallControl,
            composure:updateComposure,
            balance:updateBalance,
            agility:updateAgility,
            strength:updateStrength,
            stamina:updateStamina,
            jumping:updateJumping,
            reactions:updateReactions,
            headingAccuracy:updateHeadingAccuracy,
            marking:updateMarking,
            interceptions:updateInterceptions,
            standingTackle:updateStandingTackle,
            slidingTackle:updateSlidingTackle,
            gKReflexes:updateGKReflexes,
            gKCatching:updateGKCatching,
            gKClearing:updateGKClearing,
            
          });
        }
      });
    } catch (error) {
      // Handle the error here
      console.error("Error creating followers feed document:", error);
      // You can also throw the error again to propagate it to the caller of this function
      throw error;
    }

  }
  
  export default addNewRatingData;
  