## Star Wars - Names

[![travis build](https://img.shields.io/travis/willianjusten/starwars-names.svg?style=flat-square)](https://travis-ci.org/willianjusten/starwars-names)
[![codecov coverage](https://img.shields.io/codecov/c/github/willianjusten/starwars-names.svg?style=flat-square)](https://codecov.io/github/willianjusten/starwars-names)
[![version](https://img.shields.io/npm/v/starwars-names-will.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-will)
[![MIT License](https://img.shields.io/npm/l/starwars-names-will.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Get random names from Star Wars characters.

## Instalation

This package is distribuited on npm:

```
npm install starwars-names-will
```

## Usage

```javascript

var names = require('starwars-names-will');
var allNames = names.all;
var randomName = names.random();
var threeRandomNames = names.random(3);
```

## Other

This library was developed by [Kent C. Dodds](https://twitter.com/kentcdodds) as part of an [egghead.io](http://egghead.io/) series called "How to Write a JavaScript Library."