import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Layout } from "../components/Layout";
import { NewTransactionModal } from "../components/NewTransactionModal";
import { ModalContextProvider } from "../contexts/ModalContext";
import { UserContextProvider } from "../contexts/UserContext";
import { theme } from "../styles/theme";

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <ChakraProvider theme={theme}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <UserContextProvider>
          <ModalContextProvider>
            <Layout>
              <Toaster />
              <NewTransactionModal />
              <Component {...pageProps} />
            </Layout>
          </ModalContextProvider>
        </UserContextProvider>
      </SessionContextProvider>
    </ChakraProvider>
  );
}
