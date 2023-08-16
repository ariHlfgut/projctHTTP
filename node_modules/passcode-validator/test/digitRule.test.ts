import { describe, expect, test } from 'vitest';
import DigitRule from '../src/rules/DigitRule';
import RuleError from '../src/errors/RuleError';
import Validator from '../src/Validator';

describe('Digit Rule',  () => {

    test('should not be valid if 1 digit is required and password does not have it', () => {
       const validator = new Validator().digit().build();
       const { isValid } = validator.validate('myPassWord');
       expect(isValid).toBe(false);
    });

    test('should be valid if 1 digit is required and password has it', () => {
        const validator = new Validator().digit().build();
        const { isValid } = validator.validate('myPassWord1');
        expect(isValid).toBe(true);
    });

    test('should be valid if 2 digits are required and password has more than 2', () => {
        const validator = new Validator().digit(2).build();
        const { isValid } = validator.validate('myPassWord123');
        expect(isValid).toBe(true);
    });

    test('should throw an error if count is 0', () => {
        expect(() => new DigitRule(0))
            .toThrow(RuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if count is negative', () => {
        expect(() => new DigitRule(-1))
            .toThrow(RuleError.POSITIVE_VALUE_REQUIRED);
    });

});