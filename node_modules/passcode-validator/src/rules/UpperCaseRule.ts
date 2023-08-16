import Rule from './base/Rule';

/**
 * Rule to require uppercase characters.
 */
class UpperCaseRule extends Rule {
    private readonly upperCaseRegex = /[A-Z]/;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        this.completed = this.upperCaseRegex.test(subject);
    }
}

export default UpperCaseRule;