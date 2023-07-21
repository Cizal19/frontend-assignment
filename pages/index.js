import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from '@mui/material'
import { useState } from 'react'
import { getProducts } from './api/getProducts';
import { useQuery } from "react-query";
import usePagination from "./utils/pagination";
import Link from 'next/link';
import Navbar from './components/Navbar';
 

function Home() {

  const { data } = useQuery(["fetch"], getProducts);

  const products = data?.data;

  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const pageCount = Math.ceil(products?.length / PER_PAGE);
  const _DATA = usePagination(products, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <>
      <Navbar />
      <Grid container justifyContent="center" sx={{mt: 5}}>
        <Pagination
          page={page}
          count={pageCount}
          color="primary"
          onChange={handleChange}
        />
      </Grid>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {_DATA.currentData()?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    16:9
                  }}
                  image={product.image}
                  alt="random"
                  onClick={() => {
                    setOpenModal(true);
                    setModalImageId(product.id);
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="small"
                    >
                      View
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container justifyContent="center">
        <Pagination
          page={page}
          count={pageCount}
          color="primary"
          onChange={handleChange}
        />
      </Grid>
    </>
  );
}

export default Home
