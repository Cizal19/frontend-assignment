import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { Typography, Box } from "@mui/material";


export default function Product({product}) {
  return (
    <>
      <Navbar />
      <Image src={product.image} alt="Product Image" width={500} height={600} />
      <Typography>{product.title}</Typography>
      <Typography>{product.description}</Typography>
      <Typography>Price: {product.price}</Typography>
      <Typography>Category : {product.category}</Typography>
      <Box display="flex" >
        <Typography>Rating:</Typography>
        <Typography mr={2}>{product.rating.rate}</Typography>
        <Typography>{product.rating.count}</Typography>
      </Box>
    </>
  );
}



export async function getStaticProps( {params} ) {
  const results = await fetch(`https://fakestoreapi.com/products/${params.productId}`).then(r => r.json());
  
  return {
    props: {
      product: results
    }
  }
}

export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products/").then(r => r.json());
  return {
    paths: products.map(product => {
      return{
        params: {
          productId: product.id.toString()
        }
      }
    }),
    fallback: false
  }
}