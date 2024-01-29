let randomCode; // Declare randomCode outside the function

const getColor = () => {
  //hex code
  const randomNumber = Math.floor(Math.random() * 16777215);
  randomCode = "#" + randomNumber.toString(16); // Assign value to randomCode
  document.getElementById("text").innerText = randomCode;
  document.body.style.backgroundColor = randomCode;
  document.getElementById("icon").innerHTML = '<i class="bi bi-clipboard"></i>';
};

document.getElementById("icon").addEventListener("click", () => {
  navigator.clipboard.writeText(randomCode);
  document.getElementById("icon").innerHTML = '<i class="bi bi-check"></i>';
});

//event call
document.getElementById("btn").addEventListener("click", getColor);
// Event call for changing color on laptop spacebar press
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    getColor();
  }
});
//initial call
getColor();
