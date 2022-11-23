const { query } = require('../db/index.js');

async function getAllPosts() {
  const results = await query('SELECT * FROM posts');
  const linksObj = results.rows;
  return linksObj;
}

async function getPostByTag(tag) {
  const results = await query(
    'SELECT * FROM posts LEFT JOIN tags_table ON posts.post_id=tags_table.post_id WHERE tags_table.tag=$1;',
    [tag]
  );
  const postArr = results.rows;
  return postArr;
}

async function addNewPost(post) {
  const update = await query(
    'INSERT INTO posts (author, title, thumbnail, summary, date_posted, url, tags) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;',
    [
      post.author,
      post.title,
      post.thumbnail,
      post.summary,
      post.date_posted,
      post.url,
      post.tags,
    ]
  );
  const newPostID = update.rows[0].post_id;
  const newTags = await Promise.all(
    post.tags.map(async (tag) => {
      let update = await query(
        'INSERT INTO tags_table (tag, post_id) VALUES ($1, $2) RETURNING *',
        [tag, newPostID]
      );
      return update.rows[0];
    })
  );
  const addPost = [update.rows[0], newTags];
  return addPost;
}

async function deletePostByID(id) {
  const deletedTags = await query(
    'DELETE FROM tags_table WHERE post_id = $1 RETURNING *;',
    [`${id}`]
  );
  const deletedPost = await query(
    'DELETE FROM posts WHERE post_id = $1 RETURNING *;',
    [`${id}`]
  );
  const deleteConfirm = [deletedPost, deletedTags];
  return deleteConfirm;
}

module.exports = { getAllPosts, getPostByTag, addNewPost, deletePostByID };
