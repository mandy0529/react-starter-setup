import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ThemeProvider} from 'styled-components';
import {darkMode, lightMode} from './theme';
import AppPractice from './AppPractice';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkMode}>
        <GlobalStyle />
        <BrowserRouter>
          <AppPractice />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
