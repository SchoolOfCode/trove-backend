const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.POSTGRESS_CONMNECTION_URL,
});

module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
  pool,
};

module.exports = { pool };
