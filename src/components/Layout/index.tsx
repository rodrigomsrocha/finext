import { Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../Header";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container maxW="3xl" py="20">
      <Header />
      {children}
    </Container>
  );
}
