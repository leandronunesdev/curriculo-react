import React from 'react'
import Experiencia from '../Experiencia'

function ListaExperiencias(prop) {

  const { experiencia } = prop.resposta  
  
  return(
      <div className="experience">
        <h2>Experiência Profissional</h2>

        {experiencia.map(item => (
          <Experiencia key={item.id} experiencia={item} />
        ))}        
      </div>
  )
}

export default ListaExperiencias