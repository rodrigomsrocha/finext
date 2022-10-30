import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { GoogleLogo, Plus } from "phosphor-react";
import { useModalContext } from "../../contexts/ModalContext";
import { useUserContext } from "../../contexts/UserContext";

export function Header() {
  const { loginWithGoogle } = useUserContext();
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const { onOpen } = useModalContext();
  const router = useRouter();

  return (
    <Flex align="center" justify="space-between" pos="relative" mb="24">
      <Text
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
        fontSize="4xl"
      >
        Finext
      </Text>
      {user ? (
        <Flex gap={5}>
          <Button
            leftIcon={<Plus />}
            bg="pink.500"
            py="2.5"
            px="2"
            transition="0.2s"
            _hover={{
              filter: "opacity(75%)",
            }}
            borderRadius="5px"
            onClick={onOpen}
          >
            Nova transação
          </Button>
          <Button
            bg="gray.700"
            color="gray.10"
            px={2}
            display="flex"
            gap={2.5}
            transition="0.2s"
            onClick={async () => {
              await supabaseClient.auth.signOut();
              router.push("/");
            }}
            _hover={{
              filter: "opacity(75%)",
            }}
            borderRadius="5px"
            title="sair"
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
              <Image src={user.user_metadata.avatar_url} alt="Avatar" />
            </Box>
            {user.user_metadata.full_name}
          </Button>
        </Flex>
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
