import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { addToOrder } from '../store/shopPhoneSlice.ts';
import * as notistack from 'notistack';
const MainPhone = ({ phones }) => {
  const { enqueueSnackbar } = notistack.useSnackbar();
  const dispatch = useAppDispatch();
  const handleClickVariant = (variant: VariantType) => {
    enqueueSnackbar('Товар переміщенно до кошика', { variant });
  };
  return (
    <Box sx={{ margin: '6vh 10vw', fontFamily: 'Open Sans' }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {phones.map((phone: IPhones) => (
          <Grid item md={4} xs={12} key={phone.id}>
            <Box
              sx={{
                backgroundColor: '#f5f5f5',
                textAlign: 'center',
                padding: '5vh 0',
                minHeight: '40vh',
                borderRadius: '10px',
                lineHeight: '2',
                transition: '0.3s ease all',
                ':hover': {
                  boxShadow: '10px 5px 5px #000, -1em 0 0.4em #a5a5a5',
                  transform: 'translateX(-2em)',
                  transform: 'translateY(-0.1in)',
                },
              }}
            >
              <img
                alt="imagePhone"
                src={'./img/' + phone.img}
                style={{
                  maxWidth: '12vw',
                  maxHeight: '25vh',
                }}
              />
              <div>{phone.name}</div>
              <div>{phone.price} ₴</div>
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(addToOrder(phone.id));
                  handleClickVariant('success');
                }}
                sx={{
                  backgroundColor: phone.click ? 'green' : '#90caf9',
                  width: '6vw',
                  height: '4vh',
                  fontSize: '11px',
                }}
              >
                В кошик
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default function Main() {
  const phones = useAppSelector((state) => state.shop.phones);
  return (
    <notistack.SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <MainPhone phones={phones} />
    </notistack.SnackbarProvider>
  );
}
