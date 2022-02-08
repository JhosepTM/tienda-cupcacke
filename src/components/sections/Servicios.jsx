import { useEffect, useState } from "react";
import {get} from "axios";
import useFetch from "../../hooks/useFetch";

const Servicios = ({peticion}) => {

    const [servicios,error] = useFetch(peticion);

    if(error){
        return <span>{JSON.stringify(error)}</span>
    }

    if(!servicios || servicios.length === 0){
        return <span>No hay servicios</span>
    }
    
    return (
        <div className="ed-grid cols-m-2 cols-l-4 l-block">
            {
                servicios.map(s => (
                    <div key={s.id}>
                        <h2>{s.nombre}</h2>
                        <p>{s.descripcion}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Servicios;