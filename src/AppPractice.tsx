import './index.css';
import styled from 'styled-components';
import {Route, Routes} from 'react-router';
import Coins from './pages/Coins';
import Coin from './pages/Coin';
import Info from './components/Info';
import Market from './components/Market';
import {ReactQueryDevtools} from 'react-query/devtools';

const AppPractice = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:id" element={<Coin />}>
          <Route path="info" element={<Info />} />
          <Route path="market" element={<Market />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default AppPractice;
