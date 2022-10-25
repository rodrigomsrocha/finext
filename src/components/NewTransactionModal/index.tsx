import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useModalContext } from "../../contexts/ModalContext";
import { NewTransactionForm } from "./components/NewTransactionForm";

export function NewTransactionModal() {
  const { isOpen, onClose } = useModalContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay backdropFilter="blur(2px)" />
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
        <ModalBody pb="5">
          <NewTransactionForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
