[cuki](../README.md) / CukiOptions

# Interface: CukiOptions

**`property`** {} name - The string representation of the cookie key.
   If the `name` option is not provided, a random emoji-string will be generated for the cookie name.

**`property`** {} value - The value of the cookie

**`property`** {} expirationDate - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie)

**`property`** {} daysAlive - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie), though this library references days

**`property`** {} secure - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

**`property`** {} httpOnly - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

**`property`** {} domain - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#domain_attribute)

**`property`** {} path - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#path_attribute)

**`property`** {} sameSite - @see [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute)

## Table of contents

### Properties

- [daysAlive](cukioptions.md#daysalive)
- [domain](cukioptions.md#domain)
- [expirationDate](cukioptions.md#expirationdate)
- [httpOnly](cukioptions.md#httponly)
- [name](cukioptions.md#name)
- [path](cukioptions.md#path)
- [sameSite](cukioptions.md#samesite)
- [secure](cukioptions.md#secure)
- [value](cukioptions.md#value)

## Properties

### daysAlive

• `Optional` **daysAlive**: *number*

Defined in: [cuki.ts:19](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L19)

___

### domain

• `Optional` **domain**: *string*

Defined in: [cuki.ts:22](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L22)

___

### expirationDate

• `Optional` **expirationDate**: Date

Defined in: [cuki.ts:18](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L18)

___

### httpOnly

• `Optional` **httpOnly**: *boolean*

Defined in: [cuki.ts:21](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L21)

___

### name

• `Optional` **name**: *string*

Defined in: [cuki.ts:16](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L16)

___

### path

• `Optional` **path**: *string*

Defined in: [cuki.ts:23](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L23)

___

### sameSite

• `Optional` **sameSite**: *string*

Defined in: [cuki.ts:24](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L24)

___

### secure

• `Optional` **secure**: *boolean*

Defined in: [cuki.ts:20](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L20)

___

### value

• `Optional` **value**: *string* \| *number* \| *boolean*

Defined in: [cuki.ts:17](https://github.com/shmolf/cuki/blob/9153dc1/src/cuki.ts#L17)
