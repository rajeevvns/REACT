import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { cartContext } from '..';
import { observer } from 'mobx-react-lite';

function CartComponent() {
  let cartStore = useContext(cartContext); 
  return (
    <Container>
      {
        cartStore.cart.map(product => <CartList product={product} key={product.id}/>)
      }
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total: {cartStore.total}</div>
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

export default observer(CartComponent);