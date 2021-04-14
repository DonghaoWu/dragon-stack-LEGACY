const pool = require('../../../databasePool');

const client = require("../../../databaseClient-heroku");

client.connect();

class GenerationTable {
    static storeGeneration(generation) {

        return new Promise((resolve, reject) => {
            client.query('INSERT INTO generation(expiration) VALUES($1) RETURNING id',
                [generation.expiration],
                (error, response) => {
                    if (error) return reject(error);

                    const generationId = response.rows[0].id;
                    resolve({ generationId });
                }
            )
        })
    };
}

module.exports = GenerationTable;