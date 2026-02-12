console.log("Video 31");
//Arrow functions
// Truoc function phai co dau ;
// Sau arrow function khong can dau ;


//Traditional function
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3)); // Output: 5


//Arrow Function cơ bản (Implicit Return)
const sum1 = (a, b) => a + b;
console.log(sum1(2, 3)); // Output: 5

//Arrow function - 2 Vo danh

//Arrow Function với Block Body (Explicit Return)
const sum2 = (a, b) => {
    const result = 5 + 5;
    return result;
};

//Arrow function - 3 IIFE - Immediately Invoked Function Expression
(() => {
    console.log("Toi la Minh Lu");
})();