import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { UserContextProvider } from "../contexts/UserContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
