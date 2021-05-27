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

Defined in: [cuki.ts:53](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L53)

## Properties

### daysAlive

• **daysAlive**: ``null`` \| *number*

Defined in: [cuki.ts:50](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L50)

___

### domain

• **domain**: ``null`` \| *string*

Defined in: [cuki.ts:51](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L51)

___

### expirationDate

• **expirationDate**: ``null`` \| Date

Defined in: [cuki.ts:49](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L49)

___

### httpOnly

• **httpOnly**: ``null`` \| *boolean*

Defined in: [cuki.ts:53](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L53)

___

### name

• **name**: *string*

Defined in: [cuki.ts:44](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L44)

___

### path

• **path**: ``null`` \| *string*

Defined in: [cuki.ts:52](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L52)

___

### sameSite

• **sameSite**: *string*

Defined in: [cuki.ts:47](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L47)

___

### secure

• **secure**: *boolean*

Defined in: [cuki.ts:46](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L46)

___

### value

• **value**: *string* \| *number* \| *boolean*

Defined in: [cuki.ts:45](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L45)

## Methods

### getSecondsFromDays

▸ `Private` **getSecondsFromDays**(`days`: ``null`` \| *number*): ``null`` \| *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | ``null`` \| *number* |

**Returns:** ``null`` \| *number*

Defined in: [cuki.ts:105](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L105)

___

### persist

▸ **persist**(): *void*

This takes the Cuki instance, and creates a new browser cookie based on the provided options.

**Returns:** *void*

Defined in: [cuki.ts:72](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L72)
