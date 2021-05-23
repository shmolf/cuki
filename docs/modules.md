[cuki](README.md) / Exports

# cuki

## Table of contents

### Classes

- [Cookie](classes/cookie.md)

### Interfaces

- [CookieOptions](interfaces/cookieoptions.md)

### Variables

- [SameSiteEnum](modules.md#samesiteenum)

### Functions

- [deleteCookie](modules.md#deletecookie)
- [getCookie](modules.md#getcookie)

## Variables

### SameSiteEnum

• `Const` **SameSiteEnum**: *Readonly*<{ `Lax`: *string* = 'Lax'; `None`: *string* = 'None'; `Strict`: *string* = 'Strict' }\>

Defined in: [cuki.ts:15](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L15)

## Functions

### deleteCookie

▸ **deleteCookie**(`name`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

Defined in: [cuki.ts:91](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L91)

___

### getCookie

▸ **getCookie**(`name`: *string*): *string* \| *number* \| *boolean* \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *string* \| *number* \| *boolean* \| ``null``

Defined in: [cuki.ts:87](https://github.com/shmolf/cuki/blob/c7c1754/src/cuki.ts#L87)
