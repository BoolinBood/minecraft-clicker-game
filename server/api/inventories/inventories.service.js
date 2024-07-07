// Inventory type
/*
	ownedBy INT NOT NULL,
	itemId INT NOT NULL,
	amount INT NOT NULL,
	marketInfo_onMarket BOOLEAN,
	marketInfo_price DOUBLE,
	FOREIGN KEY (itemId) REFERENCES items(id),
	FOREIGN KEY (ownedBy) REFERENCES users(id)
*/

const { getAllRows, getRowById, updateRowById, deleteRowById, clearTable } = require("../../database/queries");
const db = require('../../database/connection');

const TABLE_NAME = 'inventories';

const createInventory = async (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO users (${cols}) VALUES (?, ?, ?, ?)`;

  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};
const getInventories = async () => await getAllRows(TABLE_NAME);

const getInventoryById = async (id) => await getRowById(TABLE_NAME, id);

const updateInventoryById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteInventoryById =  async (id) => await deleteRowById(TABLE_NAME, id);

const getLatestInventoryId = async () => {
  const sql = `SELECT MAX(ownedBy) FROM ${TABLE_NAME}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const clearInventoryTable = async () => await clearTable(TABLE_NAME);

module.exports = {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventoryById,
  deleteInventoryById,
  getLatestInventoryId,
  clearInventoryTable
}