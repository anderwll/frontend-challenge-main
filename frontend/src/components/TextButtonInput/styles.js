import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  height: 4.1rem;
  width: calc(100vw - 4.1rem);
  margin-left: 4.55rem;

  > a {
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.357rem;
    color: black;
    font-family: 'Bebas Neue', Arial;
    font-weight: 400;
    letter-spacing: 0.13rem;
    cursor: pointer;

    @media only screen and ( max-width: 723px) {
      opacity: 0;
    }
  }

`;

export const Box = styled.div`
  display: flex;
  position: relative;
  height: 2rem;
  width: 35rem;
  min-width: 19.4rem;
`;