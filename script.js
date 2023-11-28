// create auto navbar scrolling
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Remova a classe 'active' de todos os links e adicione àquele que foi clicado
        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");
      }
    });
  });

  window.onscroll = () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => link.classList.remove("active"));

        // Adicione a classe 'active' ao link correspondente
        document
          .querySelector(`header nav a[href='#${id}']`)
          .classList.add("active");
      }
    });
  };
  // Create a sticky nav bar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");

  // Create a toogle changer
});

let menubar = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
