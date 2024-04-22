import { createAsyncThunk } from '@reduxjs/toolkit'
import Product from '../../model/Product';

const fetchProducts = createAsyncThunk(
  'products/fetch',
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(`http://localhost:1234/products`)
    return (await response.json()) as Product[]
  },
)

export default fetchProducts;

// when fetchProducts is dispatched ==> pending action
// if async() code completes --> fullfilled action
// any issue/exception in asyc() code --> rejected action

