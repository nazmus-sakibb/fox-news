import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='2'>
                        <h2>SideNav</h2>
                    </Col>
                    <Col lg='5'>
                        <Outlet />
                    </Col>
                    <Col lg='3'>
                        <h2>Right Side Nav</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;