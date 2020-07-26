# Bootstrap 5 + Webpack 4

Get started with Bootstrap v5, the world’s most popular framework for building responsive, mobile-first sites, with Webpack.JS (v4+) and a template starter page.

I also add customization with SASS to you compile your own version of Bootstrap. To use this repo you need [Node.JS](https://nodejs.org/) installed in your computer.

This project is an evolving version of the [nrcfrls](https://github.com/nrcfrld/bootstrap5-webpack) repo.

![page](https://github.com/odhs/bootstrap5-webpack/blob/master/bootstrap_starter_template.png?raw=true)

## Install

### Clone the repo

```sh
git clone github.com/odhs/bootstrap5-webpack.git
cd bootstrap5-webpack
```

### Install dependencies

```sh
npm install
```

### Serve in development mode

When in developing mode use this command:

```sh
npm run serve
```

### Build to the dist directory

To publish the project use this command:

```sh
npm run build
```

## Config

This startup project is already set up, but it is good to know the follow:

### Package.json

Add the parameters `--inline --hot` at the end in the script line `"serve": "webpack-dev-server --config webpack.dev.js --open"` to have a hot reload server.
