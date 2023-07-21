import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, InputAdornment, Pagination, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { Box, ThemeProvider } from '@mui/system'
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'
import { getProducts } from './api/getProducts';
import { useQuery } from "react-query";
import usePagination from "./utils/pagination";


function Home() {

  const { data } = useQuery(["fetch"], getProducts);

  console.log(data)

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
    <ThemeProvider>
      <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between", bgcolor: "black" }}>
          <Box sx={{ display: "flex" }}>
            <StoreIcon sx={{ mr: 2, mt: 0.5 }} />
            <Typography variant="h6" color="inherit" noWrap>
              OnlineStore
            </Typography>
          </Box>
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              sx={{ bgcolor: "white", borderRadius: 2 }}
            />
            <IconButton type="submit">
              <SearchIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "black",
              "&:hover": {
                backgroundColor: "#fff",
                color: "black",
              },
            }}
          >
            <ShoppingCartIcon />
            <p>10</p>
          </Button>
        </Toolbar>
      </AppBar>
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
                  <Button
                    size="small"
                  >
                    View
                  </Button>
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
    </ThemeProvider>
  );
}

export default Home
