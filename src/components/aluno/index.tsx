import { Nome } from "../nome"

import { useContext } from "react"
import { UserContext } from "../../contexts/user"


export const Alunos = ()=>{

    const {qtdAlunos, handleMudaNome} = useContext(UserContext)

    return(

        <>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <Nome/>
            <button onClick={()=>handleMudaNome("Golfinho")}>
                Muda nome
            </button>
            <br />
            
        </>
    )
}