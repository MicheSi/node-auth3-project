import React from 'react';
import { Card } from 'semantic-ui-react'

const UserCard = props => {
    return (
        <div className='usercard'>
            <Card>
                <Card.Content>
                    <Card.Header>Username: {props.username}</Card.Header>
                    <Card.Description>
                     Department: {props.department}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default UserCard;