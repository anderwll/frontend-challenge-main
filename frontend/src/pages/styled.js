import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: calc(100vw - 4.1rem);
  margin-left: 4.1rem;
  margin-top: 4.6rem;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aqua;

  @media only screen and ( max-width: 576px) {
      margin-left: 0;
      width: 100vw;
  }
`;