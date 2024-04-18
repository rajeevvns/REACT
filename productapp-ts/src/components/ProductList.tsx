import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../model/Product';
import ProductCard from './ProductCard';

export default function ProductList() {
    // products --> state
    // mutate only use setProducts function
    let [products, setProducts] = useState<Product[]>();

    // FCP
    // called as soon as component is rendered --> componentDidMount() life cycle
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
            setProducts(response.data);
            //    products = response.data; // state is change but no reconcillation
            //    console.log(products);
        });
    }, []);


    return (
        <div className='row'>
            {
                products?.map(p => <ProductCard product={p} />)
            }
        </div>
    )
}
