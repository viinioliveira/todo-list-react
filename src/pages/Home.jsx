import { useEffect, useState } from "react";
import { EntradaDados } from "../components/EntradaDados";
import { TabelaRaiz } from "../components/TabelaRaiz";

export function Home() {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function salvarDados() {
    const tarefa = {
      id: geraID() + 1,
      validado: false,
      descricao,
    };
    setTarefas([...tarefas, tarefa]);
  }

  useEffect(() => {
    console.log(tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  let maior = 0;
  function geraID() {
    let dados = JSON.parse(localStorage.getItem("tarefas") || []);
    dados.forEach((tarefa) => {
      if (tarefa.id > maior) maior = tarefa.id;
    });
    return maior;
  }

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
