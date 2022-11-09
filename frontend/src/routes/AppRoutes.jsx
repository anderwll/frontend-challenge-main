import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../layout';
import Clientes from '../pages/Clientes';
import Conteudos from '../pages/Conteudos';
import Fornecedores from '../pages/Fornecedores';
import Gerencia from '../pages/Gerencia';
import Home from '../pages/Home';
import Store from '../pages/Store';

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={Home} />} />
        <Route path="/home" element={<LayoutDefault component={Home} />} />
        <Route path="/gerencia" element={<LayoutDefault component={Gerencia} />} />
        <Route path="/clientes" element={<LayoutDefault component={Clientes} />} />
        <Route path="/conteudos" element={<LayoutDefault component={Conteudos} />}/>
        <Route path="/fornecedores" element={<LayoutDefault component={Fornecedores} />}/>
        <Route path="/store" element={<LayoutDefault component={Store} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;