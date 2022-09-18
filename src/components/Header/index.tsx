import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { GoogleLogo } from "phosphor-react";
import { useUserContext } from "../../contexts/UserContext";
import { supabase } from "../../services/supabaseClient";

export function Header() {
  const { session, loginWithGoogle } = useUserContext();
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
      {session ? (
        <Button
          bg="gray.700"
          color="gray.10"
          px={2}
          display="flex"
          gap={2.5}
          transition="0.2s"
          onClick={() => supabase.auth.signOut()}
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
            background="gray.10"
            borderRadius="3px"
            overflow="hidden"
          >
            <Image src={session.user.user_metadata.avatar_url} alt="Avatar" />
          </Box>
          {session.user.user_metadata.full_name}
        </Button>
      ) : (
        <Button
          bg="gray.700"
          color="gray.10"
          px={2}
          display="flex"
          gap={2.5}
          transition="0.2s"
          onClick={loginWithGoogle}
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
            background="gray.10"
            borderRadius="3px"
            overflow="hidden"
          >
            <GoogleLogo color="#3d3d3d" weight="fill" size={25} />
          </Box>
          Login com google
        </Button>
      )}
    </Flex>
  );
}
