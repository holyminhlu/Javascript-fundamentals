console.log("Video 27");

const score = 8;
switch (true) {   // thay vi switch(score) thi chuyen thanh switch(true)

    case (score >= 8 && score <= 10):  // true === 8
        console.log("Gioi");
        break;
    case (score >= 6 && score < 8):
        console.log("Kha");
        break;
    case (score >= 5 && score < 6):
        console.log("Trung Binh");
        break;
    case (score >= 4 && score < 5):
        console.log("Yeu");
        break;
    default:
        console.log("Khong dat");
        break;
}