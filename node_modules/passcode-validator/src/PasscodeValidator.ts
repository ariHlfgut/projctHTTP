import Rule from './rules/base/Rule';

export default class PasscodeValidator {
    private rules: Set<Rule>;

    constructor() {
        this.rules = new Set<Rule>();
    }

    /**
     * Validates the subject against the rules. To check only if it's valid call {@link isValid}.
     * @param subject The password/PIN to validate.
     * @return An object with {@link rules} and the isValid boolean.
     */
    validate = (subject: string): { rules: Rule[], isValid: boolean } => {
        let isValid = true;
        this.rules.forEach((r) => {
            r.validate(subject);
            if (!r.isCompleted()) {
                isValid = false;
            }
        });
        return { rules: [...this.rules], isValid };
    };

    /**
     * Checks if the password/PIN meets all the rules. Make sure you validate the password first calling {@link validate}
     * @return True if it meets all the rules. Otherwise, false.
     */
    isValid = (): boolean => {
        return Array.from(this.rules).every((r) => r.isCompleted());
    };

    /**
     * Replaces the current rules.
     * To add a new rule call {@link addRule}
     * To remove an existing rule call {@link removeRule}
     * @param rules The new rules to set.
     */
    updateRules = (rules: Set<Rule>) => this.rules = rules;

    /**
     * Get the current rules.
     * @return The rules to validate the password/PIN.
     */
    getRules = (): Rule[] => [...this.rules];

    /**
     * Adds a new rule if it does not exist. Throws an error if the instance was already added.
     * To replace all the rules call {@link updateRules}
     * @param rule
     */
    addRule = (rule: Rule) => {
        Array.from(this.rules).forEach((r) => {
            const className = r.constructor.name;
            if (className === rule.constructor.name) {
                throw `You cannot set the same rule more than once '${className}'. Use updateRules to update all the rules.`;
            }
        });
        this.rules.add(rule);
    };

    /**
     * Removes an existing rule.
     * @param rule
     */
    removeRule = (rule: Rule) => this.rules.delete(rule);

    /**
     * Sets the completed field of all rules to undefined.
     */
    resetRules = () => this.rules.forEach((r) => r.reset());
}