import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography, Box } from '@mui/material'
import { useState } from 'react'
import { getProducts } from './api/getProducts';
import { useQuery } from "react-query";
import usePagination from "./utils/pagination";
import Link from 'next/link';
import { useRouter } from "next/router";

function Main() {

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

  const router = useRouter()

  return (
    <>
      <Grid container justifyContent="center" sx={{ mt: 5 }}>
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
                  height="100%"
                  width="100%"
                  sx={{
                    16: 9,
                  }}
                  image={product.image}
                  alt="random"
                  onClick={() => {
                    router.push(`/products/${product.id}`);
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }} justify="flex-end">
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography mt={1}>Price: ${product.price}</Typography>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    Category : {product.category}
                  </Typography>
                  <Box display="flex">
                    <Typography>Rating:</Typography>
                    <Typography mr={1} ml={1}>
                      {product.rating.rate}/5
                    </Typography>
                    <Typography>({product.rating.count})</Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Link href={`/products/${product.id}`}>
                    <Button size="small">View</Button>
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

export default Main