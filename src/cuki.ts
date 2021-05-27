import { getRandomString } from './Emojis';

export interface CukiOptions {
    /**
     * The string representation of the cookie key.
     * If the `name` option is not provided, a random emoji-string will be generated for the cookie name.
     */
    name?: string,
    /**
     * The value of the cookie
     */
    value?: string|number|boolean,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie| MDN Docs}
     */
    expirationDate?: Date,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_the_lifetime_of_a_cookie| MDN Docs}, though this library references days
     */
    daysAlive?: number,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies| MDN Docs}
     */
    secure?: boolean,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#restrict_access_to_cookies| MDN Docs}
     */
    httpOnly?: boolean,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#domain_attribute| MDN Docs}
     */
    domain?: string,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#path_attribute| MDN Docs}
     */
    path?: string,
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute| MDN Docs}
     */
    sameSite?: string,
}

/**
 * If `none` is used, then the `secure` option will be enabled by default.
 */
export const SameSiteEnum = Object.freeze({
    'Lax': 'Lax',
    'None': 'None',
    'Strict': 'Strict',
});

/**
 * Cuki instance for preparing/persisting a browser cookie
 *
 * Example:
 * ```js
 * new Cuki({name: 'Monster', value: 42, daysAlive: 30}).persist()
 * ```
 */
export class Cuki {
    name: string;
    value: string|number|boolean;
    secure: boolean;
    sameSite: string;
    // These will rely on browser defaults if not defined
    expirationDate: Date|null;
    daysAlive: number|null;
    domain: string|null;
    path: string|null;
    httpOnly: boolean|null;

    constructor(options: CukiOptions) {
        this.name = options?.name ?? getRandomString(10);
        this.value = options?.value ?? '';
        this.sameSite = ((options?.sameSite ?? '') in SameSiteEnum) ? options.sameSite as string : SameSiteEnum.Lax;
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#samesite_attribute
        this.secure = this.sameSite === SameSiteEnum.None ? true : options?.secure ?? true;

        this.expirationDate = options?.expirationDate ?? null;
        this.daysAlive = this.getSecondsFromDays(options?.daysAlive ?? null);
        this.domain = options?.domain ?? null;
        this.path = options?.path ?? null;
        this.httpOnly = options?.httpOnly ?? null;
    }

    /**
     * This takes the Cuki instance, and creates a new browser cookie based on the instance's properties.
     */
    persist() {
        let newCookie = `${this.name}=${this.value}; samesite=${this.sameSite}`;
        const cookieProps = new Map();

        if (this.daysAlive !== null) {
            cookieProps.set('max-age', this.daysAlive);
        }

        if (this.expirationDate !== null) {
            cookieProps.set('expires', this.expirationDate.toUTCString());
        }

        if (this.path !== null) {
            cookieProps.set('path', this.path);
        }

        if (this.domain !== null) {
            cookieProps.set('domain', this.domain);
        }

        if (this.secure === true) {
            newCookie += ';secure';
        }

        if (this.httpOnly === true) {
            newCookie += ';HttpOnly';
        }

        cookieProps.forEach((value, key) => newCookie += `;${key}=${value}`);

        document.cookie = newCookie;
    }

    /**
     * @internal Helper function for converting days into seconds
     */
    private getSecondsFromDays(days: number|null): number|null {
        return isNaN(days as number) ? null : Number(days) * 24 * 60 * 60;
    }
}

/**
 * Retrieve the cookie value from the browser.
 * This is not a Cuki instance. This is the primitive value as stored by the browser.
 */
export function getCookie(name: string): string|number|boolean|null {
    return document.cookie.split(';').filter((cookie) => cookie.trim().startsWith(`${name}=`))[0] ?? null;
}

/**
 * Deletes the cookie of the provided name, via setting the expiration date into the past
 */
export function deleteCookie(name: string): void {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);

    document.cookie = `${name}=; expires=${yesterday.toUTCString()}`;
}

export default {
    Cuki,
    getCookie,
    deleteCookie,
};
