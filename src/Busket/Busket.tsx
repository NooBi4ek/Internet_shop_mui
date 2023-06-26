import { Dialog } from '@mui/material';
import React from 'react';

const Busket: React.FC = (props) => {
  const { dialog, SetOpenDialog } = props;
  return (
    <Dialog
      open={dialog}
      onClose={() => SetOpenDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      Fill...
    </Dialog>
  );
};
export default Busket;
