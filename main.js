const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
// const bird = document.getElementById("bird");

document.addEventListener("keydown", function (event) {
  let keyName = event.key;
  if (keyName === "ArrowUp" || keyName === " ") {
    jump();
  }
  // if (keyName === "ArrowDown") {
  //   down();
  // }
});

function jump() {
  if (dino.classList !== "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 350);
}

// function down() {
//   if (dino.classList !== "down") {
//     dino.classList.add("down");
//   }
//   else {
//     dino.classList.remove("down");

// }}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 110) {
    alert("You are lose");
  }
}, 10);
