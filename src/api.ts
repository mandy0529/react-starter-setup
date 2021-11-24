
import { API_CHART_COIN, API_INFO_URL, API_PRICE_URL, API_URL } from "./utils/helper"

export const fetchCoins = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.slice(0,100);
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

export const fetchChartCoin = async (id?: string) => {
    const endDate = Math.ceil(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7;
    const response = await fetch(`${API_CHART_COIN}${id}/ohlcv/historical?start=${startDate}&end=${endDate}`);
    const data = await response.json();
    return data;
}