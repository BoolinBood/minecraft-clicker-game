// User type
/* 
    id INT AUTO_INCREMENT PRIMARY KEY,
    inventoryId INT UNIQUE NOT NULL,
    username VARCHAR(20) UNIQUE NOT NULL,
    password VARCHAR(20) NOT NULL,
    stats_coins BIGINT,
    stats_luck DOUBLE,
    stats_damage INT
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
  const inventoryId = await getLatestUserInvId().then(result => Object.values(result[0])[0]);
  // const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO users (inventoryId, username, password, stats_coins, stats_luck, stats_damage) VALUES (?, ?, ?, 0, 0, 1)`;

  try {
    const [rows] = await db.execute(sql, [inventoryId + 1 ,...values]);
    return rows;
  } catch (err) {
    throw err;
  }
};

const getUsers = async () => await getAllRows(TABLE_NAME);

const getUserById = async (id) => await getRowById(TABLE_NAME, id);

const getLatestUserInvId = async () => {
  const sql = `SELECT MAX(inventoryId) FROM ${TABLE_NAME}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getUserByUsername = async (username) => {
  const sql = `SELECT * FROM ${TABLE_NAME} WHERE username = '${username}'`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};

const updateUserById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteUserById =  async (id) => await deleteRowById(TABLE_NAME, id);

const clearUserTable = async () => await clearTable(TABLE_NAME);


module.exports = {
  createUser,
  getUsers,
  getUserById,
  getLatestUserInvId,
  getUserByUsername,
  updateUserById,
  deleteUserById,
  clearUserTable,
}