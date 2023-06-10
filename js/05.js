const button = document.getElementById("myButton");
const counter = document.getElementById("counter");
let clickCount = 0;

const handleClick = () => {
  clickCount++;
  counter.textContent = `Clicks: ${clickCount}`;
}

button.addEventListener("click", handleClick);
