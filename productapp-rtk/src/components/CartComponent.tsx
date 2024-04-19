import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import CartList from './CartList';
import { useAppSelector } from '../redux/store';
import { useSelector } from 'react-redux';

export default function CartComponent() {
  let { products, total } = useAppSelector(state => state.cart);
  // let {products, total} = useSelector(state => state.cart);
  return (
    <Container>
      {
        products.map(p => <CartList key={p.id} product={p} />)
      }

      <div className='row'>
        <div className='col-md-8'>&nbsp;</div>
        <div className='col-md-4'>Total: {total}</div>
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
