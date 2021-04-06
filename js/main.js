const averageAge = 78.3;
/*const inputAge = document.querySelector('#currentAge');

let age;*/

const input = document.querySelector('.currentAge');
const buttHead = document.querySelector('#buttHead');
const buttHead2 = document.querySelector('#buttHead2');
let age;
let candy = 0;
let fastFood = 0;
let exercise = 0;
let checkTotal = 0;
let deathAge = 0;


function alertAge(){
    age = Number(document.getElementById("currentAge").value);

    if(document.getElementById("candy").checked) {
        candy = -3;
    }else{
        candy = 0;
    }

    if(document.getElementById("fastFood").checked) {
        fastFood = -3;
    }else{
        fastFood = 0;
    }

    if(document.getElementById("exercise").checked) {
        exercise = 7;
    }else{
        exercise = 0;
    }

    checkTotal = candy + fastFood + exercise;
    deathAge = ((averageAge - age) + checkTotal + age);

    buttHead.textContent = "You have " + ((averageAge - age) + checkTotal) + " years left to live!";
    buttHead2.textContent = "You will die at the age of " + deathAge;

    //alert("You have " + ((averageAge - age) + candy + fastFood + exercise) + " years left to live!"); 
 } 
 