import React from 'react'
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Requestcall() {
  return (
    <section className='request-call'>
      <div className='request-call-txt'>
        <h1>Request a call back.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis cupiditate libero fugit cum unde dolore veritatis vel minima iure? Iusto eum, quia ut quisquam velit atque architecto optio voluptatum iste!</p>

      </div>
      <Container>
        <Form>
          <Form.Control type="text" placeholder="How can we Help you?" />
          <Form.Control type="text" placeholder="Your Name?" />
          <Form.Control type="number" placeholder="Phone Number ?" />
          <Button type='button'>SUBMIT</Button>
        </Form>
      </Container>
    </section>
  )
}

export default Requestcall