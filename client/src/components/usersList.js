import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import UserCard from './userCard';

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

    return (
        <div className='usersList'>
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