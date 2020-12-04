const progressBar = document.querySelector(".bar-length");
const circles = document.querySelectorAll(".circles");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let count = 1;

next.addEventListener("click", () => {
  count++;

  count = count > circles.length ? circles.length : count;

  circles.forEach((circle, index) => {
    if (index < count) {
      circle.classList.add("active");
    }
  });

  

});

