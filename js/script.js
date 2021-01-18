const burger = document.querySelector(".header__burger");
burger.addEventListener("click", toggleBurger);

function toggleBurger() {
  if (this.classList.contains("burger-menu")) {
    this.classList.remove("burger-menu");
    this.classList.add("burger-cross");
    toggleMenu();
    setTimeout(() => {
      document.querySelectorAll(".header__list li").forEach(e => {
        e.style.opacity = 1;
      })
    }, 200);
  } else {
    document.querySelectorAll(".header__list li").forEach(e => {
      e.style.opacity = 0;
    })
    setTimeout(() => {
      this.classList.remove("burger-cross");
      this.classList.add("burger-menu");
      toggleMenu();
    }, 200);
  }
}

function toggleMenu() {
  const menu = document.querySelector(".header__list");
  menu.classList.contains("header__list-open")
    ? menu.classList.remove("header__list-open")
    : menu.classList.add("header__list-open");
}