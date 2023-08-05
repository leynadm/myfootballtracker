import { Box } from "@chakra-ui/react";
import { BsPeopleFill } from "react-icons/bs";
import { PiSoccerBallFill } from "react-icons/pi";
import { IconButton } from "@chakra-ui/react";
import { ImStatsDots } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
export default function Navbar() {
  
    const buttonStyle = {
    fontSize: "1.25rem",
    color: "blue.500",
    padding: "0.5rem",
    margin: "0.5rem",
  };

  const navigate = useNavigate()

  function handleClickHome(){
    navigate("game")
  }

  function handleClickSocial(){
    navigate("social")
  }

  function handleClickStats(){
    navigate("stats")
  }

  return (

      <Box
        zIndex={1}
        bg="gray.100"
        position="fixed"
        bottom="0"
        left="0"
        right="0"
        display="flex"
        justifyContent={{ base: "space-around", md: "center" }}
        margin="0.5rem"
      >
        <Box textAlign="center">
          <IconButton
            flex="1 1 0"
            p="1.5rem"
            aria-label="Home"
            icon={<PiSoccerBallFill fontSize="larger" />}
            style={buttonStyle}
            onClick={handleClickHome}
          />
        </Box>

        <Box textAlign="center">
          <IconButton
            flex="1 1 0"
            aria-label="Social"
            p="1.5rem"
            icon={<BsPeopleFill fontSize="larger" />}
            style={buttonStyle}
            onClick={handleClickSocial}
          />
        </Box>

        <Box textAlign="center">
          <IconButton
            flex="1 1 0"
            aria-label="Stats"
            p="1.5rem"
            icon={<ImStatsDots fontSize="larger" />}
            style={buttonStyle}
            onClick={handleClickStats}
          />
        </Box>
      </Box>
  );
}
