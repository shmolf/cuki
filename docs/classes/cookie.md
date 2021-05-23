[cuki](../README.md) / [Exports](../modules.md) / Cookie

# Class: Cookie

## Table of contents

### Constructors

- [constructor](cookie.md#constructor)

### Properties

- [daysAlive](cookie.md#daysalive)
- [domain](cookie.md#domain)
- [expirationDate](cookie.md#expirationdate)
- [httpOnly](cookie.md#httponly)
- [name](cookie.md#name)
- [path](cookie.md#path)
- [sameSite](cookie.md#samesite)
- [secure](cookie.md#secure)
- [value](cookie.md#value)

### Methods

- [getSecondsFromDays](cookie.md#getsecondsfromdays)
- [persist](cookie.md#persist)

## Constructors

### constructor

\+ **new Cookie**(`options`: [*CookieOptions*](../interfaces/cookieoptions.md)): [*Cookie*](cookie.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*CookieOptions*](../interfaces/cookieoptions.md) |

**Returns:** [*Cookie*](cookie.md)

Defined in: [cuki.ts:31](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L31)

## Properties

### daysAlive

• **daysAlive**: ``null`` \| *number*

Defined in: [cuki.ts:28](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L28)

___

### domain

• **domain**: ``null`` \| *string*

Defined in: [cuki.ts:29](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L29)

___

### expirationDate

• **expirationDate**: ``null`` \| Date

Defined in: [cuki.ts:27](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L27)

___

### httpOnly

• **httpOnly**: ``null`` \| *boolean*

Defined in: [cuki.ts:31](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L31)

___

### name

• **name**: *string*

Defined in: [cuki.ts:22](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L22)

___

### path

• **path**: ``null`` \| *string*

Defined in: [cuki.ts:30](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L30)

___

### sameSite

• **sameSite**: *string*

Defined in: [cuki.ts:25](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L25)

___

### secure

• **secure**: *boolean*

Defined in: [cuki.ts:24](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L24)

___

### value

• **value**: *string* \| *number* \| *boolean*

Defined in: [cuki.ts:23](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L23)

## Methods

### getSecondsFromDays

▸ **getSecondsFromDays**(`days`: ``null`` \| *number*): ``null`` \| *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | ``null`` \| *number* |

**Returns:** ``null`` \| *number*

Defined in: [cuki.ts:80](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L80)

___

### persist

▸ **persist**(): *void*

**Returns:** *void*

Defined in: [cuki.ts:47](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L47)
