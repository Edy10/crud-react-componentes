function  FormularioPessoa({nome, setNome, salvar, idEditando}){
   return (
       <form className="formulario" onSubmit={salvar}>
           <label htmlFor="nome">Nome: </label>
           <input
               type="text"
               value={nome}
               onChange={(event)=>setNome(event.target.value)}
               placeholder="Digite o nome"
           />
           <button className="botao" type="submit">
               {idEditando !== null ? "Atualizar" : "Cadastrar"}
           </button>
       </form>
   )
}

export default FormularioPessoa;