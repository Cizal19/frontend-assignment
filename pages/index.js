import { AppBar, Button, CssBaseline, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import { Box, ThemeProvider } from '@mui/system'
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

function Home() {
  return (
    <ThemeProvider >
      <AppBar position="absolute">
          <Toolbar sx={{justifyContent: 'space-between', bgcolor:'black'}}>
            <Box sx={{ display: 'flex'}}>
              <StoreIcon sx={{ mr: 2, mt: 0.5}} />
              <Typography variant="h6" color="inherit" noWrap>
                OnlineStore
              </Typography>
            </Box>
            {/* <Box sx={{ display: 'flex', alignItems: 'center',mt: 0.5 }}>
              <SearchIcon sx={{ color: 'white', fontSize: 30 }} />
              <TextField variant="filled" label="Search" sx={{bgcolor: 'white', borderRadius: 3}} shirnk="false" />
            </Box>             */}
            <Box>
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                sx={{bgcolor: 'white', borderRadius: 2, outline:"none"}}
                
              />
              <IconButton type="submit">
                <SearchIcon style={{ fill: "white" }} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "black",
                '&:hover': {
                  backgroundColor: '#fff',
                  color: 'black',
                  }
                }}
            >
              <ShoppingCartIcon />
              <p>10</p>
            </Button>
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  )
}

export default Home
