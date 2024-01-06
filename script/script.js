var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
let points = 0;
var score = document.getElementById("score");

// document.addEventListener('keydown', function(event){
//     if(event.code === 'Space'){
//         jump();
//     }
// });

function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
    counter++;
    points++;
    console.log(counter);
    score.innerHTML = points;
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft <= 20 && blockLeft > 0 && characterTop >= 130){
        block.style.animation = "none";
        alert(`Game Over. Your Final Score: "+ Math.floor(counter/100)`);
        points = 0;
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        score.innerHTML = points;
        // document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);