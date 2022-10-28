import { Button, Flex } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { useModalContext } from "../../../../contexts/ModalContext";
import { useUserContext } from "../../../../contexts/UserContext";
import { FormInput } from "../FormInput";

interface NewTransactionFormData {
  title: string;
  category: string;
  value: number;
}

const newTransactionSchema = yup.object({
  title: yup
    .string()
    .required("título é obrigatório")
    .min(5, "5 caracteres no mínimo"),
  category: yup
    .string()
    .required("categoria é obrigatória")
    .min(5, "5 caracteres no mínimo")
    .max(30, "30 caracteres no máximo"),
  value: yup
    .number()
    .typeError("valor é obrigatório")
    .min(1, "valor mínimo de R$1,00"),
});

export function NewTransactionForm() {
  const { createTransaction } = useUserContext();
  const { onClose } = useModalContext();
  const [transactionType, setTransactionType] = useState<"entrance" | "exit">(
    "entrance"
  );

  const changeTransactionType = (transactionType: "entrance" | "exit") => {
    setTransactionType(transactionType);
  };

  const createNewTransaction = (data: NewTransactionFormData) => {
    createTransaction({ ...data, type: transactionType });
    onClose();
  };

  const newTrasnsactionForm = useForm<NewTransactionFormData>({
    resolver: yupResolver(newTransactionSchema),
  });
  const { handleSubmit } = newTrasnsactionForm;

  return (
    <form onSubmit={handleSubmit(createNewTransaction)}>
      <FormProvider {...newTrasnsactionForm}>
        <FormInput
          label="Título"
          type="text"
          placeholder="Portablidade salário"
          name="title"
        />
        <Flex gap={4} mt={4}>
          <FormInput
            label="Categoria"
            type="text"
            placeholder="Trabalho"
            name="category"
          />
          <FormInput
            label="Valor"
            type="number"
            placeholder="Valor"
            name="value"
          />
        </Flex>
      </FormProvider>
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
      <Button type="submit" w="full" colorScheme="pink" mt="6">
        Criar transação
      </Button>
    </form>
  );
}
