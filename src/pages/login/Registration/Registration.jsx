import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Registration = () => {

    const { createUser } = useContext(AuthContext);
    const [error,setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        
        event.preventDefault();
        setSuccess('');
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('');
                setSuccess('User has created successfully');
                event.target.reset();
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
                
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (

        <Container className='my-5 py-5 w-25'>
            <h2 className='fs-1 fw-bolder'>Please Register !</h2>
            <Form className='my-5 bg-warning-subtle' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="warning w-100 text-white fw-bold" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary fw-bold">
                    Already have an account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-success fw-semibold">
                    <p>{success}</p>
                </Form.Text>
                <Form.Text className="text-danger fw-semibold">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </Container>

    );
};

export default Registration;