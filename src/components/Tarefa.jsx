import { Tr, Td } from "@chakra-ui/react";
import { useEffect } from "react";
import styles from "../styles/tarefa.css";

export function Tarefa(props) {
  if (props.tarefa.descricao) {
    return (
      <Tr>
        <Td className={props.style}>{props.tarefa.descricao}</Td>
        <Td className="validar">
          <span
            className="material-symbols-outlined"
            onClick={() => props.validarTarefa(props.tarefa.id)}
          >
            done
          </span>
        </Td>
        <Td className="lixeira">
          <span
            className="material-symbols-outlined"
            onClick={() => props.excluirTarefa(props.tarefa.id)}
          >
            delete
          </span>
        </Td>
      </Tr>
    );
  }
}
