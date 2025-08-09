async function Genre() {
  try {
    let data = await fetch("http://localhost:3000/genre");
    let res = await data.json();
    let genre = res.map(function (elem) {
      return `
         <!-- Start slide  -->
            <div class="swiper-slide">
              <!-- Start img part -->
              <div class="granddad">
                <img src="${elem.genrePic}" alt="genre${elem.id}" />
              </div>
              <!-- End img part -->

              <!-- Start caption part -->
              <div class="grandmom">
                <span>${elem.genreName}</span>
              </div>
              <!-- End caption part -->
            </div>
            <!-- End slide  -->
        `;
    });
    document
      .querySelector(".genrewrapper")
      .insertAdjacentHTML("afterbegin", genre.join());
  } catch (error) {
    console.log(error.message);
  }
}
export default Genre;
