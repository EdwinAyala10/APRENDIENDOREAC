import React, {useEffect, useState} from 'react'
import axios from 'axios'
//import {Link} from 'react-dom'
import {Link} from 'react-router-dom'
//const endpoint = 'http://localhost/mymreclamos/public'
//const endpoint = {process.env.APP_ROUT_API}
//const endpoint = process.env.APP_ROUT_API

const endpoint = 'http://localhost/Bancosmym/public/api/postventa'
const Resources = (param) => {   
    const [tiposol, setTipoSol] = useState( [] )
    const [namei, setNames] = useState( param)
    const datos = { 
        name:namei
    }
    useEffect (()=>{
        getAllCategoria()
    }, [])
    const getAllCategoria = async ()=>{
       const response= await axios.post(`${endpoint}/resources`, datos)
       setTipoSol(response.data)
    }
    return (
        <React.Fragment> 
            {tiposol.map((user)=>(
                <option key={user.id} value={user.id}>{user.description}</option>
            ))}
        </React.Fragment> 
    )
}
export default Resources






