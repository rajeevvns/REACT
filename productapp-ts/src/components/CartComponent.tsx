import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';

export default function CartComponent() {
  let { products, total, checkout } = useContext(CartContext);
  return (
    <Container>
      {
        products.map(product => <CartList product={product} key={product.id}/>)
      }

      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total: {total}</div>
      </div>
      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>
          <Button variant='primary' onClick={() => checkout()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
