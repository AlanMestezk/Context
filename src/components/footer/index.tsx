
import { useContext } from "react"
import { UserContext } from "../../contexts/user"

export const Footer=()=>{

    const { qtdAlunos, 
            handleNovoAluno, 
            handleDeletarAluno } = useContext(UserContext)

    return(
        <footer>
            <br /><br />
            <hr />
            <h3>footer</h3>
            <h4>Alunos online na plataforma: {qtdAlunos}</h4>
            <br />
            <button onClick={()=>handleNovoAluno()}>Novo aluno</button>
            <button onClick={()=> handleDeletarAluno()}>Deletar aluno</button>
        </footer>
    )
}