import UpperCaseRule from './UpperCaseRule';

/**
 * Rule to forbid uppercase characters.
 */
class NoUpperCaseRule extends UpperCaseRule {

    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.validate(subject);
        this.completed = !this.completed;
    }
}

export default NoUpperCaseRule;