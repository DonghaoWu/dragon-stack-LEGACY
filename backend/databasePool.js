require('dotenv').config();
const { Pool } = require('pg');

const local_database = `postgres://${process.env.POSTGRE_USER}:${process.env.POSTGRE_PASSWORD}@${process.env.POSTGRE_HOST}:${process.env.POSTGRE_PORT}/${process.env.POSTGRE_LOCAL_DATABASE}`;
const CONNECTION_STRING = process.env.DATABASE_URL || local_database;

const pool = new Pool({
    connectionString: CONNECTION_STRING
})

module.exports = pool;