import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { 
  Handshake, 
  AutoStories, 
  Widgets, 
  Groups2, 
  Home, 
  RocketLaunch 
} from '@mui/icons-material'
import { Container } from './styles';
import SidebarItem from '../SidebarItem';

interface SidebarProps {
  isActive: boolean,
  mouseEnter: any,
  mouseLeave: any,
  mouseClick: any
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, mouseEnter, mouseLeave, mouseClick }) => {
  const [titleDOM, setTitleDOM] = useState('');
  
  useEffect(() => {
    document.title = `${titleDOM}Refresher`
  }, [titleDOM]);

  return (
    <Container isSidebarOn={isActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={mouseClick}>
        <Link to="/management" onClick={() => setTitleDOM('Gerência | ')}>
          <SidebarItem Icon={RocketLaunch} text='Gerência de conta' background={true} />
        </Link>
        <Link to="/home" onClick={() => setTitleDOM('')}>
          <SidebarItem Icon={Home} text='Home' />
        </Link>
        <Link to="/client" onClick={() => setTitleDOM('Clientes | ')}>
          <SidebarItem Icon={Groups2} text='Clientes' />
        </Link>
        <Link to="/content" onClick={() => setTitleDOM('Conteúdos | ')}>
          <SidebarItem Icon={Widgets} text='Conteúdos' />
        </Link>
        <Link to="/provider" onClick={() => setTitleDOM('Fornecedores | ')}>
          <SidebarItem Icon={Handshake} text='Fornecedores' />
        </Link>
        <Link to="/store" onClick={() => setTitleDOM('Store | ')}>
          <SidebarItem Icon={AutoStories} text='Store' />
        </Link>
    </Container>
  )
}

export default Sidebar