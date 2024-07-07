export type User = {
  id: number,
  inventoryId: number,
  username: string,
  stats_coins: number,
  stats_luck: number
}

export type Block = {
  id: number,
  name: string,
  health: number,
  spawnChance: number,
  imageURL: string
}

export type Item = {
  id: number,
  name: string,
  price: number,
  rarity_name: string,
  rarity_chance: number,
  imageURL: string
}

export type ClickBlock = {
  block: Block,
  item: Item,
}

export type Inventory = {
  ownedBy: number,
  itemId: number,
  amount: number,
  marketInfo_onMarket: boolean,
  marketInfo_price: number,
}

export type TradeReq = {}