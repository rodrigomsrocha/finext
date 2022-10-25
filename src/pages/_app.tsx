import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components/Layout";
import { NewTransactionModal } from "../components/NewTransactionModal";
import { ModalContextProvider } from "../contexts/ModalContext";
import { UserContextProvider } from "../contexts/UserContext";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <ModalContextProvider>
          <Layout>
            <Toaster />
            <NewTransactionModal />
            <Component {...pageProps} />
          </Layout>
        </ModalContextProvider>
      </UserContextProvider>
    </ChakraProvider>
  );
}
