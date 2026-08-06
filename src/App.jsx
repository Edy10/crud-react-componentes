import "./App.css";
import { useEffect, useState } from "react";
import FormularioPessoa from "./components/FormularioPessoa";
import TabelaPessoas from "./components/TabelaPessoas";

function App() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
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

        if(nome.trim() === "" || email.trim() === ""){
            alert("Digite o nome e o E-mail.");
            return;
        }

        const emailJaExiste = pessoas.some((pessoa) => {
            return (
                pessoa.email.toLowerCase() === email.toLowerCase() && pessoa.id !== idEditando
            );
        });

        if(emailJaExiste) {
            alert("Este e-mail já está cadastrado.");
            return;
        }

        if(idEditando !== null){
            const  listaAtualizada = pessoas.map((pessoa)=>{
                if(pessoa.id === idEditando){
                    return {
                        ...pessoa,
                        nome: nome,
                        email: email,
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
                email: email,
            };

            setPessoas([...pessoas, novaPessoa]);
        }

        setNome("");
        setEmail("");
    }

    function editar(pessoa){
        setNome(pessoa.nome);
        setEmail(pessoa.email);
        setIdEditando(pessoa.id);
    }

    function excluir(id){
        const confirmou = window.confirm("Tem certeza de que deseja excluir esta pessoa?");

        if(!confirmou){
            return;
        }

        const novaLista = pessoas.filter(
            (pessoa)=> pessoa.id !== id
        );
        setPessoas(novaLista);

        if (idEditando === id){
            cancelarEdicao();
        }
    }

    function cancelarEdicao() {
        setNome("");
        setEmail("");
        setIdEditando(null);
    }

    return (
        <div className="container">
            <h1 className="titulo">Cadastro de Pessoas</h1>

            <FormularioPessoa
                nome={nome}
                setNome={setNome}
                email={email}
                setEmail={setEmail}
                salvar={salvar}
                idEditando={idEditando}
                cancelarEdicao={cancelarEdicao}
            />

            <TabelaPessoas
                pessoas={pessoas}
                editar={editar}
                excluir={excluir}
            />
        </div>
    );
}

export  default  App;