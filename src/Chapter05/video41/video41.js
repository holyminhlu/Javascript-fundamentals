console.log("Video 41");

const ages = [12, 17, 8, 21, 14, 11];

const agesx2 = ages.map((item, index) => {
    return item * 2;    
})
console.log(ages);
console.log(agesx2);

console.log("------------------");

const agesx18 = ages.filter((item, index) => {
    return item >= 18;    
})
console.log(ages);
console.log(agesx18);