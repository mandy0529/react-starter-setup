import Apexcharts from 'react-apexcharts';
import styled from 'styled-components';
import {IChartCoin} from '../interface/props';

const LineChart = ({data}: {data: IChartCoin[]}) => {
  return (
    <Wrapper>
      <Apexcharts
        type="line"
        series={[
          {
            name: 'XYZ MOTORS',
            data: data.map((item) => item.close),
          },
        ]}
        options={{
          chart: {
            height: 500,
            width: 500,
          },
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 600px;
  margin: 5rem auto;
`;
export default LineChart;
