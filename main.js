const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
// const bird = document.getElementById("bird");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 350);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("You are lose");
  }
}, 10);
