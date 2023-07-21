import React from 'react'
import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useRouter} from 'next/router'


function Navbar() {

  const router = useRouter()

  return (
    <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between", bgcolor: "black", width: '100%'}}>
            <Box 
              sx={{ display: "flex", cursor: 'pointer' }} 
              onClick={() =>{ 
                router.push("/")
              }}
            >
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
  )
}

export default Navbar