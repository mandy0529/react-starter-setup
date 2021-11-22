
import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
    bgColor: string,
    borderColor?: string,
    text?:string,
}

interface PlayerProps {
    name: string,
    age: number,

}

const Wrapper = styled.div<CircleProps>`
width:200px;
height:200px;
background-color:${props => props.bgColor};
border-radius:50%;
text-align:center;
border:5px solid ${props => props.borderColor};
margin: 3rem;
`;

const Circle = ({ bgColor, borderColor, text = "default value" }: CircleProps) => {
    
    const [number, setNumber] = useState<number|string>(0);
    

    return <Wrapper borderColor={borderColor ?? bgColor} bgColor={bgColor} >{ text}</Wrapper>
};

const sayHello = (playerObj:PlayerProps) => `hello ${playerObj.name}! my age is ${playerObj.age}`

console.log(sayHello({ name: 'minji', age: 26 }));

export default Circle;