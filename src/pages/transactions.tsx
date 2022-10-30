import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { HomePage } from "../components/HomePage";

export default function Transactions(props) {
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
      .eq("user_id", user.id);

    return { props: { transactions: data } };
  },
});
