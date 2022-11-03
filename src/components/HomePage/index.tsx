import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CurrencyDollarSimple, Minus, Plus } from "phosphor-react";
import { TransactionsTable } from "./components/TransactionsTable";

type Transaction = {
  id: number;
  created_at: string;
  title: string;
  category: string;
  value: number;
  type: "entrance" | "exit";
  user_id: "string";
};

export function HomePage() {
  return (
    <Box
      background="gray.700"
      borderRadius="5px"
      px="20"
      pt="20"
      pb="10"
      pos="relative"
      w="full"
    >
      <Flex gap="5" w="full" pos="absolute" left="0" top="-50px" px="20">
        <Box flex="1" h="100px" bg="gray.200" borderRadius="5px" p="2.5">
          <Flex justify="space-between" align="center" mb="2">
            <Text color="gray.600">Gastos</Text>
            <Box bg="utils.red.100" p="4px" borderRadius={5}>
              <Minus size={10} color="#6e2723" />
            </Box>
          </Flex>
          <Heading fontSize="2xl" color="gray.1000">
            -R$ 1.523,76
          </Heading>
        </Box>
        <Box flex="1" h="100px" bg="gray.200" borderRadius="5px" p="2.5">
          <Flex justify="space-between" align="center" mb="2">
            <Text color="gray.600">Ganhos</Text>
            <Box bg="utils.green.100" p="4px" borderRadius={5}>
              <Plus size={10} color="#15510a" />
            </Box>
          </Flex>
          <Heading fontSize="2xl" color="gray.1000">
            R$ 2.000,00
          </Heading>
        </Box>
        <Box flex="1" h="100px" bg="gray.900" borderRadius="5px" p="2.5">
          <Flex justify="space-between" align="center" mb="2">
            <Text color="gray.100">Total</Text>
            <Box bg="pink.500" p="4px" borderRadius={5} fontWeight="medium">
              <CurrencyDollarSimple size={10} color="#f5f5f5" weight="bold" />
            </Box>
          </Flex>
          <Heading fontSize="2xl" color="gray.10">
            R$ 2.000,00
          </Heading>
        </Box>
      </Flex>
      <TransactionsTable />
    </Box>
  );
}
