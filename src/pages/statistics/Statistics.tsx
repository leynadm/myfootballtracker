'use client'
import { useNavigate } from 'react-router-dom'
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
  Container,
  IconButton
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons'
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { Routes, Route } from "react-router-dom";
import { auth } from "../../config/firebase";
import { OverallStatsContext } from '../../context/OverallStats'

import Achievements from './Achievements'
import { useContext } from 'react'
import OverallStats from './OverallStats'
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



export default function Statistics() {

  const {overallStatsData} = useContext(OverallStatsContext)

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
        



        <IconButton aria-label='Search database' icon={<HiOutlinePresentationChartBar />} />
                  
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
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

          </Flex>
          </Flex>


      </Box>

      <Box p={4}>



        <Routes>
        <Route path="" index element={<OverallStats />} />


        </Routes>
      </Box>
    </>
  );
}