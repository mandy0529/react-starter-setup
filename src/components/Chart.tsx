import {useQuery} from 'react-query';
import {useParams} from 'react-router';
import styled from 'styled-components';
import {fetchChartCoin} from '../api';
import {IChartCoin} from '../interface/props';
import LineChart from './LineChart';
import Loader from './Loader';

const getSize = (arr: object[]) => {
  return arr;
};
const arr1 = [
  {minji: 'hello'},
  {minji: 'gab'},
  {minji: 'sfsdf'},
  {minji: 'sfs'},
];

const target = getSize(arr1);
target.map((item) => {
  console.log(item);
});
const Chart = () => {
  const {id} = useParams();
  const {data, isLoading} = useQuery<IChartCoin[]>(['ohlcv', id], () =>
    fetchChartCoin(id)
  );

  if (isLoading) {
    return <Loader />;
  }
  return <Wrapper>{data && <LineChart data={data} />}</Wrapper>;
};

const Wrapper = styled.section``;
export default Chart;
