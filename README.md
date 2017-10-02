<img src="https://media.giphy.com/media/144FER6Sz95uZW/giphy.gif">

# CTF Pro website

The website for CTF Pro.

Browser support is the last 2 versions of modern browsers only (Chrome, Firefox, Edge, Safari). This is reflected in the browserslist config.

# Prerequisites

- Node >= 8.x
- npm >= 5.x
- PostgreSQL == 10.x w/ uuid-ossp extension.

## Quick Guide

Copy `.env.example` to `.env` and edit as desired.

In production, start the server with `npm run start` on by default port 5000.

In development, start the server with `npm run start-dev`. This server will reload on change and as well as run alongside Webpack watch including HMR on the server port plus one. So, if your server port is 5000, you can access the dev site at `http://localhost:5001`. Note that with HMR you will see a FOUC on page load. Not to worry, this won't happen during production.

The build task can be run with `npm run build`.

You can run `npm run build-stats` to generate statistics regarding the build.

# Migrations

We use the Knex library for migrations. You may find working with the backend easier if you install the library globally, like so: `npm i -g knex`.
