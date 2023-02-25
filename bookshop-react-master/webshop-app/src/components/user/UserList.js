import React from 'react';
import { useState, useEffect } from 'react'
import '../../css/Users.css'
import User from './User'

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
    }

    return (
        <>
            <div className="container mt-5 mb-3">
                <ol className="list-group list-group-numbered" >
                    {users.map((item) =>
                        <User
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            username={item.username}
                            email={item.email}
                            role={item.role}
                            address={item.address}
                            phone={item.phone}
                            getUsers={getUsers}
                        />
                    )}
                </ol>

            </div >
        </>
    )
}

export default UserList;