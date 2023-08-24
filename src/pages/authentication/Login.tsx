import { FcGoogle } from "react-icons/fc";
import { MdOutlineLogin } from "react-icons/md";
import createUserDoc from "../../utils/firebaseFunctions/createUserDoc";
import createOverallStatsDoc from "../../utils/firebaseFunctions/createOverallStatsDoc";
import createChartStatsDoc from "../../utils/firebaseFunctions/createChartStatsDoc";
import createReviewStatsDoc from "../../utils/firebaseFunctions/createReviewStatsDoc";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAdditionalUserInfo, signInWithEmailAndPassword
} from "firebase/auth";
import { ChangeEvent, useState } from "react";
import {auth} from "../../config/firebase";
import { FaFacebook } from 'react-icons/fa'
function Login() {
  
  const authentication = getAuth();
  const provider = new GoogleAuthProvider();  
  authentication.useDeviceLanguage();

  const facebookProvider = new FacebookAuthProvider();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function SignInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const newUserCheck = getAdditionalUserInfo(result);
        if (newUserCheck?.isNewUser) {
          createUserDoc(user.uid, user.displayName);
          createOverallStatsDoc(user.uid)
          createChartStatsDoc(user.uid)
          createReviewStatsDoc(user.uid)
        }
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function SignInWithFacebook() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const newUserCheck = getAdditionalUserInfo(result);
        if (newUserCheck?.isNewUser) {
          createUserDoc(user.uid, user.displayName);
          createOverallStatsDoc(user.uid)
          createChartStatsDoc(user.uid)
          createReviewStatsDoc(user.uid)
        }
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
 

  function handleLogIn(e: ChangeEvent<HTMLFormElement>) {
    console.log('works?')
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/invalid-email"
        ) {
            console.log('something')
        } else {
          console.log('another toast')
        }
      });
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={() => handleLogIn}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={3}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Stack spacing={4}>
                <Stack
                  direction={{ base: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link to="forgot-password">
                    <Text color={"blue.400"}>Forgot password?</Text>
                  </Link>
                  <Link to="/signup">
                    <Text color={"blue.400"}>Do you need account?</Text>
                  </Link>
                </Stack>
                <Button
                  leftIcon={<MdOutlineLogin />}
                  colorScheme="messenger"
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleLogIn}
                >
                  Sign in
                </Button>
                <Button
                  w={"full"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  onClick={SignInWithGoogle}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>

                <Button
                  w={"full"}
                  colorScheme={"facebook"}
                  leftIcon={<FaFacebook />}
                  onClick={SignInWithFacebook}
                >
                  <Center>
                    <Text>Continue with Facebook</Text>
                  </Center>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}

export default Login
