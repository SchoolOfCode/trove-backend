const { query } = require("../db/index.js");

async function getAllLinks() {
    const results = await query('SELECT * FROM posts');
    const linksObj = results.rows;
    return linksObj;
};

module.exports = {getAllLinks}