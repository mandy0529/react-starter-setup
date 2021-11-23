import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components';
import { darkMode, lightMode } from './theme';
import AppPractice from './AppPractice';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <ThemeProvider theme={darkMode}>
      <GlobalStyle />
     <AppPractice />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
