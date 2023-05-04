import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Reservation = () => {
    return (
        <div>
            <h2 className='text-center fs-1 fw-bolder mt-5 mb-5'>MAKE A RESERVATION</h2>
            <div>
                
                <Container className='my-5  w-50'>
                    <h5 className='fs-5 fw-semibold text-secondary text-center'>We are committed to provide you a wonderful experience of testing traditional Indian Food. Make a reservation to explore our food.</h5>
                    <Form className='my-5 bg-warning-subtle'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" name='phone' placeholder="Enter phone Number" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name='date' placeholder="Date" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" name='message' placeholder="Message" required />
                        </Form.Group>
                        <Button variant="warning w-100 text-white fw-bold" type="submit">
                            Reserve
                        </Button>
                        <br />
                    </Form>
                </Container>
            </div>
        </div>
    );
};

export default Reservation;