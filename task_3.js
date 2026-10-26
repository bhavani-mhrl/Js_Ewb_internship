let score=Number(prompt("Enter your test score."));
var grade="";

if(score<0){
    console.log("Enter only test score!");
}
else{
    console.log("Score:",score);
    switch (true) {
        case (score>=90):
            console.log("Grade: A");
            break;
        case (score>=80):
            console.log("Grade: B");
            break;
        case (score>=70):
            console.log("Grade: C");
            break;
        default:
            console.log("Grade: D")
            break;
    }
    
    score>=70?console.log("Status: Passed"):console.log("Status: Failed");
}