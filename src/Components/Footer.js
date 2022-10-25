import React from 'react'

import { Container, Row, Col, Button } from 'react-bootstrap';

import { FaInnosoft } from 'react-icons/fa'

import { ListGroup } from 'react-bootstrap';

import { FaPhone, FaLocationArrow, FaEnvelope, FaCopyright, FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';


import { Form } from 'react-bootstrap';



function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className='footer-col'>
                            <div className='logo'>
                                <h1><FaInnosoft /> Consuloan</h1>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>

                            <ListGroup>
                                <ListGroup.Item> <FaLocationArrow /> 40 Barla Street , 14/57</ListGroup.Item>
                                <ListGroup.Item><FaPhone />  1200-1299-135</ListGroup.Item>
                                <ListGroup.Item> <FaEnvelope /> example@gmail.com</ListGroup.Item>

                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-col'>
                            <div className='logo'>
                                <h4>Our Links</h4>
                            </div>
                            <Container>
                                <Row>
                                    <Col>
                                        <ListGroup>
                                            <ListGroup.Item> About </ListGroup.Item>
                                            <ListGroup.Item> Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>

                                        </ListGroup>
                                    </Col>


                                    <Col>
                                        <ListGroup>
                                            <ListGroup.Item> About </ListGroup.Item>
                                            <ListGroup.Item> Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>
                                            <ListGroup.Item>  Home</ListGroup.Item>

                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-col'>
                            <div className='logo'>
                                <h4>Recent News</h4>
                            </div>

                            <div>
                                <h5>COlombia gets another viral</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate</p>
                            </div>


                            <div>
                                <h5>COlombia gets another viral</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className='footer-col'>
                            <div className='logo'>
                                <h4>NEWS LETTER</h4>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>

                            <Form>
                                <Form.Control type="email" placeholder="Enter your email" />
                                <Button type='button'>SUBMIT</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>

                
            </Container>


            <div className='endfooter '>

                <Container className='d-lg-flex justify-content-between align-items-center'>
                    <p>All rights reserved , <FaCopyright /> copyright 2007 </p>
                    <div className='foot-scl-lnks'>
                        <FaInstagram />
                        < FaTwitter />
                        <FaFacebook />
                        <FaLinkedin />
                    </div>
                    </Container>
                </div>
        </footer>
    )
}

export default Footer