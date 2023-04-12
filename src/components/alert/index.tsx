import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface IAlertValue {
  severity: string;
  message: string;
}

export default function Alerts({ severity, message }: IAlertValue) {
  const [open, setOpen] = useState(true);
  const vertical = 'bottom';
  const horizontal = 'center';
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      {severity === 'success' ? (
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      ) : (
        <Alert variant="filled" severity={'error'}>
          {message}
        </Alert>
      )}
    </Snackbar>
  );
}
