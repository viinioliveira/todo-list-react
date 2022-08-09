import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "../styles/entradaDados.css";

export function EntradaDados(props) {
  return (
    <div>
      <div className="entrada_dados">
        <Input
          value={props.descricao}
          onChange={(e) => {
            props.setDescricao(e.target.value);
          }}
          placeholder="O que você deseja fazer?"
        />
      </div>
      <div className="button_add">
        <Button colorScheme="blue" onClick={props.salvarDados}>
          Adicionar
        </Button>
      </div>
    </div>
  );
}
