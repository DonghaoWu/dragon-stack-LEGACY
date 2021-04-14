const TRAITS = require("../data/traits.json");
require('dotenv').config();
const { Client } = require('pg');

// console.log(process.env.DATABASE_URL, '=======>');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

TRAITS.map(TRAIT => {
    const traitType = TRAIT.type;
    const traitValues = TRAIT.values;

    console.log('Begin here======================>', traitValues);
    traitValues.map(traitValue => {
        client.query(
            `INSERT INTO trait("traitType", "traitValue") VALUES($1, $2) RETURNING id`,
            [traitType, traitValue],
            (error, res) => {
                if (error) console.error(error);
                const traitId = res.rows[0].id;
                console.log(`Inserted trait - id: ${traitId}`);
            }
        )
    })
})

