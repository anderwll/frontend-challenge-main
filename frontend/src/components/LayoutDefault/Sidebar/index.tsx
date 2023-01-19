import React from 'react'
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
  return (
    <Container isSidebarOn={isActive} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={mouseClick}>
        <Link to="/management">
          <SidebarItem Icon={RocketLaunch} text='Gerência de conta' background={true} />
        </Link>
        <Link to="/home">
          <SidebarItem Icon={Home} text='Home' />
        </Link>
        <Link to="/client">
          <SidebarItem Icon={Groups2} text='Clientes' />
        </Link>
        <Link to="/content">
          <SidebarItem Icon={Widgets} text='Conteúdos' />
        </Link>
        <Link to="/provider">
          <SidebarItem Icon={Handshake} text='Fornecedores' />
        </Link>
        <Link to="/store">
          <SidebarItem Icon={AutoStories} text='Store' />
        </Link>
    </Container>
  )
}

export default Sidebar