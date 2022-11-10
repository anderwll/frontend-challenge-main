import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 50%; 
  align-items: center;
  flex-direction: column;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  
  > h1 {
    font-weight: 900;
    font-size: 48px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: left;
    line-height: 1.1;
    margin: 5px 0;
  }

  > h2 {
    font-weight: 900;
    font-size: 24pt!important;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: left;
    font-family: verdana, geneva, sans-serif;
    line-height: 1.1;
    margin: 7px 0;
  }

  > p {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    padding-top: 20px;
    line-height: 1.5em;
    text-align: justify;
    margin: 5px 0;
  }

  > img {
    width: 100%;
    height: 30rem;
    margin-top: 20px;
    background-size: auto;
  }

  @media only screen and ( max-width: 1398px) {
      width: 80%;
  }

  @media only screen and ( max-width: 992px) {
      width: 90%;
  }

  @media only screen and ( max-width: 576px) {
      width: 100%;
  }
`;