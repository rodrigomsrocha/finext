import { Button, Flex } from "@chakra-ui/react";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { FormInput } from "../FormInput";

export function NewTransactionForm() {
  const [transactionType, setTransactionType] = useState("entrance");

  const changeTransactionType = (transactionType: "entrance" | "exit") => {
    setTransactionType(transactionType);
  };

  return (
    <form>
      <FormInput
        label="Título"
        type="text"
        placeholder="Portablidade salário"
      />
      <Flex gap={4} mt={4}>
        <FormInput label="Categoria" type="text" placeholder="Trabalho" />
        <FormInput label="Valor" type="number" placeholder="Valor" />
      </Flex>
      <Flex gap={4} mt={6}>
        <Button
          w="full"
          variant="outline"
          fontWeight="normal"
          border="1px"
          leftIcon={<Plus />}
          onClick={() => changeTransactionType("entrance")}
          borderColor={
            transactionType === "entrance" ? "utils.green.500" : "gray.900"
          }
          background={
            transactionType === "entrance" ? "utils.green.100" : "transparent"
          }
          color={transactionType === "entrance" ? "utils.green.500" : "gray.10"}
          _hover={{
            filter: "opacity(80%)",
          }}
        >
          Entrada
        </Button>
        <Button
          w="full"
          variant="outline"
          fontWeight="normal"
          border="1px"
          leftIcon={<Minus />}
          onClick={() => changeTransactionType("exit")}
          borderColor={
            transactionType === "exit" ? "utils.red.500" : "gray.900"
          }
          color={transactionType === "exit" ? "utils.red.500" : "gray.10"}
          background={
            transactionType === "exit" ? "utils.red.100" : "transparent"
          }
          _hover={{
            filter: "opacity(80%)",
          }}
        >
          Saída
        </Button>
      </Flex>
    </form>
  );
}
