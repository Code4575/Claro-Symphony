//detecting button press
let drumnote = document.querySelectorAll('.type');

for(let i = 0; i < drumnote.length; i++){
  document.querySelectorAll('.type')[i].addEventListener('click',function (){
    var string = this.innerHTML;
    makeSound(string);
  });
}

// Detecting Keyboard Events
document.addEventListener('keypress', function (event) {
  let eventKey = event.key;

  // To accept Small & Capital Letters
  let keyPressed = eventKey.toLowerCase();

  // Adding Animation on keypress
  let activeBTN = document.querySelector(`.${keyPressed}`);
  console.log(activeBTN);
  activeBTN.classList.add('active');

  setTimeout(() => {
    activeBTN.classList.remove('active');
  }, 300);

  makeSound(keyPressed);
});


function makeSound(key) {
  switch (key) {
    case 'w':
      let tom1 = new Audio('tom.mp3');
      tom1.play();
      break;

    case 'a':
      let tom2 = new Audio('ride.mp3');
      tom2.play();
      break;

    case 's':
      let tom3 = new Audio('hihat.mp3');
      tom3.play();
      break;

    case 'd':
      let tom4 = new Audio('splash.mp3');
      tom4.play();
      break;

    case 'j':
      let snare = new Audio('snare.mp3');
      snare.play();
      break;

    case 'k':
      let crash = new Audio('crash.mp3');
      crash.play();
      break;

    case 'l':
      let kick = new Audio('bass.mp3');
      kick.play();
      break;

    default:
  }
}

// End JavaScript


