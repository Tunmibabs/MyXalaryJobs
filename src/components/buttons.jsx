import React from 'react'


function Buttons({children, className, onClick}) {
  return (
    <div>
      <button className={className} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Buttons
