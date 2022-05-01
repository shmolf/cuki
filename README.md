# 🍪 (cuki)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![npm-size](https://img.shields.io/bundlephobia/min/cuki?style=flat-square)](https://www.npmjs.com/package/cuki)

This library is designed to help facilitate the creation, retrieval, and deletion of browser cookies.

## Install
```sh
npm i cuki
yarn add cuki
```

## Documentation

[Current Documentation](/docs/)

## Usage

### Creating a Cookie
Creating a `Cuki` instance is meant for preparation of a browser cookie's properties before storing (`persist`) it
within the browser. However, so long as you have that instance available, you can always tweak and re-persist. However,
if the cookie name is changed, after having already called `persist`, then this will simply create a new cookie by
the new name.

Simplest way to create a new browser cookie
```js
new Cuki({
  name: 'your-cookie-name',
  value: 'value should be a string, boolean, or number',
  daysAlive: 365
}).persist();
```

If you prefer to specify a specific date when the cookie should expire, the specify a
[`Date` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) for the
`expirationDate` field. ie:
```js
new Cuki({
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
import { Cuki, getCookie, deleteCookie } from 'cuki';

function cookieSaveWrapper(name, value, duration) {
  (new Cuki({name, value, daysAlive: (duration ?? 365)})).persist();
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

### Loading for an ES5 application
```html
<script src="https://unpkg.com/cuki@latest/dist/cuki.min.js"></script>
<pre id="output"></pre>
```
```js
var cukiLibrary = window.cuki;
var output = document.getElementById('output');

var cookie = new cukiLibrary.Cuki({
  value: 'value should be a string, boolean, or number',
  daysAlive: 365,
});

cookie.persist();

console.log({
  cookieName: cookie.name,
  // This will return `null` when ran within JSFiddle
  value: cukiLibrary.getCookie(cookie.name)
});

output.innerText = cukiLibrary.getCookie(cookie.name)
  || 'Are you running this within JSFiddle? If so, it will not work.';
```

# Contributing

## Setup

```sh
npx yarn install
```

Run `npx yarn build` to generate the bundled output (will be found in `dist/` directory).

There is not yet any tests.

## Commits

Please encapsulate your changes into discrete commits, where each commit's changes are cohesive (clearly related),
and of a similar nature. ie, commit changes to documentation along with changes to the code. Don't commit
significant whitespace fixes, along with logic changes.

### Commitlint
This repo is setup to use [`commitlint`](https://github.com/conventional-changelog/commitlint), so that the
[semantic-release library](https://github.com/semantic-release/semantic-release) can auto-generate release
documentation, and publish to npm.

### Commitizen
If you're not familiar with the [Conventional Commit format](https://www.conventionalcommits.org/en/v1.0.0/), then
feel free to use the [commitizen](https://github.com/commitizen/cz-cli) interactive terminal. This library _should_
already have hooks setup. So if you run `git commit` in your terminal, then theorhetically, commitizen will take over
and ask you questions.
- If you're having issues, or don't quite understand how to use commitizen, please let me know. I'll do what I can
  to help, until I have better documentation setup.

## Auto-Generate `docs/*` files

To generate documentation, you'll need to have `node_modules` (😭), and therefor need to run `npm install`.  
Then, you can run the [TypeDoc](https://typedoc.org/) command.
```sh
npx typedoc
```

Please have the documentation updated, after any changes to code.
