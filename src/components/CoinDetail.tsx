import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {ICoinDetail} from '../interface/props';

const CoinDetail = ({info, price}: ICoinDetail) => {
  const {rank, symbol, open_source, description} = info;
  const {total_supply, max_supply} = price;

  return (
    <Wrapper>
      <div className="column">
        <div className="info-flex">
          <div className="info-detail">
            <span>rank:</span>
            <span>{rank}</span>
          </div>
          <div className="info-detail">
            <span>symbol:</span>
            <span>${symbol}</span>
          </div>
          <div className="info-detail">
            <span>open source:</span>
            <span>{open_source ? 'YES' : 'NO'}</span>
          </div>
        </div>
        <p>{description}</p>
        <div className="info-flex">
          <div className="info-detail">
            <span>total supply:</span>
            <span>{total_supply}</span>
          </div>
          <div className="info-detail">
            <span>max supply:</span>
            <span>{max_supply}</span>
          </div>
        </div>
        <div className="button">
          <Link to="chart">Chart</Link>
          <Link to="market">market</Link>
        </div>

        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  font-size: 1.5rem;
  p {
    margin: 3rem auto;
    max-width: 700px;
    line-height: 2.5rem;
  }

  .info-flex {
    display: flex;
    justify-content: space-around;
    max-width: 700px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.pointBackgroundColor};
    color: ${(props) => props.theme.pointTextColor};
    border-radius: 10px;
  }
  .info-detail {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    span {
      margin: 0.4rem 0;
      text-transform: uppercase;
    }
  }
  .button {
    margin: 2rem;
    a {
      font-size: 1.4rem;
      background-color: ${(props) => props.theme.accentColor};
      padding: 0.5rem 1.5rem;
      border-radius: 5px;
      margin: 2rem;
      transition: all 0.3s ease-in;
      text-transform: uppercase;
      &:hover {
        background-color: ${(props) => props.theme.pointBackgroundColor};
        color: ${(props) => props.theme.pointTextColor};
      }
    }
  }
`;
export default CoinDetail;
