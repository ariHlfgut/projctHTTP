import { describe, expect, test } from 'vitest';
import Validator from '../src';

describe('No Digit Rule', () => {

    test('should not be valid if it contains digits', () => {
       const validator = new Validator().noDigit().build();
       const { isValid } = validator.validate('password2');
       expect(isValid).toBe(false);
    });

    test('should be valid if it does not contain digits', () => {
        const validator = new Validator().noDigit().build();
        const { isValid } = validator.validate('password');
        expect(isValid).toBe(true);
    });

});