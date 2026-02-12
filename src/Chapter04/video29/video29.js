console.log("Video 29");


//break
for (let i = 1; i < 10; i++) {
  console.log(`Gia tri i = ${i}`);
  if (i === 5) {
    console.log("Dung vong lap tai day!");
    break;
  }
}

//continue
for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue;  // bo qua lan lap gia tri i = 5
  }
    console.log("Gia tri i = " + i);
}

