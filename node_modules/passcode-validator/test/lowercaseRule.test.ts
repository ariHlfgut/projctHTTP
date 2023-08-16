import { describe, expect, test } from 'vitest';
import Validator from '../src/Validator';

describe('Lowercase Rule', () => {

    const validator = new Validator().lowerCase().build();

    test('should not be valid with no lowercase characters', () => {
        const { isValid } = validator.validate('MYPASSWORD');
        expect(isValid).toBe(false);
    });

    test('should be valid with lowercase characters', () => {
        const { isValid } = validator.validate('myPASSWORD');
        expect(isValid).toBe(true);
    });

    test('should return the message passed to the rule constructor', () => {
        const message = 'Must contain at least a lowercase character';
        const validator = new Validator().lowerCase(message).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(message);
    });

    test('should return undefined message if no message passed to the constructor', () => {
        const validator = new Validator().lowerCase().build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(undefined);
    });
});