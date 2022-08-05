import { Tr, Td } from "@chakra-ui/react";
import styles from "../styles/tarefa.css";

export function Tarefa(props) {
  if (props.tarefa.descricao) {
    return (
      <Tr>
        <Td>{props.tarefa.descricao}</Td>

        <Td className="lixeira">
          <span className="material-symbols-outlined">delete</span>
        </Td>
        <Td>
          <span className="material-symbols-outlined">done</span>
        </Td>
      </Tr>
    );
  }
}
