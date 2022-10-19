import React, {useEffect, useState} from 'react'
import axios from 'axios'
//import {Link} from 'react-dom'
import {Link} from 'react-router-dom'
//const endpoint = 'http://localhost/mymreclamos/public'
const endpoint = 'http://localhost/Bancosmym/public/api/postventa'
const ShowUser = () => {
    const [users, setUsers] = useState( [] )
    const [users1, setUsers1] = useState(  )
    useEffect (()=>{
        getAllUser()
    }, [])
    
    useEffect (()=>{
        getAllUser1()
    }, [])
    const getAllUser = async ()=>{
       const response= await axios.get(`${endpoint}/users`)
       setUsers(response.data)
    }
    const getAllUser1 = async ()=>{
        const responses= await axios.get(`${endpoint}/users`)
        setUsers1(responses)
        console.log(responses)
    }
    //console.log(users1) 
    //users1.forEach(element => console.log(element));
    return (
        <React.Fragment> 
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre </th>
                    </tr>
                </thead> 
                <tbody> 
                    {users.map((user)=>(
                        <tr key={user.id} >
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))} 
                    <tr>
                        <td colSpan={2} >__________________________________</td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment> 
    )
}
const ShowUser2 = () => {
    
        return (
           <React.Fragment> 
                <h1>Mi primer componente  Edwin Ayala</h1> 
                <hr/>
           </React.Fragment>
        );
    
}
export default ShowUser
//import ShowUser2 from './ShowUser2'; 
//import {ShowUser, ShowUser2} from "./components/Example"

 