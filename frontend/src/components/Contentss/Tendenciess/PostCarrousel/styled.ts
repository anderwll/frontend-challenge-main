import styled from "styled-components";

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1rem;
`;

export const DivImage = styled.div`
    width: auto;
    height: 65vh;
    background-color: #333;

    img {
        width: auto;
        max-width: 100%;
        height: 100%;
        max-height: 100%;
        display: block;
        line-height: 0;
        box-sizing: border-box;
        margin: 0 auto;
        object-fit: cover;
        overflow: hidden;
    }

    @media screen and( max-width: 600px ) {
        height: 74vh;
    }

`;