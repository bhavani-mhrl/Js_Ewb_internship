console.log("--  Multiplication Table of 5 --");
for(let i=1;i<=5;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

let i=1;
let num=0;
while(i){
    if(i>10 && i%6==0){
        num=i;
        break;
    }
    i++;
}

console.log("-- First number > 10 divisible by 6 --\n","Found :",num)

let j=1;
do {
    continue;
    console.log(j);
} while (j<0);