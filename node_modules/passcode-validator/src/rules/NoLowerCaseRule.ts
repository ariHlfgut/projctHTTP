import LowerCaseRule from './LowerCaseRule';

/**
 * Rule to forbid lowercase characters.
 */
class NoLowerCaseRule extends LowerCaseRule {

    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.validate(subject);
        this.completed = !this.completed;
    }
}

export default NoLowerCaseRule;