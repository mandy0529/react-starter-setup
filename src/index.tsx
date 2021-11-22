import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeProvider} from 'styled-components';

const darkTheme = {
  backgroundColor: 'black',
  textColor: 'white',
};

const lightTheme = {
  backgroundColor: 'white',
  textColor: 'black',
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
