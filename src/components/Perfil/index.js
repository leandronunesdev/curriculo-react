import React from 'react'

function Perfil(prop){
    
    const { perfilProfissional } = prop.resposta

    return(

        <div className="perfil-profissional">
          <p>
          {perfilProfissional}
          </p>
        </div>         
        
    )
}

export default Perfil