import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
  const {
    buttonTitle,
    dialogTitle,
    dialogContentText,
    trueButtonText,
    trueButtonAction,
    falseButtonText,
    falseButtonAction,
  } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTrueButtonClick = () => {
    if (trueButtonAction) {
      trueButtonAction();
    }
    handleClose();
  };

  const handleFalseButtonClick = () => {
    if (falseButtonAction) {
      falseButtonAction();
    }
    handleClose();
  };

  return (
    <div>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
                 
            <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleFalseButtonClick}
          >
            {falseButtonText}
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={handleTrueButtonClick}
            autoFocus
          >
            {trueButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
