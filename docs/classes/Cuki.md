[**cuki**](../README.md)

***

[cuki](../README.md) / Cuki

# Class: Cuki

Defined in: cuki.ts:60

Cuki instance for preparing/persisting a browser cookie

Example:
```js
new Cuki({name: 'Monster', value: 42, daysAlive: 30}).persist()
```

## Constructors

### Constructor

> **new Cuki**(`options`): `Cuki`

Defined in: cuki.ts:72

#### Parameters

##### options

[`CukiOptions`](../interfaces/CukiOptions.md)

#### Returns

`Cuki`

## Properties

### daysAlive

> **daysAlive**: `number` \| `null`

Defined in: cuki.ts:67

***

### domain

> **domain**: `string` \| `null`

Defined in: cuki.ts:68

***

### expirationDate

> **expirationDate**: `Date` \| `null`

Defined in: cuki.ts:66

***

### httpOnly

> **httpOnly**: `boolean` \| `null`

Defined in: cuki.ts:70

***

### name

> **name**: `string`

Defined in: cuki.ts:61

***

### path

> **path**: `string` \| `null`

Defined in: cuki.ts:69

***

### sameSite

> **sameSite**: `string`

Defined in: cuki.ts:64

***

### secure

> **secure**: `boolean`

Defined in: cuki.ts:63

***

### value

> **value**: `string` \| `number` \| `boolean`

Defined in: cuki.ts:62

## Methods

### persist()

> **persist**(): `void`

Defined in: cuki.ts:89

This takes the Cuki instance, and creates a new browser cookie based on the instance's properties.

#### Returns

`void`
