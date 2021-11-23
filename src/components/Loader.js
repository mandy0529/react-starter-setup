import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return <Wrapper>...loading </Wrapper>;
};

const Wrapper = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 3rem;
`;
export default Loader;
