console.log("Video 34");

const person = {
  name1: "John",
  age: 30,
  city: "New York",
};

//Get data
console.log("person before change:", person);//Get data
console.log(person.name1); // John
console.log(person["name1"]); 
//Set data
person.address = "Ha Noi"
console.log("person after change:", person);    
// { name: 'John', age: 30, city: 'New York', address: 'Ha Noi' }
//Delete data
delete person.age;
console.log("person after delete:", person);    
// { name: 'John', city: 'New York', address: 'Ha Noi' }