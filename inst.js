//detecting button press
let guistr = document.querySelectorAll('.drum');

for(let i = 0; i < guistr.length; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function (){
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
    case 'e':
      let tom1 = new Audio('1stStringE.mp3');
      tom1.play();
      break;

    case 'b':
      let tom2 = new Audio('2ndStringB.mp3');
      tom2.play();
      break;

    case 'd':
      let tom3 = new Audio('3rdStringD.mp3');
      tom3.play();
      break;

    case 'g':
      let tom4 = new Audio('4thStringG.mp3');
      tom4.play();
      break;

    case 'a':
      let snare = new Audio('5thStringA.mp3');
      snare.play();
      break;

    case 'f':
      let crash = new Audio('6thStringssE.mp3');
      crash.play();
      break;


    default:
  }
}

// End JavaScript


