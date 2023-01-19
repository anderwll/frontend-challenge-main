import * as React from 'react';
import { Box, Input, useMediaQuery } from '@mui/material';

const ComentInput: React.FC = () => {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <Box>
        <Input sx={{
            width: matches ? '82%' :'100%', 
            m: '2rem 0', 
            padding: 1, 
            backgroundColor: '#dee1e3', 
            color: '#000',
            borderRadius: 0.5
        }}  
        placeholder='Comentários, sugestões ...' 
      />
    </Box>
  );
}

export default ComentInput