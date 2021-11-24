import {useQuery} from 'react-query';
import {useLocation, useParams} from 'react-router';
import styled from 'styled-components';
import {fetchInfoCoin, fetchPriceCoin} from '../api';
import CoinDetail from '../components/CoinDetail';
import Loader from '../components/Loader';
import {IInfoData, IIpriceData} from '../interface/props';

const Coin = () => {
  const {id} = useParams();
  const {state} = useLocation();

  const {isLoading: infoLoading, data: infoData} = useQuery<IInfoData>(
    ['info', id],
    () => fetchInfoCoin(id)
  );
  const {isLoading: priceLoading, data: priceData} = useQuery<IIpriceData>(
    ['price', id],
    () => fetchPriceCoin(id)
  );

  if (infoLoading || priceLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <h1>{state}</h1>
      {infoData && priceData && (
        <CoinDetail info={infoData} price={priceData} />
      )}
    </Container>
  );
};

const Container = styled.section`
  h1 {
    margin: 1rem auto;
    font-size: 3rem;
  }
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export default Coin;
