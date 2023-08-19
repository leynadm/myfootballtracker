'use client'
import { useNavigate } from 'react-router-dom'
import Logo from "../../../public/icons/android-chrome-192x192.png"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import OverallMatchInfo from "../game/OverallMatchInfo";
import NewMatch from "../game/NewMatch";
import MatchHistory from './MatchHistory'
import { Routes, Route } from "react-router-dom";
import { auth } from "../../config/firebase";
import { OverallStatsContext } from '../../context/OverallStats'

import Achievements from './Achievements'
import { useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}



export default function Overview() {

  const {overallStatsData, overallChartsData} = useContext(OverallStatsContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()


    function handleAchievementsClick(){
      navigate("achievements")
    }

    function handleMatchHistoryClick(){
      navigate("match-history")
    }

    function handleNewMatchClickAction(){
        navigate("new-game")
    }
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleMatchHistoryClick}>Match History</MenuItem>
              <MenuItem onClick={handleAchievementsClick}>Achievements</MenuItem>
              <MenuItem>Help</MenuItem>
              <MenuItem onClick={()=>auth.signOut()}>Log Out</MenuItem>
            </MenuList>
          </Menu>
          <HStack spacing={8} alignItems={"center"}>
            <Box>
            <Image
            w="4rem"
            src={Logo}
            alt="app logo"
            />

            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
              onClick={handleNewMatchClickAction}
            >
              Match
            </Button>
{/* 
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
                <MenuItem>Settings</MenuItem>
                <MenuItem>Account</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              </MenuList>
            </Menu>
             */}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>



        <Routes>
          <Route path="" index element={<OverallMatchInfo />} />
          <Route path="new-game" element={<NewMatch />} />
          <Route path="match-history" element={<MatchHistory />} />
          <Route path="achievements" element={<Achievements overallStatsData={overallStatsData} overallChartsData={overallChartsData}/>} />
        </Routes>
      </Box>
    </>
  );
}