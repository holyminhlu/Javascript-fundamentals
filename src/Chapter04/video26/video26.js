console.log("Video 26");

// if - if_else - else_if

const age = 25;

if(age >= 18){   // true
    console.log("Bạn đã đủ 18 tuổi trở lên");
}else{
    console.log("Bạn chưa đủ 18 tuổi");
}

//score => A, B, C, D, F
//score Gioi - Trung Binh - Kha - Yeu - Kem

const score = 9.5;

if(score >= 9){
    console.log("Gioi");
}else if(score >= 7 && score < 9){
    console.log("Kha");
}else if(score >= 5 && score < 7){
    console.log("Trung Binh");
}else if(score >= 3 && score < 5){
    console.log("Yeu");
}else{
    console.log("Kem");
}
