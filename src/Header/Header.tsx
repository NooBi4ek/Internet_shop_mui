import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CompareIcon from '@mui/icons-material/Compare';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Busket from '../Busket/Busket.tsx';
const Header: React.FC = () => {
  const [hover, Sethover] = useState<boolean>(false);
  const [dialog, SetOpenDialog] = useState<boolean>(false);
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
            fontWeight: 'bold',
            letterSpacing: '.1em',
          }}
        >
          <div
            onMouseEnter={() => Sethover(true)}
            onMouseLeave={() => Sethover(false)}
            style={{ float: 'left', marginLeft: '7vw', cursor: 'pointer' }}
          >
            Каталог
          </div>
          {hover ? (
            <KeyboardArrowUpIcon
              sx={{
                transition: '.3s all',
                marginLeft: '-6vw',
                color: 'blue',
              }}
            />
          ) : (
            <KeyboardArrowDownIcon
              sx={{ transition: '.3s all', marginLeft: '-6vw' }}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          <SearchIcon
            sx={{
              position: 'absolute',
              margin: '.6vh 0 0 1vw',
            }}
          />
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
          <CompareIcon
            sx={{
              cursor: 'pointer',
              transition: '.3s ease all',
              ':hover': {
                color: 'blue',
              },
            }}
            titleAccess="Порівняння"
          />
        </Grid>
        <Grid item xs={1}>
          <ShoppingBasketIcon
            sx={{
              cursor: 'pointer',
              ':hover': {
                color: 'blue',
              },
            }}
            titleAccess="Кошик"
            onClick={() => SetOpenDialog(true)}
          />
        </Grid>
      </Grid>
      <Busket dialog={dialog} SetOpenDialog={SetOpenDialog} />
    </Box>
  );
};
export default Header;
