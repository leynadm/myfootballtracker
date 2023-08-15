import {
    query,
    collection,
    getDocs,
    orderBy,
    startAfter,
    limit
  } from "firebase/firestore";
import { db } from "../../config/firebase";
import MatchHistoryCard from "../../components/MatchHistoryCard";
import { useContext, useEffect, useState } from "react";
import { Container,Stack } from "@chakra-ui/react";
import { AuthContext } from "../../context/Auth";

function MatchHistory() {
  const { currentUser } = useContext(AuthContext);

  const [latestDoc, setLatestDoc] = useState<any>(null);
  const [userMatches, setUserMatches] = useState<any[]>([]);
  const [loadButtonStatus, setLoadButtonStatus] = useState(false);
  const [hasMatches, setHasMatches] = useState(false);
  const [loading, setLoading] = useState(false);
  async function getUserMatches() {
    setLoading(true);
    try {
      let q;
      if (latestDoc) {
        q = query(
          collection(db, "users", currentUser.uid, "matches"),
          orderBy("createdAt", "desc"),
          startAfter(latestDoc),
          limit(5)
        );
      } else {
        q = query(
          collection(db, "users", currentUser.uid, "matches"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
      }

      const querySnapshot = await getDocs(q);

      const userData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return { ...data, postId: doc.id };
      });

      if (latestDoc) {
        setUserMatches((prevUserMatches) => [...prevUserMatches, ...userData]);
      } else {
        setUserMatches(userData);
      }

      if (querySnapshot.docs.length > 0) {
        setLatestDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setHasMatches(true);
      }

      if (querySnapshot.empty) {
        setLoadButtonStatus(true);
      }

      console.log(userData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Handle the error here
      console.error("Error fetching user posts:", error);
      // You can also show a user-friendly error message to the user
      // For example: setErrorState("Failed to fetch user posts. Please try again later.");
    }
  }

  useEffect(() => {
    getUserMatches();
  }, []);
  return (
    <>
      <Container display="flex" justifyContent="center" pb="80px">
        <Stack spacing={1}>

        {userMatches.map((match: any, index: number) => (

          <MatchHistoryCard 
          key={index}
          match={match}
          />

          ))} 
        </Stack>
      </Container>
    </>
  );
}

export default MatchHistory;