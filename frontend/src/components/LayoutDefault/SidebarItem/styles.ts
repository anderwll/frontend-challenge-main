import styled from 'styled-components';

interface ContainerProps {
  background?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex !important;
  position: relative;
  background-color: ${props => props.background ? 'rgb(25, 118, 210)' : 'transparent'};
  color: white;
  align-items: center;
  padding: 1rem 0.9rem ;
  border: 1px solid #333;
  cursor: pointer;
  
  > p {
    display: block;
    position: relative;
    font-size: 1.14rem;
    letter-spacing: 0.00938em;
    line-height: 1.1;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    margin-left: 3.73rem;
    overflow: hidden;
    white-space: nowrap;
  }
  
  > svg {
    position: absolute;
    flex-grow: 0;
    margin: 0 0.42rem;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: ${props => props.background ? 'rgb(25, 118, 210)' : 'rgb(255, 221, 0)'};
    color: ${props => props.background ? 'white' : 'black'};
  }
`;

