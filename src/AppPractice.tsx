import './index.css';
import {Route, Routes} from 'react-router';
import Coins from './pages/Coins';
import Coin from './pages/Coin';
import Market from './components/Market';
import {ReactQueryDevtools} from 'react-query/devtools';
import Chart from './components/Chart';

const AppPractice = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:id" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="market" element={<Market />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default AppPractice;
