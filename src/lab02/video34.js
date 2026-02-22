console.log("Video 34");

const tinhTrungBinh = (a,b,c) => {
    let diemTrungBinh = (a + b + c) / 3;
    console.log("Diem trung binh: " + diemTrungBinh);
    return diemTrungBinh;
}

const xepLoai = (diemTrungBinh) => {
    if(diemTrungBinh >= 9){
        console.log("Xep loai: Xuat sac");
    }else if(diemTrungBinh >= 8 && diemTrungBinh < 9){
        console.log("Xep loai: Gioi");
    }else if(diemTrungBinh >= 6.5 && diemTrungBinh < 8){
        console.log("Xep loai: Kha");
    }else{
        console.log("Xep loai: Trung binh");
    }
}

const diemTrungBinh = tinhTrungBinh(8, 7, 9);
xepLoai(diemTrungBinh);