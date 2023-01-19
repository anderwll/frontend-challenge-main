import React, { useState } from 'react';
import { Content, Section } from './styled';

import Sidebar from '../components/LayoutDefault/Sidebar';

import FloatingButton from '../components/LayoutDefault/FloatingButton';
import NavBar from '../components/LayoutDefault/NavBar';
import LoginModal from '../components/Modals/LoginModal';
import SuportModal from '../components/Modals/SuportModal';

interface LayoutDefaultProps {
  component: React.FC
}

const LayoutDefault: React.FC<LayoutDefaultProps> = ({ component: Component }) => {
  const [sidebar, setSidebar] = useState(false);
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [openModalSuport, setOpenModalSuport] = useState(false);

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
        <Component  />
      </Section>

      <LoginModal isOpen={openModalLogin} handleClose={() => setOpenModalLogin(false)} />
      <SuportModal isOpen={openModalSuport} handleClose={() => setOpenModalSuport(false)}/>
    </>
  )
}

export default LayoutDefault

