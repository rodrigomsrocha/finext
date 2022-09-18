import { TableContainer } from "@chakra-ui/react";

export function TransactionsTable() {
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
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="gain">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="loss">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="loss">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="loss">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="loss">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
          <tr>
            <td className="title">Portabilidade salário</td>
            <td className="loss">R$ 2.000,00</td>
            <td>Trabalho</td>
            <td>13/09/2022</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  );
}
