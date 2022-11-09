import React, { useState } from 'react'
import { Content, Container } from './styles'
import { IoMdMenu } from 'react-icons/io'
import Sidebar from '../components/Sidebar'
import TextButtonInput from '../components/TextButtonInput'
import FloatingButton from '../components/FloatingButton'

const LayoutDefault = ({ component: Component }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <IoMdMenu onClick={showSiderbar} />
      <TextButtonInput/>
      <Sidebar active={sidebar}  />
      <Content>
        <FloatingButton />
      </Content>
      <Component />
    </Container>
  )
}

export default LayoutDefault