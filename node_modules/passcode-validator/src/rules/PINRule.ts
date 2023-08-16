import Rule from './base/Rule';

/**
 * Rule to allow only digits.
 */
class PINRule extends Rule {
    private readonly onlyDigitsPattern = /^\d+$/;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        this.completed = this.onlyDigitsPattern.test(subject);
    }
}

export default PINRule;