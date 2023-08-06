import { useContext, useState,FormEvent } from "react";
import {
  Button,
  Text,
  Stack,
  Input,
  Box,
  Container,
  InputGroup,
  InputLeftElement,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  FormControl,
  Avatar,
  WrapItem,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  useToast,
  Divider,
  Switch
} from "@chakra-ui/react";
import { AuthContext } from "../../context/Auth";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { GiFootprint } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";
import { LiaTshirtSolid } from "react-icons/lia";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import updateProfile from "../../utils/firebaseFunctions/updateProfile";
export default function Profile() {
  const { currentUser, currentUserData } = useContext(AuthContext);

  const [sex, setSex] = useState(currentUserData.sex);
  const [profileImage, setProfileImage] = useState(currentUserData.profileImage)
  const [preferredFoot, setPreferredFoot] = useState(
    currentUserData.preferredFoot
  );
  const [playingExperience, setPlayingExperience] = useState(
    currentUserData.playingExperience
  );
  const [measurementSystem, setMeasurementSystem] = useState(
    currentUserData.measurementSystem
  );
  const [shirtName, setShirtName] = useState(currentUserData.shirtName)
  const [firstName, setFirstName] = useState(currentUserData.firstName);
  const [lastName, setLastName] = useState(currentUserData.lastName);
  const [verified, setVerified] = useState(currentUserData.verified);
  const [hideProfile, setHideProfile] = useState(currentUserData.hideProfile);
  const [hideSupporters, setHideSupporters] = useState(
    currentUserData.hideSupporters
  );

  const [hideSupporting, setHideSupporting] = useState(
    currentUserData.hideSupporting
  );
  const [shirtNumber, setShirtNumber] = useState(currentUserData.shirtNumber);
  const [preferredPosition, setPreferredPosition] = useState(
    currentUserData.preferredPosition
  );
  const [instagramProfile, setInstagramProfile] = useState(
    currentUserData.instagramProfile
  );
  const [facebookProfile, setFacebookProfile] = useState(
    currentUserData.facebookProfile
  );
  const [youtubeChannel, setYoutubeChannel] = useState(
    currentUserData.youtubeChannel
  );
  const [height, setHeight] = useState(currentUserData.height);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    setHeight(heightOptions[selectedIndex]);
  };

  const heightOptions: HeightOption[] = [
    { feet: 4, inches: 0 },
    { feet: 4, inches: 1 },
    { feet: 4, inches: 2 },
    { feet: 4, inches: 3 },
    { feet: 4, inches: 4 },
    { feet: 4, inches: 5 },
    { feet: 4, inches: 6 },
    { feet: 4, inches: 7 },
    { feet: 4, inches: 8 },
    { feet: 4, inches: 9 },
    { feet: 4, inches: 10 },
    { feet: 4, inches: 11 },

    { feet: 5, inches: 0 },
    { feet: 5, inches: 1 },
    { feet: 5, inches: 2 },
    { feet: 5, inches: 3 },
    { feet: 5, inches: 4 },
    { feet: 5, inches: 5 },
    { feet: 5, inches: 6 },
    { feet: 5, inches: 7 },
    { feet: 5, inches: 8 },
    { feet: 5, inches: 9 },
    { feet: 5, inches: 10 },
    { feet: 5, inches: 11 },

    { feet: 6, inches: 0 },
    { feet: 6, inches: 1 },
    { feet: 6, inches: 2 },
    { feet: 6, inches: 3 },
    { feet: 6, inches: 4 },
    { feet: 6, inches: 5 },
    { feet: 6, inches: 6 },
    { feet: 6, inches: 7 },
    { feet: 6, inches: 8 },
    { feet: 6, inches: 9 },
    { feet: 6, inches: 10 },
    { feet: 6, inches: 11 },

    { feet: 7, inches: 0 },
    { feet: 7, inches: 1 },
    { feet: 7, inches: 2 },
    { feet: 7, inches: 3 },
    { feet: 7, inches: 4 },
    { feet: 7, inches: 5 },
    { feet: 7, inches: 6 },
    { feet: 7, inches: 7 },
    { feet: 7, inches: 8 },
    { feet: 7, inches: 9 },
    { feet: 7, inches: 10 },
    { feet: 7, inches: 11 },
  ];
  const [selectedHeight, setSelectedHeight] = useState<HeightOption>(
    heightOptions[0] // Set the default selected height
  );

    const userDataToUpdate ={
      shirtName:shirtName,
      firstName:firstName,
      lastName:lastName,
      sex:sex,
      verified:verified,
      profileImage:profileImage,
      hideProfile:hideProfile,
      hideSupporters:hideSupporters,
      hideSupporting:hideSupporting,
      preferredFoot:preferredFoot,
      shirtNumber:shirtNumber,
      playingExperience:playingExperience,
      instagramProfile:instagramProfile,
      facebookProfile:facebookProfile,
      youtubeChannel:youtubeChannel,
      height:height,
    }

  const toast = useToast()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
    updateProfile(userDataToUpdate,currentUser.uid)

    toast({
      title: "Your profile was updated succesfully!",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <>
      <Container
        alignItems="center"
        justifyContent="center"
        display="grid"
        pb="75px"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3} mt={2}>
            <WrapItem display="flex" justifyContent="center">
              <Avatar size="2xl" src="https://bit.ly/sage-adebayo" />{" "}
            </WrapItem>
            <WrapItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Text textAlign="center" fontWeight="bold" p={1} fontSize="2rem">
                {`${currentUserData.firstName} ${currentUserData.lastName}`}
              </Text>
              <MdVerified size="2rem" />
            </WrapItem>
           
            <InputGroup gap={3}>
              <FormControl isRequired>
                <FormLabel>Shirt Name</FormLabel>
                <Input
                  variant="filled"
                  placeholder="Shirt name"
                  value={shirtName}
                  onChange={(e) => setShirtName(e.target.value)}
                />
              </FormControl>
            </InputGroup>
           
            <InputGroup gap={3}>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  variant="filled"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input
                  variant="filled"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
            </InputGroup>

            <InputGroup alignItems="center" gap={3}>
              {measurementSystem === "metric" ? (
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <LiaRulerVerticalSolid color="gray.300" size="1.5rem" />
                    </InputLeftElement>

                    <Input
                      onChange={(e) => setHeight(e.target.value)}
                      min={0}
                      variant="filled"
                      type="number"
                      placeholder="Height (cm)"
                      value={height}
                    />
                  </InputGroup>
                </FormControl>
              ) : (
                <FormControl>
                  <Select
                    defaultValue={height}
                    value={`${selectedHeight.feet}' ${selectedHeight.inches}"`}
                    onChange={handleHeightChange}
                  >
                    {heightOptions.map((option, index) => (
                      <option
                        key={index}
                        value={`${option.feet}' ${option.inches}"`}
                      >
                        {`${option.feet}' ${option.inches}"`}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              )}
              <InputGroup>
                <Select onChange={(e) => setMeasurementSystem(e.target.value)}>
                  <option value="metric">metric</option>
                  <option value="imperial">imperial</option>
                </Select>
              </InputGroup>
            </InputGroup>

            <InputGroup>
              <Select
                placeholder="Preferred Played Position"
                value={preferredPosition}
                onChange={(e) => setPreferredPosition(e.target.value)}
              >
                <option value="GK">Goalkeeper (GK)</option>
                <option value="centerback">Center-back (CB)</option>
                <option value="leftback">Left-back (LB)</option>
                <option value="rightback">Right-back (RB)</option>
                <option value="defensivemidfielder">
                  Defensive Midfielder (DMF)
                </option>
                <option value="centralmidfielder">
                  Central Midfielder (CMF)
                </option>
                <option value="leftmidfielder">Left Midfielder (LMF)</option>
                <option value="rightmidfielder">Right Midfielder (RMF)</option>
                <option value="attackingmidfielder">
                  Attacking Midfielder (AMF)
                </option>
                <option value="leftwinger">Left Winger (LWF)</option>
                <option value="rightwinger">Right Winger (RWF)</option>
                <option value="secondstricker">Second Striker (SS)</option>
                <option value="Central Forward">Central Forward (CF)</option>
              </Select>
            </InputGroup>

            <RadioGroup onChange={setSex} value={sex}>
              <Stack direction="row" alignItems="center">
                <BiMaleFemale color="gray.300" size="1.5rem" />
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Stack>
            </RadioGroup>
            <Divider />
            <Text>Preferred foot</Text>
            <RadioGroup onChange={setPreferredFoot} value={preferredFoot}>
              <Stack direction="row" alignItems="center">
                <GiFootprint color="gray.300" size="1.5rem" />
                <Radio value="left">Left</Radio>
                <Radio value="right">Right</Radio>
                <Radio value="both">Both</Radio>
              </Stack>
            </RadioGroup>

            <InputGroup>
              <FormControl>
                <FormLabel>Favorite Shirt Number</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <LiaTshirtSolid color="gray.300" size="1.5rem" />
                  </InputLeftElement>

                  <Input
                    onChange={(e) => setShirtNumber(e.target.value)}
                    min={1}
                    max={100}
                    variant="filled"
                    type="number"
                    placeholder="Favorite Shirt Number"
                    value={shirtNumber}
                  />
                </InputGroup>
              </FormControl>
            </InputGroup>

            <Text>For how long have you been playing football?</Text>
            <Box pt={5} pb={2}>
              <Slider
                value={playingExperience}
                max={20}
                aria-label="slider-ex-6"
                onChange={(val) => setPlayingExperience(val)}
              >
                <SliderMark value={3} {...labelStyles}>
                  +3y
                </SliderMark>
                <SliderMark value={7} {...labelStyles}>
                  +7y
                </SliderMark>
                <SliderMark value={11} {...labelStyles}>
                  +11y
                </SliderMark>
                <SliderMark value={16} {...labelStyles}>
                  +16y
                </SliderMark>

                <SliderMark
                  value={playingExperience}
                  textAlign="center"
                  bg="blue.500"
                  color="white"
                  mt="-10"
                  ml="-5"
                  w="12"
                >
                  {playingExperience}+
                </SliderMark>

                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>

            <InputGroup>
              <FormControl>
                <FormLabel>Your Instagram Profile Link</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaInstagramSquare color="gray.300" size="1.5rem" />
                  </InputLeftElement>

                  <Input
                    onChange={(e) => setInstagramProfile(e.target.value)}
                    value={instagramProfile}
                    variant="filled"
                    type="text"
                    placeholder="Your Instagram Profile Link"
                  />
                </InputGroup>
              </FormControl>
            </InputGroup>

            <InputGroup>
              <FormControl>
                <FormLabel>Your Facebook Profile Link</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaFacebook color="gray.300" size="1.5rem" />
                  </InputLeftElement>

                  <Input
                    onChange={(e) => setFacebookProfile(e.target.value)}
                    value={facebookProfile}
                    variant="filled"
                    type="text"
                    placeholder="Your Facebook Profile Link"
                  />
                </InputGroup>
              </FormControl>
            </InputGroup>

            <InputGroup>
              <FormControl>
                <FormLabel>Your Youtube Channel Profile Link</FormLabel>

                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <BsYoutube color="gray.300" size="1.5rem" />
                  </InputLeftElement>

                  <Input
                    onChange={(e) => setYoutubeChannel(e.target.value)}
                    value={youtubeChannel}
                    variant="filled"
                    type="number"
                    placeholder="Your YouTube Channel Profile Link"
                  />
                </InputGroup>
              </FormControl>
            </InputGroup>

            <FormControl display="flex" alignItems="center" gap={2}>
            <Switch id="hide-profile" onChange={()=>setHideProfile(!hideProfile)} isChecked={hideProfile} />
              <FormLabel htmlFor="hide-profile" mb="0">
                Hide your profile from searches?
              </FormLabel>

            </FormControl>

            <FormControl display="flex" alignItems="center" gap={2}>
            <Switch id="hide-supporters"  onChange={()=>setHideSupporters(!hideSupporters)} isChecked={hideSupporters}/>
              <FormLabel htmlFor="hide-supporters" mb="0">
                Hide your supporters?
              </FormLabel>

            </FormControl>

            <FormControl display="flex" alignItems="center" gap={2}>
            <Switch id="hide-supporting"  onChange={()=>setHideSupporting(!hideSupporting)} isChecked={hideSupporting} />
              <FormLabel htmlFor="hide-supporting" mb="0">
                Hide who you support?
              </FormLabel>

            </FormControl>


            <Button
              rightIcon={GrDocumentUpdate}
              colorScheme="blue"
              variant="solid"
              m={3}
              type="submit"
              onClick={() => handleSubmit}
            >
              Update Profile
            </Button>
          </Stack>
        </form>
      </Container>
    </>
  );
}
