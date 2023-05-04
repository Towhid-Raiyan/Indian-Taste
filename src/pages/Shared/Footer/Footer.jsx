import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-warning mb-0  opacity-75 container-fluid'>
            <Container className='container-fluid'>
                <div className='row  py-4 text-white'>
                    <h4 className='col-12 col-md-4'><i>Indian Taste</i></h4>
                    <h4 className='col-12 col-md-4'>Contact us <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaYoutube /></h4>
                    <h4 className='col-12 col-md-4'>
                        <small>© 2023 Indian Taste. All Rights Reserved.</small>
                    </h4>
                </div>
            </Container>
        </div>
    );
};

export default Footer;