import React, { useState } from 'react'
import Contato from '../Contato'
import Educacao from '../Educacao'

function Sidebar(prop) {

  const { contatos, educacao } = prop.resposta  

  const [listaContato, adicionaListaContato] = useState(false)

  const showListaContato = () => {
    adicionaListaContato(true)
  }

  const hideListaContato = () => {
    adicionaListaContato(false)
  }

  return(
      <aside>
        <div className="sidebar">
          <h3>Contatos</h3>

          <button onClick={showListaContato} onDoubleClick={hideListaContato}>Mostrar Contatos</button>          

          <div className="lista-de-contatos">

          {
            listaContato &&

            <>
            {contatos.map(item => (
              <Contato key={item.id} contato={item} />
            ))}
            </>

          }
            

          </div>
        </div>

        <div className="sidebar">
          <h3>Educação</h3>
          <div className="lista-de-formacao">
            
            {educacao.map(item => (
              <Educacao key={item.id} formacao={item} />
            ))}
            
          </div>
        </div>
      </aside>
  )
    
}

export default Sidebar