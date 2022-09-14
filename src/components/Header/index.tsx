import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GoogleLogo } from "phosphor-react";

export function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      pos="relative"
      mb="24"
      _before={{
        content: '""',
        display: "block",
        width: "16px",
        height: "16px",
        borderRadius: "4px",
        background: "pink.500",
        position: "absolute",
        zIndex: -1,
        top: "10px",
        left: "-4px",
      }}
    >
      <Text fontSize="4xl">Finext</Text>
      <Button
        bg="gray.700"
        color="gray.100"
        px={2}
        display="flex"
        gap={2.5}
        transition="0.2s"
        _hover={{
          filter: "opacity(75%)",
        }}
      >
        <Box
          w={25}
          h={25}
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="gray.100"
          borderRadius="3px"
        >
          <GoogleLogo color="#3d3d3d" weight="fill" size={25} />
        </Box>
        Login com google
      </Button>
    </Flex>
  );
}
