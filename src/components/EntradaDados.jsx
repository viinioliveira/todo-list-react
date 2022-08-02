import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export function EntradaDados(props) {
  return (
    <div>
      <Input
        value={props.descricao}
        onChange={(e) => {
          props.setDescricao(e.target.value);
        }}
        placeholder="O que você deseja fazer?"
      />
      <Button colorScheme="blue" onClick={props.salvarDados}>
        Adicionar
      </Button>
    </div>
  );
}
