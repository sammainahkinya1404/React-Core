const gradeFunction=(a,b,c,d,e,f)=>{
let sum=a+b+c+d+e+f;
let avg=sum/6;

// Printing the Results
console.log("Your Marks is:",sum);
console.log("Your Mean Score is",avg);

// Defining Grade Boundaries To Redduce  Repetition of Code
const D_GRADE_BOUNDARY = 40;
const C_GRADE_BOUNDARY = 50;
const B_GRADE_BOUNDARY = 60;
const A_GRADE_BOUNDARY = 70;

if(avg>=D_GRADE_BOUNDARY){
   console.log("Your Grade is D")}
else if(avg>=C_GRADE_BOUNDARY){
    console.log("Your Grade is C")}
else if(avg>=B_GRADE_BOUNDARY){
    console.log("Your Grade is B")}
else if(avg>=A_GRADE_BOUNDARY){
    console.log("Your Grade is A")}
else{
    console.log("Your Grade is E")}}
//calling  Main()
gradeFunction(60,60,60,60,60,60);