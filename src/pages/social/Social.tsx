"use client";
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
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Container,
  Grid,
  IconButton,
  Divider,
  Badge,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

import Profile from "../game/Profile";
import { Search2Icon } from "@chakra-ui/icons";
import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  limit,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { useState, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
import SocialSearchResults from "./SocialSearchResults";
import SearchUserProfile from "./SearchUserProfile";
interface Props {
  children: React.ReactNode;
}
import Leaderboard from "./Leaderboard";
const Links = ["Dashboard", "Projects", "Team"];

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

export default function Social() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function handleProfileClick() {
    navigate("profile");
  }

  const [userToSearch, setUserToSearch] = useState("");
  const [usersFound, setUsersFound] = useState<any>({});
  const { currentUser, currentUserData } = useContext(AuthContext);

  async function getUsers() {
    let q;

    if (userToSearch !== "") {
      q = query(
        collection(db, "users"),
        where("fullname", "array-contains", userToSearch),
        where("hideProfile", "==", false)
      );
    } else {
      q = query(
        collection(db, "users"),
        where("hideProfile", "==", false),
        limit(5)
      );
    }

    const querySnapshot = await getDocs(q);

    const userResults: any[] = [];

    for (const doc of querySnapshot.docs) {
      const user = doc.data();
      user.id = doc.id;

      if (
        user.id !== currentUser.uid &&
        !currentUserData.blocked.includes(user.id)
      ) {
        const userStats = await getStatsDoc(doc.id);

        if (userStats) {
          user.stats = userStats;
        }

        userResults.push(user);
      }
    }

    setUsersFound(userResults);

    navigate("results", { state: { usersFound: userResults } });
  }

  async function getStatsDoc(docId: string) {
    console.log("inside getStatsDoc function");
    const overallStatsDocRef = doc(db, "users", docId, "stats/overall-stats");
    const overallStatsDocSnap = await getDoc(overallStatsDocRef);

    console.log(overallStatsDocSnap);
    if (overallStatsDocSnap.exists()) {
      const userOverallStatsData = overallStatsDocSnap.data();
      return userOverallStatsData;
    }

    return null;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserToSearch(event.target.value.toLocaleLowerCase());
    // Perform any necessary operations with the value
  };

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={1}
        >
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.300" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search for a player"
                bg="white"
                onChange={onChange}
                value={userToSearch}
              />
            </InputGroup>
          </Stack>
          <HStack spacing={8} alignItems={"center"}>
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
              onClick={getUsers}
            >
              Search
            </Button>

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
          <Route path="" index element={<Leaderboard />} />          
          <Route path="profile" index element={<Profile />} />
          <Route path="results/*" element={<SocialSearchResults />} />
          <Route path="results/u/:id/*" element={<SearchUserProfile />} />
          {/*
 
          <Route path="" index element={<OverallMatchInfo />} />
 
          <Route path="profile" index element={<Profile />} />

          <Route path="new-game" index element={<NewMatch />} />
          <Route path="match-history" index element={<MatchHistory />} />
         */}
        </Routes>
      </Box>
    </>
  );
}
