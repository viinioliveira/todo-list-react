import { useEffect, useState } from "react";
import { EntradaDados } from "../components/EntradaDados";
import { TabelaRaiz } from "../components/TabelaRaiz";

export function Home() {
  let estadoInicial = [];

  //verifica se tem algo no localstorage
  if (localStorage["tarefas"])
    estadoInicial = JSON.parse(localStorage.getItem("tarefas"));
  else estadoInicial = [];

  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState(estadoInicial);

  function salvarDados() {
    const tarefa = {
      id: geraID() + 1,
      validado: false,
      descricao,
    };
    setTarefas([...tarefas, tarefa]);
  }

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas)), [tarefas];
  });

  function geraID() {
    let maior = 0;
    if (localStorage["tarefas"]) {
      let dados = JSON.parse(localStorage.getItem("tarefas"));
      dados.forEach((tarefa) => {
        if (tarefa.id > maior) maior = tarefa.id;
      });
      return maior;
    } else {
      console.log("sem dados");
      return 0;
    }
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
