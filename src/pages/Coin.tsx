import React from "react";
import { useParams } from "react-router";

const Coin = () => {
    
    const { id } = useParams();
    return <h1> coin : {id}</h1>
};

export default Coin;