const pool = require("../database/")

// GET ALL CLASSIFICATIONS 
async function getClassifications() {
  const sql = `
    SELECT * FROM classification
    ORDER BY classification_name
  `
  const result = await pool.query(sql)
  return result.rows
}

//  GET INVENTORY BY CLASSIFICATION
async function getByClassification(classification_name) {
  const sql = `
    SELECT * FROM inventory
    JOIN classification
    ON inventory.classification_id = classification.classification_id
    WHERE classification.classification_name = $1
  `
  const result = await pool.query(sql, [classification_name])
  return result.rows
}

//  GET ALL INVENTORY
async function getAllInventory() {
  const result = await pool.query("SELECT * FROM inventory")
  return result.rows
}

//  EXPORT EVERYTHING 
module.exports = {
  getClassifications,   
  getByClassification,
  getAllInventory
}