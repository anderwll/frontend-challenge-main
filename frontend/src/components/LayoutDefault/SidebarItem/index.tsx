import React from 'react'
import { Container } from './styles'

interface SidebarItemProps {
  Icon: any,
  text: string,
  background?: boolean,
  hoverPage?: any
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, text, background, hoverPage }) => {
  return (
    <Container background={background}>
      <Icon />
      <p>{text}</p>
    </Container>
  )
}

export default SidebarItem