# is-uic-location-code

Check if given value is a valid [UIC location code (ENEE)](https://uic.org/location-codes-enee). Uses the [`uic-codes`](https://github.com/derhuerst/uic-codes) package. Note that only 7-character codes are considered valid for now (instead of 8-digit with checksum, as specified by UIC), because most operators don't provide it, so that 8-digit codes are more likely the result of bugs or inconsistencies.

[![npm version](https://img.shields.io/npm/v/is-uic-location-code.svg)](https://www.npmjs.com/package/is-uic-location-code)
[![Build Status](https://travis-ci.org/juliuste/is-uic-location-code.svg?branch=master)](https://travis-ci.org/juliuste/is-uic-location-code)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/is-uic-location-code.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/is-uic-location-code.svg)](https://david-dm.org/juliuste/is-uic-location-code)
[![license](https://img.shields.io/github/license/juliuste/is-uic-location-code.svg?style=flat)](license)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```bash
npm install is-uic-location-code
```

## Usage

```js
const isUicLocationCode = require('is-uic-location-code')
isUicLocationCode('1000010') // true
isUicLocationCode('8000001') // true
isUicLocationCode('8777777') // true
isUicLocationCode(8777777) // false
isUicLocationCode('80-00001') // false
isUicLocationCode('800000001') // false
isUicLocationCode('0010000') // false
isUicLocationCode('80') // false
isUicLocationCode(null) // false
isUicLocationCode(undefined) // false
```

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/juliuste/is-uic-location-code/issues).
