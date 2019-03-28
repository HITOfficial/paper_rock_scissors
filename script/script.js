var choice = 0;
var random = Math.floor(Math.random()*3+1);
var score1 = 0;
var score2 = 0;
var ten = 10;
var scoreFirst = document.getElementsByClassName("scoreOne");
var scoreSecond = document.getElementsByClassName("scoreTwo");
var next = document.getElementsByClassName("continue");
var reload = document.getElementsByClassName("refresh");
// var reload = document.getElemenentsByClassName("reset");
// var paper = document.getElementsByClassName("square");
// var rock = document.getElementsByClassName("square");
// var scissors = document.getElementsByClassName("square");
var square = document.getElementsByClassName("square");
var random2 = Math.round(Math.random()*3);
console.log(random);
var stop = 0;
next[0].addEventListener("click", function(){
    square[0].classList.remove("paper", "rock", "scissors",  "hover");
    square[1].classList.remove("paper", "rock", "scissors",  "hover");
    square[2].classList.remove("paper", "rock", "scissors",  "hover");
    square[0].classList.add("paper", "hover") ;
    square[1].classList.add("rock", "hover");
    square[2].classList.add("scissors", "hover");
    stop=0;
});
reload[0].addEventListener("click", function(){
    location.reload();
});
square[0].addEventListener("click", function(){
    choice= 1;
    if(choice == random && stop ===0 ){
        square[2].classList.remove("scissors", "hover");
        square[2].classList.add("paper");
        square[1].classList.remove("rock", "hover");
        square[0].classList.remove("hover");
        stop = 1;
        console.log(random);
        // alert("remis- komputer wybrał papier!");
    };
    if (choice == 1 && random == 3 && stop ===0){
        // alert("przegrałeś- komputer wybrał nożyczki!");
        square[1].classList.remove("rock", "hover");
        square[2].classList.remove("hover");
        square[0].classList.remove("hover");
        stop = 1;
        score2 +=1;
        console.log(random);
    };
    if ( choice == 1 && random ==2 && stop ===0){
        // alert("wygrałeś- komputer wybrał kamień!");
        square[0].classList.remove("hover");
        square[1].classList.remove("hover");
        square[2].classList.remove("scissors", "hover");
        stop = 1;
        score1 +=1;
        console.log(random);
    };
    scoreFirst[0].innerHTML = score1;
    scoreSecond[0].innerHTML = score2;
    random = Math.floor(Math.random()*3+1);  
    win();
});
square[1].addEventListener("click", function(){
    choice= 2;
    if(choice == random && stop ===0){
        // alert("remis- komputer wybrał kamień!");
        square[2].classList.remove("scissors", "hover");
        square[2].classList.add("rock");
        square[0].classList.remove("paper", "hover");
        square[1].classList.remove("hover");
        stop = 1;
        console.log(random);
    };
    if (choice == 2 && random == 3 && stop ===0){
        // alert("wygrałeś- komputer wybrał nożyczki!");
        square[0].classList.remove("paper", "hover");
        square[2].classList.remove("hover");
        square[1].classList.remove("hover");
        stop = 1;
        score1 +=1;
        console.log(random);
    };
    if ( choice == 2 && random ==1 && stop ===0){
        // alert("przegrałeś- komputer wybrał papier!");
        square[0].classList.remove("hover");
        square[2].classList.remove("scissors", "hover");
        square[1].classList.remove("hover");
        stop = 1;
        score2 +=1;
        console.log(random);
    }; 
    scoreFirst[0].innerHTML = score1;
    scoreSecond[0].innerHTML = score2;
    random = Math.floor(Math.random()*3+1); 
    win();
});
square[2].addEventListener("click", function(){
    choice = 3;
    if(choice == random && stop ===0){
        // alert("remis- komputer wybrał nożyczki!");
        square[2].classList.remove("hover");
        square[0].classList.remove("paper", "hover");
        square[0].classList.add("scissors");
        square[1].classList.remove("rock", "hover");
        stop = 1;
        console.log(random);
    };
    if (choice == 3 && random == 2 && stop ===0){
        // alert("przegrałeś komputer wybrał kamień!");
        square[1].classList.remove("hover");
        square[0].classList.remove("paper", "hover");
        square[2].classList.remove("hover");
        stop = 1;
        score2  +=1;
        console.log(random);
    };
    if ( choice == 3 && random ==1 && stop ===0){
        // alert("wygrałeś- komputer wybrał papier!");
        square[0].classList.remove("hover");
        square[1].classList.remove("rock", "hover");
        square[2].classList.remove("hover");
        stop = 1;
        score1 +=1;
        console.log(random);
    };
    scoreFirst[0].innerHTML = score1;
    scoreSecond[0].innerHTML = score2;
    random = Math.floor(Math.random()*3+1); 
    win();  
});
function win(){
    if (score1 === ten){
    alert("Gratulacje, wygrałeś!")
    location.reload();
};
if (score2 === ten){
    alert("Przykro mi, przegrałeś!")
    location.reload()};
};
// if(choice == random){
//     console.log("remis");
// };
// if (choice == 1 && random == 3){
//     alert("przegrałeś");
// };
// if ( choice == 1 && random ==2){
//     alert("wygrałeś");
// };
// p= 1 
// k = 2
// n = 3
// square[1].innerHTML = "<img src="../icon/paper.png">"
