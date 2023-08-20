import { Skeleton, Container, Stack, Box } from "@chakra-ui/react";

function MatchHistorySkeleton() {
  return (
    <>
      <Container pb="50px">
        <Stack spacing={2}>
          <Box display="grid" gridTemplateColumns="1fr" gap={2}>
            <Skeleton height="3rem" />
          </Box>

          <Box display="flex" gap={5}>
            <Skeleton height="2rem" width="4rem" />
            <Skeleton height="2rem" width="4rem" />
            <Skeleton height="2rem" width="4rem" />
          </Box>

          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            <Skeleton height="8rem" width="100%" />
            <Skeleton height="8rem" width="100%" />
          </Box>

          <Skeleton height="3vh" />

          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            <Skeleton height="5rem" width="100%" />
            <Skeleton height="5rem" width="100%" />
          </Box>

          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap={2}>
            <Skeleton height="4rem" width="100%" />
            <Skeleton height="4rem" width="100%" />
            <Skeleton height="4rem" width="100%" />
            <Skeleton height="4rem" width="100%" />
          </Box>

          <Skeleton height="10vh" />
          <Skeleton height="10vh" />
        </Stack>
      </Container>
    </>
  );
}

export default MatchHistorySkeleton;