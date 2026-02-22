console.log("Video 32");

const sum = (a,b,c) => {
    console.log("Run before");
    if(typeof a !== 'number'){
        console.log("Run empty return");
        return ;
    }
    console.log("Run after");
    return a + b + c;
    console.log("Run after");
}

console.log(sum("hoidanit",2,3));