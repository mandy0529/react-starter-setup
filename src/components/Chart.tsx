import {useQuery} from 'react-query';
import {useParams} from 'react-router';
import styled from 'styled-components';
import {fetchChartCoin} from '../api';
import {IChartCoin} from '../interface/props';
import CandleChart from './CandleChart';
import LineChart from './LineChart';
import Loader from './Loader';

const Chart = () => {
  const {id} = useParams();
  const {isLoading, data} = useQuery<IChartCoin>(['ohlcv', id], () =>
    fetchChartCoin(id)
  );
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      {data && (
        <>
          <LineChart data={data} />
          {/* <CandleChart ohlcv={data} /> */}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Chart;
