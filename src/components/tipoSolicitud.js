import React, {useEffect, useState} from 'react'
import axios from 'axios'
//import {Link} from 'react-dom'
import {Link} from 'react-router-dom'
//const endpoint = 'http://localhost/mymreclamos/public'

const endpoint = 'http://localhost/Bancosmym/public/api/postventa'
const TipoSolicitud = (resource) => {   
    const [tiposol, setTipoSol] = useState( [] )
    const [namei, setNames] = useState( resource)
    const datos = { 
        name:namei
    }
    useEffect (()=>{
        getAllTipoSolicitud()
    }, [])
    const getAllTipoSolicitud = async ()=>{
       const response= await axios.post(`${endpoint}/resources`, datos)
       setTipoSol(response.data.data)
    }
    return (
        <React.Fragment> 
            {tiposol.map((user)=>(
                <option key={user.id} value={user.id}>{user.description}</option>
            ))}
        </React.Fragment> 
    )
}
export default TipoSolicitud
