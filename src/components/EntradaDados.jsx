import { Button, ButtonGroup } from "@chakra-ui/react";
import styles from "../styles/entradaDados.css";

export function EntradaDados(props) {
  return (
    <div>
      <div className="entrada_dados">
        <input
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              props.salvarDados();
            }
          }}
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
    </div>
  );
}
