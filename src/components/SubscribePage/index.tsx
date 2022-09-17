import { Flex, Link, Text } from "@chakra-ui/react";

export function SubscribePage() {
  return (
    <Flex
      w="full"
      border="dashed"
      borderWidth={1}
      borderColor="gray.500"
      borderRadius="5px"
      height="sm"
      justify="center"
      align="center"
    >
      <Text fontSize="2xl" color="gray.700">
        <Link color="pink.500">Crie sua conta</Link> e organize suas finanças
      </Text>
    </Flex>
  );
}
