import { TableContainer } from "@chakra-ui/react";
import { useUserContext } from "../../../../contexts/UserContext";

type Transaction = {
  id: number;
  created_at: string;
  title: string;
  category: string;
  value: string;
  type: "entrance" | "exit";
  user_id: "string";
};

export function TransactionsTable() {
  const { transactions } = useUserContext();
  return (
    <TableContainer
      maxH="300px"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          paddingLeft: "4px",
          background: "#525252",
          borderRadius: "24px",
        },
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type === "entrance" ? "gain" : "loss"}>
                {transaction.formatted_value}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
