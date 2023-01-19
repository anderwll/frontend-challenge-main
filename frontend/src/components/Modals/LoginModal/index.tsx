import React from 'react';
import { Box, Modal, Typography, Button, TextField } from '@mui/material';
import { Close, Login, Facebook } from '@mui/icons-material'; 

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 370,
    bgcolor: '#fff',
    boxShadow: 24,
    borderRadius: 2,
    zIndex: 99999
};

interface LoginModalProps {
    isOpen: boolean,
    handleClose: () => void
}
  
const LoginModal: React.FC<LoginModalProps> = ({ isOpen, handleClose }) => {
    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{height: 80, width: '100%', p: 2, display: 'flex'}}>
                        <Typography id="modal-modal-title" variant="h5" sx={{fontSize: '1.2rem'}}>
                            Entre ou crie uma conta para continuar
                        </Typography>
                        <Button variant="text" color="inherit" onClick={handleClose}>
                            <Close sx={{color: '#333', fontSize: '1.2rem', position: 'absolute', right: 0, top: 1}}/>
                        </Button>
                    </Box>
                    <Box sx={{height: 170, width: '100%', p: '0.2rem 2rem', display: 'flex', flexDirection: 'column', gap: 1.3, borderBottom: '1px solid #707070', borderTop: '1px solid #707070'}}>
                        <TextField variant='standard' color='info' label="E-mail" />
                        <TextField variant='standard' color='info' label="Senha" />
                        <Button variant="contained" color="info" startIcon={<Login/>} sx={{borderRadius: 5}}>
                            Entrar
                        </Button>
                    </Box>
                    <Box sx={{height: 70, width: '100%', p: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
                        <Button variant="contained" color="primary" startIcon={<Facebook/>}>
                            Login com o Facebook
                        </Button>
                    </Box>
                    <Box sx={{height: 50, width: '100%', p: 1, display: 'flex', flexDirection: 'column', gap: 2, borderTop: '1px solid #707070'}}>
                        <Button variant="text" color="primary">
                            Esqueceu sua senha?
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default LoginModal;