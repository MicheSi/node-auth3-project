import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import UserCard from './userCard';
import {Button} from 'semantic-ui-react';

const UsersList = props => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/users')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
        .catch(err => console.log('cannot retrieve users', err));
    }, [])

    const signout = e => {
        e.preventDefault()
        localStorage.clear();
        window.location.href='/signin'
    }

    return (
        <div className='usersList'>
            <Button className='signoutBtn' onClick={signout}>Sign Out</Button>
            {users.map(user => (
                <UserCard
                 key={user.id}
                 username={user.username}
                 department={user.department}
                />
            ))}
        </div>
    )
}

export default UsersList;