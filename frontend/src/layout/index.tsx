import React, { useState, useEffect } from 'react';
import { Content, Section } from './styled';
import Sidebar from '../components/LayoutDefault/Sidebar';
import FloatingButton from '../components/LayoutDefault/FloatingButton';
import NavBar from '../components/LayoutDefault/NavBar';
import LoginModal from '../components/Modals/LoginModal';
import SuportModal from '../components/Modals/SuportModal';
import { useAppSelector } from '../store/hooks';
import { setTrendId } from '../store/trendID/trendIDSlice';
import { useNavigate } from 'react-router-dom';
import { getAllTendencies } from '../store/trends/trendsSlice';
import { useDispatch } from 'react-redux';

interface LayoutDefaultProps {
  component: JSX.Element
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ component }) => {
  const [sidebar, setSidebar] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSuport, setOpenModalSuport] = useState(false);
  const [idLocal, setIdLocal] = useState<string>('')

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trendsRedux = useAppSelector(getAllTendencies);
  
  useEffect(() => {
      const id = localStorage.getItem('id');

      if(id) {
        setIdLocal(id);
      } 
  }, [navigate]);
  
  useEffect(() => {
      const trendFounded = trendsRedux.find((value) => value.id === Number(idLocal));

      if(trendFounded) {
          dispatch(setTrendId(trendFounded));
      }

  }, [trendsRedux, idLocal, dispatch]);

  const handleOpenModalLogin = () => {
    setOpenModalLogin(true);
  };
  
  const handleOpenModalSuport = () => {
    setOpenModalSuport(true)
  }

  return (
    <>
      <NavBar menuOnClick={() => setSidebar(!sidebar)} loginClick={handleOpenModalLogin} />
      <Sidebar isActive={sidebar} mouseEnter={() => setSidebar(true)} mouseLeave={() => setSidebar(false)} mouseClick={() => setSidebar(false)}/>
      
      {!openModalSuport && (
        <Content>
          <FloatingButton suportClick={handleOpenModalSuport}/>
        </Content>
      )}

      <Section isSidebarActive={sidebar} onClick={() => setSidebar(false)}>
        { component }
      </Section>

      <LoginModal isOpen={openModalLogin} handleClose={() => setOpenModalLogin(false)} />
      <SuportModal isOpen={openModalSuport} handleClose={() => setOpenModalSuport(false)}/>
    </>
  )
}

export default LayoutDefault

