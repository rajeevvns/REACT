import React from 'react'
import Product from '../model/Product'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

type AppProps = {
    product: Product
}

export default function ProductCard(props: AppProps) {
    let { id, title, image, description, price } = props.product;
    return (
        <div className='col-md-6 col-lg-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Footer>
                        Rs. {price}  <FontAwesomeIcon color='red' icon={faHeart} />
                        &nbsp;
                        &nbsp;
                        <FontAwesomeIcon color='blue' icon={faShoppingCart} />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )
}

//https://react-bootstrap.netlify.app/docs/components/cards