import { describe, expect, test } from 'vitest';
import Validator from '../src/Validator';

describe('PIN Rule', () => {

    const validator = new Validator().numeric().build();

    test('should not be valid if it contains non-numeric characters', () => {
        const { isValid } = validator.validate('Pass4537');
        expect(isValid).toBe(false);
    });

    test('should be valid if it only contains numeric characters', () => {
        const { isValid }  = validator.validate('4537');
        expect(isValid).toBe(true);
    });

    test('should return the message passed to the rule constructor', () => {
        const message = 'Must contain only digits';
        const validator = new Validator().numeric(message).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(message);
    });

    test('should return undefined message if no message passed to the constructor', () => {
        const validator = new Validator().numeric().build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(undefined);
    });
});