import React, { useEffect, useState } from 'react'
import LoginModal from '../../components/Modals/LoginModal';
import { Container } from '../styled';

const ManagementPage = () => {
  const [openModalLogin, setOpenModalLogin] = useState(false);

  useEffect(() => {
      document.title = 'Gerência de conta | Refresher';
      setOpenModalLogin(true);
      alert('Necessário login...');
    }, []);

  return (
    <Container>
      <h1>GERÊNCIA DE CONTA</h1>

      <LoginModal isOpen={openModalLogin} handleClose={() => setOpenModalLogin(false)} />
    </Container>
  )
};

export default ManagementPage;
