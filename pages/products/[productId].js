import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import Image from 'next/image'
import { Typography, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";



export default function Product({product}) {
  return (
    <>
      <Navbar />
      <Card sx={{ width: 400, margin: "auto", mt: 5 }}>
          <CardMedia
            component="img"
            sx={{
              16: 9,
            }}
            image={product.image}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography mt={1}>Price: ${product.price}</Typography>
            <Typography sx={ {textTransform: "capitalize"} }>
              Category : {product.category}
            </Typography>
            <Box display="flex">
              <Typography>Rating:</Typography>
              <Typography mr={1} ml={1}>{product.rating.rate}/5</Typography>
              <Typography>({product.rating.count})</Typography>
            </Box>
          </CardContent>
      </Card>
      <Footer />
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