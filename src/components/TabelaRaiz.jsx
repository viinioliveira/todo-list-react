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
import { useEffect, useState } from "react";
import { Tarefa } from "./Tarefa";
import styles from "../styles/tabelaRaiz.css";

export function TabelaRaiz(props) {
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
            if (tarefa.excluido != true) {
              return (
                <Tarefa
                  style={props.style}
                  key={index}
                  tarefa={tarefa}
                  excluirTarefa={props.excluirTarefa}
                  validarTarefa={props.validarTarefa}
                />
              );
            }
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
