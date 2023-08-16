import DigitRule from './DigitRule';

/**
 * Rule to forbid digits.
 */
class NoDigitRule extends DigitRule {

    constructor(message?: string) {
        super(1, message);
    }

    validate(subject: string) {
        super.validate(subject);
        this.completed = !this.completed;
    }
}

export default NoDigitRule;