import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import { Fab } from '@mui/material';
import { Content } from './styled';

interface ShareButtonProps {
  shareClick: () => void
}

const ShareButton: React.FC<ShareButtonProps> = ({ shareClick }) => {
  return (
    <Content>
      <Fab variant="extended" onClick={shareClick}>
        <ShareIcon />
        Compartilhar
      </Fab>
    </Content>
  );
}

export default ShareButton