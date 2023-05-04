import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaRegStar, FaStar, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
// import { Toast } from "react-bootstrap";
import Swal from 'sweetalert2';

const RecipeCard = ({ food }) => {

    const { name, ingredients, cooking_method, ratings, meal_pic_url } = food;
    const ingri = { ingredients };
    const compo = ingri.ingredients;
    const [isDisable,setIsDisable] = useState(false);

    const handleFavourite = () => {
        Swal.fire(
            'Good job!',
            'This item added to your Favourite!',
            'success'
          )
          setIsDisable(true);
    };
   
    return (
        <div>
            <Row className='mb-4'>
                <Col>
                    <Card>
                        <Card.Img variant="top" className='rounded img-fluid p-2' src={meal_pic_url} />
                        <Card.Body>
                            <Card.Title className='fw-bolder fs-2 text-center'>{name}</Card.Title>
                            <Card.Text className='fw-bold fs-5 text-center ms-2 d-flex align-items-center justify-content-center'>
                                <Rating
                                    placeholderRating={ratings}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                >
                                </Rating>
                                <span className='text-secondary ms-2'>{ratings}</span>
                            </Card.Text>
                            <Card.Text className='fs-6 text-secondary'>
                                <span className='fw-semibold text-dark'>Ingredients:</span> {compo.map((i) => (<span className=' fs-6 text-secondary ' key={i.name}> {i}, </span>))}
                            </Card.Text>
                            <Card.Text className=' fs-6 text-secondary '>
                                <span className='fw-semibold text-dark'>Cooking Method:</span> {cooking_method}
                            </Card.Text>
                        </Card.Body>
                        <Link className='m-2'>
                            <Button variant="warning text-white fw-bold  w-100 " size="lg" onClick={handleFavourite} disabled={isDisable}>
                                <span className='fs-5'>Favourite</span> <span className='fs-4'><FaThumbsUp /></span>
                            </Button>
                        </Link>
                    </Card>
                </Col>
            </Row>

        </div>
    );
};

export default RecipeCard;