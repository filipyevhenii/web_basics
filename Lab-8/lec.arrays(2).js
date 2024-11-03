function addLongNumbers(num1, num2) {
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    let carry = 0;
    let result = '';

    for (let i = maxLength - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    if (carry) result = carry + result;

    return result;
}

const num1 = "123456789123456789";
const num2 = "987654321987654321";
console.log(addLongNumbers(num1, num2));
