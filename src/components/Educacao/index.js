import React from 'react'

function Educacao(prop) {

    const { instituicao, curso } = prop.formacao

    return(
        <li>
            <h4>{instituicao}</h4>
            <p>{curso}</p>
        </li>

    )
    
}

export default Educacao