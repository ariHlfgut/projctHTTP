import Validator from '../src';
import { describe, expect, test } from 'vitest';
import LengthRule from '../src/rules/LengthRule';
import LowerCaseRule from '../src/rules/LowerCaseRule';
import PINRule from '../src/rules/PINRule';
import UpperCaseRule from '../src/rules/UpperCaseRule';

describe('Password Validator', () => {

    test('isValid should return true if the password meets all the rules', () => {
        const validator = new Validator()
            .length(8,12)
            .upperCase()
            .lowerCase()
            .specialChar()
            .build();
        validator.validate('passW0rd2*');
        expect(validator.isValid()).toBe(true);
    });

    test('should reset all the rules setting the completed field to undefined', () => {
        const validator = new Validator()
            .numeric()
            .length(4)
            .build();

        const { rules } = validator.validate('14625');
        expect(rules[0].isCompleted()).toBe(true);
        expect(rules[1].isCompleted()).toBe(false);
        validator.resetRules();
        rules.forEach((r) => expect(r.isCompleted()).toBe(undefined));
    });

    test('should replace the rules by the new ones when calling updateRules', () => {
        const validator = new Validator()
            .upperCase()
            .lowerCase()
            .build();

        const rules = validator.getRules();
        expect(rules[0]).toBeInstanceOf(UpperCaseRule);
        expect(rules[1]).toBeInstanceOf(LowerCaseRule);

        const newRules = new Set([new LengthRule(6), new PINRule()]);
        validator.updateRules(newRules);
        const updatedRules = validator.getRules();
        expect(updatedRules[0]).toBeInstanceOf(LengthRule);
        expect(updatedRules[1]).toBeInstanceOf(PINRule);
    });

    test('should throw an error if adding the same rule more than once', () => {
        const validator = new Validator()
            .upperCase()
            .lowerCase()
            .length(6, 8)
            .build();

        expect(() => validator.addRule(new LengthRule(4, 6)))
            .toThrow();
    });

    test('should remove an existing rule', () => {
        const validator = new Validator()
            .upperCase()
            .lowerCase()
            .length(6, 8)
            .build();

        const rules = validator.getRules();
        expect(rules).toHaveLength(3);

        const rule = rules.pop();
        expect(rule).toBeInstanceOf(LengthRule);

        if (rule) {
            validator.removeRule(rule);
            expect(rules).toHaveLength(2);
        }

        const rulesWithoutLengthRule = validator.getRules();
        rulesWithoutLengthRule.forEach((r) => expect(r).not.toBeInstanceOf(LengthRule));
    });
});