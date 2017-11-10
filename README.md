<img src="https://media.giphy.com/media/144FER6Sz95uZW/giphy.gif">

# CTF Pro website

The website for CTF Pro.

Browser support is the last 2 versions of modern browsers only (Chrome, Firefox, Edge, Safari). This is reflected in the browserslist config.

# Prerequisites

- Docker
- Web client *

*: For the time being the web client will need to be linked as follows:

1. In client repo: `npm link`
2. In website (this) repo: `npm link osctf-web-client`

## Quick Guide

Install npm dependencies: `npm i`.

Link the web client per the prerequisite instructions.

Copy `.env.example` to `.env` and edit as desired.

Run the latest Knex DB migrations: `knex migrate:latest`, and optionally seed: `knex seed:run`

In development, start the server with `npm run start-dev`. This server will reload on change as well as run alongside Webpack watch including HMR. Note that with HMR you will see a FOUC on page load. Not to worry, this won't happen during production.

In production, start the server with `npm run start` on by default port 5000. Note that this will first run the build task.

The build task can be manually run with `npm run build`.

You can run `npm run build-stats` to generate statistics regarding the build.

# Migrations

We use the Knex library for migrations. You may find working with the backend easier if you install the library globally, like so: `npm i -g knex`.
