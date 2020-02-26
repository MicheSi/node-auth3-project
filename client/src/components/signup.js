import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button, Form } from 'semantic-ui-react'

const Signup = props => {

    const initialState = {
        username: '',
        password: '',
        department: ''
    }

    const [user, setUser] = useState(initialState);

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log('new user', user)
    }

    const submitForm = e => {
        e.preventDefault();
        setUser({...user})
        axiosWithAuth()
            .post('/auth/register', user)
            .then(res => {
                setUser(user)
                window.location.href='/login'
            })
            .catch(err => console.log('cannot sign up user', err))
    }

    return (
        <div className='signupForm'>
            <h2>Sign Up</h2>
            <Form onSubmit={submitForm}>
                    <Form.Input
                     id='username'
                     type='text'
                     name='username'
                     label='Username'
                     placeholder='Enter a Username'
                     onChange={handleChange}
                     value={user.username}
                    />
                    <Form.Input
                     id='password'
                     type='password'
                     name='password'
                     label='Password'
                     placeholder='Enter a Password'
                     onChange={handleChange}
                     value={user.password}
                    />
                    <Form.Input
                     id='department'
                     type='text'
                     name='department'
                     label='Department'
                     placeholder='Enter Department'
                     onChange={handleChange}
                     value={user.department}
                    />
                <Button type='submit'>Sign Up</Button>
            </Form>
            

        </div>
    )
}

export default Signup;