import React from 'react';


export const Turn = ({ isSelect, element }) => {


  return (
    <section className='turn'>
      <p>Turno</p>
      <main className={isSelect ? 'select-x' : 'select-o'}>{element}</main>
    </section>
  )
}
