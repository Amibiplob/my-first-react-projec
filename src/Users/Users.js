import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Users.css"

const Users = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPeople(data))
    }, [])
    return (
        <div>
            <h1 style={{textAlign:"center"}}>User count :{people.length}</h1>
           <div className='users'>
           {
                people.map(user => (
                    <div className='user'>
                    <h1>User Name :{user.name}</h1>
                    <h4>Phone : {user.phone}</h4>
                    <h4>Username : {user.username}</h4>
                    <h4>Website : {user.website}</h4>
    
                </div>
                ))
            }
           </div>
        </div>
    );
};

// const User = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>User Name :{props.name}</h1>
//             <h1>Phone : {props.phone}</h1>
//             <h1>Username : {props.username}</h1>
//             <h1>Website : {props.website}</h1>

//         </div>
//     )
// }

export default Users;