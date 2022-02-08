import { useState, useEffect } from "react"
import { get } from "axios";

const useFetch = (endpoint) => {
    const [data,setData] = useState();
    const [error,setError] = useState();

    useEffect(()=>{
        get(`http://localhost:3050/${endpoint}`)
        .then(({data}) => setData(data))
        .catch(err => setError(err))
    },[endpoint])

    return [data,error];
}

export default useFetch;