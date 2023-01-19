import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface MyCardProps {
    title: string,
    imgUrl: string,
    cardClick: (e: any) => any
}

const MyCard: React.FC<MyCardProps> = ({ title, imgUrl, cardClick }) => {
    return (
        <Card sx={{ 
                maxWidth: '100%', 
                backgroundColor: '#f4f4f4', 
                '& > :hover': 
                    {filter: 'brightness(50%)', 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                    }
                }} onClick={cardClick}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="250"
                width='100%'
                image={imgUrl}
                alt={title}
                />
                <CardContent sx={{height: 120}}>
                <Typography gutterBottom variant="h5" sx={{fontWeight: 'bold'}}>
                    { title }
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default MyCard;