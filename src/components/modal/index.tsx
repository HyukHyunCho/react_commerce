import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalProps {
  open: boolean;
  title: string;
  subTitle: string;
  handleClose(): void;
}

export default function Modal({
  open,
  title,
  subTitle,
  handleClose,
}: ModalProps) {
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {subTitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={() => router.push('/cart')}>장바구니 이동</Button> */}
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
