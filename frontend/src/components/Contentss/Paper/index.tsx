import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

interface MyPaperProps {
    title: string,
    background: string,
    cardClick: (e: any) => any
}

const MyPaper: React.FC<MyPaperProps> = ({ title, background, cardClick }) => {
    return (
        <>
           <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 0.8,
                width: 180,
                height: 240,
                background: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                filter: 'brightness(90%)',
                overflow: 'hidden',
                cursor: 'pointer',
                }, '& > :hover': {
                    transform: 'scale(1.1)',
                    transition: 'all .5s ease'
                }
            }}
            onClick={cardClick}
            >
                <Paper elevation={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'end', p: '2rem 0.5rem'}}> 
                    <Box sx={{height: 65, widht: '100%', overflow: 'hidden'}}>
                        <Typography variant="h6" color="#fff" sx={{fontWeight: 'regular'}}>{ title && title.toUpperCase() }</Typography>
                    </Box>
                </Paper>
            </Box> 
        </>
    );
};

export default MyPaper;