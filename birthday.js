const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const screenYes = document.getElementById("screen-yes");
const screen1 = document.getElementById("screen-1"); 
const noScreen = document.querySelector(".no-screen");
const container = document.querySelector(".container");
const continueBtn = document.querySelector(".continue");
const screenFinal = document.getElementById("screen-final")
const start = document.querySelector(".start")

let noClickCount = 0;


start.addEventListener("click", ()=> {
  screen1.classList.add("show");
  start.classList.add("hidden")
})


yesBtn.addEventListener("click", ()=> {
  screenYes.classList.add("show")
  screen1.classList.remove("show")
})

function handleNoClick() {

   noClickCount++;

  screen1.classList.add("hidden");
  noScreen.classList.add("show")

  if(noClickCount === 1) {
      container.classList.add("hidden")

    noScreen.innerHTML = `
      <div class="icon">🥺</div>
      <h3>are you sure? 🥺</h3>
      <p class="no-para">it's my birthday.....</p>
      <button class="no-flow-btn">NO</button>
    `
  }
  else if(noClickCount === 2) {
      container.classList.add("hidden")
       noScreen.innerHTML = `
      <div class="icon">😭</div>
      <h3>Really? 😭</h3>
      <p class="no-para">remember the date!</p>
      <button class="no-flow-btn">NO</button>
    `
  }

  else if(noClickCount === 3) {
      container.classList.add("hidden")
       noScreen.innerHTML = `
      <div class="icon">😢</div>
      <h3>Last chance... 😢</h3>
      <p class="no-para">Please reconsider!</p>
      <button class="no-flow-btn">NO</button>
    `
  }  else if(noClickCount === 4) {
      container.classList.add("hidden")
       noScreen.innerHTML = `
      <div class="icon">😠</div>
      <h3>Why are you </h3>
      <p class="no-para">trying to click NO??</p>
      <button class="no-flow-btn">NO</button>
    `
} else if(noClickCount === 5) {
    container.classList.add("hidden")
    noScreen.innerHTML = `
      <div class="icon">😜</div>
      <h3>You can't </h3>
      <p class="no-para">catch me!</p>
      <button class="no-flow-btn">NO</button>
    `
      const noFlowBtn = document.querySelector(".no-flow-btn");

     const maxX = window.innerWidth - noFlowBtn.offsetWidth;
      const maxY = window.innerHeight - noFlowBtn.offsetHeight;

  noFlowBtn.style.left = `${Math.floor(Math.random() * maxX)}px`
  noFlowBtn.style.top = `${Math.floor(Math.random() * maxY)}px`
  noFlowBtn.style.position = "fixed"
} else {
     noScreen.innerHTML = `
      <div class="icon">😭</div>
      <h3>PLEASEEE😭</h3>
      <p class="no-para">I just wanted a cash gift..</p>
      <button class="yes-flow-btn">YES 💵 PLEASE</button>
    `
    const yesFlowBtn = document.querySelector(".yes-flow-btn");

    yesFlowBtn.addEventListener("click", () => {
      screenYes.classList.add("show");
      noScreen.classList.remove("show")
      container.classList.remove("hidden")
      screen1.classList.remove("show")
    })
 
}



}

noBtn.addEventListener("click", handleNoClick);

noScreen.addEventListener("click", (event)=> {
  if(event.target.classList.contains("no-flow-btn")) {
    handleNoClick();
  }
})





function createConfetti() {
  const confetti = document.createElement("div");

  confetti.classList.add("confetti");

  confetti.style.left = `${Math.random() * 100}vw`;

  const size = Math.random() * 8 + 5;

  confetti.style.width = `${size}px`;
  confetti.style.height = `${size * 1.5}px`;

  confetti.style.backgroundColor = 
    `hsl(${Math.random() * 360}, 100%, 50%)`;

  confetti.style.animationDuration =
    `${Math.random() * 2 + 2}s`;

  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 4000);
}

function launchConfetti() {
  for (let i = 0; i < 200; i++) {
    createConfetti();
  }
}


continueBtn.addEventListener("click", () => {
  screenYes.classList.remove("show");
  screenFinal.classList.add("show");
  container.classList.add("hidden")

  launchConfetti();
});