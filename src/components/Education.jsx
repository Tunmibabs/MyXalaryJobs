import React from 'react'
import Infoheader from './Infoheader'

function Education() {
  return (
    <div className='personal-info'>
        <Infoheader heading="Education Information"/>
      
      <section className='education'>
        <article>
            <h3>International College of Design and Coding - Undergraduate </h3>
            <h5>Bsc Computer Science</h5>
            <span>2000 - 2003</span>
        </article>

        <article>
            <h3>International College of Design and Coding - Postgraduate </h3>
            <h5>Msc Computer Science</h5>
            <span>2004 - 2005</span>
        </article>
      </section>
    </div>
  )
}

export default Education;
