import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaHeart } from 'react-icons/fa';

const ChefCard = ({ c }) => {
    const { id, name, years_of_experience, chef_pic_url, likes, no_of_recipes } = c;
    return (
        <Row className='mb-4'>
            <Col>
                <Card>
                    <Card.Img variant="top" className='rounded img-fluid p-2' src={chef_pic_url} />
                    <Card.Body>
                        <Card.Title className='fw-bolder fs-2 text-center'>{name}</Card.Title>
                        <Card.Text className='fw-bold fs-5 text-secondary text-center'>
                            {years_of_experience}+ Years of Experience
                        </Card.Text>
                        <Card.Text className='fw-bold fs-5 text-secondary text-center'>
                            Total Number of Recipe: {no_of_recipes}
                        </Card.Text>
                        <Card.Text className='fw-bold fs-5 text-center'>
                            <span className='text-danger'><FaHeart /></span> <span className='text-secondary'>{likes}</span>
                        </Card.Text>
                        
                    </Card.Body>
                    <Button variant="warning text-white fw-bold m-2" size="lg">
                        View Recipe
                    </Button>
                </Card>
            </Col>
        </Row>
    );
};

export default ChefCard;