import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram , FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-warning mb-0  opacity-75'>
            <Container className='d-flex justify-content-between py-4 text-white'>
                <h4><i>Indian Taste</i></h4>
                <h4>Contact us <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaYoutube/></h4>
                <h4 className=''>
                    <small>© 2023 Indian Taste. All Rights Reserved.</small>
                </h4>
            </Container>
        </div>
    );
};

export default Footer;