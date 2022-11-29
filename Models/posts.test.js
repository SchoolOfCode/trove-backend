/*

1. getAllPosts - Done
2. getPostsByTag - Done
3. addNewPost - Done

*/

import request from 'supertest';
import { expect } from '@jest/globals';
import { app } from '../app';
import { pool } from '../db/index.js';

describe('Tests our get requests', () =>
{
  it('GET all posts', async function () {
    const response = await request(app).get('/api/posts');
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  });

  it('GET posts by tag', async function () {
    const response = await request(app).get('/api/posts?search=Jest');
    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
  })
})

it('Test our post request', async function () {
  const response = await request(app)
  
    .post('/api/posts')
    .send({
      author: "SuperTest",
      title: "SuperTest Docs",
      thumbnail: "https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg",
      summary: "The docs relating to SuperTest",
      date_posted: "2022-10-20T23:00:00.000Z",
      url: "https://www.npmjs.com/package/supertest",
      tags: ["SuperTest", "Jest"]
    })

    expect(response.statusCode).toBe(200);
    expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
    });
    expect(response.body.payload[0].author).toBe("SuperTest");
    expect(response.body.payload[0].summary).toBe("The docs relating to SuperTest");
    expect(response.body.payload[1][0].tag).toBe("SuperTest")
})

afterAll(() => {
  pool.end()
});