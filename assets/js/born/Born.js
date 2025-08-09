async function Born() {
  try {
    let data = await fetch("http://localhost:3000/born");
    let res = await data.json();
    let born = res.map(function (elem) {
      return `
        <div class="swiper-slide">
              <!-- Start img part -->
              <div class="daddy">
                <img
                  src="${elem.img}"
                  alt="no1"
                />
              </div>
              <!-- End img part -->

              <!-- Start caption part -->
              <div class="top">
                <div class="son">${elem.name}</div>
              </div>

              <div class="bott">
                <span>${elem.age}</span>
              </div>
              <!-- End caption part -->
            </div>
        `;
    });
    document
      .querySelector(".wrapperBorn")
      .insertAdjacentHTML("afterbegin", born.join());
  } catch (error) {
    console.log(error.message);
  }
}
export default Born;
