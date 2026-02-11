console.log("video 20")

const a =5, b=10, c=15;
const d = a*b+c;

console.log(a+b);
console.log(b/a);
console.log(c-b);
console.log(c*a);
console.log(c%b);
console.log(a**2);
// console.log(b++);
// console.log(--c);

let x =10;
let y = x++; // or x--
let z = ++x;  // or --x

console.log(" x = ", y);
console.log(" y = ", z);

// Toan tu so sanh

const p = 5, q="5";
console.log(p==q);  // true
console.log(p===q); // false

//Toan tu logic
const isSuccess = true;
const isCompleted = false;
console.log(isSuccess && isCompleted); // false
console.log(isSuccess || isCompleted); // true
console.log(!isSuccess); // false

// Toan tu dieu kien
const number = 5;
const result = number > 0 ? "So duong" : "So am";
console.log(result);   // So duong

// Toan tu chuoi
const firstName = "Nguyen";
const lastName = "Van A";
console.log(firstName + " " + lastName); // Nguyen Van A    
console.log(`Toi la ${firstName} ${lastName}`); // Toi la Nguyen Van A

// Toan tu gan
let age = 20;
age += 5; // age = age + 5
console.log(age);
age -= 3; // age = age - 3
console.log(age);
age *= 2; // age = age * 2
console.log(age);
age /= 4; // age = age / 4
console.log(age);
age %= 3; // age = age % 3
console.log(age);   
age **= 2; // age = age ** 2
console.log(age);
