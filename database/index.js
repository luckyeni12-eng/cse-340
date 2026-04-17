const { Pool } = require("pg")

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "1@1Panther12",
  port: 5432,
})

module.exports = pool