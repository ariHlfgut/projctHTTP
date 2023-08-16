import { describe, expect, it } from 'vitest';
import Validator from '../src';

describe('Forbidden text rule', () => {

    const username = 'age';
    const surname = 'garcia';
    const validator = new Validator().forbidden([username, surname]).build();

    it('should not be valid if it contains a forbidden string at the beginning', () => {
        const { isValid } = validator.validate('age12345');
        expect(isValid).toBe(false);
    });

    it('should not be valid if it contains a forbidden string in the middle', () => {
        const { isValid } = validator.validate('123garcia45');
        expect(isValid).toBe(false);
    });

    it('should not be valid if it contains a forbidden string at the end', () => {
        const { isValid } = validator.validate('12345age');
        expect(isValid).toBe(false);
    });

    it('should not be valid if it contains a forbidden string upper cased', () => {
        const { isValid } = validator.validate('Garcia12');
        expect(isValid).toBe(false);
    });

    it('should not be valid if it contains all the forbidden strings', () => {
        const { isValid } = validator.validate('age123garcia45');
        expect(isValid).toBe(false);
    });

    it('should be valid if it does not contain a forbidden string', () => {
        const { isValid } = validator.validate('ae12345');
        expect(isValid).toBe(true);
    });

});