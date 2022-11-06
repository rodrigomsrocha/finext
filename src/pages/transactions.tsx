import { useEffect } from "react";
import { HomePage } from "../components/HomePage";
import { useUserContext } from "../contexts/UserContext";

export default function Transactions() {
  const { getTransactions } = useUserContext();

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return <HomePage />;
}
