import { Dialog, Grid } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks.ts';
import { addToOrder, removeCount } from '../store/shopPhoneSlice.ts';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
interface IDialog {
  dialog: boolean;
  SetOpenDialog: boolean;
}
const Busket: React.FC = (props) => {
  let sum = 0;
  const { dialog, SetOpenDialog }: IDialog = props;
  const { orders } = useAppSelector((state) => state.shop);
  orders.map((order: IPhones) => (sum += order.count * order.price));
  const dispatch = useAppDispatch();
  return (
    <Dialog
      open={dialog}
      onClose={() => SetOpenDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {orders.length > 0 ? (
        <Grid>
          {orders.map((order: IPhones) => (
            <Grid container sx={{ width: '35vw', margin: '5vh 0 5vh 5vw' }}>
              <img
                alt="imagePhone"
                src={'./img/' + order.img}
                style={{
                  maxWidth: '12vw',
                  maxHeight: '25vh',
                }}
              />
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexDirection: 'column',
                  marginLeft: '2vw',
                }}
              >
                <div>{order.name}</div>
                <Grid container>
                  <AddCircleIcon
                    onClick={() => dispatch(addToOrder(order.id))}
                  />
                  <div style={{ margin: '0 1vw' }}>{order.count} </div>
                  <RemoveCircleIcon
                    onClick={() => dispatch(removeCount(order.id))}
                  />
                </Grid>
                <div>Ціна: {order.price * order.count} ₴</div>
              </Grid>
            </Grid>
          ))}
          <div style={{ margin: '0 0 2vh 2vw' }}>
            Загальна вартість: {sum} ₴
          </div>
        </Grid>
      ) : (
        <Grid
          sx={{
            display: 'flex',
            width: '30vw',
            height: '30vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Товара в кошику немає!
        </Grid>
      )}
    </Dialog>
  );
};
export default Busket;
