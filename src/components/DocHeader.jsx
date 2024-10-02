import React from 'react'
import Buttons from './buttons'
import Upload from "../assets/upload.svg"


function DocHeader({heading}) {
  return (
    <div className='info-header'>
        <h4>{heading}</h4>
        <Buttons className="Editbtn"><img src={Upload} />Upload</Buttons>
    </div>
  )
}

export default DocHeader
