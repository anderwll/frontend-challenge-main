import styled from 'styled-components';

interface ContainerProps {
  isSidebarOn: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  height: 100%;
  top: 4rem;
  flex-direction: column;
  width: ${props => props.isSidebarOn ? '17.5rem' : '4.2rem'};
  background-color: #333;
  transition: all .5s ease !important;
  z-index: 999;
  
  @media only screen and ( max-width: 900px) {
    display: ${props => props.isSidebarOn ? 'block' : 'none'};;
  }

`;
