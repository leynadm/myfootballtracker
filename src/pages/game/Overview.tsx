'use client'
import { useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo.png"
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
  Image,
  IconButton
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import OverallMatchInfo from "../game/OverallMatchInfo";
import NewMatch from "../game/NewMatch";
import MatchHistory from './MatchHistory'
import { Routes, Route } from "react-router-dom";
import { auth } from "../../config/firebase";
import { OverallStatsContext } from '../../context/OverallStats'
import Reviews from './Reviews'
import Achievements from './Achievements'
import { useContext } from 'react'

interface Props {
  children: React.ReactNode
}

const Links = ['Match History', 'Achievements','Reviews', 'Help','Log Out']

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

    function handleReviewsClick(){
      navigate("reviews")
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
          <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
            
            <MenuList>
              <MenuItem onClick={handleMatchHistoryClick}>Match History</MenuItem>
              <MenuItem onClick={handleAchievementsClick}>Achievements</MenuItem>
              <MenuItem onClick={handleReviewsClick}>Reviews</MenuItem>
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
                <NavLink key={link}
                
                >{link}</NavLink>
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
          </Flex>
        </Flex>
     
        </Box>

      <Box p={4}>



        <Routes>
          <Route path="" index element={<OverallMatchInfo />} />
          <Route path="new-game" element={<NewMatch />} />
          <Route path="match-history" element={<MatchHistory />} />
          <Route path="achievements" element={<Achievements overallStatsData={overallStatsData} overallChartsData={overallChartsData}/>} />
          <Route path="reviews" element={<Reviews />} />
        
          
        </Routes>
      </Box>
    </>
  );
}