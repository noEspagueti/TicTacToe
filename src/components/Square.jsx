import React from 'react'



export const Square = ({ updateTurn, children , disabled}) => {

  return (
    <button className='zone' onClick={updateTurn} disabled={!disabled()} >
      {children}
    </button>
  )
}
