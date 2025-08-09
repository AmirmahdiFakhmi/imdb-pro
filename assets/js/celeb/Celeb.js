async function Celeb() {
  try {
    let data = await fetch("http://localhost:3000/celeberity");
    let res = await data.json();
    let celeb = res.map(function (elem) {
      return `
                <!-- Start slide 2 -->
            <div class="swiper-slide">
              <!-- Start img part -->
              <div class="daddy">
                <img src="${elem.source}" alt="${elem.alternative}" />
              </div>
              <!-- End img part -->

              <!-- Start caption part -->
              <div class="top">
                <div class="son">${elem.rateing}</div>
                <div class="girl">
                  (
                  <span>
                    <img src="${elem.svg}" alt="svg">
                    ${elem.like}
                  </span>
                  )
                </div>
              </div>

              <div class="bott">
                <span>${elem.name}</span>
              </div>
              <!-- End caption part -->
            </div>
            <!-- End slide 2 -->
        `;
    });
    document
      .querySelector(".wrapperCell")
      .insertAdjacentHTML("afterbegin", celeb.join());
  } catch (error) {
    console.log(error.message);
  }
  var swiper = new Swiper(".cell", {
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
        slidesPerView: 2.35,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 4.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
export default Celeb;
