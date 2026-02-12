console.log("Lab 1 - Video 23");

// Bài tập 1:
 let fullName = "Ho Ly Minh Lu";
 let birthDay = 2004;
 let isStudent = true;

 // Tinh tuoi hien tai
  const toDay = new Date();
  const currentYear = toDay.getFullYear();

  console.log(currentYear, typeof currentYear);
  let age = currentYear - birthDay;

console.log(`Ten: ${fullName},
Tuoi: ${age},
Sinh vien: ${isStudent}`);