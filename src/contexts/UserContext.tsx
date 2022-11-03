import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../services/supabaseClient";

type Transaction = {
  id: number;
  created_at: string;
  title: string;
  category: string;
  value: string;
  type: "entrance" | "exit";
  user_id: "string";
};

type NewTransactionData = {
  title: string;
  category: string;
  value: number;
  type: "entrance" | "exit";
};

interface UserContextType {
  loginWithGoogle: () => Promise<void>;
  createTransaction: (data: NewTransactionData) => void;
  getTransactions: (transactions: Transaction[]) => void;
  setInitialTransactions: (transactions: Transaction[]) => void;
  transactions: Transaction[];
}
const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }) {
  const [session, setSession] = useState(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function loginWithGoogle() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error) {
      toast.error(error.error_description || error.message);
    }
  }

  async function createTransaction(data: NewTransactionData) {
    if (!session) {
      toast.error("Você precisa estar logado");
      return;
    }

    try {
      await supabase
        .from("transactions")
        .insert({ ...data, user_id: session.user.id });

      getTransactions();
      toast.success("Transação criada!!!");
    } catch (error) {
      toast.error("Alguma coisa deu errado");
    }
  }

  async function getTransactions() {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", session.user.id)
      .order("created_at", { ascending: false });
    if (data) setTransactions(data);
    if (error) throw error;
  }

  function setInitialTransactions(transactions: Transaction[]) {
    setTransactions(transactions);
  }

  useEffect(() => {
    let mounted = true;

    async function getInitialSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (mounted) {
        if (session) {
          setSession(session);
        }
      }
    }

    getInitialSession();

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      mounted = false;

      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginWithGoogle,
        createTransaction,
        getTransactions,
        transactions,
        setInitialTransactions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
