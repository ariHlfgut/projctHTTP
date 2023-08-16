import DigitRule from './rules/DigitRule';
import ForbiddenText from './rules/ForbiddenText';
import LengthRule from './rules/LengthRule';
import LowerCaseRule from './rules/LowerCaseRule';
import MaxRepeatedInRowRule from './rules/MaxRepeatedInRowRule';
import NoDigitRule from './rules/NoDigitRule';
import NoLowerCaseRule from './rules/NoLowerCaseRule';
import NoSpecialCharRule from './rules/NoSpecialCharRule';
import NoUpperCaseRule from './rules/NoUpperCaseRule';
import PINRule from './rules/PINRule';
import PasscodeValidator from './PasscodeValidator';
import SpecialCharRule from './rules/SpecialCharRule';
import UpperCaseRule from './rules/UpperCaseRule';

// Class that implements the builder pattern. I avoid to name it ValidatorBuilder to make it cleaner for consume.
export default class Validator {
    private readonly validator: PasscodeValidator;

    constructor() {
        this.validator = new PasscodeValidator();
    }

    upperCase = (message?: string): Validator => {
        this.validator.addRule(new UpperCaseRule(message));
        return this;
    };

    noUpperCase = (message?: string): Validator => {
        this.validator.addRule(new NoUpperCaseRule(message));
        return this;
    };

    lowerCase = (message?: string): Validator => {
        this.validator.addRule(new LowerCaseRule(message));
        return this;
    };

    noLowerCase = (message?: string): Validator => {
        this.validator.addRule(new NoLowerCaseRule(message));
        return this;
    };

    length = (min: number, max?: number, message?: string): Validator => {
        this.validator.addRule(new LengthRule(min, max, message));
        return this;
    };

    numeric = (message?: string): Validator => {
        this.validator.addRule(new PINRule(message));
        return this;
    };

    digit = (count = 1, message?: string): Validator => {
        this.validator.addRule(new DigitRule(count, message));
        return this;
    };

    noDigit = (message?: string): Validator => {
        this.validator.addRule(new NoDigitRule(message));
        return this;
    };

    specialChar = (message?: string): Validator => {
        this.validator.addRule(new SpecialCharRule(message));
        return this;
    };

    noSpecialChar = (message?: string): Validator => {
        this.validator.addRule(new NoSpecialCharRule(message));
        return this;
    };

    forbidden = (texts: string[], message?: string): Validator => {
        this.validator.addRule(new ForbiddenText(texts, message));
        return this;
    };

    maxRepeated = (count: number, ignoreCase = false, message?: string): Validator => {
        this.validator.addRule(new MaxRepeatedInRowRule(count, ignoreCase, message));
        return this;
    };

    build = (): PasscodeValidator => this.validator;
}