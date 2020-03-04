import React from "react";
import Snackbar from '@material-ui/core/Snackbar';

import { withSnackBarConsumer } from './SnackBarContext';
const SnackBar = ({ open, handleClose, displayText }) => (
  <div className="snackBarHolder">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={displayText} />
  </div>
);
export default withSnackBarConsumer(SnackBar);