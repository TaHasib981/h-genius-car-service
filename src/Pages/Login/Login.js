import React, { useRef } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailref = useRef('')
    const passwordref = useRef('')
    const navigate = useNavigate()
    const handleSubmitLogin = event =>{
        event.preventDefault()
        const email = emailref.current.value 
        const password = passwordref.current.value
    }
    const navigateRegister = () =>{
        navigate('/register')
    }
    return (
        <div>
            <Form className='w-50 mx-auto' onSubmit={handleSubmitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailref} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordref} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>not register <span onClick={navigateRegister} className='text-danger regLink'>creat an account</span></p>
            </Form>
        </div>
    );
};

export default Login;