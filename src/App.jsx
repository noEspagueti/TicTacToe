import React, { useState } from 'react'
import { Square, Turn, Restart } from './components';
import { useCustomState } from '../Hooks/useCustomState';
import { isThereWinner, showWinner, clickRestart } from './utils/getWin';

const TURN = {
    X: 'x',
    O: 'o'
};

export const App = () => {

    const [element, setElement] = useState(Array(9).fill(null));

    const [first, set] = useCustomState(true);

    const turned = first ? TURN.X : TURN.O;


    const onHandleClick = (index) => {
        let board = [...element];
        if (board[index]) return; //en caso se vuelva a seleccionar una casilla con elemento dentro
        set(!first);
        board[index] = turned;
        setElement(board);
    };

    const getWinner = () => {
        let result = true;
        if (isThereWinner(element)) {
            const positions = isThereWinner(element);
            showWinner(positions);
            result = false;
        }
        return result;
    }


    const handleRestartCLick = () => {
        setElement(Array(9).fill(null));
        clickRestart();
    }

    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className='game'>
                {
                    //uso del "_" para evitar usar el cierto parámetro
                    element.map((item, index) => {
                        return (
                            <Square key={index}
                                updateTurn={() => onHandleClick(index)}
                                children={item}
                                disabled={getWinner}
                            />
                        )

                    })
                }
            </section>
            <Turn isSelect={
                first
            }
                element={turned}
            />
            <Restart
                array={element}
                handleClick={
                    handleRestartCLick
                }
                isThereWinner={
                    getWinner
                } />
        </main>
    );
};
