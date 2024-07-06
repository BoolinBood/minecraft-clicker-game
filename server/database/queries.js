const db = require('../database/connection');

const getAllRows = async (table) => {
  const sql = `SELECT * FROM ${table}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};
const getRowById = async (table, id) => {
  const sql = `SELECT * FROM ${table} WHERE id = ${id}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};
const updateRowById = async (table, id, obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);

  // console.log(`keys: ${keys}`);
  // console.log(`values: ${values}`);
  
  const cols = keys.map(key => `${key} = ?`).join(', ');
  
  // console.log(`cols: ${cols}`);
  
  const sql = `UPDATE ${table} SET ${cols} WHERE id = ${id}`;
  
  // console.log(`sql: ${sql}`);
  
  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};
const deleteRowById = async (table, id) => {
  const sql = `DELETE FROM ${table} WHERE id = ${id}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};

const createTable = async (table) => {};
const dropTable = async (table) => {
  const sql = `DROP TABLE ${table}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};
const clearTable = async (table) => {
  const sql = `DELETE FROM ${table};`
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllRows,
  getRowById,
  updateRowById,
  deleteRowById,
  createTable,
  dropTable,
  clearTable
}