import { query } from '../db/index.js';
/**
 * GET's all data from posts-table
 * @returns {Array.<object>} An array of posts objects
 */
export async function getAllPosts() {
  const results = await query('SELECT * FROM posts');
  const postsArray = results.rows;
  return postsArray;
}


/**
 * GET's all posts from posts-table with specified tag
 * @param {String} tag 
 * @returns {Array.<object>} An array of posts objects filtered by a tag
 */
export async function getPostByTag(tag) {
  const results = await query(
    'SELECT * FROM posts LEFT JOIN tags_table ON posts.post_id=tags_table.post_id WHERE tags_table.tag=$1;',
    [tag]
  );
  const postArr = results.rows;
  return postArr;
}

/**
 * ADD's new post to the posts-table and ADD's all relevant tags to tags-table with the corresponding post ID
 * @param {{
 * author: String
 * title: String
 * thumbnail: String
 * summary: String
 * date_posted: String
 * url: String
 * tags: Array.<string>
 * }} post 
 * @returns {Array} An array with an object and another array of objects 
 */
export async function addNewPost(post) {
  const newPost = await query(
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
  const newPostID = newPost.rows[0].post_id;
  const newTags = await Promise.all(
    post.tags.map(async (tag) => {
      let newTag = await query(
        'INSERT INTO tags_table (tag, post_id) VALUES ($1, $2) RETURNING *',
        [tag, newPostID]
      );
      return newTag.rows[0];
    })
  );
  const addPost = [newPost.rows[0], newTags];
  return addPost;
}

/**
 * DELETE's specified post from posts-table and corresponding tags from tags-table
 * @param {string} id 
 * @returns {Array} An array with the deleted rows from the database 
 */

export async function deletePostByID(id) {
  const deletedTags = await query(
    'DELETE FROM tags_table WHERE post_id = $1 RETURNING *;',
    [id]
  );
  const deletedPost = await query(
    'DELETE FROM posts WHERE post_id = $1 RETURNING *;',
    [id]
  );
  const deleteConfirm = [deletedPost, deletedTags];
  return deleteConfirm;
}
