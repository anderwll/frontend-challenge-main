import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  top: 4rem;
  flex-direction: column;
  width: ${props => props.sidebar ? '17.5rem' : '4rem'};
  background-color: #333;

  > svg {
    position: relative;
    color: white;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  &:hover {
    width: 17.5rem;
  }

  @media only screen and ( max-width: 576px) {
    display: ${props => props.sidebar ? 'block' : 'none'};;
  }

`;
