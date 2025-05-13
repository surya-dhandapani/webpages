const sections =document.querySelectorAll(".about, .projects, .contact");
window.addEventListener("scroll", ()=>{
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop<window.innerHeight -50) {
            section.classList.add("Visible");
        }
    });
});

const darkModeButton = document.getElementById("darkModeToggle");

darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

const title = document.querySelector(".myself h1");
const text = " --> it's Me...";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    title.textContent += text[index];
    index++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;