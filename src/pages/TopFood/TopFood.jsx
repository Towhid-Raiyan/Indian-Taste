import React from 'react';
import Card from 'react-bootstrap/Card';
import pic1 from '../../assets/chicken-biriany.png';
import pic2 from '../../assets/hilsha-curry.png';
import pic3 from '../../assets/malai-kofta.png';
import { FaRegClock } from 'react-icons/fa';
import { FaUtensils } from 'react-icons/fa';



const TopFood = () => {
    return (
        <div>
            <h2 className='text-center fs-1 fw-bolder mt-5 '>RECIPE OF THE DAY</h2>
            <h2 className='text-center fs-5  mb-5 text-warning'>--- CHEF UNIQUE RECIPES ---</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card h-100">
                        <Card.Img variant="top" src={pic1} className='p-3 rounded' />
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fs-2 text-center">Chicken Biriany</h5>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaRegClock /> Time: 50 Min</p>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaUtensils /> Total Order: 400</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <Card.Img variant="top" src={pic2} className='p-3 rounded'/>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fs-2 text-center">Hilsha Curry</h5>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaRegClock /> Time: 30 Min</p>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaUtensils /> Total Order: 460</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <Card.Img variant="top" src={pic3} className='p-3 rounded'/>
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fs-2 text-center">Malai Kofta</h5>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaRegClock /> Time: 40 Min </p>
                            <p className="card-text fw-bold fs-5 text-secondary text-center"><FaUtensils /> Total Order: 600 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopFood;