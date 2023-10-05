
import {useContext} from 'react'
import {UserContext} from '../../contexts/user'

export const Nome = ()=>{

    const {aluno} = useContext(UserContext)

    return(

        <>
            <strong>Aluno: {aluno}</strong>
            <br />
        </>
    )
}