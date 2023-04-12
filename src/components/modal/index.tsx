import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalProps {
  open: boolean;
  handleClick(): void;
  handleClose(): void;
  title: string;
  subTitle: string;
  modalType: string;
}

export default function Modal({
  open,
  handleClick,
  handleClose,
  title,
  subTitle,
  modalType,
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
          {modalType === '' ? (
            <Button onClick={handleClose}>확인</Button>
          ) : (
            <>
              <Button onClick={handleClick}>확인</Button>
              <Button onClick={handleClose}>취소</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
