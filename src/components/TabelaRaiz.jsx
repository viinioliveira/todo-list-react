import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Tarefa } from "./Tarefa";

export function TabelaRaiz(props) {
  console.log("raiz", props);

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Tarefa</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.tarefas.map((tarefa, index) => {
            return <Tarefa key={index} tarefa={tarefa} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
