import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComponent() {

  return (
    <Container>


      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total: </div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>
          <Button variant='primary' >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
