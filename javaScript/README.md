# Password Validation Function

This is a JavaScript function that checks the strength of a password and ensures that it meets certain requirements. The function takes a word as an argument and performs the following checks:

1. Checks if the word contains at least one number.
2. Checks if the word contains at least one uppercase letter.
3. Checks if the word contains at least one lowercase letter.
4. Checks if the word length is at least 8 characters.

If any of these checks fail, an error message is printed to the console indicating what the user needs to fix.

## Usage

To use this function, simply call it with the word to be validated as an argument, like so:

```javascript
Validate("helloS1311")
```
### Second Method
In addition to the function provided, a regular expression can also be used to validate passwords. The following regular expression ensures that a password contains at least one uppercase letter, one lowercase letter, one number, and is at least 8 characters long:
```javascript
let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[0-9]).+$");
```
To test a password against this regular expression, call the test method of the pattern object, like so:
```javascript
pattern.test(yourWord) // returns a boolean value 
```
This function can be used to improve the security of your applications by enforcing strong password policies. You can customize the checks performed by the function to suit your specific needs.
