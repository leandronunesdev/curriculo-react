import React from 'react'

function Contato(prop) {

    const { tipo, contato } = prop.contato

    return(
        <li>
            <div className="item-contato">
                <h4>{tipo}</h4>
                <p>{contato}</p>
            </div>
        </li>

    )
    
}

export default Contato