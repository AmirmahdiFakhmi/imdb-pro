async function Poster() {
  try {
    let data = await fetch("http://localhost:3000/poster");
    let res = await data.json();
    let poster = res.map(function (elem) {
      return `
               <div class="swiper-slider swiper-slide">
                    <div class="feature"><img src="${elem.images}" alt="${elem.alt}"></div>
               </div>
              `;
    });
    document
      .querySelector(".wrapperToday")
      .insertAdjacentHTML("afterbegin", poster.join());
  } catch (error) {
    console.log(error.message);
  }
  var swiper = new Swiper(".respawn", {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      10: {
        slidesPerView: 1.25,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2.25,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 200,
      },
    },
  });
}
export default Poster;
