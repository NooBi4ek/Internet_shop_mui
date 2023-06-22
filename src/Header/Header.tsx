import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CompareIcon from '@mui/icons-material/Compare';
const Header: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '10vh',
        backgroundColor: '#90caf9',
        opacity: '1',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          textAlign: 'center',
          paddingTop: '2vh',
        }}
      >
        <Grid
          item
          xs={3}
          sx={{
            height: '8vh',
            borderRight: '1px solid #6794BA',
          }}
        >
          <div>Каталог</div>
        </Grid>
        <Grid item xs={4}>
          <SearchIcon sx={{ position: 'absolute', margin: '.6vh 0 0 1vw' }} />
          <InputBase
            placeholder="Search..."
            sx={{
              border: '1px solid #6794BA',
              borderRadius: '5px',
              paddingLeft: '3vw',
              width: '30vw',
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <CompareIcon />
        </Grid>
        <Grid item xs={1}>
          <ShoppingBasketIcon />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
