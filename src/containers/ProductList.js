import React, { useEffect } from 'react'
import axios from 'axios';
import ProductComponents from './ProductComponents';
import { useDispatch, useSelector } from 'react-redux'
import {setProducts} from '../redux/actions/productActions'

const ProductList = () =>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    //fetch products from API using axios
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) =>{
            console.log("Error fetching products from API", err);
        })
        //Once data is received from API, use dispatch to pass/send data
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    console.log("Products:", products)
        return(
            <div className="ui grid container">
                <ProductComponents />
            </div>
        )
}

export default ProductList