import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/Loader";
import { CoinsInterface } from "../interface/props";
import { API_URL } from "../utils/helper";



  
const Coins = () => {
    const [coins, setCoins] = useState<CoinsInterface[]>([]);
    const [loading, setLoading] = useState(true);
    
    const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            const slicedData = data.slice(0, 100);
            setCoins(slicedData);
            setLoading(false);
        }
        catch (error) {
            throw new Error();
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return <Loader />
    }

    return <Container>
    <Header>
      <Title>코인</Title>
    </Header>
    <CoinsList>
      {coins.map((coin) => (
        <Coin key={coin.id}>
          <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
        </Coin>
      ))}
    </CoinsList>
  </Container>
};

const Container = styled.div`
  padding: 0px 20px;
  max-width:480px;
  margin:auto;
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
  background-color: ${props=>props.theme.pointBackgroundColor};
  color: ${(props) => props.theme.pointTextColor};
  border-radius: 15px;
  margin-bottom: 10px;
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
`;
export default Coins;