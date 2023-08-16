import SpecialCharRule from './SpecialCharRule';

/**
 * Rule to forbid special characters.
 */
class NoSpecialCharRule extends SpecialCharRule {

    constructor(message?: string) {
        super(message);
    }

    validate(subject: string) {
        super.validate(subject);
        this.completed = !this.completed;
    }
}

export default NoSpecialCharRule;