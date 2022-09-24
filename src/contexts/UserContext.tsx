import { Session } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../services/supabaseClient";

interface UserContextType {
  session: Session;
  loginWithGoogle: () => Promise<void>;
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
    <UserContext.Provider value={{ session, loginWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
