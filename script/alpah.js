// function play() {
//   //hide the home screen. to hide the screen add the class hidden to the home section
//   //show the play ground
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   console.log(homeSection);
//   const playgroundSection = document.getElementById("play-ground");
//   playgroundSection.classList.remove("hidden");
// }

function continueGame() {
  // step-1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your random alphabet", alphabet);

  // set randomly generated alphabet to the screens
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementByid("home-screen");
  showElementByid("play-ground");
  continueGame();
}
