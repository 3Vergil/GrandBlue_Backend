const Pool = require("pg").Pool
const pool = new Pool({
    user: "postgres",
    password: "it007dsaw",
    host: "localhost",
    port: 5432,
    database: "grand_db"
})

module.exports = pool