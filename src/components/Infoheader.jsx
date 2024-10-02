import React from 'react'
import Buttons from './buttons'
import edit from "../assets/edit-3.svg"

function Infoheader({heading}) {
  return (
    <div className='info-header'>
      <h4>{heading}</h4>
      <Buttons className="Editbtn"><img src={edit} />edit</Buttons>
    </div>
  )
}

export default Infoheader
