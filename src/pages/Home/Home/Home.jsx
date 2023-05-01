import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from '../../../assets/banner1.jpg'

const Home = () => {
    return (
        <div className='bg-light'>
            <Container >
                <div className='d-flex py-5 mx-auto justify-content-between '>
                    <div className='my-auto'>
                        <h1 className=' fs-2 fw-bold text-secondary mb-5'>Welcome to Indian Taste !!!</h1>
                        <h1 className=' fs-1 fw-bolder text-warning mb-4'>We do not cook,<br /> We create your emotions!</h1>
                        <Button variant="warning" className='fw-bold btn-lg text-white'>Login</Button>
                    </div>
                    <div>
                        <img src={banner} class="rounded-circle img-fluid" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;