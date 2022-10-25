import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import { FaFax, FaHeadset, FaHandshake, FaDrumstickBite } from 'react-icons/fa'

function Advise() {
    return (
        <section className='advice-section'>

            <div className='advice-section-txt'>
                <h1>We Advice you , You call the Right Decision!</h1>
                <p>We entrepeneurs get the best out of the services to you</p>
            </div>

            <Container>
                <Row>
                    <Col>
                        <FaFax />
                        <h2>90</h2>
                        <p>Companines Consulted</p>
                    </Col>
                    <Col>
                        <FaFax />
                        <h2>90</h2>
                        <p>Companines Consulted</p>
                    </Col>
                    <Col>
                        <FaFax />
                        <h2>90</h2>
                        <p>Companines Consulted</p>
                    </Col>
                    <Col>
                        <FaFax />
                        <h2>90</h2>
                        <p>Companines Consulted</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Advise