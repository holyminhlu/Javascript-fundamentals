console.log("Video 38");

const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(names[0]); // Alice
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]); // Eve
console.log(names[5]); // undefined

// Thay the gia tri khac

names[0] = "Alex";
console.log(names[0]); // Alex

// Them gia tri moi vao cuoi mang
names.push("Frank", 123);
console.log(names); // ["Alex", "Bob", "Charlie", "David", "Eve", "Frank"]

// Xoa gia tri cuoi cung
names.pop();
console.log(names); // ["Alex", "Bob", "Charlie", "David", "Eve"]

// Them gia tri moi vao dau mang
names.unshift("Grace", null);
console.log(names); // ["Grace", "Alex", "Bob", "Charlie", "David", "Eve"]

// Xoa gia tri dau tien
names.shift();
console.log(names); // ["Alex", "Bob", "Charlie", "David", "Eve"]
