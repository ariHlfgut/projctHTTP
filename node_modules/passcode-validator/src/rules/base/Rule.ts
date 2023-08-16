/**
 * Base rule. The rest of the rules must extend from this class.
 */
abstract class Rule {
    readonly name: string;
    private readonly message?: string;
    protected completed?: boolean;

    /**
     * @param message The message to display for the rule. For example "Must have a special character".
     */
    protected constructor(message?: string) {
        this.name = this.constructor.name;
        this.message = message;
    }

    /**
     * Validates the password/PIN against the rule.
     * @param subject The password/PIN
     */
    abstract validate(subject: string): void;

    /**
     * Returns the completed value.
     * true if the password/PIN meets the rule.
     * false if the password/PIN doesn't meet the rule
     * undefined if the rules was not validated yet, or if {@link reset} was called.
     */
    isCompleted = (): boolean | undefined => this.completed;

    /**
     * Sets the completed field to undefined. This is the same as if {@link validate} hadn't been called yet.
     */
    reset = () => this.completed = undefined;

    /**
     * Returns the message (if exists) passed in the constructor when creating the rule.
     */
    getMessage(): string | undefined | null {
        return this.message;
    }
}

export default Rule;
