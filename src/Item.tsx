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
            <p>Ejemplos</p>
            <p>Persona: {nombre}</p>
            <p>Edad: {edad}</p>
            <p>Idioma: {idioma}</p>
            <div>{contador}</div>
            <div>Moises - Jonathan</div>
        </div>
    )
}

export default Item
