import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaTwitch, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle /> Login with Google</Button>
                <Button className='mb-5' variant='outline-dark'><FaGithub /> Login with GitHub</Button>
            </ButtonGroup>

            <div className='mb-5'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaLinkedin /> LinkedIn</ListGroup.Item>
                </ListGroup>
            </div>

            {/* carousel */}
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;