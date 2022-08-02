import { useEffect, useState } from "react";
import { EntradaDados } from "../components/EntradaDados";
import { TabelaRaiz } from "../components/TabelaRaiz";

export function Home() {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function salvarDados() {
    const tarefa = {
      id: 0,
      validado: false,
      descricao,
    };
    setTarefas([...tarefas, tarefa]);
  }

  useEffect(() => {
    console.log(tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function geraID() {}

  return (
    <div className="principal">
      <EntradaDados
        tarefa={descricao}
        setDescricao={setDescricao}
        salvarDados={salvarDados}
      />
      <TabelaRaiz tarefas={tarefas} />
    </div>
  );
}
