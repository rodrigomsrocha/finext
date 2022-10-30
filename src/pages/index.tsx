import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { SubscribePage } from "../components/SubscribePage";

export default function SignUp() {
  const user = useUser();
  const router = useRouter();

  if (user) {
    router.push("/transactions");
  }

  return <SubscribePage />;
}
