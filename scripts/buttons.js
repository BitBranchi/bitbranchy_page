function playClickSound() {
    const audio = new Audio('assets/sounds/blip.mp3');
    audio.volume = 0.2;
    audio.play();
}

// 2. Select your button and add the click event listener
const btn = document.querySelectorAll('button');

for(i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', playClickSound);
}