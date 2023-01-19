import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutDefault from '../layout';

// -- PAGINAS 
import ClientPage from '../pages/Client';
import ContentPage from '../pages/Content';
import HomePage from '../pages/Home';
import ManagementPage from '../pages/Management';
import ProvidersPage from '../pages/Providers';
import StorePage from '../pages/Store';
import TendenciesPage from '../pages/Tendencies';
import TendenciesContentPage from '../pages/TendenciesContent';

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault component={HomePage} />} />
        <Route path="/home" element={<LayoutDefault component={HomePage} />} />
        <Route path="/management" element={<LayoutDefault component={ManagementPage} />} />
        <Route path="/client" element={<LayoutDefault component={ClientPage} />} />
        <Route path="/content" element={<LayoutDefault component={ContentPage} />}/>
        <Route path="/provider" element={<LayoutDefault component={ProvidersPage} />}/>
        <Route path="/store" element={<LayoutDefault component={StorePage} />}/>
        <Route path="/tendencies" element={<LayoutDefault component={TendenciesPage} />}/>
        <Route  path="/tendencies/name-content" element={<LayoutDefault component={TendenciesContentPage} />}/>
        
        <Route  path="*" element={<LayoutDefault component={HomePage} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;