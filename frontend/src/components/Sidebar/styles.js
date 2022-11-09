import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333;
  position: fixed;
  height: 100%;
  top: 4rem;
  flex: 1 0 auto;
  flex-direction: column;
  width: ${props => props.sidebar ? '17.5rem' : '4rem'};
  animation: showSidebar ease;

  > svg {
    position: relative;
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  &:hover {
    width: 17.5rem;
    animation: showSidebar ease;
  }

  @keyframes showSidebar {
    from {
      opacity: 1;
      width: 4rem;
    }
    to {
      opacity: 1;
      width: 17.5rem;
    }
  }

  @media only screen and ( max-width: 576px) {
    display: ${props => props.sidebar ? 'block' : 'none'};;
  }

`;

export const Content = styled.div`
  margin-top: 0px;
`;