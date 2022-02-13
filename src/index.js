import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './Global.styled.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
