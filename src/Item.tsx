import React, { useState } from 'react';

interface ItemProps {
    nombre: string;
    edad: number;
    idioma?: string;
}

const Item = ({ nombre, edad, idioma='español' }: ItemProps) => {
    
    const [contador, setContador] = useState<number>(0);

    const clickPersona = () => {
        setContador(contador + 1);
    }

    return (
        <div onClick={clickPersona}>
            Persona: {nombre} - Edad: {edad} - Idioma: {idioma}
            <div>{contador}</div>
        </div>
    )
}

export default Item
