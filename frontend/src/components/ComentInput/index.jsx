import * as React from 'react';
import { Input } from '@mui/material';

const ComentInput = () => {
  return (
    <Input sx={{
      width: '100%', 
      marginTop: 2, 
      padding: 1, 
      backgroundColor: '#dee1e3', 
      color: 'black'
    }} 
    id="input-coment" 
    placeholder='Comentários, sugestões ...' 
    />
  );
}

export default ComentInput