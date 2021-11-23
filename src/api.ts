import { API_INFO_URL, API_PRICE_URL, API_URL } from "./utils/helper"

export const fetchCoins = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
};

export const fetchInfoCoin = async (id?: string) => {
    const response = await fetch(`${API_INFO_URL}${id}`);
    const data = await response.json();
    return data;
};

export const fetchPriceCoin = async (id?: string) => {
    const response = await fetch(`${API_PRICE_URL}${id}`);
    const data = await response.json();
    return data;
};