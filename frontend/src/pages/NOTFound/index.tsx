import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useNavigate } from 'react-router-dom';

const NOTFoundPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
    document.title = 'Página não encontrada | Refresher';
    }, []);

    const handleNavigate = (route: string) => {
        switch (route) {
            case 'dashboard': 
                navigate('/home');
                break;
            case 'content': 
                navigate('/content');
                break;
            case 'client': 
                navigate('/client');
                break;
            case 'on_boarding': 
                navigate('/home');
                break;
            default:
                break;
        };
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'space-around',  alignItems: 'center',  flexDirection: 'column', width: '100vw', height: '100vh'}}>
            <Box sx={{width: '100%', textAlign: 'center'}}>
                <Typography variant="h4" color="initial">Erro 404</Typography>
            </Box>
            <Box sx={{width: '100%', textAlign: 'center'}}>
                <Typography variant="h2" color="initial">Ops!</Typography>
                <Typography variant="h5" color="initial">Página não encontrada!</Typography>    
            </Box>
            <Box sx={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center',  alignItems: 'center',  flexDirection: 'column',}}>
                <Typography variant="h6" color="initial">Aqui estão alguns links que podem te ajudar</Typography>
                <Button variant="text" color="inherit" startIcon={<AttachFileIcon />} onClick={() => handleNavigate('dashboard')}>
                    Dashbord
                </Button>
                <Button variant="text" color="inherit" startIcon={<AttachFileIcon />} onClick={() => handleNavigate('content')}>
                    Conteúdos
                </Button>
                <Button variant="text" color="inherit" startIcon={<AttachFileIcon />} onClick={() => handleNavigate('client')}>
                    Painel de Clientes
                </Button>
                <Button variant="text" color="inherit" startIcon={<AttachFileIcon />}onClick={() => handleNavigate('on_boarding')}>
                    On-boarding
                </Button>
            </Box>
        </Box>
      )
  };
  
  export default NOTFoundPage;