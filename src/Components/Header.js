import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaTwitter, FaGooglePlay, FaSearch, FaCartPlus } from 'react-icons/fa'
import { FaInnosoft, FaPhone , FaLocationArrow ,FaTimesCircle } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <header >

            <div className='nav-header-blck'>
                <Container>
                    <Row >
                        <Col className='nav-head-txt'>
                            <p className='mb-0 text-black'>Welocome to Financial Servicing Consultants</p>
                        </Col>

                        <Col>
                            <div className='nav-header-icons'>
                                <Form.Select aria-label="Default select example w-none">
                                    <option>Eng</option>
                                    <option value="1">Lang 1</option>
                                    <option value="2">Lang 2</option>
                                    <option value="3">Lang 3</option>
                                </Form.Select>
                                <Button type="button"><FaFacebookF /></Button>
                                <Button type="button"><FaTwitter /></Button>
                                <Button type="button"><FaGooglePlay /></Button>

                                <Button type="button">GET A QUOTE</Button>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>


            <Container>
                <div className='header-logo-section d-flex justify-content-between align-items-center'>


                    <div className='logo'>
                        <h1><FaInnosoft />Consuloan</h1>
                    </div>

                    <div className='contact-section d-flex justify-content-between align-items-center'>

                        <div className='contact-block d-flex justify-content-between align-items-center'>
                            <div className='icon-blc'>
                                <FaPhone />
                            </div>

                            <div className='cont-txt'>
                                <p id='phone-num'>1200-1299-1356</p>
                                <p id='email'>example@gmail.com</p>
                            </div>
                        </div>

                        <div className='contact-block d-flex justify-content-between align-items-center'>
                            <div className='icon-blc'>
                                <FaLocationArrow />
                            </div>

                            <div className='cont-txt'>
                                <p id='phone-num'>40 Barla Street , 14/57</p>
                                <p id='email'>London ,Europe</p>
                            </div>
                        </div>


                        <div className='contact-block d-flex justify-content-between align-items-center'>
                            <div className='icon-blc'>
                                <FaTimesCircle />
                            </div>

                            <div className='cont-txt'>
                                <p id='phone-num'>8 AM - 6 PM</p>
                                <p id='email'>Monday to Tuesday</p>
                            </div>
                        </div>


                    </div>
                </div>
            </Container>

            <div className='header-container'>

                <Navbar expand="lg">
                    <Container className='naviagtion-block'>

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1" active>HOME</Nav.Link>
                                <Nav.Link href="#action2">ABOUT US</Nav.Link>
                                <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action2">PAGES</Nav.Link>
                                <Nav.Link href="#action2">PROJECTS</Nav.Link>
                                <Nav.Link href="#action2">NEWS</Nav.Link>
                                <Nav.Link href="#action2">SHOP</Nav.Link>
                                <Nav.Link href="#" >
                                    CONTACT
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Button type='button'><FaSearch /></Button>
                                <Button variant="outline-success"><FaCartPlus /></Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <div className='global-bus-section'>
                    <Container>
                        <h1>Communication is the key <br /> for any Global Bussiness</h1>
                        <Button type='button'>ABOUT US</Button>
                        <Button type='button'>OUR SERVICES</Button>
                    </Container>
                </div>


                <div  id='home-footer'>
                    <Container className='home-footer'>
                        <div>
                            <h4>Would you like to speak with one of our Financial Adviser ?</h4>
                            <p>Just submit your contact details we will get back to you shortly.</p>
                        </div>

                        <Button type='button'>Get a Quote</Button>
                    </Container>
                </div>

            </div>
        </header>
    )
}

export default Header