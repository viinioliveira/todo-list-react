import { Tr, Td } from "@chakra-ui/react";

export function Tarefa(props) {
  console.log("a", props);

  return (
    <Tr>
      <Td>{props.tarefa.descricao}</Td>
    </Tr>
  );
}
