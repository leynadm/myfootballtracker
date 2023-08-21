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
  Avatar
} from "@chakra-ui/react";

import { BsThreeDotsVertical } from "react-icons/bs";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import RatingDataToSubmit from "../utils/interfaces/ratingDataToSubmit";
interface Props{
    review:RatingDataToSubmit
}

function ReviewCard({review}:Props) {
  
  return(

  
  <>
  
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={review.firstName} src={review.profileImage} />
            <Box>
              <Heading size="sm">{`${review.firstName} ${review.lastName}`}</Heading>
              <Text>{review.shirtName}</Text>
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
        <Text>
            {review.acceleration}
        </Text>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<IoIosCheckmarkCircle />}>
          Approve Review
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<MdCancel />}>
          Reject Review
        </Button>
      </CardFooter>
    </Card>
    
  </>)
}

export default ReviewCard;
