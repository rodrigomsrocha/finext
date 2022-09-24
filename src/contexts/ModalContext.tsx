import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";

interface ModalContextType {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}
const ModalContext = createContext({} as ModalContextType);

export function ModalContextProvider({ children }) {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <ModalContext.Provider value={{ onOpen, isOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
