import styled from "styled-components";

export const Content = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        cursor: pointer;

        @media only screen and (max-width: 600px){
            width: 100% !important;
        }

        
    }

    img {
        &:hover {
            transform: scale(1.02);
            filter: brightness(85%);
            transition: all .5s ease;
        }
    }

    video {
        width: 100%;
        height: 100%; 
    }

    p {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding-top: 20px;
        line-height: 1.5em;
        text-align: justify;
    }

    a {
        width: 100%;
        height: 100%;
    }

    h3 {
        font-family: 'Roboto', Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 1.14286rem;
        line-height: 1.5;
        letter-spacing: 0.00938em; 
    }

`;