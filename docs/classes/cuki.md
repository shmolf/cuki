[cuki](../README.md) / Cuki

# Class: Cuki

Cookie instance for preparing/persisting a newly made cookie

Example:
```js
new Cuki({name: 'Monster', value: 42, daysAlive: 30}).persist()
```

## Table of contents

### Constructors

- [constructor](cuki.md#constructor)

### Properties

- [daysAlive](cuki.md#daysalive)
- [domain](cuki.md#domain)
- [expirationDate](cuki.md#expirationdate)
- [httpOnly](cuki.md#httponly)
- [name](cuki.md#name)
- [path](cuki.md#path)
- [sameSite](cuki.md#samesite)
- [secure](cuki.md#secure)
- [value](cuki.md#value)

### Methods

- [getSecondsFromDays](cuki.md#getsecondsfromdays)
- [persist](cuki.md#persist)

## Constructors

### constructor

\+ **new Cuki**(`options`: [*CukiOptions*](../interfaces/cukioptions.md)): [*Cuki*](cuki.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*CukiOptions*](../interfaces/cukioptions.md) |

**Returns:** [*Cuki*](cuki.md)

Defined in: [cuki.ts:70](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L70)

## Properties

### daysAlive

• **daysAlive**: ``null`` \| *number*

Defined in: [cuki.ts:67](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L67)

___

### domain

• **domain**: ``null`` \| *string*

Defined in: [cuki.ts:68](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L68)

___

### expirationDate

• **expirationDate**: ``null`` \| Date

Defined in: [cuki.ts:66](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L66)

___

### httpOnly

• **httpOnly**: ``null`` \| *boolean*

Defined in: [cuki.ts:70](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L70)

___

### name

• **name**: *string*

Defined in: [cuki.ts:61](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L61)

___

### path

• **path**: ``null`` \| *string*

Defined in: [cuki.ts:69](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L69)

___

### sameSite

• **sameSite**: *string*

Defined in: [cuki.ts:64](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L64)

___

### secure

• **secure**: *boolean*

Defined in: [cuki.ts:63](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L63)

___

### value

• **value**: *string* \| *number* \| *boolean*

Defined in: [cuki.ts:62](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L62)

## Methods

### getSecondsFromDays

▸ `Private` **getSecondsFromDays**(`days`: ``null`` \| *number*): ``null`` \| *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | ``null`` \| *number* |

**Returns:** ``null`` \| *number*

Defined in: [cuki.ts:122](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L122)

___

### persist

▸ **persist**(): *void*

This takes the Cuki instance, and creates a new browser cookie based on the instance's properties.

**Returns:** *void*

Defined in: [cuki.ts:89](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L89)
