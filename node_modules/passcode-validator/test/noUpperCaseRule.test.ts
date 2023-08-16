import { describe, expect, test } from 'vitest';
import Validator from '../src';

describe('No Uppercase Rule', () => {

    test('should not be valid if it contains uppercase characters', () => {
       const validator = new Validator().noUpperCase().build();
       const { isValid } = validator.validate('passWord');
       expect(isValid).toBe(false);
    });

    test('should be valid if it does not contain uppercase characters', () => {
        const validator = new Validator().noUpperCase().build();
        const { isValid } = validator.validate('password');
        expect(isValid).toBe(true);
    });

});