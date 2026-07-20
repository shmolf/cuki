[**cuki**](../README.md)

***

[cuki](../README.md) / default

# Variable: default

> **default**: `object`

Defined in: cuki.ts:152

## Type Declaration

### Cuki

> **Cuki**: *typeof* [`Cuki`](../classes/Cuki.md)

### deleteCookie

> **deleteCookie**: (`name`) => `void`

Deletes the cookie of the provided name, via setting the expiration date into the past

#### Parameters

##### name

`string`

#### Returns

`void`

### getCookie

> **getCookie**: (`name`) => `string` \| `null`

Retrieve the cookie value from the browser.
This is not a Cuki instance. This is the value as stored by the browser, decoded back into a string.
Returns `null` if no cookie by that name exists.

#### Parameters

##### name

`string`

#### Returns

`string` \| `null`
