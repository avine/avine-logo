# Avine logo

[![Build Status](https://travis-ci.org/avine/avine-logo.svg?branch=master)](https://travis-ci.org/avine/avine-logo)

My personal logo

![Avine logo](./screenshot.png)

[View demo](https://avine.io/logo)

## Installation

```shell
npm install
npm run build
npm start
```

## package.json scripts

Create folders and copy files to `./dist` directory

```shell
npm run dir
```

Use `./src/logo/*.svg` images to create alternative colors.
Put the result in `./dist/logo/colors/*.svg`.

```shell
npm run colorize
```

Generate favicons at the root of the `./dist`.
Copy html files from `./src/*.html` to `./dist` and inject favicons markup.

```shell
npm run favicon
```

Compile `less` to `css`

```shell
npm run less
```

Run local server and watch files...

```shell
npm run dev
```
