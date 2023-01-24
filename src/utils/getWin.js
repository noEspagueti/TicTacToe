
// export const getWin = ( element = []) => {
//     let obj =[];
//     let index = 0;
//     let initial = 0;
//     for (let i = 3; i < element.length+3; i+=3) {
//         obj[index] = element.slice(initial, i)
//         initial +=3;
//         index++;
//     } 
//     return obj;
// }



//Mala práctica --> se tiene que mejorar :   
// export const isWinner = (array) => {
//     let pos;
//     let flag = false;

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === array[i + 3] && array[i] === array[i + 6]) {
//             pos = [i,i+3,i+4];
//             flag = true;
//             break;
//         }

//         if (array[i] === array[i + 4] && array[i] === array[i + 8]) {
//             pos = [i, i + 4, i + 8];
//             flag = true;
//             break;
//         }

//         if (array[i] === array[i + 2] && array[i] === array[i + 4]) {
//             pos = [i, i + 2, i + 4];
//             flag = true;
//             break;
//         }
//         if (array[i] === array[i + 1] && array[i] === array[i + 2]) {
//             pos = [i, i + 1, i + 2];
//             flag = true;
//             break;
//         }
//     }
//     if (flag) {
//         return pos;
//     }

// }


//Constantes de las rutas ganadoras


export const isThereWinner = (array) => {
    const RUTESWIN = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let pos;
    for (let i = 0; i < RUTESWIN.length; i++) {

        let [a, b, c] = RUTESWIN[i]; //desestructurando por cada iteración del enum

        if (array[a] && array[a] === array[b] && array[a]=== array[c]) {
            pos = RUTESWIN[i];
            break;
        }

    }
    return pos; //retorna la posicion del elemento

}