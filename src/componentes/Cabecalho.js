import React, { useContext } from 'react';
import { ContadorContexto } from './ContadorContexto';

function Cabecalho(props){

    const [contagem, setContagem] = useContext(ContadorContexto);

    return(

        <div className='cabecalho d-flex justify-content-between align-items-center px-3'>

            <h2>Contador</h2>

            <h2>{contagem}</h2>

        </div>

    )

}

export default Cabecalho
