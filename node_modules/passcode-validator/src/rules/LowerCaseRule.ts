import Rule from './base/Rule';

/**
 * Rule to require lowercase characters.
 */
class LowerCaseRule extends Rule {
    private readonly lowerCaseRegex = /[a-z]/;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        this.completed = this.lowerCaseRegex.test(subject);
    }
}

export default LowerCaseRule;