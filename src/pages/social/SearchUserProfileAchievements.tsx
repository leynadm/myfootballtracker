import {
    Text,
    Box,
    Container,
    Grid,
    Image,
  } from "@chakra-ui/react";
  import "../../styles/Achievements.css";
  import "../../styles/CardText.css";
  
  import { AiFillCheckCircle } from "react-icons/ai";
  import UserProfileSearch from "../../utils/interfaces/UserProfileSearch";
  import OverallStatsDataInterface from "../../utils/interfaces/overallStatsDataInterface";
import { useEffect } from "react";
  interface Props{
    queriedUser?:UserProfileSearch;
    overallStatsData:OverallStatsDataInterface;
  }
  
  function SearchUserProfileAchievements({overallStatsData,queriedUser}:Props) {
    
    return (
      <>
        <Container
          justifyContent="center"
          display="flex"
          flexDirection="column"
          alignItems="center"
          pb="80px"
        >
          <Text>Your Trophy Cabinet</Text>
  
          <Text fontSize="larger">Goals</Text>
          <Grid templateColumns="repeat(2,1fr)" gap={2}>
            <Box>
  
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #CD7F32 solid"
                className="image-wrapper"
              >
  
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_01_bronze.jpeg?alt=media&token=9740efcc-d2b0-4d8d-a394-31a3c27c929c"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.goalsScored <= 25 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Box display="flex" alignItems="center" gap={2} justifyContent="center">
              <Text>Score 25 goals</Text>
              {overallStatsData.goalsScored>=25&&
              <AiFillCheckCircle color="green"/>            
              }
              </Box>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #C0C0C0 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_02_silver.jpeg?alt=media&token=9241caa5-fa5f-403e-9b18-89669b0650c3"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.goalsScored <= 50 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Score 50 goals</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #FFD700 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_03_golden.jpeg?alt=media&token=bc6006e0-093f-45e1-8615-46fdbe39b5f8"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.goalsScored <= 75 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Score 75 goals</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #b9f2ff solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fgoal_04_diamond.jpeg?alt=media&token=3c40d07c-7fb1-4d6d-8915-8949a5a7f4ef"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.goalsScored <= 100 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Score 100 goals</Text>
            </Box>
          </Grid>
  
  
          <Text fontSize="larger">Assists</Text>
          <Grid templateColumns="repeat(2,1fr)" gap={2}>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #CD7F32 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_01_bronze.jpeg?alt=media&token=3f017be6-beb2-4a3d-8e6a-35dbca59252a"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 25 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 25 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #C0C0C0 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2F
                  %2Fassist_02_silver.jpeg?alt=media&token=262881a1-0a92-4e9a-a073-8ccc40dd463b"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 50 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 50 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #FFD700 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_03_gold.jpeg?alt=media&token=bd5669f0-0ec7-49bb-8301-25b07654fb0a"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 75 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 75 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #b9f2ff solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_04_diamond.jpeg?alt=media&token=fe67bce2-509b-4ded-94c0-708e52216dc5"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 100 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 100 assists</Text>
            </Box>
          </Grid>
  
          <Text fontSize="larger">Assists</Text>
          <Grid templateColumns="repeat(2,1fr)" gap={2}>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #CD7F32 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_01_bronze.jpeg?alt=media&token=3f017be6-beb2-4a3d-8e6a-35dbca59252a"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 25 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 25 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #C0C0C0 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_02_silver.jpeg?alt=media&token=262881a1-0a92-4e9a-a073-8ccc40dd463b"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 50 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 50 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #FFD700 solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_03_gold.jpeg?alt=media&token=bd5669f0-0ec7-49bb-8301-25b07654fb0a"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 75 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 75 assists</Text>
            </Box>
  
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                gap={4}
                justifyContent="center"
                alignItems="center"
                border="5px #b9f2ff solid"
                className="image-wrapper"
              >
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fassist_04_diamond.jpeg?alt=media&token=fe67bce2-509b-4ded-94c0-708e52216dc5"
                  alt="goal"
                  style={{
                    filter:
                      overallStatsData.assistsProvided <= 100 ? "blur(5px)" : "none",
                  }}
                />
              </Box>
              <Text textAlign="center">Provide 100 assists</Text>
            </Box>
          </Grid>
        </Container>
      </>
    );
  }
  
  export default SearchUserProfileAchievements;
  