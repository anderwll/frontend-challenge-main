import React, { useEffect } from 'react';
import { Container } from '../styled';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Refresher';
    localStorage.setItem('route', '')
  }, []);

    return (
        <Container>
          <h1>HOME</h1>
        </Container>
      )
  };
  
  export default HomePage;