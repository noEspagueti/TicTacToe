import React from 'react'


export const Restart = ({ array, handleClick, isThereWinner }) => {

  const showButton = () => {
    let flag = false;
    array.forEach(element => {
      if (element === null) flag = true;
    });
    return flag;
  }



  return (
    <>
      <div id="btnRestart" className={isThereWinner() ? showButton() ? 'notFull' : 'restart' : 'restart'}
        onClick={handleClick} >
        Restart
      </div>
    </>
  )
}
