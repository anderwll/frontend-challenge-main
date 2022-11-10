import * as React from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { Fab } from '@mui/material';

const ShareButton = () => {
  return (
    <Fab variant="extended" 
        sx={{width: 160, 
        backgroundColor: '#dc3545',
        color: '#fff', 
        fontSize: '0.87rem'
        }}>
      <IoShareSocialSharp/>
      Compartilhar
    </Fab>
  );
}

export default ShareButton