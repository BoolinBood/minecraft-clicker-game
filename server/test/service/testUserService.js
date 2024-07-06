// User type
/* 
	id INT AUTO_INCREMENT PRIMARY KEY,
	inventoryId INT NOT NULL,
	username VARCHAR(20) UNIQUE NOT NULL,
	password VARCHAR(20) NOT NULL,
	stats_coins BIGINT,
	stats_luck DOUBLE
*/

const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../../database/service/userService');

const decoyObj = {
  inventoryId: 99,
  username: "DecoyUsername",
  password: "decoy",
  stats_coins: 0,
  stats_luck: 0
}

const createUserResult = createUser(decoyObj);

console.log(`query: ${createUserResult.sql}`);
console.log(createUserResult);