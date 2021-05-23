cuki / [Exports](modules.md)

# 🍪 (cuki)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![npm-size](https://img.shields.io/bundlephobia/min/cuki?style=flat-square)](https://www.npmjs.com/package/cuki)

Install
```sh
npm i cuki
yarn add cuki
```

To generate documentation, run
```sh
npx typedoc
```

## Usage

### Creating a Cookie
Creating a `Cookie` instance is meant for preparation of a cookie's properties before storing (`persist`) it within
the browser. However, so long as you have that instance available, you can always tweak and re-persist.

Simplest way to create a new browser cookie
```js
new Cookie({
    name: 'your-cookie-name',
    value: 'value should be a string, boolean, or number',
    daysAlive: 365
}).persist();
```

If you prefer to specify a specific date when the cookie should expire, the specify a
[`Date` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for the
`expirationDate` field. ie:
```js
new Cookie({
    name: 'your-cookie-name',
    value: 'value should be a string, boolean, or number',
    expirationDate: new Date('December 31, 2042 03:24:00')
}).persist();
```

#### List of options
```ts
name: string,
value: string|number|boolean,
expirationDate: Date,
daysAlive: number,
secure: boolean,
httpOnly: boolean,
domain: string,
path: string,
sameSite: string,
```

Technically `name` is optional. But if it's not specified, a random emoji-character name will be created.  
`value` is also optional, but this'll default to an empty string.

If none of the following options are provided, then the library will rely on browser defaults:
```js
expirationDate: Date,
daysAlive: number,
httpOnly: boolean,
domain: string,
path: string,
sameSite: string,
secure: boolean, // If `sameSite` is set to `none`, then `secure` will be enabled.
```

### Deleting a Cookie

Deletion is performed by setting the expiration date into the past.

Simply call `deleteCookie(name)`

### Getting a Cookie Value

Simply call `getCookie(name)`

### Example App Library
```js
import { Cookie, getCookie, deleteCookie } from 'cuki';

function cookieSaveWrapper(name, value, duration) {
    (new Cookie({name, value, daysAlive: (duration ?? 365)})).persist();
}

function cookieGetWrapper(name) {
    return getCookie(name);
}

function cookieDeleteWrapper(name) {
    deleteCookie(name);
}

export default {
    store: cookieSaveWrapper,
    get: cookieGetWrapper,
    remove: cookieDeleteWrapper,
};
```
