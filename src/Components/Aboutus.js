import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaDollarSign, FaFileSignature, FaVolumeUp  } from 'react-icons/fa'

function Aboutus() {
   return (
      <section className='about-us'>

         <Container>
            <div className='about-us-head'>
               <h1>About us</h1>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>
            </div>

            <Row>
               <Col>
                  <div className='aboutus-col'>
                     <FaDollarSign />
                     <h3>Financial Projections</h3>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>
                  </div>
               </Col>
               <Col>
                  <div className='aboutus-col'>
                     < FaFileSignature/>
                     <h3>Strategy & Consultants</h3>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>
                  </div>
               </Col>
               <Col>
                  <div className='aboutus-col'>
                     <FaVolumeUp />
                     <h3>Online & Consulting</h3>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>
                  </div>
               </Col>
            </Row>
         </Container>

      </section>
   )
}

export default Aboutus