import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { id, name, years_of_experience, chef_pic_url, likes, no_of_recipes, bio, recipes } = chefDetails;
    return (
        <div>
            <Container >
                <div className=' py-5 mx-auto row justify-content-center'>
                    <div className='my-auto col'>
                        <h1 className=' fs-1 fw-bolder text-warning  mb-3'>{name}</h1>
                        <p><span className='fw-bold fs-5 text-secondary text-center'>{years_of_experience}+ Years of Experience  </span> </p>
                        <div className='d-flex justify-content-start'>
                            <p><span className='text-danger fs-4'><FaHeart /></span> <span className='text-secondary fw-bold fs-5'>{likes}</span>
                            </p>
                            <p className='mx-5 fw-bold fs-5 text-secondary'>
                                 Top Recipe: {no_of_recipes}
                            </p>
                        </div>

                        <p className=' fs-4 fw-bold text-secondary mb-4'> {bio}</p>
                    </div>
                    <div className='col ms-auto'>
                        <img src={chef_pic_url} class="rounded-circle img-fluid" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChefDetails;