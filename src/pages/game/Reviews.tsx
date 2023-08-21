import { useContext, useEffect, useState } from "react"
import { collection, doc, getDocs,query,where } from "firebase/firestore"; 
import { db } from "../../config/firebase";
import { AuthContext } from "../../context/Auth";
import ReviewCard from "../../components/ReviewCard";
import RatingDataToSubmit from "../../utils/interfaces/ratingDataToSubmit";
import {
    Box
  } from "@chakra-ui/react";

  function Reviews(){

    const {currentUser} = useContext(AuthContext)
    const [pendingReviews, setPendingReviews] = useState<RatingDataToSubmit[]>([]); // Update the state type


    useEffect(()=>{

        getPendingReviews()

    },[])

    async function getPendingReviews() {

        try {
            console.log('trying to get')
            
            const userDocRef = doc(db, "users", currentUser.uid);
            console.log(userDocRef)
            
            const userReviewsColRef = collection(userDocRef, "reviews");
    
            console.log(userDocRef)
            // Query the subcollection documents where reviewStats is "pending"
            const q = query(userReviewsColRef);
            const querySnapshot = await getDocs(q);

            // Convert the querySnapshot to an array of document data
            const pendingReviewsData = querySnapshot.docs.map((doc) => doc.data());

            console.log(pendingReviewsData)
            // Update the state with the pending reviews
            console.log('doesnt work!!!')
             
            setPendingReviews(pendingReviewsData)
         
        } catch (error) {
            console.error("Error getting pending reviews:", error);
        }
    }

    return(
        <>
                <Box>
                {pendingReviews.map((review, index) => (
                    <Box key={index}>
                        <ReviewCard review={review}/>
                    </Box>
                ))}

                </Box>

        
        </>
    )

}

export default Reviews