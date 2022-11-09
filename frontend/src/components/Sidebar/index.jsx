import React from 'react'
import { Link } from "react-router-dom";
import { Container, Content } from './styles'
import { 
  IoRocketSharp,
  IoHomeSharp,
  IoPeopleSharp,
  IoGrid,
  IoBook
} from 'react-icons/io5'
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {
  return (
    <Container sidebar={active}>
      <Content>
        <Link to="/gerencia">
          <SidebarItem Icon={IoRocketSharp} Text='Gerência de contas' Back={true} />
        </Link>
        <Link to="/home">
          <SidebarItem Icon={IoHomeSharp} Text='Home' />
        </Link>
        <Link to="/clientes">
          <SidebarItem Icon={IoPeopleSharp} Text='Clientes' />
        </Link>
        <Link to="/conteudos">
          <SidebarItem Icon={IoGrid} Text='Conteúdos' />
        </Link>
        <Link to="/fornecedores">
          <SidebarItem Icon={IoPeopleSharp} Text='Fornecedores' />
        </Link>
        <Link to="/store">
          <SidebarItem Icon={IoBook} Text='Store' />
        </Link>
      </Content>
    </Container>
  )
}

export default Sidebar