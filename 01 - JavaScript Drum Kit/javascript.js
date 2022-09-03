const keys = document.querySelectorAll('.key');
const music = document.querySelector('audio');

Array.from(keys).forEach(item => item.addEventListener('click', playMusic)); 
keys.forEach(key => key.addEventListener('transitionend', removeClass))
window.addEventListener('keydown', playMusic); 

let pressedKey;
let pressedKeyCode; 

function playMusic(e) {
    console.log(e)
    if (e.pointerId) {
        console.log("I CLICKY")
        pressedKey = this; 
        pressedKeyCode = this.getAttribute('data-key'); 
    }
    else if (e.key) {
        console.log("I pressed the keyboard");
        pressedKeyCode = e.keyCode; 
        pressedKey = document.querySelector(`.key[data-key="${pressedKeyCode}"]`)
    }
    const audio = document.querySelector(`audio[data-key="${pressedKeyCode}"]`);
    if (!audio) return; // stops the function from running altogether
    audio.currentTime = 0; 
    audio.play(); 
    pressedKey.classList.add('playing');
}

function removeClass(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}