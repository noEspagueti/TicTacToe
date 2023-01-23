import React from 'react'

export const Square = ({updateTurn, children }) => {


  

  return (
    <button  className='zone' onClick={updateTurn}  >
      {children}
    </button>
  )
}
