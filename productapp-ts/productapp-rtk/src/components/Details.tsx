import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../model/Product';
import axios from 'axios';
export default function Details() {

  let { id } = useParams();
  let [product, setProduct] = useState<Product>();

  useEffect(() => {
    // axios.get("https://fakestoreapi.com/products/" + id).then(response => {
    axios.get("http://localhost:1234/products/" + id).then(response => {
      setProduct(response.data);
    });
  })
  return (
    <div>
      <h1>Details of : {id}</h1>
      {product && <div>
        <img src={product?.image} />
        Description : {product?.description}
      </div>
      }
    </div>
  )
}
