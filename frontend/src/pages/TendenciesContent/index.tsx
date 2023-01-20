import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTrendId, Trend } from '../../store/trendID/trendIDSlice';
import { Content } from './styled';
import { Container } from '../styled';

// --- COMPONENTES TENDENCIAS ---
import ShareButton from '../../components/Contentss/Tendenciess/ShareButton';
import ComentInput from '../../components/Contentss/Tendenciess/ComentInput';
import PostContent from '../../components/Contentss/Tendenciess/PostContent';
import PostTitle from '../../components/Contentss/Tendenciess/PostTitle';
import PostCarrousel from '../../components/Contentss/Tendenciess/PostCarrousel';
import { getAllTendencies, getTendencyByID } from '../../store/trends/trendsSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// --- AQUI SIMULA UM ATRIBUTO post_images COM AS IMAGENS SEPARADAS DE CADA CONTEUDO ---
// import { post_images } from '../../imgs/data';
interface TendenciesContentPageProps {
    trend: Trend
}

const TendenciesContentPage: React.FC<TendenciesContentPageProps> = ({ trend }) => {
    const [idLocal, setIdLocal] = useState<string>('')
    const [trendLocal, setTrendLocal] = useState<Trend>(trend)
    const trendsRedux = useAppSelector(getAllTendencies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const id = localStorage.getItem('id');
        console.log(id);

        if(!id) {
           navigate('/tendencies') 
           return
        }

        setIdLocal(id)
    }, [navigate])
    
    useEffect(() => {
        document.title = 'Tendências | Refresher'

        const trendFounded = trendsRedux.find((value) => value.id === Number(idLocal))

        if(trendFounded) {
            setTrendLocal(trendFounded);
            dispatch(setTrendId(trendFounded));

            console.log('Disparouuu' + trendFounded);
        }

    }, [trendsRedux, idLocal, dispatch]);

    return (
        <Container> 
            <PostCarrousel listImages={trend.post_images ?? trendLocal.post_images}/>
            <Content> 
                <PostTitle title={trend.post_title ?? trendLocal.post_title} />               
                <PostContent setInnerHTML={{ __html: trend.post_content ?? trendLocal.post_content }} />
                <ShareButton shareClick={() => alert(`Compartilhar: ${trend.post_title ?? trendLocal.post_title}?`)} />
                <ComentInput />         
            </Content> 
        </Container>
    );
};

export default TendenciesContentPage;