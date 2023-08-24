"use client";
import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
  IconButton,
  Image,Container
} from "@chakra-ui/react";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { Routes, Route } from "react-router-dom";
import { OverallStatsContext } from "../../context/OverallStats";
import Logo from "../../assets/logo.png"
import { useContext } from "react";
import OverallStats from "./OverallStats";
interface Props {
  children: React.ReactNode;
}



export default function Statistics() {


  const {overallChartsData} = useContext(OverallStatsContext)

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} display="flex">
          <IconButton
            aria-label="Search database"
            icon={<HiOutlinePresentationChartBar />}
          />

          <HStack spacing={8} alignItems={"center"}>
            <Box>
            <Image
            w="4rem"
            src={Logo}
            alt="app logo"
            />
            </Box>

          </HStack>

          <Flex alignItems={"center"}></Flex>
        </Flex>
      </Box>

      <Container p={4}>
        <Routes>
          <Route path="" index element={<OverallStats chartsData={overallChartsData} userCheck="currentUser" />}  />
        </Routes>
      </Container>
    </>
  );
}
