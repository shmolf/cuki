cuki

# cuki

## Table of contents

### Classes

- [Cuki](classes/cuki.md)

### Interfaces

- [CukiOptions](interfaces/cukioptions.md)

### Properties

- [default](README.md#default)

### Variables

- [SameSiteEnum](README.md#samesiteenum)

### Functions

- [deleteCookie](README.md#deletecookie)
- [getCookie](README.md#getcookie)

## Properties

### default

• **default**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Cuki` | *typeof* [*Cuki*](classes/cuki.md) |
| `deleteCookie` | (`name`: *string*) => *void* |
| `getCookie` | (`name`: *string*) => *string* \| *number* \| *boolean* \| ``null`` |

## Variables

### SameSiteEnum

• `Const` **SameSiteEnum**: *Readonly*<{ `Lax`: *string* = 'Lax'; `None`: *string* = 'None'; `Strict`: *string* = 'Strict' }\>

If `none` is used, then the `secure` option will be enabled by default.

Defined in: [cuki.ts:30](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L30)

## Functions

### deleteCookie

▸ **deleteCookie**(`name`: *string*): *void*

Deletes the cookie of the provided name, via setting the expiration date into the past

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

Defined in: [cuki.ts:121](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L121)

___

### getCookie

▸ **getCookie**(`name`: *string*): *string* \| *number* \| *boolean* \| ``null``

Retrieve the cookie value from the browser.
This is not a Cuki instance. This is the primitive value as stored by the browser.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *string* \| *number* \| *boolean* \| ``null``

Defined in: [cuki.ts:114](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L114)
