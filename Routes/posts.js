import express from 'express';
import { Router } from 'express';
const router = Router();
import {
  getAllPosts,
  getPostByTag,
  addNewPost,
  deletePostByID,
} from '../Models/posts.js';

/** 
 * GET route checks for search query and runs getPostByTag
 * if no search query is defined gets all posts
*/
router.get('/', async function (req, res) {
  if (req.query.search !== undefined) {
    const posts = await getPostByTag(req.query.search);
    res.json({ success: true, payload: posts });
  } else {
  const posts = await getAllPosts();
  res.json({ success: true, payload: posts });
}});

/**
 * Routes to the new post function
 */
router.post('/', async function (req, res) {
  const newPostObj = await addNewPost(req.body);
  res.json({ success: true, payload: newPostObj });
});

/**
 * Deletes a post by ID. Not yet hooked up to front end.
 */
router.delete('/:id', async function (req, res) {
  const deletedItems = await deletePostByID(req.params.id);
  res.json({ success: true, payload: deletedItems })
});

export default router;
