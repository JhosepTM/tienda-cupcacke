//import { useEffect, useState } from "react";
import Cupcake from "../cards/Cupcake";
//para usar Axios
//import {get} from "axios";
import useFetch from "../../hooks/useFetch";

import CupcakeCard from "../cards/CupcakeCard";

const Cupcakes = ({peticion, title}) => {

    //usando el hook de peticiones
    const [cupcakes] = useFetch(peticion)

    //const [cupcakes,setCupcakes] = useState();

    //peticiones de forma nativa
    /*useEffect(()=>{
        console.log(process.env.REACT_APP_URL_API)
        fetch(`http://localhost:3050/${peticion}`)
        .then(response => response.json())
        .then(data => setCupcakes(data))
        .catch(e => console.log(e))
    },[peticion])*/

    //peticiones con Axios
    /*useEffect(()=>{
        get(`http://localhost:3050/${peticion}`)
        .then(({data}) => setCupcakes(data))
    },[peticion])*/

    return (
        <div className="ed-grid">
            { title && <h1>Pagina de cupcakes</h1>}
            {
                cupcakes ? (
                    <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 row-gap">
                        {
                            cupcakes.map(({
                                id,
                                descripcion,
                                sabor,
                                imagen,
                                color,
                                precio}) => (
                                <CupcakeCard
                                    key={id}
                                    imagen={imagen}
                                    descripcion={descripcion}
                                    sabor={sabor}
                                    color={color}
                                    precio={precio}
                                />
                            ))
                        }
                    </section>
                ) : (<span>Cargando...</span>)
            }
        </div>
    )
}

export default Cupcakes;