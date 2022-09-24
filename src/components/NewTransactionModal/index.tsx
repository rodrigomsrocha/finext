import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { useModalContext } from "../../contexts/ModalContext";

export function NewTransactionModal() {
  const { isOpen, onClose } = useModalContext();
  const [transactionType, setTransactionType] = useState("entrance");

  const changeTransactionType = (transactionType: "entrance" | "exit") => {
    setTransactionType(transactionType);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent bg="gray.700">
        <ModalHeader>
          <Text
            position="relative"
            _before={{
              content: '""',
              display: "block",
              width: "16px",
              height: "16px",
              borderRadius: "4px",
              background: "pink.500",
              position: "absolute",
              zIndex: -1,
              top: "4px",
              left: "-4px",
            }}
            fontSize="2xl"
            fontWeight="normal"
            color="gray.10"
          >
            Adicionar nova transação
          </Text>
        </ModalHeader>
        <ModalBody>
          <form>
            <FormControl>
              <FormLabel color="gray.200" fontWeight="normal">
                Título
              </FormLabel>
              <Input
                bg="gray.900"
                variant="filled"
                focusBorderColor="pink.500"
                _hover={{
                  border: "2px solid #D74866",
                }}
                placeholder="Portablidade salário"
                type="text"
              />
            </FormControl>
            <Flex gap={4} mt={4}>
              <FormControl>
                <FormLabel color="gray.200" fontWeight="normal">
                  Categoria
                </FormLabel>
                <Input
                  bg="gray.900"
                  variant="filled"
                  focusBorderColor="pink.500"
                  _hover={{
                    border: "2px solid #D74866",
                  }}
                  placeholder="Trabalho"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel color="gray.200" fontWeight="normal">
                  Valor
                </FormLabel>
                <Input
                  bg="gray.900"
                  variant="filled"
                  focusBorderColor="pink.500"
                  _hover={{
                    border: "2px solid #D74866",
                  }}
                  placeholder="R$ 3.000,00"
                  type="number"
                />
              </FormControl>
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
                  transactionType === "entrance"
                    ? "utils.green.500"
                    : "gray.900"
                }
                background={
                  transactionType === "entrance"
                    ? "utils.green.100"
                    : "transparent"
                }
                color={
                  transactionType === "entrance" ? "utils.green.500" : "gray.10"
                }
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
        </ModalBody>

        <ModalFooter w="full">
          <Button w="full" colorScheme="pink">
            Criar transação
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
