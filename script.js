document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  const menubar = document.querySelector("#menu");
  const navbar = document.querySelector(".navbar");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });

        navLinks.forEach((link) => link.classList.remove("active"));
        this.classList.add("active");

        menubar.classList.remove("bx-x");
        navbar.classList.remove("active");
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
        document
          .querySelector(`header nav a[href='#${id}']`)
          .classList.add("active");
      }
    });
  };

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");
});

let menubar = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

var type = new Typed(".textline", {
  strings: [
    "Desenvolvedor Full Stack",
    "Estudante de ADS",
    "Estudante de Redes de Computadores",
    "DevOps Jr",
    "Analista de Suporte",
  ],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
