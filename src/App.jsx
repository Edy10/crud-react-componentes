import "./App.css";
import { useEffect, useState } from "react";
import FormularioPessoa from "./components/FormularioPessoa";
import TabelaPessoas from "./components/TabelaPessoas";

function App() {
    const [nome, setNome] = useState("");
    const [pessoas, setPessoas] = useState(() => {
        const pessoasSalvas = localStorage.getItem("pessoas");

        return pessoasSalvas ? JSON.parse(pessoasSalvas) : [];
    });
    const [idEditando, setIdEditando] = useState(null);

    useEffect(()=>{
        localStorage.setItem("pessoas", JSON.stringify(pessoas));
    }, [pessoas]);

    function salvar(event) {
        event.preventDefault();

        if(nome.trim() === ""){
            alert("Digite um nome.");
            return;
        }

        if(idEditando !== null){
            const  listaAtualizada = pessoas.map((pessoa)=>{
                if(pessoa.id === idEditando){
                    return {
                        ...pessoa,
                        nome: nome,
                    };
                }
                return pessoa;
            });

            setPessoas(listaAtualizada);
            setIdEditando(null);
        }else{
            const novaPessoa = {
                id: Date.now(),
                nome: nome,
            };

            setPessoas([...pessoas, novaPessoa]);
        }

        setNome("");
    }

    function editar(pessoa){
        setNome(pessoa.nome);
        setIdEditando(pessoa.id);
    }

    function excluir(id){
        const novaLista = pessoas.filter(
            (pessoa)=> pessoa.id !== id
        );
        setPessoas(novaLista);
    }

    return (
        <div className="container">
            <h1 className="titulo">Cadastro de Pessoas</h1>

            <FormularioPessoa nome={nome} setNome={setNome} salvar={salvar} idEditando={idEditando}/>

            <TabelaPessoas pessoas={pessoas} editar={editar} excluir={excluir}/>
        </div>
    );
}

export  default  App;