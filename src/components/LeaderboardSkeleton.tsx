import {
    Skeleton,
    Stack,
    Box,
  } from "@chakra-ui/react";
  
  function LeaderboardSkeleton() {
    return (
      <>
        <Box pb="50px">
          <Stack spacing={2}>
            <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr 1fr" gap={2}>
              <Skeleton height="0.5rem" />
              <Skeleton height="0.5rem" />
              <Skeleton height="0.5rem" />
              <Skeleton height="0.5rem" />
              <Skeleton height="0.5rem" />
            </Box>
  

            <Box display="grid" gap={2}>
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
              <Skeleton height="4rem" width="100%" />
  
            </Box>
          </Stack>
        </Box>
      </>
    );
  }
  
  export default LeaderboardSkeleton;
  