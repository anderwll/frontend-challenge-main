import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Icon, Text, Back, HoverPage }) => {
  return (
    <Container background={Back}>
      <Icon />
      <p>{Text}</p>
    </Container>
  )
}

export default SidebarItem