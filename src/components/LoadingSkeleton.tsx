import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Container,
  Stack,
  Grid,
  Box,
} from "@chakra-ui/react";

function LoadingSkeleton() {
  return (
    <>
      <Container pb="50px">
        <Stack spacing={2}>
          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={2}>
            <Skeleton height="2rem" />
            <Skeleton height="2rem" />
            <Skeleton height="2rem" />
          </Box>

          <Skeleton height="57vh" />
        
          <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
            <Skeleton height="8rem" width="100%" />
            <Skeleton height="8rem" width="100%" />

          </Box>
        </Stack>
      </Container>
    </>
  );
}

export default LoadingSkeleton;
