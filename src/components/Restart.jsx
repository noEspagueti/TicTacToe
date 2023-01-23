import React from 'react'
import { getWin } from '../utils/getWin';

export const Restart = ({ array, handleClick }) => {

  const showButton = () => {
    let flag = false;
    array.forEach(element => {
      if (element === null) flag = true;
    });
    return flag;
  }

  const onHandleClick = () => {
    handleClick();
  };



  return (
    <>
      <div className={showButton() ? 'notFull' : 'restart'} onClick={onHandleClick} >
        Restart
      </div>
    </>
  )
}
