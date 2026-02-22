console.log("Video 40");

const diem = [8, 9, 7, 10, 6];
//read data
diem.forEach((element, index) => {
    console.log("diem[" + index + "] = " + element);
});

console.log("------------------------------");

// modify data
const diemSauKhiMap = diem.map((element, index) => {
    return element * 2;
});
console.log("diem sau khi map: " + diem);
console.log("diem sau khi map: " + diemSauKhiMap);

console.log("------------------------------");

const otherDiem = diem.map((element, index) => element * 3);
console.log("diem sau khi map: " + diem);
console.log("diem sau khi map: " + otherDiem);
