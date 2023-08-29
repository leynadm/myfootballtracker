import {
  Text,
  Stack,
  Box,
  Container,
  Grid,
  Divider,
  Tag,
  WrapItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";

function Help() {
  return (
    <>
      <Stack gap={2} pb="45px">
        <Text>
          Here's a small summary of the app's most important features:
        </Text>

        <Text>
          <Box>
            <strong>Match Tracking:</strong>
            <br /> Keep track of every exciting moment on the field. Add all the
            important details to your matches - the positions you played, goals
            you scored, assists you made, fouls you received or committed, and
            the cards you received. Don't forget to highlight your exceptional
            moments like scoring a brace or a hattrick, or making a killer
            assist via a cross. You can even upload a photo and link a recording
            of the match to relive the action.
          </Box>
          <Box>
            <strong>Statistics:</strong>
            <br /> Dive into your performance data and discover insights. Charts
            break down your progress by match date, week, month, and year. Check
            out your wins, losses, and goals contributions in a visually
            engaging way. See your improvement over time and pinpoint areas to
            focus on.
          </Box>
          <Text>
            <strong>Social Profile:</strong>
            <br /> Share your journey with fellow football enthusiasts. Your
            personalized social profile showcases all your match data. Follow
            other players, compare your stats head-to-head, and explore your
            position on the leaderboard. It's a space to connect, compete, and
            celebrate achievements with your football community.
          </Text>

          <Text>
            <strong>Achievements:</strong>
            <br /> Play your way to unlocking impressive achievements. Whether
            you're a goal-scoring machine, an assist magician, a defensive rock,
            or an all-rounder, there are accomplishments waiting for you. Rack
            up matches played, goals scored, assists given, saves made, and
            attacks thwarted. Show off your unique playstyle and earn those
            well-deserved badges of honor. Get ready to elevate your football
            experience with these exciting features. Start tracking, analyzing,
            and celebrating your matches like never before!
          </Text>
        </Text>
      </Stack>
    </>
  );
}

export default Help;
