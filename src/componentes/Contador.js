import React, {useState} from 'react';

function Contador(props){

    const [contagem, setContagem] = useState(0);

    return(

        <div>

            <div>{contagem}</div>
            <button className='btn btn-danger me-1' onClick={()=>{setContagem( anterior => anterior - 1 )}}>-</button>
            <button className='btn btn-primary ms-1' onClick={()=>{setContagem( anterior => anterior + 1 )}}>+</button>

        </div>

    )

}

export default Contador