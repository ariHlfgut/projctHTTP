# Passcode Validator 🔐
 Validate passwords and numeric codes easily using Typescript or Javascript.

## Installation
For now, you can only install it using npm
>npm install passcode-validator

## How to use it
Create an instance from Validator class and set as many rules as you need to validate the password or PIN.

    const validator = new Validator()
                            .length(8,12)
                            .upperCase()
                            .lowerCase()
                            .specialChar()
                            .build();

To validate the password or PIN call validate. The function will return you an object with the **rules** and the **isValid** boolean which tells you if the password is valid.

    const { rules, isValid } = validator.validate('PassWord*');

To check what rules are completed or uncompleted call **isCompleted()** on every rule.

    const uncompletedRules = rules.map(rule => !rule.isCompleted());

## Available rules

| Rule                 | Description                                                                                   |
|----------------------|-----------------------------------------------------------------------------------------------|
| UpperCase            | Requires at least an uppercase character.                                                     |
| No UpperCase         | Forbids uppercase characters.                                                                 |
| LowerCase            | Requires at least a lowercase character.                                                      |
| No LowerCase         | Forbids lowercase characters.                                                                 |
| Length               | Requires a specific length or range.                                                          |
| PIN                  | Requires a PIN with only digits.                                                              |
| Digit                | Requires 1 or more digits.                                                                    |
| No Digit             | Forbids digits.                                                                               |
| Special Character    | Requires at least a special character.                                                        |
| No Special Character | Forbids special characters.                                                                   |
| Max Repeated in row  | Validates the maximum number of times any character can appear in the password consecutively. |
| Forbidden text       | Forbids a text or some texts to appear in the password or PIN.                                |

> 👁 **More rules will be added in the near future**. Open a ticket if you miss something in particular.

<br/><br/>

### Support my work with a coffee!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/agestaun)

