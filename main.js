console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'

console.log(`
Задаине: 
Створіть змінні зі значеннями.`);

let myNum = 10;
console.log('let myNum = 10; => ',myNum, ` =>  ${typeof(myNum)}`)

let myStr = 'some string';
console.log('let myStr = "some string"; => ',myStr, ` =>  ${typeof(myStr)}`);

let myBool = true;
console.log('let myBool = true; => ',myBool, ` =>  ${typeof(myBool)}`);

let myArr = [1, 2, 3, 4, 5];
console.log('let myArr = [1, 2, 3, 4, 5]; => ',myArr, ` =>  ${typeof(myArr)}`);

let myObj = {
    first: 'First name',
    last: 'Last name'
};
console.log(`let myObj = {
    first: "First name",
    last: "Last name"
}; 
=> `,myObj, ` =>  ${typeof(myObj)}`);




/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

console.log(`
Задаине: 
Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
Результат збережіть у змінній decimal2.`);

myNum = 10.234567;
decimal2 = myNum.toFixed(2);
console.log(`myNum = 10.234567;
decimal2 = myNum.toFixed(2);`);
console.log('myNum.toFixed(2); => ',decimal2, ` =>  ${typeof(decimal2)}`);
console.log('+decimal2 => ', +decimal2, ` =>  ${typeof(+decimal2)}`);

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

console.log(`
Задаине: 
Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
Потім збільште його на 1 та запищіть в цю ж саму змінну.`);

let myBigInt = 123n;
myBigInt +=1n;
console.log(`let myBigInt = 123n;
myBigInt +=1n; => `,myBigInt, ` =>  ${typeof(myBigInt)}`);
