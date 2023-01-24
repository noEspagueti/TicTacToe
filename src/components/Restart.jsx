import React from 'react'


export const Restart = ({  handleClick, isThereWinner }) => {

  // const showButton = () => {
  //   let flag = false;
  //   array.forEach(element => {
  //     if (element === null) flag = true;
  //   });
  //   return flag;
  // }



  return (
    <>
      <div  id="btnRestart" className={isThereWinner()? 'notFull' : 'restart'} onClick={handleClick} >
        Restart
      </div>
    </>
  )
}
