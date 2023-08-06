import { Text, Box, IconButton, Switch } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { createElement } from "react";

interface MatchHighlightProps {
  highlightTitle: string;
  highlightText: string;
  highlightIcon: IconType;
  highlightState: boolean;
  setHighlightState: Dispatch<SetStateAction<boolean>>;
}

function MatchHighlight({
  highlightTitle,
  highlightText,
  highlightIcon,
  highlightState,
  setHighlightState,
}: MatchHighlightProps) {
  function handleSwitch() {
    setHighlightState(!highlightState);
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 8fr 1fr"
      gap="1"
      marginTop="0.5rem"
      alignItems="center"
    >
      <IconButton
        aria-label="highlight icon"
        icon={createElement(highlightIcon)}
        fontSize="1.25rem"
      />
      <Box>
        <Text fontSize="small" fontWeight="bold">
          {highlightTitle}
        </Text>
        <Text fontSize="small">{highlightText}</Text>
      </Box>

      <Switch onChange={handleSwitch} />
    </Box>
  );
}

export default MatchHighlight;
