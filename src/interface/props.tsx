export interface CoinsInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface IInfoData {
  id: string;
  symbol: string;
  name: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
}

export interface IIpriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: Date;
      percent_from_price_ath: number;
    };
  };
}

export interface ICoinDetail {
  info: {
    rank: number;
    symbol: string;
    open_source: boolean;
    description: string;
  };
  price: {
    total_supply: number;
    max_supply: number;
  };
}

export interface IChartCoin {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
export interface IChartCoinDetail {
  data: IChartCoin;
}
// close: 60439.49093383806
// high: 60725.37353013922
// low: 59015.10251451937
// market_cap: 1137340074520
// open: 60255.37112544475
// time_close: "2021-11-17T23:59:59Z"
// time_open: "2021-11-17T00:00:00Z"
// volume: 46538391511
