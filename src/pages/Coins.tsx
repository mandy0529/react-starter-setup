import {useQuery} from 'react-query';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {fetchCoins} from '../api';
import Loader from '../components/Loader';
import {CoinsInterface} from '../interface/props';
import {COIN_IMAGE} from '../utils/helper';

const Coins = () => {
  const {data, isLoading} = useQuery<CoinsInterface[]>('allCoins', fetchCoins);
  const slicedData = data && data.slice(0, 100);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      <CoinsList>
        {slicedData &&
          slicedData.map((coin) => (
            <Coin key={coin.id}>
              <img
                src={`${COIN_IMAGE}${coin.symbol.toLowerCase()}`}
                alt="coin.name"
              />
              <Link state={coin.name} to={`/${coin.id}`}>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
      </CoinsList>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.pointBackgroundColor};
  color: ${(props) => props.theme.pointTextColor};
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-left: 2rem;
  }
`;

export default Coins;
