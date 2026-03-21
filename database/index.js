const { Pool } = require("pg")
require("dotenv").config()

/* ***************
 * Connection Pool
 * *************** */
let pool

if (process.env.NODE_ENV == "development") {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  })

  // For development (shows queries in terminal)
  module.exports = {
    async query(text, params) {
      try {
        const res = await pool.query(text, params)
        console.log("executed query", { text })
        return res
      } catch (error) {
        console.error("error in query", { text })
        throw error
      }
    },
  }

} else {
  // Production
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  })

  module.exports = pool
}