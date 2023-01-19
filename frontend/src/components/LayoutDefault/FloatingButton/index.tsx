import * as React from 'react';
import { Fab, useMediaQuery} from '@mui/material';
import { HelpOutline } from '@mui/icons-material';

interface FloatingButtonProps {
  suportClick: () => void
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ suportClick }) => {
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Fab variant="extended" onClick={suportClick}>
        <HelpOutline />
          {!matches && 'Suporte'}
      </Fab>
    </>
  );
}

export default FloatingButton