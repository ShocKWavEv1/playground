import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Box w="100%" h="200vh" bg="black" p="2rem">
      <Button bg="hsclr.pink.500" onClick={() => router.push("/design")}>
        Hi
      </Button>
      Hiiii
      <a>Hii</a>
      <button>Hii</button>
      <input placeholder="hiii" />
    </Box>
  );
}
