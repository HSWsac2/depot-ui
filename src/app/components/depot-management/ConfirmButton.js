import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function ConfirmButton({ buttonText, acceptCallback, dialogTitle, dialogBody, color = "primary", acceptText = "Akzeptieren", cancelText = "Abbrechen" }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    setOpen(false);
    acceptCallback();
  };

  return (
    <div>
      <Button variant="outlined" color={color} onClick={handleClickOpen} sx={{
        width: "10rem",
      }}>
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="confirm-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-title">
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            {dialogBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            {cancelText}
          </Button>
          <Button color={color} variant="contained" onClick={handleAccept} autoFocus>
            {acceptText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}