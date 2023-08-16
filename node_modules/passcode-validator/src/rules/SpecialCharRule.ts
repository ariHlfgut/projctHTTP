import Rule from './base/Rule';

/**
 * Rule to require a special character.
 */
class SpecialCharRule extends Rule {
    private readonly specialCharRegex = new RegExp(/[^A-Za-z0-9]/g);

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        this.completed = this.specialCharRegex.test(subject);
    }
}

export default SpecialCharRule;