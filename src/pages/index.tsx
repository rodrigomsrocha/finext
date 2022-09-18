import { SubscribePage } from "../components/SubscribePage";
import { useUserContext } from "../contexts/UserContext";

export default function Home() {
  const { session } = useUserContext();

  if (session) return <h1>R$10,00</h1>;
  return <SubscribePage />;
}
