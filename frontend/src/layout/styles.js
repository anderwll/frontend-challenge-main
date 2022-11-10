import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  height: 4rem;
  background-color: rgb(255, 221, 0); 
  box-shadow: 0 8px 32px 0 rgba(3, 3, 3, 0.37);
  border: none;

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

export const Content = styled.div`
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 1.5em;
    margin-bottom: 1rem;
`;