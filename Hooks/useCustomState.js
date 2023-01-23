import { useState } from "react";

export const useCustomState = ( value ) => {
    const [first, setFirst] = useState( value );

    const set = ( elem ) => {
        setFirst(x => x = elem);
    }

    return [
        first,
        set
    ];
}
