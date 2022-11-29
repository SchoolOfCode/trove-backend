/*

1. getAllPosts
2. getPostsByID 
3. addNewPost

*/

import request from 'supertest';
import { expect } from '@jest/globals';
import { app } from '../app';
import { pool } from '../db/index.js';

it('GET /posts', async function () {
  const response = await request(app).get('/api/posts');
  console.log(response.body);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});
