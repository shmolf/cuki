import { getRandomString } from './Emojis';

export interface CookieOptions {
    name?: string,
    value?: string|number|boolean,
    expirationDate?: Date,
    daysAlive?: number,
    secure?: boolean,
    httpOnly?: boolean,
    domain?: string,
    path?: string,
    sameSite?: string,
}

export const SameSiteEnum = Object.freeze({
    'Lax': 'Lax',
    'None': 'None',
    'Strict': 'Strict',
});

export class Cookie {
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

    constructor(options: CookieOptions) {
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

    getSecondsFromDays(days: number|null): number|null {
        if (days === null) return null;

        return days * 24 * 60 * 60;
    }
}

export function getCookie(name: string): string|number|boolean|null {
    return document.cookie.split(';').filter((cookie) => cookie.trim().startsWith(`${name}=`))[0] ?? null;
}

export function deleteCookie(name: string): void {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 2);

    document.cookie = `${name}=; expires=${yesterday.toUTCString()}`;
}

// Src: http://rossscrivener.co.uk/blog/javascript-get-domain-exclude-subdomain
const domain = (function() {
    let i = 0;
    let domain = document.domain;
    const p = domain.split('.');
    const s = `_gd${(new Date()).getTime()}`;

    while(i < (p.length - 1) && document.cookie.indexOf(`${s}=${s}`) === -1) {
       domain = p.slice(-1 - (++i)).join('.');
       document.cookie = `${s}=${s};domain=${domain};`;
    }

    document.cookie = `${s}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=${domain};`;

    return domain;
})();
