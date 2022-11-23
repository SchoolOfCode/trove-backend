const { query } = require("../db/index.js");

async function getAllLinks() {
    const results = await query('SELECT * FROM posts');
    const linksObj = results.rows;
    return linksObj;
};

async function addNewPost (post) {
    const update = await query(`INSERT INTO posts (author, title, thumbnail, summary, date_posted, url, tags) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`, 
    [post.author, post.title, post.thumbnail, post.summary, post.date_posted, post.url, post.tags]);
    const addPost = update.rows[0];
    return addPost;
}

async function deletePostByID (id) {
    const deletedTags = await query('DELETE FROM tags_table WHERE post_id = $1 RETURNING *;', [`${id}`]);
    const deletedPost = await query('DELETE FROM posts WHERE post_id = $1 RETURNING *;', [`${id}`]);
    const deleteConfirm = [deletedPost, deletedTags];
    return deleteConfirm; 
}

module.exports = {getAllLinks, addNewPost, deletePostByID}