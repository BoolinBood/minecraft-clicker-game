// Block type
/*
  id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(20) NOT NULL,
	health INT NOT NULL,
	spawnChance DOUBLE NOT NULL,
	imageURL VARCHAR(20) NOT NULL
*/

const { getAllRows, getRowById, getRandomRows, updateRowById, deleteRowById, clearTable } = require("../../database/queries");
const db = require('../../database/connection');

const TABLE_NAME = 'blocks';

const createBlock = async (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO ${TABLE_NAME} (${cols}) VALUES (?, ?, ?, ?)`;

  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};
const getBlocks = async () => await getAllRows(TABLE_NAME);

const getRandomBlocks = async (limit) => await getRandomRows(TABLE_NAME, limit)

const getBlockById = async (id) => await getRowById(TABLE_NAME, id);

const updateBlockById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteBlockById =  async (id) => await deleteRowById(TABLE_NAME, id);

const clearBlockTable = async () => await clearTable(TABLE_NAME);

module.exports = {
  createBlock,
  getBlocks,
  getBlockById,
  getRandomBlocks,
  updateBlockById,
  deleteBlockById,
  clearBlockTable
}