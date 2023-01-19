import React, { useEffect } from 'react';
import { Container } from '../styled';

const StorePage = () => {
  useEffect(() => {
    document.title = 'Store | Refresher';
    }, []);

    return (
        <Container>
          <h1>STORE</h1>
        </Container>
      )
  };
  
  export default StorePage;