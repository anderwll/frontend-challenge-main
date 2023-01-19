import styled from "styled-components";

export const Content = styled.div`
    width: 100%;

    h1 {
        font-family: "Helvetica Neue", Helvetica, Arial,sans-serif !important; 
        font-weight: 900;
        font-size: 48px;
        letter-spacing: 3px;
        text-align: left;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: 10px;
        line-height: 1.1;
        color: inherit;

        @media only screen and (max-width: 768px){
            font-weight: 700;
            font-size: 24px;
            letter-spacing: 3px;
            max-width: 100%;
        
        }
    } 

`;