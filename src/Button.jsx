import React from "react";

import { withSnackBarConsumer } from './SnackBarContext';
const SnackBarControl = ({ text, handleOpen }) => (
  <button onClick={() => handleOpen(text)}>
     Show me!
   </button>
);
export default withSnackBarConsumer(SnackBarControl);
