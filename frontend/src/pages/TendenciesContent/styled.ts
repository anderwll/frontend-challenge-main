import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    position: relative;
    width: 50%;
    height: 100%;
    padding: 1rem 0;
    flex-direction: column;

    @media only screen and ( max-width: 1366px) {
        width: 60%;
    }

    @media only screen and ( max-width: 1200px) {
        width: 75%;
    }

    @media only screen and ( max-width: 900px) {
        width: 85%;
        margin-left: 0;
    }

    @media only screen and ( max-width: 600px) {
        width: 100%;
        padding: 1rem;
    }  
`;
