const averageAge = 78.3;
let age;
let livesLeft;

const input = document.querySelector('.currentAge');
const buttHead = document.querySelector('#buttHead');
const buttHead2 = document.querySelector('#buttHead2');

//good and bad habits
let fastFood = 0;
let candy = 0;
let iceCream = 0;
let smoke = 0;
let coc = 0;
let alcohol = 0;
let soda = 0;
let eatAll = 0;
let veggies = 0;
let getSun = 0;
let noSugar = 0;
let superFood = 0;
let exercise = 0;
let weightLift = 0;
let overweight = 0;

//Totals
let checkTotal = 0;
let deathAge = 0;


function alertAge(){
    age = Number(document.getElementById("currentAge").value);

    //******Bad Habbits */

    if(document.getElementById("fastFood").checked) {
        fastFood = -7;
    }else{
        fastFood = 0;
    }

    if(document.getElementById("candy").checked) {
        candy = -3.5;
    }else{
        candy = 0;
    }

    if(document.getElementById("iceCream").checked) {
        iceCream = -3.5;
    }else{
        iceCream = 0;
    }

    if(document.getElementById("smoke").checked) {
        smoke = -12.5;
    }else{
        smoke = 0;
    }

    if(document.getElementById("coc").checked) {
        coc = -20;
    }else{
        coc = 0;
    }

    if(document.getElementById("alcohol").checked) {
        alcohol = -2;
    }else{
        alcohol = 0;
    }

    if(document.getElementById("soda").checked) {
        soda = -1.7;
    }else{
        soda = 0;
    }

    if(document.getElementById("eatAll").checked) {
        eatAll = -6;
    }else{
        eatAll = 0;
    }

    //******Good Habbits */

    if(document.getElementById("veggies").checked) {
        veggies = 2;
    }else{
        veggies = 0;
    }

    if(document.getElementById("getSun").checked) {
        getSun = 2;
    }else{
        getSun = 0;
    }

    if(document.getElementById("noSugar").checked) {
        noSugar = 3.2;
    }else{
        noSugar = 0;
    }

    if(document.getElementById("weightLift").checked) {
        weightLift = 6;
    }else{
        weightLift = 0;
    }

    if(document.getElementById("superFood").checked) {
        superFood = 4;
    }else{
        superFood = 0;
    }

    //******fitness Habbits */

    if(document.getElementById("exercise").checked) {
        exercise = 3.2;
    }else{
        exercise = 0;
    }

    if(document.getElementById("weightLift").checked) {
        weightLift = 6;
    }else{
        weightLift = 0;
    }

    if(document.getElementById("overweight").checked) {
        overweight = -6;
    }else{
        overweight = 0;
    }



    checkTotal = fastFood + candy + iceCream + smoke + coc + alcohol + soda + eatAll + veggies + getSun + noSugar+ superFood + exercise + weightLift + overweight;
    deathAge = Math.round(((averageAge - age) + checkTotal + age) * 100) / 100;
    livesLeft = Math.round(((averageAge - age) + checkTotal) * 100) / 100;

    buttHead.textContent = "You have " + livesLeft + " years left to live!";
    buttHead2.textContent = "You will die at the age of " + deathAge;
 } 
 