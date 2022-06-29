const pgp = require('pg-promise')()
const connectionString =
"postgresql://postgres:oida9119!@localhost:5432/Sample" 

const db = pgp(connectionString)

module.exports =db;

