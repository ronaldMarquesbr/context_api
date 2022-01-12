import React from 'react';
import Cabecalho from './componentes/Cabecalho'
import Contador from './componentes/Contador'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Cabecalho></Cabecalho>
      <Contador></Contador>
    </div>
  );
}

export default App;
