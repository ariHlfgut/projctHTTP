import { describe, expect, it } from 'vitest';
import Validator from '../src';

describe('Maximum characters repeated in row', () => {

    it('should not be valid if it has the same 3 characters in row', () => {
        const validator = new Validator().maxRepeated(2).build();
        const { isValid } = validator.validate('passs32*');
        expect(isValid).toBe(false);
    });

    it('should be valid if it only has the same 2 characters in row', () => {
        const validator = new Validator().maxRepeated(2).build();
        const { isValid } = validator.validate('pass32*');
        expect(isValid).toBe(true);
    });

    it('should not be valid if it has the same 3 characters in row combining lower and upper case when the rule does not ignore the case differences.', () => {
        const validator = new Validator().maxRepeated(2, false).build();
        const { isValid } = validator.validate('pasSs32*');
        expect(isValid).toBe(false);
    });

    it('should be valid if it has the same 3 characters in row combining lower and upper case and the rule ignores the case differences.', () => {
        const validator = new Validator().maxRepeated(2, true).build();
        const { isValid } = validator.validate('pasSs32*');
        expect(isValid).toBe(true);
    });

});