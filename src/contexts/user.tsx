import { Children, ReactNode, createContext, useState } from "react";

interface UserProviderProps{
    children: ReactNode
}

type UserContextData = {
    aluno: string
    qtdAlunos: number
    handleMudaNome: (nome: string) => void
    handleNovoAluno: ()=> void
    handleDeletarAluno: ()=>void
}

export const UserContext = createContext({} as UserContextData)

function UserProvider({children}: UserProviderProps){

    const [aluno, setAluno] = useState('Alan Mestezk')
    const [qtdAlunos, setQtdAlunos] = useState(40)

    const handleMudaNome = (nome: string) =>{
        setAluno(nome)
    }

    const handleNovoAluno = ()=>{
        setQtdAlunos(alunos => alunos + 1)
    }

    const handleDeletarAluno=()=>{
        setQtdAlunos(alunos => alunos - 1)
    }
    
    return(
        <UserContext.Provider value={{aluno, qtdAlunos, handleMudaNome, handleNovoAluno, handleDeletarAluno}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;