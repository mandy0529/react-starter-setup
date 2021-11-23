import './index.css';
import styled from 'styled-components';
import { Route, Routes } from 'react-router';
import Coins from './pages/Coins';
import Coin from './pages/Coin';

 
const AppPractice = () => {
    return <Routes >
        <Route path='/' element={<Coins />} />
        <Route path='/:id' element={<Coin />} />
  </Routes>
};



export default AppPractice;
