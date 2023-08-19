import MatchHighlight from "../../components/MatchHighlight";
import addNewMatchData from "../../utils/firebaseFunctions/addNewMatchData";
import checkMatchesPlayed from "../../utils/firebaseFunctions/checkMatchesPlayed";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import uuid from "react-uuid";
import {
  Button,
  Text,
  useColorModeValue,
  Stack,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Grid,
  InputGroup,
  InputLeftElement,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormControl,
  Divider,
  FormErrorMessage,
  useToast,
  Radio,
  RadioGroup,
  Textarea,
  Image,
  Spinner
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getApp } from "firebase/app";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { GiMoonOrbit } from "react-icons/gi";
import { GiGiant } from "react-icons/gi";
import { FaMonument } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";
import { GiMaze } from "react-icons/gi";
import { GiMountaintop } from "react-icons/gi";
import { GoTelescope } from "react-icons/go";
import { BsFillSignStopFill } from "react-icons/bs";
import { GiAngryEyes } from "react-icons/gi";
import { FaGitkraken } from "react-icons/fa";
import { GiAngelWings } from "react-icons/gi";
import { GiGalaxy } from "react-icons/gi";
import { GiSlingshot } from "react-icons/gi";
import { BsShieldX } from "react-icons/bs";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { Select } from "@chakra-ui/react";
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { MdStadium } from "react-icons/md";
import { GiModernCity } from "react-icons/gi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { GoGoal } from "react-icons/go";
import { BsBraces } from "react-icons/bs";
import { BiBullseye } from "react-icons/bi";
import { GiPokerHand } from "react-icons/gi";
import { PiNumberFourFill } from "react-icons/pi";
import { GiBowman } from "react-icons/gi";
import { GiLuciferCannon } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { GiSnakeBite } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { FaFeatherAlt } from "react-icons/fa";
import { GiHorseshoe } from "react-icons/gi";
import { MdBalance } from "react-icons/md";
import { GiAcrobatic } from "react-icons/gi";
import { GiScorpionTail } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { ImMagicWand } from "react-icons/im";
import { ImTruck } from "react-icons/im";
import { GiMagicPalm } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";
import { GiCaptainHatProfile } from "react-icons/gi";
import { GiColombianStatue } from "react-icons/gi";
import { LiaCrossSolid } from "react-icons/lia";
import { PiArrowsCounterClockwiseDuotone } from "react-icons/pi";
import { GiLockedFortress } from "react-icons/gi";
import { GiGoalKeeper } from "react-icons/gi";
import { GiFeline } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";
import { MdOutlineScoreboard } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { GiWingfoot } from "react-icons/gi";
import { LuFlagTriangleLeft } from "react-icons/lu";
import { PiHighHeel } from "react-icons/pi";
import { BiCross } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";

import MatchDataToSubmit from "../../utils/interfaces/matchDataToSubmit";

import { useContext, useState, FormEvent, useRef } from "react";
import { AuthContext } from "../../context/Auth";

interface PositionsPlayed {
  [key: string]: boolean;
}

export default function NewMatch() {
  const boxStyle = {
    weight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s", // Add a smooth transition effect
    bg: "green",
    color: "black",
  };

  const toast = useToast();
  const firebaseApp = getApp();
  const matchesStorage = getStorage(
    firebaseApp,
    "gs://myfootballtracker-matches"
  );

  const { currentUser } = useContext(AuthContext);
  const [winValue, setWinValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileSource, setFileSource] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [savingMatch, setSavingMatch] = useState(false);
  const [matchImage, setMatchImage] = useState<string>("");
  const [buttonDisabledCheck, setButtonDisabledCheck] = useState(false)
  const navigate = useNavigate()
  
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const fileSource = e.target?.result as string;
        setFileSource(fileSource);
      };
    }
  }

  function handleProfilePhotoChange() {
    fileInputRef.current?.click();
  }

  async function uploadMatchImage() {

    let imageRef = null;
    let imageUrlResized: string | null = null;
    const uniqueImageId = uuid();

    if (selectedFile) {

      imageRef = ref(
        matchesStorage,
        `match-images/${currentUser.uid}/preview/${currentUser.uid}_${uniqueImageId}`
      );

      await uploadBytes(imageRef, selectedFile);

      const imageRefResized = ref(
        matchesStorage,
        `match-images/${currentUser.uid}/preview/${currentUser.uid}_${uniqueImageId}_1024x1024`
      );
      try {
        imageUrlResized = await getDownloadURL(imageRefResized);
        console.log("getting imgUrlResized:");
        console.log(imageUrlResized);
      } catch (error) {
        console.error("Error fetching resized image:", error);
        // Retry logic

        let retryAttempts = 9;
        while (retryAttempts > 0) {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 3 seconds

          try {
            imageUrlResized = await getDownloadURL(imageRefResized);
            break; // If successful, break out of the loop
          } catch (error) {
            console.error("Error fetching resized image after retry:", error);
            retryAttempts--;
          }
        }

        if (retryAttempts === 0) {
          console.error("Retries exhausted. Unable to fetch resized image.");
          // Handle the error and display an error message to the user
        }
      }

      setMatchImage(imageUrlResized);
    }
  }

  function handleRemoveMatchPicture() {
    setSelectedFile(null);
    setFileSource(null);
  }

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const [positionsPlayed, setPositionsPlayed] = useState<PositionsPlayed>({});
  const [matchDate, setMatchDate] = useState<Date>(new Date());
  const [matchDuration, setMatchDuration] = useState(0);
  const [cityName, setCityName] = useState("");
  const [opponentTeamName, setOpponentTeamName] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [matchType, setMatchType] = useState("");
  const [homeTeamGoals, setHomeTeamGoals] = useState(0);
  const [awayTeamGoals, setAwayTeamGoals] = useState(0);
  const [goalsScored, setGoalsScored] = useState(0);
  const [assistsProvided, setAssistsProvided] = useState(0);
  const [yellowCardsReceived, setYellowCardsReceived] = useState(0);
  const [redCardsReceived, setRedCardsReceived] = useState(0);
  const [foulsCommited, setFoulsCommited] = useState(0);
  const [foulsObtained, setFoulsObtained] = useState(0);
  const [getOnTheScoresheet, setGetOnTheScoresheet] = useState(false);
  const [bagABrace, setBagABrace] = useState(false);
  const [scoreAHattrick, setScoreAHattrick] = useState(false);
  const [fantasticFour, setFantasticFour] = useState(false);
  const [pokerMaster, setPokerMaster] = useState(false);
  const [historyMaker, setHistoryMaker] = useState(false);
  const [letTheShowBegin, setLetTheShowBegin] = useState(false);
  const [slingshot, setSlingshot] = useState(false);
  const [aroundThePlanet, SetAroundThePlanet] = useState(false);
  const [hawkeye, setHawkeye] = useState(false);
  const [cannonball, setCannonball] = useState(false);
  const [noExcuses, setNoExcuses] = useState(false);
  const [cornerstonePresence, setCornerstonePresence] = useState(false);
  const [marksman, setMarksman] = useState(false);
  const [telescopeVision, setTelescopeVision] = useState(false);
  const [coldBloodedBeast, setColdBloodedBeast] = useState(false);
  const [aerialThreat, setAerialThreat] = useState(false);
  const [silkySmooth, setSiklySmooth] = useState(false);
  const [luckyCharm, setLuckyCharm] = useState(false);
  const [heelOfAGoal, setHeelOfAGoal] = useState(false);
  const [innateTalent, setInnateTalent] = useState(false);
  const [laPulga, setLaPulga] = useState(false);
  const [oneInAMillion, setOneInAMillion] = useState(false);
  const [lastMinuteHero, setLastMinuteHero] = useState(false);
  const [finalWord, setFinalWord] = useState(false);
  const [heartRate, setHeartRate] = useState(0);
  const [distance, setDistance] = useState(0);
  const [distanceUnit, setDistanceUnit] = useState("m");
  const [matchRecordingLink, setMatchRecordingLink] = useState("");
  const [matchPerformance, setMatchPerformance] = useState(5);
  const [aPleasureDoingBusiness, setAPleasureDoingBusiness] = useState(false);
  const [foodOnTheTable, setFoodOnTheTable] = useState(false);
  const [assistsMaestro, setAssistsMaestro] = useState(false);
  const [industrialProvider, setIndustrialProvider] = useState(false);
  const [puppetMaster, setPuppetMaster] = useState(false);
  const [omniscient, setOmniscient] = useState(false);
  const [youShallNotPass, setYouShallNotPass] = useState(false);
  const [tacklingTitan, setTacklingTitan] = useState(false);
  const [leadFromTheBack, setLeadFromTheBack] = useState(false);
  const [theSaviour, setTheSaviour] = useState(false);
  const [counterAttackingCatalyst, setCounterAttackingCatalust] =
    useState(false);
  const [livingInAFortress, setLivingInAFortress] = useState(false);
  const [theOnlyHero, setTheOnlyHero] = useState(false);
  const [instantReflexes, setInstantReflexes] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [youStopHere, setYouStopHere] = useState(false);
  const [imNotKidding, setImNotKidding] = useState(false);
  const [theKraken, setTheKraken] = useState(false);
  const [guardianAngel, setGuardianAngel] = useState(false);
  const [protectorOfTheGalaxy, setProtectorOfTheGalaxy] = useState(false);
  const [theGiant, setTheGiant] = useState(false);
  const [oneManArmy, setOneManArmy] = useState(false);
  const [theMonument, setTheMonument] = useState(false);
  const [thePathBreaker, setThePathBreaker] = useState(false);
  const [theMountain, setTheMountain] = useState(false);

  function checkGoalsRadioValue() {
    if (goalsRadioValue === "getOnTheScoresheet") {
      setGetOnTheScoresheet(true);
    } else {
      setGetOnTheScoresheet(false);
    }

    if (goalsRadioValue === "bagABrace") {
      setBagABrace(true);
    } else {
      setBagABrace(false);
    }

    if (goalsRadioValue === "scoreAHattrick") {
      setScoreAHattrick(true);
    } else {
      setScoreAHattrick(false);
    }

    if (goalsRadioValue === "fantasticFour") {
      setFantasticFour(true);
    } else {
      setFantasticFour(false);
    }

    if (goalsRadioValue === "pokerMaster") {
      setPokerMaster(true);
    } else {
      setPokerMaster(false);
    }

    if (goalsRadioValue === "historyMaker") {
      setHistoryMaker(true);
    } else {
      setHistoryMaker(false);
    }
  }

  function checkSavesRadioValue() {
    if (savesRadioValue === "youStopHere") {
      setYouStopHere(true);
    } else {
      setYouStopHere(false);
    }

    if (savesRadioValue === "imNotKidding") {
      setImNotKidding(true);
    } else {
      setImNotKidding(false);
    }

    if (savesRadioValue === "theKraken") {
      setTheKraken(true);
    } else {
      setTheKraken(false);
    }

    if (savesRadioValue === "guardianAngel") {
      setGuardianAngel(true);
    } else {
      setGuardianAngel(false);
    }

    if (savesRadioValue === "protectorOfTheGalaxy") {
      setProtectorOfTheGalaxy(true);
    } else {
      setProtectorOfTheGalaxy(false);
    }
  }

  function checkDefenceRadioValue() {
    if (defenceRadioValue === "theGiant") {
      setTheGiant(true);
    } else {
      setTheGiant(false);
    }

    if (defenceRadioValue === "oneManArmy") {
      setOneManArmy(true);
    } else {
      setOneManArmy(false);
    }

    if (defenceRadioValue === "theMonument") {
      setTheMonument(true);
    } else {
      setTheMonument(false);
    }

    if (defenceRadioValue === "thePathBreaker") {
      setThePathBreaker(true);
    } else {
      setThePathBreaker(false);
    }

    if (defenceRadioValue === "theMountain") {
      setTheMountain(true);
    } else {
      setTheMountain(false);
    }
  }

  function checkAssistsRadioValue() {
    if (assistsRadioValue === "aPleasureDoingBusiness") {
      setAPleasureDoingBusiness(true);
    } else {
      setAPleasureDoingBusiness(false);
    }

    if (assistsRadioValue === "foodOnTheTable") {
      setFoodOnTheTable(true);
    } else {
      setFoodOnTheTable(false);
    }

    if (assistsRadioValue === "assistsMaestro") {
      setAssistsMaestro(true);
    } else {
      setAssistsMaestro(false);
    }

    if (assistsRadioValue === "industrialProvider") {
      setIndustrialProvider(true);
    } else {
      setIndustrialProvider(false);
    }

    if (assistsRadioValue === "puppetMaster") {
      setPuppetMaster(true);
    } else {
      setPuppetMaster(false);
    }

    if (goalsRadioValue === "omniscient") {
      setOmniscient(true);
    } else {
      setOmniscient(false);
    }
  }
  const dataToSubmit: MatchDataToSubmit = {
    winValue: winValue,
    positionsPlayed: positionsPlayed,
    matchDate: matchDate,
    matchDuration: matchDuration,
    cityName: cityName,
    opponentTeamName: opponentTeamName,
    stadiumName: stadiumName,
    matchType: matchType,
    homeTeamGoals: homeTeamGoals,
    awayTeamGoals: awayTeamGoals,
    goalsScored: goalsScored,
    assistsProvided: assistsProvided,
    yellowCardsReceived: yellowCardsReceived,
    redCardsReceived: redCardsReceived,
    foulsCommited: foulsCommited,
    foulsObtained: foulsObtained,
    getOnTheScoresheet: getOnTheScoresheet,
    bagABrace: bagABrace,
    scoreAHattrick: scoreAHattrick,
    fantasticFour: fantasticFour,
    pokerMaster: pokerMaster,
    historyMaker: historyMaker,
    letTheShowBegin: letTheShowBegin,
    hawkeye: hawkeye,
    slingshot: slingshot,
    aroundThePlanet: aroundThePlanet,
    cannonball: cannonball,
    cornerstonePresence: cornerstonePresence,
    marksman: marksman,
    telescopeVision: telescopeVision,
    noExcuses: noExcuses,
    coldBloodedBeast: coldBloodedBeast,
    aerialThreat: aerialThreat,
    silkySmooth: silkySmooth,
    luckyCharm: luckyCharm,
    heelOfAGoal: heelOfAGoal,
    innateTalent: innateTalent,
    laPulga: laPulga,
    oneInAMillion: oneInAMillion,
    lastMinuteHero: lastMinuteHero,
    finalWord: finalWord,
    heartRate: heartRate,
    distance: distance,
    distanceUnit: distanceUnit,
    matchPerformance: matchPerformance,
    aPleasureDoingBusiness: aPleasureDoingBusiness,
    foodOnTheTable: foodOnTheTable,
    assistsMaestro: assistsMaestro,
    industrialProvider: industrialProvider,
    puppetMaster: puppetMaster,
    omniscient: omniscient,
    youShallNotPass: youShallNotPass,
    tacklingTitan: tacklingTitan,
    leadFromTheBack: leadFromTheBack,
    theSaviour: theSaviour,
    counterAttackingCatalyst: counterAttackingCatalyst,
    livingInAFortress: livingInAFortress,
    theOnlyHero: theOnlyHero,
    instantReflexes: instantReflexes,
    matchComments: textareaValue,
    youStopHere: youStopHere,
    imNotKidding: imNotKidding,
    theKraken: theKraken,
    guardianAngel: guardianAngel,
    protectorOfTheGalaxy: protectorOfTheGalaxy,
    theGiant: theGiant,
    oneManArmy: oneManArmy,
    theMonument: theMonument,
    thePathBreaker: thePathBreaker,
    theMountain: theMountain,
    matchRecordingLink: matchRecordingLink,
    matchImage: matchImage,
  };

  const handleClick = (boxName: string) => {
    // Toggle the clicked state of the box
    setPositionsPlayed((prevPositionsPlayed) => ({
      ...prevPositionsPlayed,
      [boxName]: !prevPositionsPlayed[boxName],
    }));
  };

  const handleMatchDateChange = (e) => {
    const value = e.target.value;
    setMatchDate(value); // Keep the value as a string for now

    // Convert the date string to a Date object if needed
    const dateObject = new Date(value);
    console.log(dateObject); // This will be a valid Date object
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setSavingMatch(true)
    setButtonDisabledCheck(true)
    event.preventDefault();

    let positionSelected = true;
    for (const key in positionsPlayed) {
      if (positionsPlayed[key] === true) {
        positionSelected = false;
      }
    }

    if (positionSelected) {
      toast({
        title: "Please select the position you played.",
        status: "error",
        isClosable: true,
      });
      return;
    }


    try {
      await uploadMatchImage();
      checkGoalsRadioValue();
      checkAssistsRadioValue();
      checkSavesRadioValue();
      checkDefenceRadioValue();

      const validityCheckPromise = checkMatchesPlayed(
        dataToSubmit,
        currentUser.uid
      );

      validityCheckPromise
        .then((result) => {
          if (result === "duplicate match") {
            toast({
              title: "Duplicate match detected!",
              description: "Match with same date/time already registered.",
              status: "warning",
              isClosable: true,
              position: "top",
            });
          } else {
            addNewMatchData(dataToSubmit, currentUser.uid)
              .then(() => {
                toast({
                  title: "Your match was registered successfully!",
                  status: "success",
                  isClosable: true,
                  position: "top",
                });
                setButtonDisabledCheck(false);
                setSavingMatch(false);
                navigate("/home/game/match-history")
              })
              .catch((error) => {
                console.error("Error registering match:", error);
                console.log(error);
                toast({
                  title: "Error registering match",
                  status: "error",
                  description: "An error occurred while registering the match.",
                  isClosable: true,
                  position: "top",
                });
              });
          }
        })
        .catch((error) => {
          console.error("Error during validity check:", error);
        });
    } catch (error) {
      console.error(error);
    }
        
  };

  const colors = useColorModeValue(
    ["red.50", "teal.50", "blue.50", "orange.50"],

    ["red.900", "teal.900", "blue.900", "orange.900"]
  );
  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  const [goalsRadioValue, setGoalsRadioValue] = useState("");
  const [assistsRadioValue, setAssistsRadioValue] = useState("");
  const [savesRadioValue, setSavesRadioValue] = useState("");
  const [defenceRadioValue, setDefenceSavesRadioValue] = useState("");

  const [requiredField, setRequiredField] = useState(false);

  return (
    <>
      <Box paddingBottom="75px">
        {/* 
        <Box display="flex" justifyContent="center" gap={2} alignItems="center">
        <AddIcon/>
        <Heading size="md" textAlign="center">Add a new match</Heading>
        </Box>
 */}
        <Container>
          <Text textAlign="center" mt={2}>
            Position Played
          </Text>

          <Grid
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
            marginTop="0.5rem"
            height="50vh"
          >
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["CF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["CF"] ? "white" : boxStyle.color,
              }}
              gridArea="CF"
              onClick={() => handleClick("CF")}
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
            >
              CF
            </Box>

            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["SS"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["SS"] ? "white" : boxStyle.color,
              }}
              gridArea="SS"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("SS")}
            >
              SS
            </Box>

            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["LWF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["LWF"] ? "white" : boxStyle.color,
              }}
              gridArea="LWF"
              onClick={() => handleClick("LWF")}
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
            >
              LWF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["RWF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["RWF"] ? "white" : boxStyle.color,
              }}
              gridArea="RWF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("RWF")}
            >
              RWF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["LMF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["LMF"] ? "white" : boxStyle.color,
              }}
              gridArea="LMF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("LMF")}
            >
              LMF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["AMF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["AMF"] ? "white" : boxStyle.color,
              }}
              gridArea="AMF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("AMF")}
            >
              AMF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["RMF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["RMF"] ? "white" : boxStyle.color,
              }}
              gridArea="RMF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("RMF")}
            >
              RMF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["CMF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["CMF"] ? "white" : boxStyle.color,
              }}
              gridArea="CMF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("CMF")}
            >
              CMF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["DMF"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["DMF"] ? "white" : boxStyle.color,
              }}
              gridArea="DMF"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("DMF")}
            >
              DMF
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["LB"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["LB"] ? "white" : boxStyle.color,
              }}
              gridArea="LB"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("LB")}
            >
              LB
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["CB"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["CB"] ? "white" : boxStyle.color,
              }}
              gridArea="CB"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("CB")}
            >
              CB
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["RB"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["RB"] ? "white" : boxStyle.color,
              }}
              gridArea="RB"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("RB")}
            >
              RB
            </Box>
            <Box
              style={{
                ...boxStyle,
                backgroundColor: positionsPlayed["GK"] ? "gold" : boxStyle.bg,
                color: positionsPlayed["GK"] ? "white" : boxStyle.color,
              }}
              gridArea="GK"
              _hover={{
                fontWeight: "semibold",
                backgroundColor: "gold",
                color: "white",
              }}
              onClick={() => handleClick("GK")}
            >
              GK
            </Box>
          </Grid>

          <Text textAlign="center" mt={2}>
            Match Details
          </Text>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2} mt={2}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <BsCalendarDate color="gray.300" />
                  </InputLeftElement>

                  <Input
                    type="datetime-local"
                    onChange={handleMatchDateChange}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <AiOutlineFieldTime color="gray.300" />
                  </InputLeftElement>

                  <Input
                    placeholder="Match Duration (minutes)"
                    type="number"
                    min={0}
                    onChange={(e) => setMatchDuration(parseInt(e.target.value))}
                  />
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <BsShieldX color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Opponent's Team Name"
                    onChange={(e) => setOpponentTeamName(e.target.value)}
                  />
                </InputGroup>

                <FormErrorMessage>
                  {requiredField && "This field is required."}
                </FormErrorMessage>
              </FormControl>

              <InputGroup gap={2}>
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <GiModernCity color="gray.300" />
                    </InputLeftElement>
                    <Input
                      type="text"
                      placeholder="City Name"
                      onChange={(e) => setCityName(e.target.value)}
                    />
                  </InputGroup>

                  <FormErrorMessage>
                    {requiredField && "This field is required."}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <MdStadium color="gray.300" />
                    </InputLeftElement>

                    <Input
                      type="text"
                      placeholder="Stadium Name"
                      onChange={(e) => setStadiumName(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
              </InputGroup>

              <FormControl isRequired>
                <InputGroup>
                  <Select
                    placeholder="Match Type"
                    onChange={(e) => setMatchType(e.target.value)}
                  >
                    <option value="5vs5">5 vs 5</option>
                    <option value="6vs6">6 vs 6</option>
                    <option value="7vs7">7 vs 7</option>
                    <option value="8vs8">8 vs 8</option>
                    <option value="9vs9">9 vs 9</option>
                    <option value="10vs10">10 vs 10</option>
                    <option value="11vs11">11 vs 11</option>
                  </Select>
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <RadioGroup onChange={(e) => setWinValue(e)} value={winValue}>
                  <Stack
                    direction="row"
                    alignContent="center"
                    justifyContent="center"
                    alignItems="center"
                    justifyItems="center"
                  >
                    <Radio value="win">Win</Radio>
                    <Radio value="draw">Draw</Radio>
                    <Radio value="loss">Loss</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
              <InputGroup gap={2} alignItems="center">
                <MdOutlineScoreboard color="gray.300" fontSize="larger" />

                <InputGroup gap={2} alignItems="center">
                  <FormControl isRequired>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Home Team"
                      textAlign="center"
                      onChange={(e) =>
                        setHomeTeamGoals(parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                  <Text>-</Text>
                  <FormControl isRequired>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Away Team"
                      textAlign="center"
                      onChange={(e) =>
                        setAwayTeamGoals(parseInt(e.target.value))
                      }
                    />
                  </FormControl>
                </InputGroup>
              </InputGroup>
              <Divider />
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PiSoccerBallFill color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  min={0}
                  placeholder="Goals Scored"
                  onChange={(e) => setGoalsScored(parseInt(e.target.value))}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <GiBarefoot color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  min={0}
                  placeholder="Assists Proivded"
                  onChange={(e) => setAssistsProvided(parseInt(e.target.value))}
                />
              </InputGroup>
              <InputGroup gap={4}>
                <InputLeftElement pointerEvents="none">
                  <TbRectangleVerticalFilled color="yellow" />
                </InputLeftElement>
                <Input
                  type="number"
                  min={0}
                  placeholder="Yellow Rcvd"
                  onChange={(e) =>
                    setYellowCardsReceived(parseInt(e.target.value))
                  }
                />

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <TbRectangleVerticalFilled color="red" />
                  </InputLeftElement>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Red Rcvd"
                    onChange={(e) =>
                      setRedCardsReceived(parseInt(e.target.value))
                    }
                  />
                </InputGroup>
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <GiWhistle color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  min={0}
                  placeholder="Fouls Commited"
                  onChange={(e) => setFoulsCommited(parseInt(e.target.value))}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <BiPlusMedical color="gray.300" />
                </InputLeftElement>
                <Input
                  type="number"
                  min={0}
                  placeholder="Fouls Obtained"
                  onChange={(e) => setFoulsObtained(parseInt(e.target.value))}
                />
              </InputGroup>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Your Match Highlights
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel p={0}>
                    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
                      <TabList display="flex" justifyContent="center">
                        <Tab fontSize="smaller">Attack</Tab>
                        <Tab fontSize="smaller">Midfield.</Tab>
                        <Tab fontSize="smaller">Defence</Tab>
                        <Tab fontSize="smaller">GK</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel p={3}>
                          <RadioGroup
                            onChange={(e) => setGoalsRadioValue(e)}
                            value={goalsRadioValue}
                          >
                            <Stack direction="column">
                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<BiBullseye />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Get on the Scoresheet
                                  </Text>
                                  <Text fontSize="small">
                                    Score 1 goal in a single match.
                                  </Text>
                                </Box>

                                <Radio value="getOnTheScoresheet" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="2"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<BsBraces />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Bag a brace
                                  </Text>
                                  <Text fontSize="small">
                                    Score 2 goals in a single match.
                                  </Text>
                                </Box>

                                <Radio value="bagABrace" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GoGoal />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Score a Hat-Trick
                                  </Text>
                                  <Text fontSize="small">
                                    Score 3 goals in a single match.
                                  </Text>
                                </Box>

                                <Radio value="scoreAHattrick" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<PiNumberFourFill />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Fantastic Four
                                  </Text>
                                  <Text fontSize="small">
                                    Score 4 goals in a single match.
                                  </Text>
                                </Box>

                                <Radio value="fantasticFour" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiPokerHand />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Poker Master
                                  </Text>
                                  <Text fontSize="small">
                                    Score 5 goals in a single match.
                                  </Text>
                                </Box>

                                <Radio value="pokerMaster" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaBook />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    History Maker
                                  </Text>
                                  <Text fontSize="small">
                                    Score 6+ goals in a single match.
                                  </Text>
                                </Box>

                                <Radio value="historyMaker" />
                              </Box>
                            </Stack>
                          </RadioGroup>
                          <MatchHighlight
                            highlightTitle="Let the Show Begin"
                            highlightText="Score the first goal of the match."
                            highlightIcon={MdTheaterComedy}
                            highlightState={letTheShowBegin}
                            setHighlightState={setLetTheShowBegin}
                          />

                          <MatchHighlight
                            highlightTitle="Slingshot"
                            highlightText="Score a goal from a volley."
                            highlightIcon={GiSlingshot}
                            highlightState={slingshot}
                            setHighlightState={setSlingshot}
                          />

                          <MatchHighlight
                            highlightTitle="Around The Planet"
                            highlightText="Score a goal with a delicate finesse shot."
                            highlightIcon={GiMoonOrbit}
                            highlightState={aroundThePlanet}
                            setHighlightState={SetAroundThePlanet}
                          />

                          <MatchHighlight
                            highlightTitle="Hawkeye"
                            highlightText="Score a goal directly from a free-kick"
                            highlightIcon={GiBowman}
                            highlightState={hawkeye}
                            setHighlightState={setHawkeye}
                          />
                          <MatchHighlight
                            highlightTitle="Cannonball"
                            highlightText="Score a goal from outside the penalty area with a powerful shot."
                            highlightIcon={GiLuciferCannon}
                            highlightState={cannonball}
                            setHighlightState={setCannonball}
                          />

                          <MatchHighlight
                            highlightTitle="No Excuses"
                            highlightText="Score a goal with your weak foot."
                            highlightIcon={GiWingfoot}
                            highlightState={noExcuses}
                            setHighlightState={setNoExcuses}
                          />

                          <MatchHighlight
                            highlightTitle="Cold-blooded Beast"
                            highlightText="Score from a Penalty Kick."
                            highlightIcon={GiSnakeBite}
                            highlightState={coldBloodedBeast}
                            setHighlightState={setColdBloodedBeast}
                          />
                          <MatchHighlight
                            highlightTitle="Aerial Threat"
                            highlightText="Score a Header."
                            highlightIcon={GiCommercialAirplane}
                            highlightState={aerialThreat}
                            setHighlightState={setAerialThreat}
                          />
                          <MatchHighlight
                            highlightTitle="Silky Smooth"
                            highlightText="Score with a chip shot."
                            highlightIcon={FaFeatherAlt}
                            highlightState={silkySmooth}
                            setHighlightState={setSiklySmooth}
                          />
                          <MatchHighlight
                            highlightTitle="Lucky Charm"
                            highlightText="Score from a rebound."
                            highlightIcon={GiHorseshoe}
                            highlightState={luckyCharm}
                            setHighlightState={setLuckyCharm}
                          />

                          <MatchHighlight
                            highlightTitle="Heel of A Goal"
                            highlightText="Score a goal with your backheel."
                            highlightIcon={PiHighHeel}
                            highlightState={heelOfAGoal}
                            setHighlightState={setHeelOfAGoal}
                          />

                          <MatchHighlight
                            highlightTitle="Innate Talent"
                            highlightText="Score a beautiful bycicle kick goal."
                            highlightIcon={GiAcrobatic}
                            highlightState={innateTalent}
                            setHighlightState={setInnateTalent}
                          />

                          <MatchHighlight
                            highlightTitle="La Pulga"
                            highlightText="Score a goal after a Messi-esque dribbling."
                            highlightIcon={GiPathDistance}
                            highlightState={laPulga}
                            setHighlightState={setLaPulga}
                          />

                          <MatchHighlight
                            highlightTitle="One In A Million"
                            highlightText="Score a rare scorpion kick goal."
                            highlightIcon={GiScorpionTail}
                            highlightState={oneInAMillion}
                            setHighlightState={setOneInAMillion}
                          />

                          <MatchHighlight
                            highlightTitle="Last Minute Hero"
                            highlightText="Score a goal in the dying minutes of the match to level the score."
                            highlightIcon={MdBalance}
                            highlightState={lastMinuteHero}
                            setHighlightState={setLastMinuteHero}
                          />

                          <MatchHighlight
                            highlightTitle="Final Word"
                            highlightText="Score the decisive goal that secures victory for the team."
                            highlightIcon={GiTrophyCup}
                            highlightState={finalWord}
                            setHighlightState={setFinalWord}
                          />
                        </TabPanel>
                        <TabPanel p={3}>
                          <RadioGroup
                            onChange={(e) => setAssistsRadioValue(e)}
                            value={assistsRadioValue}
                          >
                            <Stack direction="column">
                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaHandsHelping />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    A Pleasure Doing Business
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 1 assist in a single match.
                                  </Text>
                                </Box>

                                <Radio value="aPleasureDoingBusiness" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="2"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaBreadSlice />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Food On The Table
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 2 assists in a single match.
                                  </Text>
                                </Box>

                                <Radio value="foodOnTheTable" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<ImMagicWand />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Assists Maestro
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 3 assists in a single match.
                                  </Text>
                                </Box>

                                <Radio value="assistsMaestro" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<ImTruck />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Industrial Provider
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 4 assists in a single match.
                                  </Text>
                                </Box>

                                <Radio value="industrialProvider" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiMagicPalm />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Puppet Master
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 5 assists in a single match.
                                  </Text>
                                </Box>

                                <Radio value="puppetMaster" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaRegEye />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Omniscient
                                  </Text>
                                  <Text fontSize="small">
                                    Provide 6+ assists in a single match.
                                  </Text>
                                </Box>

                                <Radio value="omniscient" />
                              </Box>

                              <MatchHighlight
                                highlightTitle="Cornerstone Presence"
                                highlightText="Provide an assist directly from a corner kick."
                                highlightIcon={LuFlagTriangleLeft}
                                highlightState={cornerstonePresence}
                                setHighlightState={setCornerstonePresence}
                              />

                              <MatchHighlight
                                highlightTitle="Marksman"
                                highlightText="Provide an assist from a cross."
                                highlightIcon={BiCross}
                                highlightState={marksman}
                                setHighlightState={setMarksman}
                              />

                              <MatchHighlight
                                highlightTitle="Telescope Vision"
                                highlightText="Provide an assist with a pass from your own half of the pitch."
                                highlightIcon={GoTelescope}
                                highlightState={telescopeVision}
                                setHighlightState={setTelescopeVision}
                              />
                            </Stack>
                          </RadioGroup>
                        </TabPanel>

                        <TabPanel>
                          <RadioGroup
                            onChange={(e) => setDefenceSavesRadioValue(e)}
                            value={defenceRadioValue}
                          >
                            <Stack direction="column">
                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiGiant />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    The Giant
                                  </Text>
                                  <Text fontSize="small">
                                    Stop between 1-3 opponent attacks during the
                                    game.
                                  </Text>
                                </Box>

                                <Radio value="theGiant" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="2"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiHumanPyramid />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    One Man Army
                                  </Text>
                                  <Text fontSize="small">
                                    Stop between 4-7 opponent attacks during the
                                    game.
                                  </Text>
                                </Box>

                                <Radio value="oneManArmy" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaMonument />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    The Monument
                                  </Text>
                                  <Text fontSize="small">
                                    Stop between 8-12 opponent attacks during
                                    the game.
                                  </Text>
                                </Box>

                                <Radio value="theMonument" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiMaze />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    The Path Breaker
                                  </Text>
                                  <Text fontSize="small">
                                    Stop between 13-16 opponent attacks during
                                    the game.
                                  </Text>
                                </Box>

                                <Radio value="thePathBreaker" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiMountaintop />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    The Mountain
                                  </Text>
                                  <Text fontSize="small">
                                    Stop 17+ opponent attacks during the game.
                                  </Text>
                                </Box>

                                <Radio value="theMountain" />
                              </Box>
                            </Stack>
                          </RadioGroup>

                          <MatchHighlight
                            highlightTitle="You Shall Not Pass"
                            highlightText="You played as a defender and your team didn't concede any goal."
                            highlightIcon={GiBrickWall}
                            highlightState={youShallNotPass}
                            setHighlightState={setYouShallNotPass}
                          />

                          <MatchHighlight
                            highlightTitle="Tackling Titan"
                            highlightText="You played as a defender and executed multiple tackles."
                            highlightIcon={GiColombianStatue}
                            highlightState={tacklingTitan}
                            setHighlightState={setTacklingTitan}
                          />

                          <MatchHighlight
                            highlightTitle="Lead From The Back"
                            highlightText="You played as a defender and organized your team's defence."
                            highlightIcon={GiCaptainHatProfile}
                            highlightState={leadFromTheBack}
                            setHighlightState={setLeadFromTheBack}
                          />

                          <MatchHighlight
                            highlightTitle="The Saviour"
                            highlightText="You played as a defender and made goal-line clearances/goal-saving blocks."
                            highlightIcon={LiaCrossSolid}
                            highlightState={theSaviour}
                            setHighlightState={setTheSaviour}
                          />

                          <MatchHighlight
                            highlightTitle="Counter-Attacking Catalyst"
                            highlightText="You played as a defender and often drove forward initiating attacks."
                            highlightIcon={PiArrowsCounterClockwiseDuotone}
                            highlightState={counterAttackingCatalyst}
                            setHighlightState={setCounterAttackingCatalust}
                          />
                        </TabPanel>

                        <TabPanel>
                          <RadioGroup
                            onChange={(e) => setSavesRadioValue(e)}
                            value={savesRadioValue}
                          >
                            <Stack direction="column">
                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<BsFillSignStopFill />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    You Stop Here!
                                  </Text>
                                  <Text fontSize="small">
                                    Make between 1-3 saves during the match.
                                  </Text>
                                </Box>

                                <Radio value="youStopHere" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="2"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiAngryEyes />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    I'm Not Kidding
                                  </Text>
                                  <Text fontSize="small">
                                    Make between 4-6 saves during the match.
                                  </Text>
                                </Box>

                                <Radio value="imNotKidding" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<FaGitkraken />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    The Kraken
                                  </Text>
                                  <Text fontSize="small">
                                    Make between 7-9 saves during the match.
                                  </Text>
                                </Box>

                                <Radio value="theKraken" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiAngelWings />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Guardian Angel
                                  </Text>
                                  <Text fontSize="small">
                                    Make between 10-14 saves during the match.
                                  </Text>
                                </Box>

                                <Radio value="guardianAngel" />
                              </Box>

                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 8fr 1fr"
                                gap="1"
                                alignItems="center"
                              >
                                <IconButton
                                  aria-label="highlight icon"
                                  icon={<GiGalaxy />}
                                  fontSize="1.25rem"
                                  backgroundColor="lightgray"
                                />
                                <Box>
                                  <Text fontSize="small" fontWeight="bold">
                                    Protector Of The Galaxy
                                  </Text>
                                  <Text fontSize="small">
                                    Make 15+ saves during the match.
                                  </Text>
                                </Box>

                                <Radio value="protectorOfTheGalaxy" />
                              </Box>
                            </Stack>
                          </RadioGroup>

                          <MatchHighlight
                            highlightTitle="Living In A Fortress"
                            highlightText="You played as a goalkeeper and your team didn't concede any goal."
                            highlightIcon={GiLockedFortress}
                            highlightState={livingInAFortress}
                            setHighlightState={setLivingInAFortress}
                          />

                          <MatchHighlight
                            highlightTitle="The Only Hero"
                            highlightText="You played as a goalkeeper and saved a penalty."
                            highlightIcon={GiGoalKeeper}
                            highlightState={theOnlyHero}
                            setHighlightState={setTheOnlyHero}
                          />

                          <MatchHighlight
                            highlightTitle="Instant Reflexes"
                            highlightText="Make a one-on-one save against an opposing player."
                            highlightIcon={GiFeline}
                            highlightState={instantReflexes}
                            setHighlightState={setInstantReflexes}
                          />
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Additional Indicators
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel gap={2} p={0}>
                    <InputGroup>
                      <InputLeftElement pointerEvents="none">
                        <BsFillHeartPulseFill color="gray.300" />
                      </InputLeftElement>
                      <Input
                        type="number"
                        min={0}
                        placeholder="Heartrate"
                        onChange={(e) => setHeartRate(parseInt(e.target.value))}
                      />
                    </InputGroup>

                    <InputGroup mt={2} gap={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents="none">
                          <GiPathDistance color="gray.300" />
                        </InputLeftElement>
                        <Input
                          type="number"
                          min={0}
                          placeholder="Distance"
                          onChange={(e) =>
                            setDistance(parseInt(e.target.value))
                          }
                        />
                      </InputGroup>

                      <Select onChange={(e) => setDistanceUnit(e.target.value)}>
                        <option value="km">m</option>
                        <option value="km">km</option>
                        <option value="mi">mi</option>
                      </Select>
                    </InputGroup>

                    <FormControl>
                      <InputGroup mt={2}>
                        <InputLeftElement pointerEvents="none">
                          <BsFillCameraReelsFill color="gray.300" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Add match recording link"
                          onChange={(e) =>
                            setMatchRecordingLink(e.target.value)
                          }
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      p={2}
                      gap={2}
                    >
                      <Button
                        size="xs"
                        rightIcon={<BsFillImageFill />}
                        colorScheme="blue"
                        variant="outline"
                        onClick={handleProfilePhotoChange}
                      >
                        Select Picture
                      </Button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png, image/jpeg"
                        hidden
                        onChange={handleFileChange}
                      />
                      {fileSource && (
                        <Button
                          size="xs"
                          rightIcon={<RiDeleteBin6Fill />}
                          colorScheme="blue"
                          variant="outline"
                          onClick={handleRemoveMatchPicture}
                        >
                          Remove Picture
                        </Button>
                      )}
                    </FormControl>
                    {fileSource && (
                      <Image
                        src={fileSource || matchImage}
                        alt="upload"
                        borderRadius="5px"
                      />
                    )}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Text>Match Comments</Text>
              <Textarea
                value={textareaValue}
                variant="filled"
                onChange={(e) => setTextareaValue(e.target.value)}
                placeholder="Add your thoguhts about the match."
                size="sm"
              />

              <Text textAlign="center">Rate your match performance</Text>
              <Box pt={6} pb={2} pl={3} pr={3}>
                <Slider
                  max={10}
                  min={1}
                  step={0.5}
                  aria-label="slider-ex-6"
                  onChange={(val) => setMatchPerformance(val)}
                >
                  <SliderMark value={2.5} {...labelStyles}>
                    2.5
                  </SliderMark>
                  <SliderMark value={5.0} {...labelStyles}>
                    5.0
                  </SliderMark>
                  <SliderMark value={7.5} {...labelStyles}>
                    7.5
                  </SliderMark>
                  <SliderMark
                    value={matchPerformance}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {matchPerformance}
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
              <Button
                rightIcon={<BiSolidEditAlt />}
                colorScheme="blue"
                variant="solid"
                m={3}
                type="submit"
                onClick={() => handleSubmit}
                isDisabled={buttonDisabledCheck}
              >
                {buttonDisabledCheck ? "Please wait" : "Add New Match"}
              </Button>
            </Stack>
          </form>

          {savingMatch && (
            <Box
              width="100%"
              justifyContent="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
}
