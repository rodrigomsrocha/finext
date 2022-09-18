import { HomePage } from "../components/HomePage";
import { SubscribePage } from "../components/SubscribePage";
import { useUserContext } from "../contexts/UserContext";

export default function Home() {
  const { session } = useUserContext();

  if (session) return <HomePage />;
  return <SubscribePage />;
}
