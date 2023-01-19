import React, { useEffect } from 'react';
import { Container } from '../styled';

const ClientPage = () => {
  useEffect(() => {
    document.title = 'Clientes | Refresher';
    }, []);

    return (
        <Container>
          <h1>CLIENTES</h1>
        </Container>
      )
  };
  
  export default ClientPage;