import ReAttributesHexChart from "../statistics/ReAttributesHexChart";
import {
  Container,
  Stack,
  Box,
  Text,
  RadioGroup,
  Radio,
  Card,
  CardBody,
  Button,
  Textarea
} from "@chakra-ui/react";
import { AuthContext } from "../../context/Auth";
import addNewRating from "../../utils/firebaseFunctions/addNewRating";
import { MdOutlineRateReview } from "react-icons/md";

interface Props{
  queriedUserId:string
}

import { useContext, useState } from "react";
function UserRating({queriedUserId}:Props) {

  const {currentUser,currentUserData} = useContext(AuthContext)
  const [reviewComment,setReviewComment] = useState('')
  const [sprint, setSprint] = useState("2")
  const [acceleration, setAcceleration] = useState("2")
  const [finishing, setFinishing] = useState("2")
  const [longShots, setLongShots] = useState("2")
  const [shotPower, setShotPower] = useState("2")
  const [curl, setCurl] = useState("2")
  const [weakFootUsage, setWeakFootUsage] = useState("2")
  const [shortPassing, setShortPassing] = useState("2")
  const [longPassing, setLongPassing] = useState("2")
  const [vision, setVision] = useState("2")
  const [crossing, setCrossing] = useState("2")
  const [weakFootAccuracy, setWeakFootAccuracy] = useState("2")
  const [ballControl, setBallControl] = useState("2")
  const [composure, setComposure] = useState("2")
  const [balance, setBalance] = useState("2")
  const [agility, setAgility] = useState("2")
  const [strength, setStrength] = useState("2")
  const [stamina, setStamina] = useState("2")
  const [jumping, setJumping] = useState("2")
  const [reactions, setReactions] = useState("2")
  const [headingAccuracy, setHeadingAccuracy] = useState("2")
  const [marking, setMarking] = useState("2")
  const [interceptions, setInterceptions] = useState("2")
  const [standingTackle, setStandingTackle] = useState("2")
  const [slidingTackle, setSlidingTackle] = useState("2")
  const [gKReflexes, setGKReflexes] = useState("2")
  const [gKCatching, setGKCatching] = useState("2")
  const [gKClearing, setGKClearing] = useState("2")

  const reviewToSubmit = {
    firstName:currentUserData.firstName,
    lastName:currentUserData.lastName,
    shirtName:currentUserData.shirtName,
    profileImage:currentUserData.profileImage,
    sprint: parseInt(sprint),
    acceleration: parseInt(acceleration),
    finishing: parseInt(finishing),
    longShots: parseInt(longShots),
    shotPower: parseInt(shotPower),
    curl: parseInt(curl),
    weakFootUsage: parseInt(weakFootUsage),
    shortPassing: parseInt(shortPassing),
    longPassing: parseInt(longPassing),
    vision: parseInt(vision),
    crossing: parseInt(crossing),
    weakFootAccuracy: parseInt(weakFootAccuracy),
    ballControl: parseInt(ballControl),
    composure: parseInt(composure),
    balance: parseInt(balance),
    agility: parseInt(agility),
    strength: parseInt(strength),
    stamina: parseInt(stamina),
    jumping: parseInt(jumping),
    reactions: parseInt(reactions),
    headingAccuracy: parseInt(headingAccuracy),
    marking: parseInt(marking),
    interceptions: parseInt(interceptions),
    standingTackle: parseInt(standingTackle),
    slidingTackle: parseInt(slidingTackle),
    gKReflexes: parseInt(gKReflexes),
    gKCatching: parseInt(gKCatching),
    gKClearing: parseInt(gKClearing),

    SPD: parseInt(sprint) + parseInt(acceleration),
    SHO:
      parseInt(finishing) +
      parseInt(longShots) +
      parseInt(shotPower) +
      parseInt(curl) +
      parseInt(weakFootUsage),
    PAS:
      parseInt(shortPassing) +
      parseInt(longPassing) +
      parseInt(vision) +
      parseInt(crossing) +
      parseInt(weakFootAccuracy),
    DRI:
      parseInt(ballControl) +
      parseInt(composure) +
      parseInt(balance) +
      parseInt(agility),
    DEF:
      parseInt(headingAccuracy) +
      parseInt(marking) +
      parseInt(interceptions) +
      parseInt(standingTackle) +
      parseInt(slidingTackle),
    PHY: parseInt(strength) + parseInt(stamina) + parseInt(jumping)+parseInt(reactions),
    GKP: parseInt(gKReflexes) + parseInt(gKCatching) + parseInt(gKClearing),
    reviewComment:reviewComment,
    country:{
      country:currentUserData.country.country,
      countryCode:currentUserData.country.countryCode
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        pb="80px"
        gap={3}
        flexDirection="column"
      >
        <ReAttributesHexChart />
        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Speed
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Sprint</strong> - Indicates how fast the player runs while
              at top speed:
            </Text>

            <RadioGroup onChange={setSprint} value={sprint}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Acceleration</strong> - Indicates how quickly the player
              is able to reach his top running speed:
            </Text>

            <RadioGroup onChange={setAcceleration} value={acceleration}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Shooting
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Finishing</strong> - Indicates the accuracy of shots with
              feet, inside the penalty area:
            </Text>

            <RadioGroup onChange={setFinishing} value={finishing}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Long Shots</strong> - Indicates the accuracy of shots from
              outside the penalty area:
            </Text>

            <RadioGroup onChange={setLongShots} value={longShots}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Shot Power</strong> - Indicates how hard the player hits
              the ball when taking a shot at goal and still be accurate:
            </Text>

            <RadioGroup onChange={setShotPower} value={shotPower}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Curl</strong> - Indicates the player's ability to curl the
              ball when passing and shooting:
            </Text>

            <RadioGroup onChange={setCurl} value={curl}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Weak Foot Usage</strong> - Indicates how often a player
              will use his weaker foot:
            </Text>

            <RadioGroup onChange={setWeakFootUsage} value={weakFootUsage}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Passing
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Short Passing</strong> - Indicates how well a player
              performs a short/ground pass to his teammate:
            </Text>

            <RadioGroup onChange={setShortPassing} value={shortPassing}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Long Passing</strong> - Indicates how well a player
              performs a long pass in the air to his teammate:
            </Text>

            <RadioGroup onChange={setLongPassing} value={longPassing}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Vision</strong> - Indicates the player's awareness of the
              position of his teammates & opponents around him:
            </Text>

            <RadioGroup onChange={setVision} value={vision}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Crossing</strong> - Indicates how accurately the player
              crosses the ball during both normal running and free kick set
              pieces:
            </Text>

            <RadioGroup onChange={setCrossing} value={crossing}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Weak Foot Accuracy</strong> - Indicates how accurate a
              player is with his weaker foot:
            </Text>

            <RadioGroup onChange={setWeakFootAccuracy} value={weakFootAccuracy}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Dribbling
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Ball control</strong> - Indicates the ability of a player
              to control the ball as he receives it:
            </Text>

            <RadioGroup onChange={setBallControl} value={ballControl}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Composure</strong> - Indicates at what distance the player
              with the ball starts feeling the pressure from the opponent.
            </Text>

            <RadioGroup onChange={setComposure} value={composure}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Balance</strong> - Indicates the ability to maintain
              balance after a physical challenge:
            </Text>

            <RadioGroup onChange={setBalance} value={balance}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Agility</strong> - Indicates how agile the player is while
              moving or turning:
            </Text>

            <RadioGroup onChange={setAgility} value={agility}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Physical
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Strength</strong> - Indicates how good the player is at
              winning challenges when coming into contact with another player.
            </Text>

            <RadioGroup onChange={setStrength} value={strength}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Stamina</strong> - Indicates the rate at which a player
              will tire during a game:
            </Text>

            <RadioGroup onChange={setStamina} value={stamina}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Jumping</strong> - Indicates the player's ability and
              quality for jumping from the surface for headers:
            </Text>

            <RadioGroup onChange={setJumping} value={jumping}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Reactions</strong> - Indicates how quickly a player
              responds to a situation happening around him:
            </Text>

            <RadioGroup onChange={setReactions} value={reactions}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Defending
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Heading Accuracy</strong> - Indicates the heading accuracy
              of the player for either a pass or a shot:
            </Text>

            <RadioGroup onChange={setHeadingAccuracy} value={headingAccuracy}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Marking</strong> - Indicates the ability to track and
              defend an opposing player:
            </Text>

            <RadioGroup onChange={setMarking} value={marking}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Interceptions</strong> - Indicates the ability to read the
              game and intercept passes:
            </Text>

            <RadioGroup onChange={setInterceptions} value={interceptions}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Standing Tackle</strong> - Indicates the ability of the
              player to time standing tackles so that they win the ball rather
              than give away a foul:
            </Text>

            <RadioGroup onChange={setStandingTackle} value={standingTackle}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>Sliding Tackle</strong> - Indicates the ability of the
              player to time sliding tackles so that they win the ball rather
              than give away a foul:
            </Text>

            <RadioGroup onChange={setSlidingTackle} value={slidingTackle}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>

        <Card
          display="grid"
          justifyContent="center"
          gap={5}
          p={2}
          variant="filled"
        >
          <Text textAlign="center" fontSize="1.25rem">
            Goalkeeping
          </Text>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>GK Reflexes</strong> - Indicates the goalkeeper's ability
              to make quick reaction saves:
            </Text>

            <RadioGroup onChange={setGKReflexes} value={gKReflexes}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>GK Catching</strong> - Indicates the goalkeeper's ability
              to catch the ball:
            </Text>

            <RadioGroup onChange={setGKCatching} value={gKCatching}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Text>
              <strong>GK Clearing</strong> - Indicates the goalkeeper's ability
              to knock the ball away to safe areas:
            </Text>

            <RadioGroup onChange={setGKClearing} value={gKClearing}>
              <Stack direction="row">
                <Radio bg="white" value="1">
                  Developing
                </Radio>
                <Radio bg="white" value="2">
                  Skilled
                </Radio>
                <Radio bg="white" value="3">
                  Proeficient
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Card>
        <Textarea
          value={reviewComment}
          variant="filled"
          onChange={(e) => setReviewComment(e.target.value)}
          placeholder="Add a comment to your review."
          size="sm"
        ></Textarea>
        <Button
          rightIcon={<MdOutlineRateReview />}
          colorScheme="alphaBlack"
          variant="outline"
          onClick={() =>
            addNewRating(reviewToSubmit, queriedUserId, currentUser.uid)
          }
        >
          Submit Player Review
        </Button>
      </Box>
    </>
  );
}
export default UserRating;
