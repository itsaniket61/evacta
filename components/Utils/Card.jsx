import React from 'react'

function Card({children}) {
  return (
    <div className='rounded-md bg-white p-3 flex flex-wrap justify-evenly'>
        {children}
    </div>
  )
}

export default Card