import React from 'react';

const UserCard = props => {
    return (
        <div className='usercard'>
            <h3>Username: {props.username}</h3>
            <p>Department: {props.department}</p>
        </div>
    )
}

export default UserCard;