import "../../styles/LandingPage.css";
import Logo from "../../assets/logo.png";
import {
  Button,
  Text,
  Stack,
  Box,
  Container,
  Grid,
  IconButton,
  Flex,
  Image,
  Heading,
  Progress,
  Tag
} from "@chakra-ui/react";

interface BeforeInstallPromptEventChoiceResult {
  outcome: "accepted" | "dismissed";
  platform: string;
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<BeforeInstallPromptEventChoiceResult>;
  prompt(): void;
}
import getTagTextColor from "../../utils/colorFunctions/getTagBackground";
import { useEffect } from "react";
import ReSampleChart from "../statistics/ReSampleChart";
import { useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { MdInstallMobile } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { GoTelescope } from "react-icons/go";
import { useState } from "react";
import { GiGoalKeeper } from "react-icons/gi";

export default function LandingPage() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [openInstallInstructionsModal, setOpenInstallInstructionsModal] =
    useState(false);

  function handleBeforeInstallPrompt(event: BeforeInstallPromptEvent) {
    event.preventDefault();
    setDeferredPrompt(event);
  }

  useEffect(() => {
    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener
    );
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener
      );
    };
  }, []);

  function handleInstallClick() {
    if (deferredPrompt === null) {
      setOpenInstallInstructionsModal(!openInstallInstructionsModal);
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        /* 
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the installation prompt");
        } else {
          console.log("User dismissed the installation prompt");
        } */
      });
    }
  }

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

  const navigate = useNavigate();
  return (
    <>
      <Container maxW="4xl" >
        <Stack spacing={5} minH="100vh">
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Text fontWeight="bold" fontSize="1.5em">
              My Football Tracker
            </Text>
            <Button
              rightIcon={<MdInstallMobile />}
              colorScheme="blue"
              variant="outline"
              onClick={handleInstallClick}
            >
              Install
            </Button>
          </Flex>

          <Box display="flex" flexDirection="column">
          <Box>
            <Heading as="h1" size="xl" noOfLines={2} fontFamily="Outfit" p={1}>
              <Text textAlign="center">Your football story,</Text>
              <Text textAlign="center" className="typewriter">
                documented with data.
              </Text>
            </Heading>
          </Box>
          
          <Box  display="flex" justifyContent="center" alignItems="center">
                <img  
                style={{
                  maxWidth: window.innerWidth >= 768 ? '50%' : '80%', // Adjust the breakpoint as needed
                }}
                src={Logo} alt="logo" />
              </Box>

          <Box>
            <Text fontSize="1.35em" textAlign="center">
              Our app helps you track matches, goals, assists, and more, all in
              one place.
            </Text>
          </Box>

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
          </Box>
        </Stack>
        <Stack spacing={10}>
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
            gap={1}
          >
            <Text textAlign="center" fontSize="1.25em">
              See comprehensive breakdowns of your performance, like your
              position % played split.
            </Text>

            <Grid
              w="50%"
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
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CF"),
                  }}
                >
                  CF
                </Tag>
              </Box>

              <Box style={boxStyle} gridArea="SS">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("SS"),
                  }}
                >
                  SS
                </Tag>
              </Box>

              <Box style={boxStyle} gridArea="LWF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LWF"),
                  }}
                  p={1}
                >
                  LWF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="RWF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RWF"),
                  }}
                  p={1}
                >
                  RWF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="LMF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LMF"),
                  }}
                  p={1}
                >
                  LMF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="AMF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("AMF"),
                  }}
                  p={1}
                >
                  AMF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="RMF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RMF"),
                  }}
                  p={1}
                >
                  RMF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="CMF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CMF"),
                  }}
                  p={1}
                >
                  CMF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="DMF">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("DMF"),
                  }}
                  p={1}
                >
                  DMF
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="LB">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("LB"),
                  }}
                  p={1}
                >
                  LB
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="CB">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("CB"),
                  }}
                  p={1}
                >
                  CB
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="RB">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("RB"),
                  }}
                  p={1}
                >
                  RB
                </Tag>
              </Box>
              <Box style={boxStyle} gridArea="GK">
              <Tag
                  fontSize="1rem"
                  fontWeight="bold"
                  bg="black"
                  sx={{
                    color: getTagTextColor("GK"),
                  }}
                  p={1}
                >
                  GK
                </Tag>
              </Box>
            </Grid>
          </Box>

          <Box>
          <Text textAlign="center" fontSize="1.25em">
            Reach significant milestones and unlock personalized achievements
            and trophies, depending on your playstyle!
          </Text>
          <Grid templateColumns="repeat(2,1fr)" gap={5}>
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
          </Box>
          <Box gap={1} display="flex" flexDirection="column">
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


    </>
  );
}
