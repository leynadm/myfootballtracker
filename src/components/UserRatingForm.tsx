import {
  Box,
  Text,
  Card,
  Button,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  useToast,
} from "@chakra-ui/react";

import { AuthContext } from "../context/Auth";
import addNewRating from "../utils/firebaseFunctions/addNewRating";
import { MdOutlineRateReview } from "react-icons/md";
import { OverallStatsContext } from "../context/OverallStats";
interface Props {
  queriedUserId: string;
  queriedUserReviewsStats: any;
}
import { useContext, useEffect, useState } from "react";

function UserRatingForm({ queriedUserId, queriedUserReviewsStats }: Props) {

  const {triggerDataRefresh} = useContext(OverallStatsContext)
  const toast = useToast();
  const [submitBtnText, setSubmitBtnText] = useState("Submit Player Review");
  const [submitBtnDisabledStatus, setSubmitBtnDisabledStatus] = useState(false);

  const { currentUser, currentUserData } = useContext(AuthContext);
  const [reviewComment, setReviewComment] = useState("");
  const [sprint, setSprint] = useState(5);
  const [acceleration, setAcceleration] = useState(5);
  const [finishing, setFinishing] = useState(5);
  const [longShots, setLongShots] = useState(5);
  const [shotPower, setShotPower] = useState(5);
  const [curl, setCurl] = useState(5);
  const [weakFootUsage, setWeakFootUsage] = useState(5);
  const [shortPassing, setShortPassing] = useState(5);
  const [longPassing, setLongPassing] = useState(5);
  const [vision, setVision] = useState(5);
  const [crossing, setCrossing] = useState(5);
  const [weakFootAccuracy, setWeakFootAccuracy] = useState(5);
  const [ballControl, setBallControl] = useState(5);
  const [composure, setComposure] = useState(5);
  const [balance, setBalance] = useState(5);
  const [agility, setAgility] = useState(5);
  const [strength, setStrength] = useState(5);
  const [stamina, setStamina] = useState(5);
  const [jumping, setJumping] = useState(5);
  const [reactions, setReactions] = useState(5);
  const [headingAccuracy, setHeadingAccuracy] = useState(5);
  const [marking, setMarking] = useState(5);
  const [interceptions, setInterceptions] = useState(5);
  const [standingTackle, setStandingTackle] = useState(5);
  const [slidingTackle, setSlidingTackle] = useState(5);
  const [gKReflexes, setGKReflexes] = useState(5);
  const [gKCatching, setGKCatching] = useState(5);
  const [gKClearing, setGKClearing] = useState(5);
  const [gKReach, setGKReach] = useState(5);
  const [gKPositioning, setGKPositioning] = useState(5);
  const [isPlayerGoalkeeper, setIsPlayerGoalkeeper] = useState(false);

  function handleAddNewRating() {
    
    addNewRating(reviewToSubmit, queriedUserId, currentUser.uid);

    toast({
      title: "Your rating has been submitted!",
      status: "success",
      isClosable: true,
      position: "top",
    });

    setSubmitBtnText("Review Submitted!");
    setSubmitBtnDisabledStatus(true);

    triggerDataRefresh()

  }

  const reviewToSubmit = {
    firstName: currentUserData.firstName,
    lastName: currentUserData.lastName,
    shirtName: currentUserData.shirtName,
    profileImage: currentUserData.profileImage,
    sprint: sprint,
    acceleration: acceleration,
    finishing: finishing,
    longShots: longShots,
    shotPower: shotPower,
    curl: curl,
    weakFootUsage: weakFootUsage,
    shortPassing: shortPassing,
    longPassing: longPassing,
    vision: vision,
    crossing: crossing,
    weakFootAccuracy: weakFootAccuracy,
    ballControl: ballControl,
    composure: composure,
    balance: balance,
    agility: agility,
    strength: strength,
    stamina: stamina,
    jumping: jumping,
    reactions: reactions,
    headingAccuracy: headingAccuracy,
    marking: marking,
    interceptions: interceptions,
    standingTackle: standingTackle,
    slidingTackle: slidingTackle,
    gKReflexes: gKReflexes,
    gKCatching: gKCatching,
    gKClearing: gKClearing,
    gKReach: gKReach,
    gKPositioning: gKPositioning,
    SPD: sprint + acceleration,
    SHO: finishing + longShots + shotPower + curl + weakFootUsage,
    PAS: shortPassing + longPassing + vision + crossing + weakFootAccuracy,
    DRI: ballControl + composure + balance + agility,
    DEF:
      headingAccuracy +
      marking +
      interceptions +
      standingTackle +
      slidingTackle,
    PHY: strength + stamina + jumping + reactions,
    GKP: gKReflexes + gKCatching + gKClearing + gKReach + gKPositioning,
    reviewComment: reviewComment,
    country: {
      country: currentUserData.country.country,
      countryCode: currentUserData.country.countryCode,
    },
    isPlayerGoalkeeper: isPlayerGoalkeeper,
    totalDefence: 0,
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        flexDirection="column"
      >

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
                <strong>Sprint</strong> - Indicates how fast the player runs
                while at top speed:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(sprint) => setSprint(sprint)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Acceleration</strong> - Indicates how quickly the player
                is able to reach his top running speed:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(acceleration) => setAcceleration(acceleration)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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
                <strong>Finishing</strong> - Indicates the accuracy of shots
                with feet, inside the penalty area:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(finishing) => setFinishing(finishing)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Long Shots</strong> - Indicates the accuracy of shots
                from outside the penalty area:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(longShots) => setLongShots(longShots)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Shot Power</strong> - Indicates how hard the player hits
                the ball when taking a shot at goal and still be accurate:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(shotPower) => setShotPower(shotPower)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Curl</strong> - Indicates the player's ability to curl
                the ball when passing and shooting:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(curl) => setCurl(curl)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Weak Foot Usage</strong> - Indicates how often a player
                will use his weaker foot:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(weakFootUsage) => setWeakFootUsage(weakFootUsage)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(shortPassing) => setShortPassing(shortPassing)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Long Passing</strong> - Indicates how well a player
                performs a long pass in the air to his teammate:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(longPassing) => setLongPassing(longPassing)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Vision</strong> - Indicates the player's awareness of
                the position of his teammates & opponents around him:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(vision) => setVision(vision)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Crossing</strong> - Indicates how accurately the player
                crosses the ball during both normal running and free kick set
                pieces:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(crossing) => setCrossing(crossing)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Weak Foot Accuracy</strong> - Indicates how accurate a
                player is with his weaker foot:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(weakFootAccuracy) =>
                  setWeakFootAccuracy(weakFootAccuracy)
                }
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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
                <strong>Ball Control</strong> - Indicates the ability of a
                player to control the ball as he receives it:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(ballControl) => setBallControl(ballControl)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Composure</strong> - Indicates at what distance the
                player with the ball starts feeling the pressure from the
                opponent.
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(composure) => setComposure(composure)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Balance</strong> - Indicates the ability to maintain
                balance after a physical challenge:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(balance) => setBalance(balance)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Agility</strong> - Indicates how agile the player is
                while moving or turning:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(agility) => setAgility(agility)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(strength) => setStrength(strength)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Stamina</strong> - Indicates the rate at which a player
                will tire during a game:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(stamina) => setStamina(stamina)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Jumping</strong> - Indicates the player's ability and
                quality for jumping from the surface for headers:
              </Text>
              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(jumping) => setJumping(jumping)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Reactions</strong> - Indicates how quickly a player
                responds to a situation happening around him:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(reactions) => setReactions(reactions)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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
                <strong>Heading Accuracy</strong> - Indicates the heading
                accuracy of the player for either a pass or a shot:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(headingAccuracy) =>
                  setHeadingAccuracy(headingAccuracy)
                }
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Marking</strong> - Indicates the ability to track and
                defend an opposing player:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(marking) => setMarking(marking)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Interceptions</strong> - Indicates the ability to read
                the game and intercept passes:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(interceptions) => setInterceptions(interceptions)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Standing Tackle</strong> - Indicates the ability of the
                player to time standing tackles so that they win the ball rather
                than give away a foul:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(standingTackle) => setStandingTackle(standingTackle)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>Sliding Tackle</strong> - Indicates the ability of the
                player to time sliding tackles so that they win the ball rather
                than give away a foul:
              </Text>

              <Slider
                min={0}
                max={10}
                step={1}
                onChange={(slidingTackle) => setSlidingTackle(slidingTackle)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              alignItems="center"
            >
              <Text>Is the player a goalkeeper?</Text>
              <Switch
                onChange={() => setIsPlayerGoalkeeper(!isPlayerGoalkeeper)}
                isChecked={isPlayerGoalkeeper}
              />
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>GK Reflexes</strong> - Indicates the goalkeeper's
                ability to make quick reaction saves:
              </Text>

              <Slider
                isDisabled={!isPlayerGoalkeeper}
                min={0}
                max={10}
                step={1}
                onChange={(gKReflexes) => setGKReflexes(gKReflexes)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>GK Catching</strong> - Indicates the goalkeeper's
                ability to catch the ball:
              </Text>

              <Slider
                isDisabled={!isPlayerGoalkeeper}
                min={0}
                max={10}
                step={1}
                onChange={(gKCatching) => setGKCatching(gKCatching)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>GK Clearing</strong> - Indicates the goalkeeper's
                ability to knock the ball away to safe areas:
              </Text>

              <Slider
                isDisabled={!isPlayerGoalkeeper}
                min={0}
                max={10}
                step={1}
                onChange={(gKClearing) => setGKClearing(gKClearing)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>GK Reach</strong> - Indicates the goalkeeper's coverage
                of the goal and the size of the area in which he can make saves:
              </Text>

              <Slider
                isDisabled={!isPlayerGoalkeeper}
                min={0}
                max={10}
                step={1}
                onChange={(gKReach) => setGKReach(gKReach)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
            </Box>

            <Box display="flex" flexDirection="column" gap={1}>
              <Text>
                <strong>GK Positioning</strong> - Indicates the goalkeeper's
                ability to position himself correctly in order in order to save
                a shot:
              </Text>

              <Slider
                isDisabled={!isPlayerGoalkeeper}
                min={0}
                max={10}
                step={1}
                onChange={(gKPositioning) => setGKPositioning(gKPositioning)}
              >
                <SliderTrack bg="blue.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="blue.500" />
                </SliderTrack>
                <SliderThumb boxSize={5} zIndex={0} />
              </Slider>
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
          isDisabled={submitBtnDisabledStatus}
            rightIcon={<MdOutlineRateReview />}
            colorScheme="alphaBlack"
            variant="outline"
            onClick={handleAddNewRating}
          >
            {submitBtnText}
          </Button>
        </Box>

    </>
  );
}
export default UserRatingForm;
