import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { useAppDispatch } from './store/hooks';
import { setIdSelected } from './store/idTrendSelected/idTrendSelectedSlice';
import { getTrends } from './store/trends/trendsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTrends())

    const id = localStorage.getItem('id')

    if(id) {
      dispatch(setIdSelected(id))
    }
  }, [dispatch])
  
  return (
    <AppRoutes />
  );
}

export default App;
