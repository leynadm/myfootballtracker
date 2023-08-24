import {
    doc,
    collection,
    serverTimestamp,
    Timestamp,
    runTransaction,
    arrayUnion
  } from "firebase/firestore";
  import { db } from "../../config/firebase";
  import RatingDataToSubmit from "../interfaces/ratingDataToSubmit";
  
  async function addNewRatingData(
    reviewToSubmit: RatingDataToSubmit,
    currentUserId:string
  ) {

    
    try {
      await runTransaction(db, async (transaction) => {
        // Get the overall-stats document
        const reviewStatsDocRef = doc(
          db,
          "users",
          currentUserId,
          "stats/review-stats"
        );
  
        const reviewStatsDocSnapRef = await transaction.get(reviewStatsDocRef);
  
        // Add the new match data to the matches collection        
        const userDocRef = doc(db, "users", currentUserId);
        
        const userReviewsColRef = collection(userDocRef, "reviews");
        
        const reviewDocRef = doc(userReviewsColRef,reviewToSubmit.id);
        
        if (reviewStatsDocSnapRef.exists()) {

          transaction.update(reviewDocRef,{
            reviewStatus:"approved"
          });

          const previousReviewStats = reviewStatsDocSnapRef.data();

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
          const updateGKReach = reviewToSubmit.gKReach + previousReviewStats.gKReach
          const updateGKPositioning = reviewToSubmit.gKPositioning + previousReviewStats.gKPositioning
          const updateTDF = reviewToSubmit.TDF + previousReviewStats.TDF
          const updateSPD = reviewToSubmit.SPD + previousReviewStats.SPD
          const updateSHO = reviewToSubmit.SHO + previousReviewStats.SHO
          const updatePAS = reviewToSubmit.PAS + previousReviewStats.PAS
          const updateDRI = reviewToSubmit.DRI + previousReviewStats.DRI
          const updateDEF = reviewToSubmit.DEF + previousReviewStats.DEF
          const updatePHY = reviewToSubmit.PHY + previousReviewStats.PHY
          const updateGKP = reviewToSubmit.GKP + previousReviewStats.GKP

          const userData = {
            'firstName':reviewToSubmit.firstName,
            'lastName':reviewToSubmit.lastName,
            'userId':reviewToSubmit.id,
            'profileImage':reviewToSubmit.profileImage,
            'shirtName':reviewToSubmit.shirtName,
            'createdAt':reviewToSubmit.createdAt
          }

          transaction.update(reviewStatsDocRef, {
            usersThatSentReviews:arrayUnion(userData),
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
            gKReach:updateGKReach,
            gKPositioning:updateGKPositioning,
            TDF:updateTDF,
            SPD:updateSPD,
            SHO:updateSHO,
            PAS:updatePAS,
            DRI:updateDRI,
            DEF:updateDEF,
            PHY:updatePHY,
            GKP:updateGKP,
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
  