import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../model/Product';
import ProductCard from './ProductCard';
import { useAppSelector, useAppDispatch } from '../redux/store';
import fetchProducts from '../redux/api/ProductApi';

export default function ProductList() {
    // products --> state
    // mutate only use setProducts function
    // let [products, setProducts] = useState<Product[]>();
    let dispatch = useAppDispatch();
    let { list: products, status, error } = useAppSelector(state => state.products);
    useEffect(() => {
        dispatch(fetchProducts()); // dispatch a thunk
    }, []);

    // // FCP
    // // called as soon as component is rendered --> componentDidMount() life cycle
    // useEffect(() => {
    //     // axios.get("https://fakestoreapi.com/products?limit=5").then(response => {
    //     axios.get("http://localhost:1234/products").then(response => {
    //         setProducts(response.data);
    //         //    products = response.data; // state is change but no reconcillation
    //         //    console.log(products);
    //     });
    // }, []);


    return (
        <div className='row'>
            {
                (status === 'loading') ? <h1>Loading Products....</h1> :
                    products?.map(p => <ProductCard product={p} key={p.id} />)
            }
        </div>
    )
}
