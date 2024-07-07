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
  const cols = keys.map(key => `${key} = ?`).join(', ');
  const sql = `UPDATE ${table} SET ${cols} WHERE id = ${id}`;
  
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