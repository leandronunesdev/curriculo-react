import React from 'react'

function Biografia(prop){
    
    const { nome, ocupacao, resumo } = prop.resposta

    return(

        <div className="biografia">
            <h1>{nome}</h1>
            <div className="ocupacao">{ocupacao}</div>
            <p>{resumo}</p>
        </div>          
        
    )
}

export default Biografia