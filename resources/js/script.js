var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper2 = new Swiper(".mySwiper-md", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

var swiper3 = new Swiper(".mySwiper-sm", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  observer: true,
  observeParents: true,
});

let dropdownbtns = document.querySelectorAll(".dropdown-btn");
dropdownbtns.forEach((btns) => {
  btns.addEventListener("click", function (event) {
    document
      .querySelector(
        `.sub-dropdown-list[data-id=${event.currentTarget.dataset.id}]`
      )
      .classList.toggle("collapse");
  });
});

let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", function (event) {
  document
    .querySelector(".responsive-dropdown-sec")
    .classList.toggle("collapse1");
});
