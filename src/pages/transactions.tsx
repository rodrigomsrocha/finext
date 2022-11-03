import { User, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { HomePage } from "../components/HomePage";
import { useUserContext } from "../contexts/UserContext";

type Transaction = {
  id: number;
  created_at: string;
  title: string;
  category: string;
  value: string;
  type: "entrance" | "exit";
  user_id: "string";
};

interface TransactionsPageProps {
  user: User;
  transactions: Transaction[];
}

export default function Transactions(props: TransactionsPageProps) {
  const { setInitialTransactions } = useUserContext();
  setInitialTransactions(props.transactions);
  return <HomePage />;
}

export const getServerSideProps = withPageAuth({
  async getServerSideProps(ctx, supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    const transactions = data.map((transaction) => {
      return {
        ...transaction,
        value: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(transaction.value),
        created_at: new Intl.DateTimeFormat("pt-BR").format(
          new Date(transaction.created_at)
        ),
      };
    });

    return { props: { transactions } };
  },
});
