export type User = {
  id: number;
  inventoryId: number;
  username: string;
  stats_coins: number;
  stats_luck: number;
  stats_damage: number;
  destroyed_block: number;
};

export type Block = {
  id: number;
  name: string;
  health: number;
  spawnChance: number;
};

export type Item = {
  id: number;
  name: string;
  tradeValue: number;
  rarity_name: string;
  rarity_chance: number;
};

export type Inventory = {
  ownedBy: number;
  itemId: number;
  itemName: string;
  amount: number;
  marketInfo_onMarket: boolean;
  marketInfo_price: number;
};

export type TradeReq = {};
