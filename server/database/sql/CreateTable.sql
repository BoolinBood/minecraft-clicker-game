  CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    inventoryId INT UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    stats_coins BIGINT,
    stats_luck DOUBLE,
    stats_damage INT
  );

  CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    tradeValue INT NOT NULL,
    rarity_name VARCHAR(20) NOT NULL,
    rarity_chance DOUBLE NOT NULL
  );

  CREATE TABLE blocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    health INT NOT NULL,
    spawnChance DOUBLE NOT NULL
  );

  CREATE TABLE inventories (
    ownedBy INT NOT NULL,
    itemId INT NOT NULL,
    amount INT NOT NULL,
    marketInfo_onMarket BOOLEAN,
    marketInfo_price DOUBLE NOT NULL,
    FOREIGN KEY (itemId) REFERENCES items(id),
    FOREIGN KEY (ownedBy) REFERENCES users(id)
  );

  CREATE TABLE tradeRequests (
    tradeId INT NOT NULL,
    string VARCHAR(20) NOT NULL,
    sentBy INT NOT NULL,
    sentTo INT NOT NULL,
    requestItem INT NOT NULL,
    exchangeWith INT NOT NULL,
    FOREIGN KEY (sentBy) REFERENCES users(id),
    FOREIGN KEY (sentTo) REFERENCES users(id),
    FOREIGN KEY (requestItem) REFERENCES inventories(itemId),
    FOREIGN KEY (exchangeWith) REFERENCES inventories(itemId)
  );