[cuki](../README.md) / CukiOptions

# Interface: CukiOptions

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

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie), though this library references days

Defined in: [cuki.ts:20](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L20)

___

### domain

• `Optional` **domain**: *string*

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#domain_attribute)

Defined in: [cuki.ts:32](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L32)

___

### expirationDate

• `Optional` **expirationDate**: Date

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie)

Defined in: [cuki.ts:16](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L16)

___

### httpOnly

• `Optional` **httpOnly**: *boolean*

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

Defined in: [cuki.ts:28](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L28)

___

### name

• `Optional` **name**: *string*

The string representation of the cookie key.
If the `name` option is not provided, a random emoji-string will be generated for the cookie name.

Defined in: [cuki.ts:8](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L8)

___

### path

• `Optional` **path**: *string*

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#path_attribute)

Defined in: [cuki.ts:36](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L36)

___

### sameSite

• `Optional` **sameSite**: *string*

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute)

Defined in: [cuki.ts:40](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L40)

___

### secure

• `Optional` **secure**: *boolean*

**`see`** [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies)

Defined in: [cuki.ts:24](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L24)

___

### value

• `Optional` **value**: *string* \| *number* \| *boolean*

The value of the cookie

Defined in: [cuki.ts:12](https://github.com/shmolf/cuki/blob/1c84a18/src/cuki.ts#L12)
