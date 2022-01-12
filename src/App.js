import React from 'react';
import Cabecalho from './componentes/Cabecalho'
import Contador from './componentes/Contador'
import { ContadorProvider } from './componentes/ContadorContexto';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">

      <ContadorProvider>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </ContadorProvider>
      
    </div>
  );
}

export default App;
