const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  alert("Flight search UI triggered!");
});

const bookButtons = document.querySelectorAll(".flight-card button");

bookButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Flight booking selected!");
  });
});