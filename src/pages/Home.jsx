import { useEffect, useState } from "react";
import { EntradaDados } from "../components/EntradaDados";
import { TabelaRaiz } from "../components/TabelaRaiz";
import { useToast } from "@chakra-ui/react";
import styles from "../styles/home.css";

export function Home() {
  const toast = useToast();
  let estadoInicial = [];

  //verifica se tem algo no localstorage
  if (localStorage["tarefas"])
    estadoInicial = JSON.parse(localStorage.getItem("tarefas"));
  else estadoInicial = [];

  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState(estadoInicial);

  function salvarDados() {
    if (descricao != "") {
      const tarefa = {
        id: geraID() + 1,
        validado: false,
        descricao,
      };
      setTarefas([...tarefas, tarefa]);
    } else {
      return toast({
        title: "Digite uma tarefa antes de adicionar",
        status: "warning",
        isClosable: true,
      });
    }
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
      <TabelaRaiz tarefas={tarefas} excluirTarefa={excluirTarefa} />
    </div>
  );
}
