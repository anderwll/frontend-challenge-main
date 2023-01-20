import React, { useEffect } from 'react';
import { Container } from '../styled';
import { Grid, useMediaQuery } from '@mui/material';
import MyCard from '../../components/Contentss/Tendenciess/Card';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTrendId } from '../../store/trendID/trendIDSlice';
import { getAllTendencies } from '../../store/trends/trendsSlice';
import { useNavigate } from 'react-router-dom';
import { setIdSelected } from '../../store/idTrendSelected/idTrendSelectedSlice';

const TendenciesPage = () => {
    const dispacth = useAppDispatch();
    const navigate = useNavigate();
    const matches = useMediaQuery('(max-width:600px)');
    const trendsRedux = useAppSelector(getAllTendencies)

    useEffect(() => {
        document.title = 'Tendências | Refresher';
      }, []);

    const handleCard = (id: number) => {
        dispacth(setIdSelected(`${id}`));

        localStorage.setItem('id', `${id}`);
    
        const trendFounded = trendsRedux.find((value) => value.id === id)

        if(trendFounded) {
            dispacth(setTrendId(trendFounded))
            navigate(`/tendencie/${trendFounded.post_name}`); 
        }
    };

    return (
        <Container>
            <Grid container spacing={1} sx={{width: 'calc(100vw - 4rem)', height: '100%', display: 'flex', flexDirection: 'row', p: matches ? '2rem 0' : '2rem', justifyContent: 'start', alignItems: 'start'}}>
             
                {trendsRedux && trendsRedux.map((item: any, index: number) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                        <MyCard  title={item.post_title} imgUrl={item.post_images[0]} cardClick={() => handleCard(item.id)}/>
                    </Grid>
                ))}

            </Grid>
        </Container>
    )
  };
  
  export default TendenciesPage;