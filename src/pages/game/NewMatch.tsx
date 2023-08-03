import football_field from "../../assets/football_field.svg";
import { useNavigate } from "react-router-dom";
import { Radio, RadioGroup } from '@chakra-ui/react'
import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box, Container, Grid, 
  InputGroup,InputLeftElement, InputRightElement, background,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";

import { PiSoccerBallFill } from "react-icons/pi";
import { GiBarefoot } from "react-icons/gi";
import { Select } from '@chakra-ui/react'
import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GiWhistle } from "react-icons/gi";
import { BiPlusMedical } from "react-icons/bi";
import { useState } from "react";


interface Props {
  children: React.ReactNode;
}


const NavLink = (props: Props) => {
  const { children } = props;
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function NewMatch() {
  
  const boxStyle = {
    weight: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.2s", // Add a smooth transition effect

    _hover: {
      // Define styles for the hover effect
      backgroundColor: "red", // Change the background color on hover
      cursor: "pointer", // Change cursor to indicate interactivity
    },
    _focus: {
      backgroundColor: "red", // Change the background color on hover
      cursor: "pointer",
    },
  };

  const [winValue, setWinValue] = useState('')
  
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>

          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box paddingBottom="75px">
        <Container>
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
              style={boxStyle}
              gridArea="CF"
              bg="green.400"
              onClick={() => console.log("hi")}
            >
              CF
            </Box>

            <Box style={boxStyle} gridArea="SS" bg="green.400">
              SS
            </Box>

            <Box
              style={boxStyle}
              gridArea="LWF"
              bg="green.400"
              onClick={() => console.log("LWF")}
            >
              LWF
            </Box>
            <Box style={boxStyle} gridArea="RWF" bg="green.400">
              RWF
            </Box>
            <Box style={boxStyle} gridArea="LMF" bg="green.400">
              LMF
            </Box>
            <Box style={boxStyle} gridArea="AMF" bg="green.400">
              AMF
            </Box>
            <Box style={boxStyle} gridArea="RMF" bg="green.400">
              RMF
            </Box>
            <Box style={boxStyle} gridArea="CMF" bg="green.400">
              CMF
            </Box>
            <Box style={boxStyle} gridArea="DMF" bg="green.400">
              DMF
            </Box>
            <Box style={boxStyle} gridArea="LB" bg="green.400">
              LB
            </Box>
            <Box style={boxStyle} gridArea="CB" bg="green.400">
              CB
            </Box>
            <Box style={boxStyle} gridArea="RB" bg="green.400">
              RB
            </Box>
            <Box style={boxStyle} gridArea="GK" bg="green.400">
              GK
            </Box>
          </Grid>

          <Stack spacing={2} mt={4}>
            <InputGroup>
              <Select placeholder="Match Type">
                <option value="option1">5 vs 5</option>
                <option value="option2">6 vs 6</option>
                <option value="option3">7 vs 7</option>
                <option value="option3">8 vs 8</option>
                <option value="option3">9 vs 9</option>
                <option value="option3">10 vs 10</option>
                <option value="option3">11 vs 11</option>
              </Select>
            </InputGroup>

            <RadioGroup onChange={setWinValue} value={winValue}>
              <Stack direction="row" justify="center" align="center">
                <Radio value="1">Win</Radio>
                <Radio value="2">Loss</Radio>
              </Stack>
            </RadioGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PiSoccerBallFill color="gray.300" />
              </InputLeftElement>
              <Input type="number" min={0} placeholder="Goals" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <GiBarefoot color="gray.300" />
              </InputLeftElement>
              <Input type="number" min={0} placeholder="Assists" />
            </InputGroup>

            <InputGroup gap={4}>
              <InputLeftElement pointerEvents="none">
                <TbRectangleVerticalFilled color="yellow" />
              </InputLeftElement>
              <Input type="number" min={0} placeholder="Yellow" />

              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <TbRectangleVerticalFilled color="red" />
                </InputLeftElement>
                <Input type="number" min={0} placeholder="Red" />
              </InputGroup>
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <GiWhistle color="gray.300" />
              </InputLeftElement>
              <Input type="number" min={0} placeholder="Fouls Commited" />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <BiPlusMedical color="gray.300" />
              </InputLeftElement>
              <Input type="number" min={0} placeholder="Fouls Obtained" />
            </InputGroup>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Additional Performance Indicators
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

