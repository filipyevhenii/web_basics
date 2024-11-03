var varObject = { key: "value" };
var varArray = [1, 2, 3];
var varString = "123";
var varNumber = 123;
var varFunction = function() {
  console.log("Hello World!");
};

console.log("Тип varObject:", typeof varObject);
console.log("Тип varArray:", typeof varArray);
console.log("Тип varString:", typeof varString);
console.log("Тип varNumber:", typeof varNumber);
console.log("Тип varFunction:", typeof varFunction);

varString = Number(varString);
varNumber = String(varNumber);

console.log("Значення varString:", varString, "Тип:", typeof varString);
console.log("Значення varNumber:", varNumber, "Тип:", typeof varNumber);

console.log("Порівняння (==):", varString == varNumber);
console.log("Порівняння (===):", varString === varNumber);

function encrypt(number) {
  return number + 10;
}

function decrypt(encryptedNumber) {
  return encryptedNumber - 10;
}

var originalNumber = 1;
var encryptedNumber = encrypt(originalNumber);
var decryptedNumber = decrypt(encryptedNumber);

console.log("Оригінальне число:", originalNumber);
console.log("Зашифроване число:", encryptedNumber);
console.log("Дешифроване число:", decryptedNumber);
