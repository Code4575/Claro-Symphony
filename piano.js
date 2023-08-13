// Detecting Button Press
let pianonote = document.querySelectorAll('.note');

for (let i = 0; i < pianonote.length; i++) {
  document.querySelectorAll('.note')[i].addEventListener('click', function () {
    var buttonText = this.innerHTML;
    makeSound(buttonText);
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
    case 'a':
      let tom1 = new Audio('piano-a_A.wav');
      tom1.play();
      break;

    case 'b':
      let tom2 = new Audio('piano-b_B.wav');
      tom2.play();
      break;

    case 'c':
      let tom3 = new Audio('piano-c_C.wav');
      tom3.play();
      break;

    case 'd':
      let tom4 = new Audio('piano-d_D.wav');
      tom4.play();
      break;

    case 'e':
      let snare = new Audio('piano-e_E.wav');
      snare.play();
      break;

    case 'f':
      let crash = new Audio('piano-f_F.wav');
      crash.play();
      break;

      case 'g':
        let pa = new Audio('piano-g_G.wav');
        pa.play();
        break;

    default:
  }
}

// End JavaScript
