// User type
/* 
	id INT AUTO_INCREMENT PRIMARY KEY,
	inventoryId INT NOT NULL,
	username VARCHAR(20) UNIQUE NOT NULL,
	password VARCHAR(20) NOT NULL,
	stats_coins BIGINT,
	stats_luck DOUBLE
*/

const db = require('../connection');

const createUser = (obj) => {
  const query = `
    INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck) values(${obj.inventoryId}, ${obj.username}, ${obj.password}, ${obj.stats_coins}, ${obj.stats_luck})
  `;

  const result = db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  
  return result;
};

const getUsers = () => {
  const query = `SELECT * FROM users`;
  const resultSets = db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  return resultSets;
};

const getUserById = (id) => {
  const query = `SELECT * FROM users WHERE id = ${id}`;
  const resultSets = db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
  return resultSets;
};

const updateUserById = (id, obj) => {

};

const deleteUserById = (id) => {
  const query = `DELETE FROM users WHERE id = ${id}`;
  const resultSets = db.query(query, (err, res) => {
    if (err) throw err;
    console.log(res);
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
}