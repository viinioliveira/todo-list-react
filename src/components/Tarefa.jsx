import { Tr, Td } from "@chakra-ui/react";

export function Tarefa(props) {
  return (
    <div>
      <Tr>
        <Td>{props.tarefa.descricao}</Td>
        <Td>
          <span class="material-symbols-outlined">delete</span>
        </Td>
      </Tr>
    </div>
  );
}
