// User type
/* 
	id INT AUTO_INCREMENT PRIMARY KEY,
	inventoryId INT UNIQUE NOT NULL,
	username VARCHAR(20) UNIQUE NOT NULL,
	password VARCHAR(20) NOT NULL,
	stats_coins BIGINT,
	stats_luck DOUBLE
*/

const db = require('../../database/connection');
const {
  getAllRows,
  getRowById,
  updateRowById,
  deleteRowById,
  clearTable,
} = require('../../database/queries');

const TABLE_NAME = 'users';

const createUser = async (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO users (${cols}) VALUES (?, ?, ?, ?, ?)`;

  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => await getAllRows(TABLE_NAME);

const getUserById = async (id) => await getRowById(TABLE_NAME, id);

const updateUserById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteUserById =  async (id) => await deleteRowById(TABLE_NAME, id);

const clearUserTable = async () => await clearTable(TABLE_NAME);


module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  clearUserTable,
}