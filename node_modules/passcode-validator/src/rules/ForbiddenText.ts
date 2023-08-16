import Rule from './base/Rule';

/**
 * Rule to forbid some strings. For instance, the username.
 */
class ForbiddenText extends Rule {
    private readonly texts: string[];

    constructor(texts: string[], message?: string) {
        super(message);
        this.texts = texts;
    }

    validate(subject: string) {
        const subjectLowerCased = subject.toLowerCase();
        this.completed = this.texts.every(value => !subjectLowerCased.includes(value.toLowerCase()));
    }
}

export default ForbiddenText;