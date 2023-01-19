import React, { useEffect } from 'react'
import { Container } from '../styled';

const ManagementPage = () => {
  useEffect(() => {
    document.title = 'Gerência de conta | Refresher';
    }, []);

  return (
    <Container>
      <h1>GERÊNCIA DE CONTA</h1>
    </Container>
  )
};

export default ManagementPage;
