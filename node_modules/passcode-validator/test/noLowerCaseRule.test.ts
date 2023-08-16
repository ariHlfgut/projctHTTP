import { describe, expect, test } from 'vitest';
import Validator from '../src';

describe('No Lowercase Rule', () => {

    test('should not be valid if it contains lowercase characters', () => {
       const validator = new Validator().noLowerCase().build();
       const { isValid } = validator.validate('PASSwORD');
       expect(isValid).toBe(false);
    });

    test('should be valid if it does not contain lowercase characters', () => {
        const validator = new Validator().noLowerCase().build();
        const { isValid } = validator.validate('PASSWORD');
        expect(isValid).toBe(true);
    });

});