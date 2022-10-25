import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { Figure } from 'react-bootstrap'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'




function Ourteam() {
    return (
        <section className='our-tm-sec'>
            <div className='our-tm-sec-txt'>
                <h1>Meet Our Team</h1>
                <p>We entrepeneurs get the best out of the services to you</p>
            </div>


            <Container>
                <Row>
                    <Col>
                        <div className='team-member'>

                            <Figure.Image
                                src="../images/img1.jpg"
                                width={171}
                                height={180}
                                alt="171x180"
                            />

                            <Figure.Caption>
                                <div className='mem-det'>
                                    <h4>Jackson Mash</h4>
                                    <p>Tax Advise</p>
                                </div>

                                <div className='scl-lnks'>
                                    <FaInstagram />
                                    < FaTwitter />
                                    <FaFacebook />
                                    <FaLinkedin />
                                </div>
                            </Figure.Caption>


                        </div>
                    </Col>

                    <Col>
                        <div className='team-member'>
                            <Figure.Image
                                src="../images/img2.jpg"
                                width={171}
                                height={180}
                                alt="171x180"
                            />

                            <Figure.Caption>
                                <div className='mem-det'>
                                    <h4>Jackson Mash</h4>
                                    <p>Tax Advise</p>
                                </div>

                                <div className='scl-lnks'>
                                    <FaInstagram />
                                    < FaTwitter />
                                    <FaFacebook />
                                    <FaLinkedin />
                                </div>
                            </Figure.Caption>
                        </div>
                    </Col>
                    <Col>
                        <div className='team-member'>
                            <Figure.Image
                                src="../images/img3.jpg"
                                width={171}
                                height={180}
                                alt="171x180"
                            />

                            <Figure.Caption>
                                 <div className='mem-det'>
                                    <h4>Jackson Mash</h4>
                                    <p>Tax Advise</p>
                                </div>

                                <div className='scl-lnks'>
                                    <FaInstagram />
                                    < FaTwitter />
                                    <FaFacebook />
                                    <FaLinkedin />
                                </div>
                            </Figure.Caption>
                        </div>
                    </Col>
                    <Col>
                        <div className='team-member'>
                            <Figure.Image
                                src="../images/img4.jpg"
                                width={171}
                                height={180}
                                alt="171x180"
                            />

                            <Figure.Caption>
                              <div className='mem-det'>
                                    <h4>Jackson Mash</h4>
                                    <p>Tax Advise</p>
                                </div>
                                
                                <div className='scl-lnks'>
                                    <FaInstagram />
                                    < FaTwitter />
                                    <FaFacebook />
                                    <FaLinkedin />
                                </div>
                            </Figure.Caption>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Ourteam