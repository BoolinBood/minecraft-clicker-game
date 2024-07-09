INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (1, 'user1', 'password1', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (2, 'user2', 'password2', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (3, 'user3', 'password3', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (4, 'user4', 'password4', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (5, 'user5', 'password5', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (6, 'user6', 'password6', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (7, 'user7', 'password7', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (8, 'user8', 'password8', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (9, 'user9', 'password9', 0, 0, 1);
INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (10, 'user10', 'password10', 0, 0, 1);

INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Diamond Sword', 50, 'Common', 0.5);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Diamond Pickaxe', 75, 'Uncommon', 0.3);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Spider Eye', 10, 'Common', 0.5);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Eye of Ender', 100, 'Rare', 0.1);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Bone', 45, 'Uncommon', 0.25);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Diamond', 150, 'Epic', 0.05);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Glow Berries', 60, 'Rare', 0.1);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Potion', 35, 'Common', 0.5);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Enchanted Diamond Boots', 80, 'Uncommon', 0.3);
INSERT INTO items (name, tradeValue, rarity_name, rarity_chance) VALUES ('Stick', 200, 'Legendary', 0.01);

INSERT INTO blocks (name, health, spawnChance) VALUES ('Stone', 5, 0.8);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Dirt', 5, 0.9);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Sand', 3, 0.7);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Oak Log', 7, 0.6);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Iron Ore', 20, 0.4);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Gold Ore', 15, 0.3);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Diamond Ore', 30, 0.1);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Bricks', 7, 0.5);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Gravel', 2, 0.85);
INSERT INTO blocks (name, health, spawnChance) VALUES ('Wool', 4, 0.75);

INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (1, 1, 'Diamond Sword', 5, TRUE, 100);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (2, 2, 'Diamond Pickaxe', 10, FALSE, 50);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (3, 3, 'Spider Eye', 3, TRUE, 50);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (4, 4, 'Eye of Ender', 7, FALSE, 50);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (5, 5, 'Bone', 2, TRUE, 75);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (6, 6, 'Diamond', 8, FALSE, 50);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (7, 7, 'Glow Berries', 4, TRUE, 200);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (8, 8, 'Potion', 6, FALSE, 50);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (9, 9, 'Enchanted Diamond Boots', 9, TRUE, 150);
INSERT INTO inventories (ownedBy, itemId, itemName, amount, marketInfo_onMarket, marketInfo_price) VALUES (10, 10, 'Stick', 1, FALSE, 50);

INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (1, 'Pending', 1, 2, 1, 2);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (1, 'Pending', 1, 2, 1, 1);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (1, 'Pending', 1, 2, 1, 3);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (2, 'Pending', 2, 3, 2, 3);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (3, 'Pending', 3, 4, 3, 4);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (4, 'Pending', 4, 5, 4, 5);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (5, 'Pending', 5, 6, 5, 6);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (6, 'Pending', 6, 7, 6, 7);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (7, 'Pending', 7, 8, 7, 8);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (8, 'Pending', 8, 9, 8, 9);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (9, 'Pending', 9, 10, 9, 10);
INSERT INTO tradeRequests (tradeId, status, sentBy, sentTo, requestItem, exchangeWith) VALUES (10, 'Pending', 10, 1, 10, 1);