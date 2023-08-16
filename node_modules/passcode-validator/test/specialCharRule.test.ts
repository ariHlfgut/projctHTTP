import { describe, expect, test } from 'vitest';
import Validator from '../src';

describe('Special Character Rule', () => {

    test('should not be valid with no special character', () => {
        const validator = new Validator().specialChar().build();
        const { isValid } = validator.validate('password');
        expect(isValid).toBe(false);
    });

    test('should be valid with a special character', () => {
        const validator = new Validator().specialChar().build();
        const { isValid } = validator.validate('pass*word');
        expect(isValid).toBe(true);
    });

    test('should return the message passed to the rule constructor', () => {
        const message = 'Must contain at least a special character';
        const validator = new Validator().specialChar(message).build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(message);
    });

    test('should return undefined message if no message passed to the constructor', () => {
        const validator = new Validator().specialChar().build();
        const rules = validator.getRules();
        expect(rules[0].getMessage()).toBe(undefined);
    });

});