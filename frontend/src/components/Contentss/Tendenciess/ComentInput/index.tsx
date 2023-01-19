import * as React from 'react';
import { Box, Input } from '@mui/material';

const ComentInput: React.FC = () => {
  return (
    <Box>
        <Input sx={{
            width: '100%', 
            m: '2rem 0', 
            padding: 1, 
            backgroundColor: '#dee1e3', 
            color: 'black',
            borderRadius: 1
        }}  
        placeholder='Comentários, sugestões ...' 
      />
    </Box>
  );
}

export default ComentInput