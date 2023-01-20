import React, { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

function Spinner() {
  const navigate = useNavigate();
  const { id } = useAppSelector((state) => state.trendID)

  useEffect(() => {
    if(!id) {
      setTimeout(() => {
        navigate('/not-found')
        return
      }, 5000);
    }
  }, [navigate, id]);


  return (
    <Box sx={{ 
        display: 'flex',
        position: 'absolute' as 'absolute',
        bottom: 0,
        right: 0,
        width: 'calc(100% - 4rem)',
        height: 'calc(100% - 4rem)',
        bgcolor: '#fff',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.4)'
      }}>
        <CircularProgress color='error'/>
    </Box>
  );
}

export default Spinner;