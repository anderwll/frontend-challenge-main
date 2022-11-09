import * as React from 'react';
import Fab from '@mui/material/Fab';
import { IoHelpCircle } from "react-icons/io5";

const FloatingButton = () => {
  return (
    <Fab variant="extended" sx={{width: 120, backgroundColor: 'rgb(255, 221, 0)', fontSize: '0.87rem'}}>
      <IoHelpCircle/>
      Suporte
    </Fab>
  );
}

export default FloatingButton