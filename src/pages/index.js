import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { Me } from '../components/Me';
import { NavTabs } from '../components/NavTabs';


export const Index = () => {
    return (
        <div className='bg-light p-4 d-flex flex-column justify-content-center' style={{minHeight: '100vh',}}>
            <Row className align-items-center>
                <Col xs={12} md={{span: 8, offset: 2}} lg={{span: 4, offset: 0}}> < Me /> </Col>
                <Col xs={12} md={12} lg={1} className="my-3"></Col> 
                <Col xs={12} md={{span: 8, offset: 2}} lg={{span: 7, offset: 0}}> < NavTabs /> </Col>
            </Row>
        </div>
    );
}
