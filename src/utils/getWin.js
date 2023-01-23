    
    export const getWin = ( element = []) => {
        let obj = {};
        let pos = 0;
        for (let i = 3; i < element.length+3; i+=3) {
            obj[pos] = element.slice(pos, i)
            pos+=3;
        }
        return obj;
    }
    
 




