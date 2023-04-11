import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h2>Leftside nav</h2>
                    </Col>
                    <Col lg='6'>
                        <Outlet/>
                    </Col>
                    <Col lg='3'>
                        <h2>Rightside Nav</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;