import { Box } from "@chakra-ui/react";
import { LayoutProps } from "./model";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      className="home"
      as="main"
      w="100%"
      h="500vh"
      bg="black"
      p="4rem"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
    >
      {children}
    </Box>
  );
};

export default Layout;
