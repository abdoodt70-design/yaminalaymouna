const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  alert("يا سلام! ❤️");
});

noBtn.addEventListener("mouseover", () => {
  // تحريك زر "لا" بشكل عشوائي
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
