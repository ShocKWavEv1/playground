import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Box>
      <Button onClick={() => router.push("/")}>Hi Design</Button>
    </Box>
  );
}
