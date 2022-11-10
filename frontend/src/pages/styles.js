import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100vw - 4.1rem);
  margin-left: 4.1rem;
  margin-top: 4.2rem;  
  padding: 8px;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;

  @media only screen and ( max-width: 576px) {
      margin-left: 0;
      width: 100vw;
  }
`;

export const Content = styled.div`
    display: flex;
    position: relative;
    justify-content: start;
    flex-direction: column;
    width: 50%;
    height: 20rem;
    padding: 2rem;
    margin-bottom: 2rem;

    @media only screen and ( max-width: 576px) {
      width: 100%;
  }
`;