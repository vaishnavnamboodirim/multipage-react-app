import React, { useEffect, useState } from "react";

const UsersPage = () =>{
    const[users,setUsers] = useState("");


    const fetchUsers = () =>{
        //using fetch insted of axion
        fetch("https://v2.jokeapi.dev/joke/Any").then((response)=>response.json()).then((data)=>setUsers(data))
       
}

    return(
        <div>
            <ul>

               {users.map((user, index) => {
                   return <li key={index}>{user}</li>
               })};   
            </ul>
        </div>
    )
}

export default UsersPage;