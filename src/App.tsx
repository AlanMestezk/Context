
//import { useState } from 'react'
import './App.css'
import { Alunos } from './components/aluno'
import { Footer } from './components/footer'

import UserProvider from './contexts/user'

function App() {
  
  return (
    <UserProvider>

      <div>
        <h1>Escola DEV</h1>
        <hr />
        <br />

        <Alunos/>
        <Footer/>
      </div>

    </UserProvider>
  )
}

export default App
