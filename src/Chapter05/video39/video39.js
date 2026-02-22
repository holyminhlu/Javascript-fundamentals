console.log("Video 39");

const myClass = ["Nam", "Hello", "World", "JavaScript"];
const [a, b, c, d] = myClass;

console.log(myClass, myClass.length);
console.log(a, b, c, d);

for (let i = 0; i < myClass.length; i++) {
    console.log("myClass[" + i + "] = " + myClass[i]);
}
console.log("================================");

// forEach
myClass.forEach(element => {
    console.log(element);
});
console.log("================================");

myClass.forEach(function(value, index) {
    console.log("myClass[" + index + "] = " + value);
});