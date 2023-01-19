import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getTrendId } from '../../store/trendID/trendIDSlice';
import { Content } from './styled';
import { Container } from '../styled';

// --- COMPONENTES TENDENCIAS ---
import ShareButton from '../../components/Contentss/Tendenciess/ShareButton';
import ComentInput from '../../components/Contentss/Tendenciess/ComentInput';
import PostContent from '../../components/Contentss/Tendenciess/PostContent';
import PostTitle from '../../components/Contentss/Tendenciess/PostTitle';
import PostCarrousel from '../../components/Contentss/Tendenciess/PostCarrousel';

// AQUI SIMULA UM ATRIBUTO post_images COM AS IMAGENS SEPARA DE CADA CONTEUDO ---
import { post_images } from '../../imgs/data';

const TendenciesContentPage = () => {
    const dispatch = useAppDispatch();
    const id = localStorage.getItem('id');
    const data = useAppSelector((state) => state.trendID.data);

    useEffect(() => {
       if(id) {
        dispatch(getTrendId(Number(id)))
       }
    }, [id, dispatch]);

    return (
        <Container> 
            <PostCarrousel listImages={post_images}/>
            <Content> 
                <PostTitle title={data.post_title} />               
                <PostContent setInnerHTML={{ __html: data.post_content }} />
                <ShareButton shareClick={() => alert(`Compartilhar: ${data.post_title}?`)} />
                <ComentInput />         
            </Content> 
        </Container>
    );
};

export default TendenciesContentPage;