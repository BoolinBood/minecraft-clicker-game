export type User = {
  id: number,
  inventoryId: number,
  username: string,
  stats_coins: number,
  stats_luck: number,
  stats_damage: number
}

export type Block = {
  id: number,
  name: string,
  health: number,
  spawnChance: number,
}

export type Item = {
  id: number,
  name: string,
  tradeValue: number,
  rarity_name: string,
  rarity_chance: number,
}

export interface ItemCardType {
  ownedBy: number,
  itemId: number,
  itemName: string,
  amount: number,
  marketInfo_price: number,
  tradeValue: number,
  rarity_name: string,
  rarity_chance: number
}


export type InventoryType = {
  ownedBy: number,
  itemId: number,
  itemName: string,
  amount: number,
  marketInfo_onMarket: boolean,
  marketInfo_price: number,
}

export type TradeReq = {
  tradeId: number,
  status: string,
  sentBy: number,
  sentTo: number,
  requestItem: number,
  exchangeWith: number
}

export type TradeItem = {
  tradeId: number;
  sentBy: number;
  sentTo: number;
  status: string;
  requestItem: number;
  user: User;
}
