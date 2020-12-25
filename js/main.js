document.getElementById('christmasTime').addEventListener('click', myMove);
document.getElementById('christmasTime').addEventListener('click', reset);


const dexterSpeak = document.getElementById('dexterSpeak');
let decorationHide = document.querySelectorAll('.decorationHide');
const buttonBoy = document.getElementById('christmasTime');
const song = document.getElementById("song");

const mobileQuery = window.matchMedia('(max-width: 599px)');

function playAudio() {
  song.play();
}

function resetAudio() {
  song.currentTime = 0;
  song.pause();
}

let i = false;

function myMove() {
  
  console.log(i);
  buttonBoy.classList.add('hidden');
  buttonBoy.innerText = "Click Here To Start Christmas Time All Over Again!"
  const elem = document.getElementById("animate");
  const elemTwo =  document.getElementById("animateSleigh");
  document.getElementById('peeker').classList.toggle('hidden');
  document.getElementById('dexterWalks').classList.toggle('hidden');

  
  //decorations
  // const decorationCat = document.getElementById('catStocking');
  // const candleInTheWind = document.getElementById('candle');
  // const giftBox = document.getElementById('giftBox')
  //photo
  const photoOfUs = document.getElementById('photo');
  // const merryXmas = document.getElementById('merryXmas');
  // const ornamentOne  = document.getElementById('ornamentOne');
  // const dancingSanta = document.getElementById('dancingSanta');
  // const treeTwo  = document.getElementById('treeTwo');
  // const treeOne = document.getElementById('treeOne');
    // const  = document.getElementById('');
    // const  = document.getElementById('');
    // const  = document.getElementById('');
    // const  = document.getElementById('');
//RESET


// (document.getElementById('catStocking').classList.toggle('firstHide').classList !== "hidden" &&
//   document.getElementById('candle').classList.toggle('firstHide').classList !== "hidden" &&
//   document.getElementById('photo').classList.toggle('firstHide').classList !== "hidden")

  let start = Date.now();  
  
  let timer = setInterval(function() {
  // how much time passed from the start?
  let timePassed = Date.now() - start;
  if(timePassed >= 2000){
  playAudio();
  }
  if (timePassed >= 8000) {
    clearInterval(timer); // finish the animation after 8 seconds
    
Array.from(decorationHide).forEach(element => {
    element.classList.toggle('hidden');
      })
    // decorationCat.classList.toggle('hidden');
      photoOfUs.classList.toggle('hidden');
    // candleInTheWind.classList.toggle('hidden');
    // giftBox.classList.toggle('hidden');
    // merryXmas.classList.toggle('hidden');
    // ornamentOne.classList.toggle('hidden');
    // treeOne.classList.toggle('hidden');
    // treeTwo.classList.toggle('hidden');
    // .classList.toggle('hidden');
    // .classList.toggle('hidden');
      document.getElementById('dexterWalks').classList.toggle('hidden');
      document.getElementById('goodBoy').classList.toggle('hidden');
      dexterSpeak.classList.toggle('hidden')
    return;
  // }else if(timePassed >= 12000){
  //     clearInterval(timer);
       
  // }
  }
  draw(timePassed);
  

  }, 1);
  
  function draw(timePassed) {
    if(mobileQuery.matches) {
      animate.style.left = (timePassed / 50) -8 + 'vw';
      animateSleigh.style.left = (timePassed / 50) - 60 + 'vw';
      dancingSanta.style.bottom = (timePassed / 100) - 76 + 'vh';
    }else {
  animate.style.left = (timePassed / 135) -8 + 'vw';
  animateSleigh.style.left = (timePassed / 135) - 28 + 'vw';
  dancingSanta.style.bottom = (timePassed / 100) - 76 + 'vh';
  }
  }

  let timerTwo = setInterval(function() {
  // how much time passed from the start?
  let timePassedAgain = (Date.now() - start);
  

  if (timePassedAgain >= 12000) {
    clearInterval(timerTwo); // finish the animation after 4 seconds
    buttonBoy.classList.toggle('hidden');
    i = true;
    return;
  }
  
  imgAppear(timePassedAgain);

  }, 1);

  function imgAppear(timePassedAgain) {
    if(mobileQuery.matches) {
      photoOfUs.style.height = (timePassedAgain - 8000)  / 40 + 'vh';
       photoOfUs.style.width = (timePassedAgain - 8000)  / 26.3  + 'vw';
       dexterSpeak.style.right = (timePassedAgain - 8000)  / 88.9  + 'rem';
    }else {
       photoOfUs.style.height = (timePassedAgain - 8000)  / 65 + 'vh';
       photoOfUs.style.width = ((timePassedAgain - 8000)  / 65) * 0.705 + 'vh';
  }
  }

}
function reset(){
if(i = true){
    Array.from(decorationHide).forEach(element => {
    element.classList.add('hidden');
      })
    document.getElementById('photo').classList.add('hidden');
    document.getElementById('photo').style.width = 0;
    document.getElementById('photo').style.height = 0;
    document.getElementById('goodBoy').classList.add('hidden');
    document.getElementById('peeker').classList.add('hidden');
    dexterSpeak.classList.add('hidden');
    // document.getElementById('dexterWalks').classList.toggle('hidden');
    resetAudio();
  }

}



//document.getElementById('').classList.add('hidden');
//document.getElementById('').classList.add('hidden');
//document.getElementById('').classList.add('hidden');
//document.getElementById('').classList.add('hidden');
//document.getElementById('').classList.add('hidden');

