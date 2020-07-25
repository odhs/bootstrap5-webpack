# Bootstrap 5 + Webpack 4

Make a simple page with latest version of Bootstrap (v5+) and using Webpack (v4+) dev environment.
I also add customization with sass/scsss.

![page](https://github.com/nrcfrld/bootstrap5-webpack/blob/master/b5.png?raw=true)

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

### serve in development mode

```sh
npm run serve
```

## build

```sh
npm run build
```

## Config

This startup project already configured, but is good you know the follow:

### Package.json

Add the parameters `--inline --hot` at the end in the script line `"serve": "webpack-dev-server --config webpack.dev.js --open"` to have a hot reload server.
