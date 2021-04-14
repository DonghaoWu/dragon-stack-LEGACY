const { Client } = require('pg');

const client = new Client(
    {
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    }
    // {
    //     user: 'noah',
    //     host: 'localhost',
    //     database: 'dragonstackdb',
    //     password: '12345',
    //     port: 5432
    // }
);

module.exports = client;