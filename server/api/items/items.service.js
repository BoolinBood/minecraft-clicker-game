// Item type
/*
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	price DOUBLE NOT NULL,
	rarity_name VARCHAR(20) NOT NULL,
	rarity_chance DOUBLE NOT NULL,
	imageURL VARCHAR(20) NOT NULL
*/

const { getAllRows, getRowById, updateRowById, deleteRowById, clearTable } = require("../../database/queries");
const db = require('../../database/connection');

const TABLE_NAME = 'items';

const createItem = async (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO ${TABLE_NAME} (${cols}) VALUES (?, ?, ?, ?, ?)`;
  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};
const getItems = async () => await getAllRows(TABLE_NAME);

const getItemById = async (id) => await getRowById(TABLE_NAME, id);

const updateItemById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteItemById =  async (id) => await deleteRowById(TABLE_NAME, id);

const clearItemTable = async () => await clearTable(TABLE_NAME);

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItemById,
  deleteItemById,
  clearItemTable
}