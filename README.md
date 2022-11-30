<h1 align="center">Welcome to Trove!</h1>

<p align="center">
  <img src="public/trove-logo.jpg" alt="logo"/>
</p>

## App Overview

This API is designed to store data for the Trove front end. It is currently in development so not everything is linked up but the code has been commented to show what links up and what doesn't.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To run the app in dev mode:

`npm run dev`

To run the app:

`npm start`

## Setting up your .env file to link to your database

You will need to link your database and setup the port in a .env file.

In the .env file assign your database link to the following varaible:

`POSTGRES_CONNECTION_URL=`

The PORT is setup to default to 3005. If you wish to change this you can use the following variable in your .env file:

`PORT=`

There are some setup files in the db folder. Currently no setup scripts are in place, but these are planned for the future.
Currently you need to manually setup your database but the SQL queries for these are provided in the db folder.

## API Reference

| Request                 | Parameter       | Type     | Request Body                                                  | Description                                          |
| :---------------------- | :-------------- | :------- | :------------------------------------------------------------ | ---------------------------------------------------- |
| GET /api/posts          | none            | none     | none                                                          | Gets all posts                                       |
| GET /api/posts          | `?search='tag'` | `string` | none                                                          | Gets all posts with a specific tag                   |
| POST /api/posts         | none            | none     | `{author, title, thumbnail, summary, date_posted, url, tags}` | Creates a new post in the posts table and tags table |
| DELETE /api/posts/${id} | `id`            | `string` | none                                                          | Deletes post and associated tags by post id          |

## **App Tool Box**

![](https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642) ![](https://camo.githubusercontent.com/4a1038affbb2653ec140936555b3714ddc322526be8567b489e8423a795dea18/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4669676d612d4632344531453f7374796c653d666f722d7468652d6261646765266c6f676f3d6669676d61266c6f676f436f6c6f723d7768697465) ![enter image description here](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145)
