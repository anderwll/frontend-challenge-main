import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);
  margin-left: 4rem;
  margin-top: 4rem;
  align-items: center;
  flex-direction: column;
  overflow-y: auto !important;
  
  @media only screen and ( max-width: 900px) {
      margin-left: 0;
      width: 100vw;
  }
`;

export const Content = styled.div`
    display: flex;
    position: relative;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 2rem;
  
    @media screen and (max-width: 600px){
      padding: 2rem 1rem;
    }

    img {
      width: 100%;
      height: 100%;
    }

`;