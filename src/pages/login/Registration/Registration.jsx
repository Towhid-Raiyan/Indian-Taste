import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <Container className='my-5 py-5 w-25'>
                <h2 className='fs-1 fw-bolder'>Please Register !</h2>
                <Form className='my-5 bg-warning-subtle'>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name='accept' label="Accept Terms & Condition" />
                    </Form.Group>
                    <Button variant="warning w-100 text-white fw-bold" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary fw-bold">
                        Already have an account ? <Link to='/login'>Login</Link>
                    </Form.Text>
                    <Form.Text className="text-success">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Text className="text-danger">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Registration;