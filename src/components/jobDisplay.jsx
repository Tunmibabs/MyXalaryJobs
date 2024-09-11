import React from 'react'
import TitleSearch from './titleSearch'
import Sidebar from './sidebar'

function JobDisplay() {
  return (
    <section className='jobDisplay'>
      <TitleSearch />

      <div>
        <Sidebar />
      </div>
    </section>
  )
}

export default JobDisplay
