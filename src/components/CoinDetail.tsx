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
        <Link to="info">info</Link>
        <Link to="market">market</Link>
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
  a {
    font-size: 2rem;
    background-color: ${(props) => props.theme.accentColor};
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
`;
export default CoinDetail;
