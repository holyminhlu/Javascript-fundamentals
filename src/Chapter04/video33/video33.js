console.log("Video 33");

let globalVar = "Toi la bien toan cuc";
function show(){
    console.log(globalVar); // Truy cap duoc bien toan cuc trong ham
}
show(); // Toi la bien toan cuc
console.log(globalVar); // Truy cap duoc bien toan cuc

//-----------------------------------------------------------------------

function show2(){
    let localVar = "Toi la bien cuc bo";
    console.log(localVar); // Truy cap duoc bien cuc bo trong ham
}
show2(); // Toi la bien cuc bo
// console.log(localVar); // Loi: localVar is not defined, khong truy cap duoc bien cuc bo ben ngoai ham

//-----------------------------------------------------------------------
function show3(){
    if(true){
        let x = 10;
        const y =20;
        console.log(x); // Truy cap duoc bien x trong ham
        console.log(y); // Truy cap duoc bien y trong ham
    }
}
