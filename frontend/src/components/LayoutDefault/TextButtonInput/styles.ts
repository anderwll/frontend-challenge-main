import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  text-align: center !important;
  justify-content: space-between;
  flex-grow: 1;
  height: 4rem;
  width: calc(100vw - 4rem);
  margin-left: 3.8rem;

  > a {
    display: block;
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
    margin-left: 1rem;
   
    @media only screen and ( max-width: 723px) {
      display: none;
    }
  }
`;

export const Box = styled.div`
  display: flex;
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  width: 37rem;
  min-width: 19rem;
`;