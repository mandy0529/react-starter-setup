import './index.css';
import styled from 'styled-components';
import Circle from './Circle';
import React, { useState } from 'react';

const Wrapper = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-align:center;
  font-size:2rem;
  margin:3rem;
`;

const App = () => {
  const [mainValue, setValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setValue(value);
   };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mainValue);
  }

  return <Wrapper className="App">
      {/* <Circle borderColor="black" bgColor="teal" />
      <Circle text="i am hereeeee" bgColor="tomato" /> */}
    <form onSubmit={handleSubmit} >
      <input onChange={handleChange}  type="text " placeholder="write your value" />
    </form>
  </Wrapper>;
};

export default App;
