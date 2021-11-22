import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components';
import { lightMode } from './theme';




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
