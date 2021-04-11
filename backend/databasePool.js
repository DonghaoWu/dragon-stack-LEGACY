// const { Pool } = require('pg');
// require('dotenv').config();

// const local_database = `postgres://${process.env.POSTGRE_USER}:${process.env.POSTGRE_PASSWORD}@${process.env.POSTGRE_HOST}:${process.env.POSTGRE_PORT}/${process.env.POSTGRE_LOCAL_DATABASE}`;

// console.log(local_database, '=======>')
// const CONNECTION_STRING = process.env.DATABASE_URL || local_database;

// class Database {
//     constructor() {
//         this._pool = new Pool({
//             connectionString: CONNECTION_STRING,
//         });

//         this._pool.on('error', (err, client) => {
//             console.error('Unexpected error on idle PostgreSQL client.', err);
//             process.exit(-1);
//         });
//     }

//     query(query, ...args) {
//         this._pool.connect((err, client, done) => {
//             if (err) throw err;
//             const params = args.length === 2 ? args[0] : [];
//             const callback = args.length === 1 ? args[0] : args[1];

//             client.query(query, params, (err, res) => {
//                 done();
//                 if (err) {
//                     console.log(err.stack);
//                     return callback({ error: 'Database error.' }, null);
//                 }
//                 callback({}, res.rows);
//             });
//         });
//     }

//     end() {
//         this._pool.end();
//     }
// }

// let pool = new Database();

// module.exports = pool;

require('dotenv').config();
const { Pool } = require('pg');

const local_database = `postgres://${process.env.POSTGRE_USER}:${process.env.POSTGRE_PASSWORD}@${process.env.POSTGRE_HOST}:${process.env.POSTGRE_PORT}/${process.env.POSTGRE_LOCAL_DATABASE}`;
const CONNECTION_STRING = process.env.DATABASE_URL || local_database;

const pool = new Pool({
    connectionString: CONNECTION_STRING
})

module.exports = pool;