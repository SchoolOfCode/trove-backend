/*

1. getAllPosts
2. getPostsByID 
3. addNewPost

*/

const request = require('supertest');
const app = require('../app');
const expect = require('jest');
const pool = require('../db/index.js');

test('GET /posts', async function () {
  const response = await request(app).get('/posts');
  expect.body.toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});
