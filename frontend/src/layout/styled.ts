import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    position: fixed;
    right: 2rem;
    bottom: 1rem;
    z-index: 99;
    
    svg {
      font-size: 1.4rem;
      margin-right: 0.2rem;
    }

    button {
      background-color: rgb(255, 221, 0);
      font-size: 0.8rem;
      font-weight: bold;
    }

    button:hover {
      background-color: rgb(25, 118, 210);
      color: #fff;
    }

    @media screen and (max-width: 600px) {
      right: 1rem;

      svg {
        margin-right: 0;
      }
    }
`;

interface TesteProps {
  isSidebarActive: boolean
}

export const Section = styled.section<TesteProps>`
  background-color: ${props => props.isSidebarActive ? 'rgba(0, 0, 0, 0.790)' : ''};
  filter: ${props => props.isSidebarActive ? 'brightness(15%)' : ''};
  width: 100%;
  height: 100vh;
  transition: all .25s;
`;
