import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { myStore } from './store';

ReactDOM.render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
