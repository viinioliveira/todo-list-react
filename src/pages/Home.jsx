import { useState } from "react";
import { EntradaDados } from "../components/EntradaDados";
import { TabelaRaiz } from "../components/TabelaRaiz";

export function Home() {
  const [descricao, setDescricao] = useState("");

  function salvarDados() {
    const tarefa = {
      id: 0,
      descricao,
    };

    console.log(tarefa);
  }

  return (
    <div className="principal">
      <EntradaDados
        tarefa={descricao}
        setDescricao={setDescricao}
        salvarDados={salvarDados}
      />
      <TabelaRaiz />
    </div>
  );
}
