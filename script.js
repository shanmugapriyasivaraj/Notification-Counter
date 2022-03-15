// window.alert("Hello");

// const response = window.confirm("are you sure you want to leave?");
// console.log(response);

// const user = window.prompt("Enter your name");
// console.log(user);

const colors = ["red", "blue", "green", "pink", "yellow", "black"];

let index = 0;

const cycleColors = () => {
  console.log("cycleColors");
  document.body.style.backgroundColor = colors[index];
  index++;
  if (index === colors.length) {
    index = 0;
  }
};
let colorInterval;
function clicked() {
  colorInterval = setInterval(cycleColors, 1000);
}
function stop() {
  console.log("Stop");
  clearInterval(colorInterval);
}

function count(event) {
  const tweet = event.target.value;
  const counter = document.querySelector(".counter");
  counter.innerText = `${tweet.length}/10`;
  console.log("typing", tweet.length, tweet);
}
