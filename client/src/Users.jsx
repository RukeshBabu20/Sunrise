import React, {useState } from 'react';
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';


function Users() {
    // const [users, setUsers] = useState([{
    //     Name: "yousaf", Email: "ysf@gmail.com", Age: 20
    // }])

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:3001/')
        .then(users => setUsers(users))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounder p-3">
                <Link to="/create" className="btn btn-success">Add + </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {
                            
                            users.map((user)=>{
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to="/update" className='btn btn-success'>Update +</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;