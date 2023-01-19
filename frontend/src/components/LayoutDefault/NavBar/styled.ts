import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  background-color: rgb(255, 221, 0); 
  box-shadow: 0 8px 16px 0 rgba(3, 3, 3, 0.20);
  border: none;
  z-index: 999;

  > svg {
    position: absolute;
    color: rgb(34, 34, 34);
    width: 2rem;
    height: 1.5rem;
    margin-top: 1.2rem;
    margin-left: 1.2rem;
    cursor: pointer;
  }

  > main {
    left: 19rem;
  }
`;