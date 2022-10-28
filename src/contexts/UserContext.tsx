import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../services/supabaseClient";

type NewTransactionData = {
  title: string;
  category: string;
  value: number;
  type: "entrance" | "exit";
};

interface UserContextType {
  session: Session;
  loginWithGoogle: () => Promise<void>;
  createTransaction: (data: NewTransactionData) => void;
}
const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }) {
  const [session, setSession] = useState(null);

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

      toast.success("Transação criada!!!");
    } catch (error) {
      toast.error("Alguma coisa deu errado");
    }
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
      value={{ session, loginWithGoogle, createTransaction }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
