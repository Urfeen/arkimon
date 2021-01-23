{
  //animation
  const animItems = document.querySelectorAll("._anim-items");
  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll)
    function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offSet(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add("_active");
        } else {
          if (!animItem.classList.contains("_anim-no-hide")) {
            animItem.classList.remove("_active");
          }
        }
      }
    }
    function offSet(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 500);
  }
}

(function burger() {
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
          document.querySelector(".header__list-open").style.boxShadow = "0  100vh 0 100vh rgba(0, 0, 0, 0.8)";
        })
      }, 200);
    } else {
      document.querySelectorAll(".header__list li").forEach(e => {
        e.style.opacity = 0;
        document.querySelector(".header__list-open").style.boxShadow = "none";
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
})();

$(document).ready(function () {
  $(".projects__slider").slick({
    appendArrows: $(".projects__slider-control"),
    slidesToShow: 3,
    infinite: true,
    speed: 400,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $(".testimonial__slider").slick({
    appendArrows: $(".testimonial__slider-control"),
    infinite: false,
    slidesToShow: 1,
    speed: 400,
    asNavFor: '.testimonial__current-avatar',
    draggable: false,
  });
  $(".testimonial__current-avatar").slick({
    infinite: false,
    slidesToShow: 1,
    speed: 400,
    arrows: false,
    fade: true,
    draggable: false,
    touchMove: false,
  })
});
