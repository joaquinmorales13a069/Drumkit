// GENERAL FUNCTION THAT PLAYS THE SPECIFIC SOUND DEPENDING ON THE SWITCH STATEMENT
function makeSound (key){
    switch (key) {
        case 'w':
            var audio1 = new Audio('./sounds/crash.mp3')
            audio1.play();
            break;
        case 'a':
            var audio2 = new Audio('./sounds/kick-bass.mp3')
            audio2.play();
            break;
        case 's':
            var audio3 = new Audio('./sounds/snare.mp3')
            audio3.play();
            break;
        case 'd':
            var audio4 = new Audio('./sounds/tom-1.mp3')
            audio4.play();
            break;
        case 'j':
            var audio5 = new Audio('./sounds/tom-2.mp3')
            audio5.play();
            break;
        case 'k':
            var audio6 = new Audio('./sounds/tom-3.mp3')
            audio6.play();
            break;
        case 'l':
            var audio7 = new Audio('./sounds/tom-4.mp3')
            audio7.play();
            break;   
        default:
            break;
    }
}
// BUTTON ANIMATION FUNCION
function buttonAnimation (currentKey){
    let activePressedKey = document.querySelector('.' + currentKey);
    activePressedKey.classList.add('pressed');

    setTimeout(function(){
        activePressedKey.classList.remove('pressed');
    }, 100)
}

// MAKE SOUND BY CLICKING ON THE IMAGE
for (let i = 0; i < document.querySelectorAll('button').length; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function(){

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
    
}
// MAKE SOUN BY CLICKING THE LETTER ON THE KEYBOARD
document.addEventListener('keydown', function(){
    makeSound(event.key);
    buttonAnimation(event.key);

});


