/*
let startScore = 0;

document.addEventListener('keydown', function(event){
    if(event.code === 'Space'){
        jump();
        // myFunction();
    }
});

// function myFunction(){
//     console.log("Spacebar pressed!");
// };

let character = document.getElementById("character");
let block = document.getElementById("block");

function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        
        if(character.classList != "animate"){
            character.classList.add("animate");
        }

        character.classList.remove("animate");
    }, 500);

    startScore++;
    console.log(startScore);
    
}

let checkDead = setTimeout(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130 ){
        block.style.animation = "none";
        block.style.display = "none";
        alert(`Game Over! Your score is ${startScore}`);
    }
}, 10);
*/

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

document.addEventListener('keydown', function(event){
    if(event.code === 'Space'){
        jump();
    }
});

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
    counter++;
    console.log(counter);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft <= 20 && blockLeft > 0 && characterTop >=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);