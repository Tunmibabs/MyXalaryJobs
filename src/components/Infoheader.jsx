import React from 'react'
import Buttons from './buttons'

function Infoheader({heading}) {
  return (
    <div className='info-header'>
      <h4>{heading}</h4>
      <Buttons>Edit</Buttons>
    </div>
  )
}

export default Infoheader
