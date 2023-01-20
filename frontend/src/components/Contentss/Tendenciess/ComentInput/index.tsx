import React, { useState } from 'react';
import { Box, Input, useMediaQuery, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ComentInput: React.FC = () => {
  const matches = useMediaQuery('(max-width: 900px)');
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState(false);
  const [button, setButton] = useState(false);

  const handleChange = (value: string) => {
    setInput(value);

    if(input.length <= 3) {
      setButton(false);
    } else {
      setInputError(false);
      setButton(true);
    }
  };

  const handleSend = () => {
    if(input.length >= 3) {

      // --- AQUI DISPARARIA UM DISPATCH P/ MANDAR O COMENTÁRIO P/ UMA API POR EXEMPLO
      alert(`Enviado com sucesso: ${input}`);
      setInput('');
      return
    }
    setInputError(true);
  }

  return (
    <Box sx={{ width: matches ? '83%' : '100%', display: 'flex'}}>
        <Button variant="text" color="inherit" sx={{display: input.length < 3 ? 'none' : 'block', mt: 4, height: '45%'}} onClick={handleSend}>
          <SendIcon />
        </Button>
        <Input sx={{ 
            width: button && matches ? '90%' :'100%',
            m: '2rem 0', 
            padding: 1, 
            backgroundColor: '#dee1e3', 
            color: '#000',
            borderRadius: 0.5
        }}  
        placeholder='Comentários, sugestões ...'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        error={inputError}
      />
    </Box>
  );
}

export default ComentInput