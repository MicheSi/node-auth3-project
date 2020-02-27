import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button, Form } from 'semantic-ui-react'

const SignIn = props => {

    const initialState = {
        username: '',
        password: ''
    }

    const [user, setUser] = useState(initialState);
    const history = useHistory();

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
            .post('/auth/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/users')
            })
            .catch(err => console.log('cannot sign up user', err))
    }

    return (
        <div className='signupForm'>
            <h2>Sign In</h2>
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
                <Button type='submit'>Sign In</Button>
            </Form>
            

        </div>
    )
}

export default SignIn;