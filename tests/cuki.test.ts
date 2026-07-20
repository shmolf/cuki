import { beforeEach, describe, expect, it } from 'vitest';
import { Cuki, getCookie, deleteCookie, SameSiteEnum } from '../src/cuki';

function clearAllCookies(): void {
    document.cookie.split(';').forEach((pair) => {
        const name = pair.split('=')[0].trim();

        if (name !== '') {
            document.cookie = `${name}=; max-age=0`;
        }
    });
}

beforeEach(() => clearAllCookies());

describe('Cuki', () => {
    it('persists a cookie that can be read back', () => {
        new Cuki({ name: 'monster', value: 'crumbs' }).persist();

        expect(getCookie('monster')).toBe('crumbs');
    });

    it('does not expire immediately when daysAlive is omitted', () => {
        new Cuki({ name: 'session-cookie', value: 'alive' }).persist();

        // Before the fix, an omitted daysAlive produced `max-age=0`,
        // which deleted the cookie the moment it was written.
        expect(getCookie('session-cookie')).toBe('alive');
    });

    it('persists a cookie with only an expirationDate', () => {
        const nextYear = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);

        new Cuki({ name: 'dated', value: 'future', expirationDate: nextYear }).persist();

        expect(getCookie('dated')).toBe('future');
    });

    it('converts daysAlive into a max-age in seconds', () => {
        const cuki = new Cuki({ name: 'aged', value: 'x', daysAlive: 2 });

        expect(cuki.daysAlive).toBe(2 * 24 * 60 * 60);

        cuki.persist();
        expect(getCookie('aged')).toBe('x');
    });

    it('leaves max-age unset for a non-numeric daysAlive', () => {
        const cuki = new Cuki({ name: 'nan', value: 'x', daysAlive: NaN });

        expect(cuki.daysAlive).toBeNull();
    });

    it('stringifies number and boolean values', () => {
        new Cuki({ name: 'num', value: 42 }).persist();
        new Cuki({ name: 'bool', value: true }).persist();

        expect(getCookie('num')).toBe('42');
        expect(getCookie('bool')).toBe('true');
    });

    it('defaults to an empty value', () => {
        new Cuki({ name: 'empty' }).persist();

        expect(getCookie('empty')).toBe('');
    });

    it('generates a random name when none is provided', () => {
        const cuki = new Cuki({ value: 'anon' });

        expect(cuki.name.length).toBeGreaterThan(0);

        cuki.persist();
        expect(getCookie(cuki.name)).toBe('anon');
    });

    it('encodes values containing cookie-delimiter characters', () => {
        const trickyValue = 'a=b; c=d, 100%';

        new Cuki({ name: 'tricky', value: trickyValue }).persist();

        expect(getCookie('tricky')).toBe(trickyValue);
    });

    it('encodes names containing non-token characters', () => {
        new Cuki({ name: 'emoji 🍪 name', value: 'sweet' }).persist();

        expect(getCookie('emoji 🍪 name')).toBe('sweet');
    });

    it('defaults sameSite to Lax and falls back on invalid values', () => {
        expect(new Cuki({ name: 'a' }).sameSite).toBe(SameSiteEnum.Lax);
        expect(new Cuki({ name: 'b', sameSite: 'bogus' }).sameSite).toBe(SameSiteEnum.Lax);
        expect(new Cuki({ name: 'c', sameSite: 'Strict' }).sameSite).toBe(SameSiteEnum.Strict);
    });

    it('forces secure when sameSite is None', () => {
        const cuki = new Cuki({ name: 'n', sameSite: 'None', secure: false });

        expect(cuki.secure).toBe(true);
    });
});

describe('getCookie', () => {
    it('returns only the value, not the raw name=value pair', () => {
        document.cookie = 'first=1';
        document.cookie = 'second=2';

        // Before the fix, this returned the whole pair (with leading whitespace),
        // e.g. ' second=2', instead of the value.
        expect(getCookie('second')).toBe('2');
    });

    it('returns null for a cookie that does not exist', () => {
        expect(getCookie('ghost')).toBeNull();
    });

    it('does not match cookies whose name merely starts with the query', () => {
        document.cookie = 'username=alice';

        expect(getCookie('user')).toBeNull();
    });
});

describe('deleteCookie', () => {
    it('removes a persisted cookie', () => {
        new Cuki({ name: 'doomed', value: 'bye' }).persist();
        expect(getCookie('doomed')).toBe('bye');

        deleteCookie('doomed');
        expect(getCookie('doomed')).toBeNull();
    });

    it('removes a cookie with an encoded name', () => {
        new Cuki({ name: 'emoji 🍪', value: 'bye' }).persist();
        expect(getCookie('emoji 🍪')).toBe('bye');

        deleteCookie('emoji 🍪');
        expect(getCookie('emoji 🍪')).toBeNull();
    });
});
