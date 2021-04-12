// const pool = require("../databasePool");
const TRAITS = require("../data/traits.json");
require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

TRAITS.forEach(TRAIT => {
    const traitType = TRAIT.type;
    const traitValues = TRAIT.values;

    traitValues.forEach(traitValue => {
        client.query(
            `INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id`,
            [traitType, traitValue],
            (error, response) => {
                if(error) console.error(error);
                const traitId = response.rows[0].id;

                console.log(`Inserted trait - id: ${traitId}`);
                client.end();
            }
        )
    });
});