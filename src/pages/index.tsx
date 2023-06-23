import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Stack spacing="40px">
        <Button bg="hsclr.blue.500" onClick={() => router.push("/design")}>
          We build brands
        </Button>
        <Button
          bg="hsclr.pink.500"
          color="black"
          onClick={() => router.push("/design")}
        >
          We build brands
        </Button>
        <Heading variant="H1LIGHT" color="white">
          We build brands
        </Heading>
        <Heading variant="H1REGULAR" color="white">
          We build brands
        </Heading>
        <Heading variant="H1MEDIUM" color="white">
          We build brands
        </Heading>
        <Heading variant="H1SEMIBOLD" color="white">
          We build brands
        </Heading>
        <Heading variant="H1BOLD" color="white">
          We build brands
        </Heading>
        <Heading variant="H1BOLDER" color="white">
          We build brands
        </Heading>
      </Stack>
    </Box>
  );
}
