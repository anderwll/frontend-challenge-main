import React from 'react';
import { Box, Modal, Typography, Button, TextField, useMediaQuery } from '@mui/material';
import { HorizontalRule } from '@mui/icons-material'; 

interface SuportModalProps {
    isOpen: boolean,
    handleClose: () => void
}
  
const SuportModal: React.FC<SuportModalProps> = ({ isOpen, handleClose }) => {
    const matches = useMediaQuery('(max-width:600px)');
    
    const style = {
        position: 'absolute' as 'absolute',
        bottom: matches ? '0' : '1rem',
        right: matches ? '0' : '1rem',
        width: matches ? '100%' : 350,
        height: matches ? '100%' : 520,
        bgcolor: '#fff',
        boxShadow: 24,
        borderRadius: matches ? 0 : 2,
        overflow: 'hidden',
        zIndex: 9999,
    };

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{height: 50, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(255, 221, 0)'}}>
                        <Typography id="modal-modal-title" variant="body1" sx={{fontSize: '1rem', fontWeight: 'bold'}}>
                            Entre em contato conosco
                        </Typography>
                        <Button variant="text" color="inherit" onClick={handleClose} sx={{position: 'absolute', right: 0}}>
                            <HorizontalRule sx={{color: '#333', fontSize: '1.2rem'}}/>
                        </Button>
                    </Box>
                    <Box sx={{height: matches ? '80%' : 410, width: '100%', p: '0.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: matches ? 2 : 0.2}}>
                        <Typography variant="subtitle1" color="#000" fontWeight='bold'>Nome <span style={{color: '#707070'}}>(opcional)</span></Typography>
                        <TextField variant='outlined' color='info' />
                        <Typography variant="subtitle1" color="#000" fontWeight='bold'>Endereço de e-mail</Typography>
                        <TextField variant='outlined' color='info' />
                        <Typography variant="subtitle1" color="#000" fontWeight='bold'>Como podemos ajudá-los?</Typography>
                        <TextField variant='outlined' color='info' multiline rows={3} />
                        <Typography variant="subtitle1" color="#000" fontWeight='bold'>Anexos</Typography>
                        <TextField variant='outlined' color='info' placeholder='🔗 Adicione até 5 arquivos' />                       
                    </Box>
                    <Box sx={{height: 50, width: '100%', p: '0 1rem', display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'space-between',gap: 2, borderTop: '1px solid #3333'}}>
                        <Typography variant="subtitle2" color="#707070">zendesk</Typography>
                        <Button variant="contained" sx={{p: 1, width: 90, backgroundColor: 'rgb(255, 221, 0)', color: '#000', fontWeight: 'bold'}}>
                            Enviar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    );
};

export default SuportModal;