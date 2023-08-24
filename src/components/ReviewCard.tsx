import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Box,
  IconButton,
  Text,
  Heading,
  Avatar,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  
} from "@chakra-ui/react";

import addNewRatingData from "../utils/firebaseFunctions/addNewRatingData";
import { BsThreeDotsVertical } from "react-icons/bs";
import rejectReview from "../utils/firebaseFunctions/rejectReview";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import RatingDataToSubmit from "../utils/interfaces/ratingDataToSubmit";
import { BsHourglass } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";


interface Props {
  review: RatingDataToSubmit;
}

import { AuthContext } from "../context/Auth";
import { useContext, useEffect } from "react";
function ReviewCard({ review }: Props) {
  const { currentUser } = useContext(AuthContext);

  const dateObject = review.timestamp.toDate();

  // Format the date as a human-readable string
  const formattedDate = dateObject.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Card maxW="lg" >
        <CardHeader>
          <Flex>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={review.firstName} src={review.profileImage} />
              <Box>
                <Heading size="sm">{`${review.firstName} ${review.lastName}`}</Heading>
                <Tag size="sm" variant="outline" colorScheme="blue">
                  <TagLabel>{formattedDate}</TagLabel>
                  {review.reviewStatus === "pending"?
                  
                
                (                  <TagRightIcon as={BsHourglass} />):
              (<TagRightIcon as={AiOutlineCheckCircle} />)
              }

                </Tag>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Box
            display="flex"
            justifyContent="center"
            gap={3}
            flexDirection="column"
          >
            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Speed
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Sprint</Text>
                <Slider
                  defaultValue={review.sprint}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Sprint</Text>
                <Slider
                  defaultValue={review.sprint}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>
            </Card>

            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Shooting
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Finishing</Text>
                <Slider
                  defaultValue={review.finishing}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Long Shots</Text>
                <Slider
                  defaultValue={review.longShots}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Shot Power</Text>
                <Slider
                  defaultValue={review.shotPower}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Curl</Text>
                <Slider
                  defaultValue={review.curl}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Weak Foot Usage</Text>
                <Slider
                  defaultValue={review.weakFootUsage}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>
            </Card>

            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Passing
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Short Passing</Text>
                <Slider
                  defaultValue={review.shortPassing}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Long Passing</Text>
                <Slider
                  defaultValue={review.longPassing}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Vision</Text>
                <Slider
                  defaultValue={review.vision}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Crossing</Text>
                <Slider
                  defaultValue={review.crossing}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Weak Foot Accuracy</Text>
                <Slider
                  defaultValue={review.weakFootAccuracy}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>
            </Card>

            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Dribbling
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Ball Control</Text>
                <Slider
                  defaultValue={review.ballControl}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Composure</Text>
                <Slider
                  defaultValue={review.composure}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Balance</Text>
                <Slider
                  defaultValue={review.balance}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Agility</Text>
                <Slider
                  defaultValue={review.agility}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>
            </Card>

            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Physical
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Strength</Text>
                <Slider
                  defaultValue={review.strength}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Stamina</Text>
                <Slider
                  defaultValue={review.stamina}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Jumping</Text>
                <Slider
                  defaultValue={review.jumping}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Reactions</Text>
                <Slider
                  defaultValue={review.reactions}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>
            </Card>

            <Card gap={2} p={2} variant="filled" width="100%">
              <Text textAlign="center" fontSize="1.25rem">
                Defending
              </Text>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Heading Accuracy</Text>
                <Slider
                  defaultValue={review.headingAccuracy}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Marking</Text>
                <Slider
                  defaultValue={review.marking}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Interceptions</Text>
                <Slider
                  defaultValue={review.interceptions}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Standing Tackle</Text>
                <Slider
                  defaultValue={review.standingTackle}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              <Box display="flex" flexDirection="column" gap={1}>
                <Text>Sliding Tackle</Text>
                <Slider
                  defaultValue={review.slidingTackle}
                  min={0}
                  max={10}
                  step={1}
                  isReadOnly
                >
                  <SliderTrack bg="blue.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="blue.500" />
                  </SliderTrack>
                  <SliderThumb boxSize={5} />
                </Slider>
              </Box>

              {review.isPlayerGoalkeeper && (
                <Box>
                  <Box display="flex" flexDirection="column" gap={1}>
                    <Text>GK Reflexes</Text>
                    <Slider
                      isDisabled={!review.isPlayerGoalkeeper}
                      defaultValue={review.gKReflexes}
                      min={0}
                      max={10}
                      step={1}
                      isReadOnly
                    >
                      <SliderTrack bg="blue.100">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="blue.500" />
                      </SliderTrack>
                      <SliderThumb boxSize={5} />
                    </Slider>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1}>
                    <Text>GK Catching</Text>
                    <Slider
                      isDisabled={!review.isPlayerGoalkeeper}
                      defaultValue={review.gKCatching}
                      min={0}
                      max={10}
                      step={1}
                      isReadOnly
                    >
                      <SliderTrack bg="blue.100">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="blue.500" />
                      </SliderTrack>
                      <SliderThumb boxSize={5} />
                    </Slider>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1}>
                    <Text>GK Clearing</Text>
                    <Slider
                      isDisabled={!review.isPlayerGoalkeeper}
                      defaultValue={review.gKClearing}
                      min={0}
                      max={10}
                      step={1}
                      isReadOnly
                    >
                      <SliderTrack bg="blue.100">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="blue.500" />
                      </SliderTrack>
                      <SliderThumb boxSize={5} />
                    </Slider>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1}>
                    <Text>GK Reach</Text>
                    <Slider
                      isDisabled={!review.isPlayerGoalkeeper}
                      defaultValue={review.gKReach}
                      min={0}
                      max={10}
                      step={1}
                      isReadOnly
                    >
                      <SliderTrack bg="blue.100">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="blue.500" />
                      </SliderTrack>
                      <SliderThumb boxSize={5} />
                    </Slider>
                  </Box>

                  <Box display="flex" flexDirection="column" gap={1}>
                    <Text>GK Positioning</Text>
                    <Slider
                      isDisabled={!review.isPlayerGoalkeeper}
                      defaultValue={review.gKPositioning}
                      min={0}
                      max={10}
                      step={1}
                      isReadOnly
                    >
                      <SliderTrack bg="blue.100">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="blue.500" />
                      </SliderTrack>
                      <SliderThumb boxSize={5} />
                    </Slider>
                  </Box>
                </Box>
              )}
            </Card>

            <Textarea
              value={review.reviewComment}
              variant="filled"
              readOnly
              placeholder="Add a comment to your review."
              size="sm"
            ></Textarea>
          </Box>
        </CardBody>

        <CardFooter
  pl={4} pr={4} pb="50px" pt={0}
>
          <Box display="flex" justifyContent="center" alignItems="center" width="100%" gap={2} p={0} m={0}> 
          <Button
            flex="1"
            variant="outline"
            leftIcon={<IoIosCheckmarkCircle />}
            onClick={() => addNewRatingData(review, currentUser.uid)}
          >
            Approve
          </Button>
          <Button
            flex="1"
            variant="outline"
            leftIcon={<MdCancel />}
            onClick={() => rejectReview(currentUser.uid, review.id)}
          >
            Reject
          </Button>
          </Box>
        </CardFooter>
      </Card>
    </>
  );
}

export default ReviewCard;
