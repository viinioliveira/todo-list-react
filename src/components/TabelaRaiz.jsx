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

export function TabelaRaiz() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Tarefa</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tarefa />
        </Tbody>
      </Table>
    </TableContainer>
  );
}
