import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Stack
  } from '@chakra-ui/react'

  
  import { AiOutlineInfoCircle } from "react-icons/ai";
function RatingHelpModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <AiOutlineInfoCircle onClick={onOpen} />

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>How to rate yourself correctly</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={3}>
                <Text>
                  Accurately rating your performance after each match is more
                  than just a number – it's a step towards becoming a better
                  player!
                </Text>

                <Text>
                  <strong>How it works:</strong>
                  <br />
                  By default, you start with a rating of 5. For every positive
                  action in the match, or negative action, you should either
                  increase or decrease your rating. 
                  <br/>
                  The rate at which you should
                  evaluate your impact should vary inversly with the match type.
                  For example, scoring a goal in a 5 vs 5 match is generally
                  less difficult than scoring one in an 8 vs 8 match, or
                  especially 11 vs 11.
                </Text>

                <Text>
                  <strong>Examples:</strong>
                  <br />
                  <strong>1. Goal Contributions (+0.5-1)</strong>: Did you score a goal? Add +0.5/+1 to
                  your rating for each one.
                  <br />
                  <br/>
                  <strong>2. Assists (+0.5)</strong>: If you provided an assist, consider adding
                  +0.5 to your rating for each one.
                  <br/>
                  <br/>
                  <strong>3. Passing Accuracy (+0.5)</strong>: High
                  passing accuracy? Considering adding a total of 0.5 to your rating.
                  <br/>
                  <br/>
                  <strong>4.Defensive Actions (+0.5 to +1)</strong>: Think of successful tackles,
                  interceptions, blocks, and add between +0.5 and +1 to your
                  rating. More significant defensive contributions can justify a
                  higher increase, and especially if you played as a defender.
                  <br/>
                  <br/>
                  <strong>5. Ball Possession (+0.5)</strong>:<br/> More touches
                  on the ball? Consider adding +0.5. Higher
                  possession indicates active involvement. 
                  <br/>
                  <br/>
                  <strong>7. Movement (+0.5)</strong>: Did
                  your off-the-ball movement create opportunities? Add +0.5 to
                  your rating. 
                  <br/>
                  <br/>
                  <strong>8. Work Rate (+0.5 to +1)</strong>: Consider your overall effort. Add between
                  +0.5 and +1 to your rating. Exceptional work rate justifies a
                  higher increase. 
                  <br/>
                  <br/>
                  <strong>9. Involvement (+0.5):</strong><br/>
                  Did you try to support your teammates, by making yourself available for passes,
                  but also passing the ball yourself? Add +0.5 to your rating.
                  <br/>
                  <br/>
                  <strong>9. Contribution to Team Dynamics (+0.5):</strong><br/>
                  Positive interactions with teammates? Add
                  +0.5 to your rating for fostering team spirit.
                  <br/>

                </Text>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default RatingHelpModal