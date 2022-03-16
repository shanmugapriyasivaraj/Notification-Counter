// window.alert("Hello");

// const response = window.confirm("are you sure you want to leave?");
// console.log(response);

// const user = window.prompt("Enter your name");
// console.log(user);

// const colors = ["red", "blue", "green", "pink", "yellow", "black"];

// let index = 0;

// const cycleColors = () => {
//   console.log("cycleColors");
//   document.querySelector(".counter").style.backgroundColor = colors[index];
//   index++;
//   if (index === colors.length) {
//     index = 0;
//   }
// };
// let colorInterval;
// function clicked() {
//   colorInterval = setInterval(cycleColors, 1000);
// }
// function stop() {
//   console.log("Stop");
//   clearInterval(colorInterval);
// }

document.querySelector(".tweet").innerText =
  window.localStorage.getItem("tweet");

updateCount(window.localStorage.getItem("tweet"));

function count(event) {
  const tweet = event.target.value;
  updateCount(tweet);
}

function updateCount(tweet) {
  const counter = document.querySelector(".counter");
  counter.innerText = `${tweet.length}/40`;
  console.log("typing", tweet.length, tweet);
  window.localStorage.setItem("tweet", tweet);
}
