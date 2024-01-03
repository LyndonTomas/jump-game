document.addEventListener('keydown', function(event){
    if(event.code === 'Space'){
        myFunction();
    }
});

function myFunction(){
    console.log("Spacebar pressed!");
};