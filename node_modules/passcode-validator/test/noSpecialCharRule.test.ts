import { describe, expect, test } from 'vitest';
import Validator from '../src';

describe('Special Character Rule', () => {

    test('should not be valid with a special character', () => {
        const validator = new Validator().noSpecialChar().build();
        const { isValid } = validator.validate('pass_word');
        expect(isValid).toBe(false);
    });

    test('should be valid with no special characters', () => {
        const validator = new Validator().noSpecialChar().build();
        const { isValid } = validator.validate('password');
        expect(isValid).toBe(true);
    });
});