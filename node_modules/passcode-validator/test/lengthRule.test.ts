import { describe, expect, test } from 'vitest';
import RuleError from '../src/errors/RuleError';
import LengthRule from '../src/rules/LengthRule';
import Validator from '../src/Validator';

describe('Length Rule', () => {

    test('should not be valid if it does not meet the required length', () => {
        const validator = new Validator().length(6).build();
        const { isValid } = validator.validate('mypassword');
        expect(isValid).toBe(false);
    });

    test('should be valid if it meets the required length', () => {
        const validator = new Validator().length(6).build();
        const { isValid } = validator.validate('mypass');
        expect(isValid).toBe(true);
    });

    test('should not be valid if it does not meet the range length', () => {
        const validator = new Validator().length(6, 8).build();
        const firstValidation = validator.validate('mypwd');
        const secondValidation = validator.validate('mypassword');
        expect(firstValidation.isValid || secondValidation.isValid).toBe(false);
    });

    test('should be valid if it meets the range length', () => {
        const validator = new Validator().length(6, 8).build();
        const { isValid } = validator.validate('mypass');
        expect(isValid).toBe(true);
    });

    test('should return the message passed to the rule constructor', () => {
        const message = 'Must contain at least an uppercase character';
        const validator = new Validator().length(6, 6, message).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(message);
    });

    test('should return undefined message if no message passed to the constructor', () => {
        const validator = new Validator().length(6).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(undefined);
    });

    test('should create the instance if minLength and maxLength have the same value', () => {
        expect(new LengthRule(6, 6)).toBeTruthy();
    });

    test('should throw an error if minLength is negative', () => {
        expect(() => new LengthRule(-6))
            .toThrow(RuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if minLength is 0', () => {
        expect(() => new LengthRule(0))
            .toThrow(RuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if maxLength is 0', () => {
        expect(() => new LengthRule(6, 0))
            .toThrow(RuleError.POSITIVE_VALUE_REQUIRED);
    });

    test('should throw an error if maxLength is smaller than minLength', () => {
        expect(() => new LengthRule(6, 5))
            .toThrow(RuleError.MAX_LENGTH_GREATER);
    });
});