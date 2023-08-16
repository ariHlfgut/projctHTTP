import Rule from './base/Rule';
import RuleError from '../errors/RuleError';

/**
 * Rule to require X digits. Where X is the count param from the constructor.
 */
class DigitRule extends Rule {
    private readonly digitRegex = /[^0-9]/g;
    private readonly digitsCount;

    constructor(count = 1, message?: string) {
        super(message);
        if (count < 1) throw RuleError.POSITIVE_VALUE_REQUIRED;
        this.digitsCount = count;
    }

    validate(subject: string) {
        this.completed = subject.replace(this.digitRegex, '').length >= this.digitsCount;
    }
}

export default DigitRule;