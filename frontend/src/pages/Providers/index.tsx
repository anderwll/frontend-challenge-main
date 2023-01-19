import React, { useEffect } from 'react';
import { Container } from '../styled';

const ProvidersPage = () => {
  useEffect(() => {
    document.title = 'Fornecedores | Refresher';
    }, []);

    return (
        <Container>
          <h1>FORNECEDORES</h1>
        </Container>
      )
  };
  
  export default ProvidersPage;