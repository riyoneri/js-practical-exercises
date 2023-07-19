const validatePhoneNumber = (number) => /^([\d]{3})(-| )?([\d]{3})(-| )?[\d]{4}$/.test(number);

console.log(validatePhoneNumber("1234567890"));
console.log(validatePhoneNumber("123-456-7890"));
console.log(validatePhoneNumber("123 456 7890"));
console.log(validatePhoneNumber("123-45-67890"));
console.log(validatePhoneNumber("1234-567890"));