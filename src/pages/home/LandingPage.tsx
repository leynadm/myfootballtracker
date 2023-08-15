import "../../styles/LandingPage.css"
import {
  Button,
  Text,
  Stack,
  Box,
  Container,
  Grid,
  IconButton,
  Divider,
  Badge,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Flex,
  Image,
  Avatar,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Heading,
  Progress

} from "@chakra-ui/react";
import { useEffect } from "react";
import FootBallNoBackground from "../../assets/football-no-background.png"
import ReSampleChart from "../statistics/ReSampleChart";
import { useNavigate } from "react-router-dom";
import {FiLogIn} from "react-icons/fi"
import {MdInstallMobile} from "react-icons/md"
import { GoGoal } from "react-icons/go";
import { GoTelescope } from "react-icons/go";

import { GiGoalKeeper } from "react-icons/gi";

export default function LandingPage() {
  
  const boxStyle = {
    
    weight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s", // Add a smooth transition effect
    backgroundColor: "green",
    color: "white",
  };

  const navigate = useNavigate()
  return (
    <>
      <Container maxW="6xl">
        <Stack spacing={5} minH="100vh">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontWeight="bold" fontSize="1.5em">
              myFootball Tracker
            </Text>
            <Button
              rightIcon={<MdInstallMobile />}
              colorScheme="blue"
              variant="outline"
            >
              Install
            </Button>
          </Flex>
          <Box>
            <Heading as="h1" size="xl" noOfLines={2} fontFamily="Outfit" p={1}>
              <Text textAlign="center">Your football story,</Text>
              <Text textAlign="center" className="typewriter">
                documented with data.
              </Text>
            </Heading>
            
          </Box>
          <Box
          m={4}
          alignSelf="center"
            position="relative"
            width="20rem"
            height="12rem"
            zIndex="1" // Set the z-index of the first div
            bg="radial-gradient(circle, rgba(55,47,47,1) 0%, rgba(0,50,245,1) 100%)"
            borderTopLeftRadius="200px 50px"
            borderTopRightRadius="100px 100px"
            borderBottomLeftRadius="150px 220px"
            borderBottomRightRadius="220"
          >
            <Box
              position="absolute"
              top="2rem" // Adjust the top value to control how far the second div is from the top
              left="2rem" // Adjust the left value to control how far the second div is from the left
              width="14rem"
              height="12rem"
              zIndex="0" // Set a lower z-index for the second div
              bg="lightblue"
              borderTopLeftRadius="200px 50px"
              borderTopRightRadius="100px 100px"
              borderBottomLeftRadius="150px 220px"
              borderBottomRightRadius="220"
            ></Box>
          </Box>

          <Box>
            <Text fontSize="1.35em" textAlign="center">
              Our app helps you track matches, goals, assists, and more, all in
              one place.
            </Text>

          </Box>

          {/* 

 */}
          <Box
            p={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              rightIcon={<FiLogIn />}
              colorScheme="blue"
              variant="outline"
              onClick={() => navigate("login")}
            >
              Get Started
            </Button>
          </Box>

        </Stack>
        <Stack spacing={5}>
          <Box gap={4} display="flex" flexDirection="column">
            <Text textAlign="center" fontSize="1.25em">
              Gain insights into a range of data analytics that spotlight your
              performance in various aspects of the game.
            </Text>
            <ReSampleChart />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={3}
          >
            <Text textAlign="center" fontSize="1.25em">
              See comprehensive breakdowns of your performance, like your
              position % played split.
            </Text>

            <Grid
              w="75vw"
              templateAreas={`"LWF CF RWF"
                          "LWF SS RWF"
                          "LMF AMF RMF"
                          "LMF CMF RMF"
                          "LMF DMF RMF"
                          "LB CB RB"
                          "LB GK RB"`}
              gap="1"
              gridAutoColumns="1fr 2fr 1fr"
              color="blackAlpha.700"
              fontWeight="bold"
              height="30vh"
              justifyContent="center"
              alignSelf="center"
            >
              <Box style={boxStyle} gridArea="CF">
                CF
              </Box>

              <Box style={boxStyle} gridArea="SS">
                SS
              </Box>

              <Box style={boxStyle} gridArea="LWF">
                LWF
              </Box>
              <Box style={boxStyle} gridArea="RWF">
                RWF
              </Box>
              <Box style={boxStyle} gridArea="LMF">
                LMF
              </Box>
              <Box style={boxStyle} gridArea="AMF">
                AMF
              </Box>
              <Box style={boxStyle} gridArea="RMF">
                RMF
              </Box>
              <Box style={boxStyle} gridArea="CMF">
                CMF
              </Box>
              <Box style={boxStyle} gridArea="DMF">
                DMF
              </Box>
              <Box style={boxStyle} gridArea="LB">
                LB
              </Box>
              <Box style={boxStyle} gridArea="CB">
                CB
              </Box>
              <Box style={boxStyle} gridArea="RB">
                RB
              </Box>
              <Box style={boxStyle} gridArea="GK">
                GK
              </Box>
            </Grid>
          </Box>

          <Text textAlign="center" fontSize="1.25em">
            Reach significant milestones and unlock personalized achievements
            and trophies, depending on your playstyle!
          </Text>
          <Grid templateColumns="repeat(2,1fr)" gap={2}>
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
                />
              </Box>
              <Text textAlign="center">Provide 75 assists</Text>
              <Progress value={61} max={75} />
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
                  src="https://firebasestorage.googleapis.com/v0/b/myfootballtracker-31e10.appspot.com/o/assets%2Fachievements%2Fcup_02_silver.jpeg?alt=media&token=c4b3a640-6e3d-4c8e-a555-b34aef6c158e"
                  alt="goal"
                />
              </Box>
              <Text textAlign="center">Win 50 matches</Text>
              <Progress value={31} max={50} />
            </Box>
          </Grid>
          <Box gap={4} display="flex" flexDirection="column">
            <Text textAlign="center" fontSize="1.25em">
              Reveal match highlights linked to your outstanding performances,
              whether it's a hat-trick, an amazing assist, or a saved penalty.
            </Text>

            <Grid templateColumns="repeat(3,1fr)" gap={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                gap={2}
              >
                <IconButton
                  aria-label="highlight icon"
                  icon={<GoGoal />}
                  fontSize="1.25rem"
                  backgroundColor="lightgray"
                />
                <Box gap={1}>
                  <Text fontSize="small" fontWeight="bold" textAlign="center">
                    Score a Hat-Trick
                  </Text>
                  <Text fontSize="small" textAlign="center">
                    Score 3 goals in a single match.
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                gap={2}
              >
                <IconButton
                  aria-label="highlight icon"
                  icon={<GoTelescope />}
                  fontSize="1.25rem"
                  backgroundColor="lightblue"
                />
                <Box>
                  <Text fontSize="small" fontWeight="bold" textAlign="center">
                    Telescope Vision
                  </Text>
                  <Text fontSize="small" textAlign="center">
                    Provide an assist with a pass from your own half of the
                    pitch.
                  </Text>
                </Box>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
                gap={2}
              >
                <IconButton
                  aria-label="highlight icon"
                  icon={<GiGoalKeeper />}
                  fontSize="1.25rem"
                  backgroundColor="orange"
                />
                <Box>
                  <Text fontSize="small" fontWeight="bold" textAlign="center">
                    The Only Hero
                  </Text>
                  <Text fontSize="small" textAlign="center">
                    You played as a goalkeeper and saved a penalty.
                  </Text>
                </Box>
              </Box>
            </Grid>
          </Box>
        </Stack>
      </Container>

      {/* 
      <Box
        backgroundImage="radial-gradient(circle, rgba(55,47,47,1) 0%, rgba(0,50,245,1) 100%)"
        transform="skewY(-11deg)"
        height="30vh"
        display="flex"
        flexDirection='column'
        justifyContent="center"
        alignItems="center"
        _before={{
          height:"24vh",
          content: '""',
          position: "absolute",
          top: 8,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(45deg, #654ea3, #eaafc8)",
          transform: "skewY(-2deg)",
        }}
      >
        <Container 
        display="flex"
        flexDirection='column'
        justifyContent="center"
        alignItems="center"
        >
          <Box
            color="white"
            fontWeight="bold"
            transform="skewY(11deg)"
          fontSize="1.5rem"
          >
            Your Personal Football Diary: Embrace the power of data-driven
            improvement.
          </Box>
        </Container>
      </Box> */}
    </>
  );
}
