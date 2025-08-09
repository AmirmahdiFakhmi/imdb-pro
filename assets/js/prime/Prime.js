async function Prime() {
  try {
    let data = await fetch("http://localhost:3000/prime");
    let res = await data.json();
    let prime = res.map(function (elem) {
      return `
        <div class="swiper-slide">
                <!-- Start img part -->
                <div class="mommy">
                  <img
                    src="${elem.picture}"
                    alt="Movie"/>
                  <div class="svg-rapper">
                    <!-- Start svg number 1 -->
                    <svg
                      class="ipc-watchlist-ribbon__bg"
                      width="32px"
                      height="45px"
                      viewBox="0 0 24 34"
                      xmlns="http://www.w3.org/2000/svg"
                      role="presentation">
                      <polygon
                        class="ipc-watchlist-ribbon__bg-ribbon"
                        fill="#000000"
                        points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                      ></polygon>
                      <polygon
                        class="ipc-watchlist-ribbon__bg-hover"
                        points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
                      ></polygon>
                      <polygon
                        class="ipc-watchlist-ribbon__bg-shadow"
                        points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
                      ></polygon>
                    </svg>
                    <!-- End svg number 1 -->

                    <!-- Start svg number 2 -->
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      class="ipc-icon ipc-icon--add ipc-icon--inline"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="presentation"
                    >
                      <path
                        d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                      ></path>
                    </svg>
                    <!-- End svg number 2 -->
                  </div>
                </div>
                <!-- End img part -->

                <!-- Start descriotion part -->
                <div class="description">
                  <!-- Start part 1 -->
                  <div class="child1">
                    <!-- Start left part -->
                    <span class="grandchild">
                      <svg
                        width="16"
                        height="12.8"
                        xmlns="http://www.w3.org/2000/svg"
                        class="ipc-icon ipc-icon--star-inline"
                        viewBox="0 0 24 24"
                        fill="#f5c518"
                        role="presentation"
                      >
                        <path
                          d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"
                        ></path>
                      </svg>
                      <span>${elem.rate}</span>
                    </span>
                    <!-- End lefft part -->

                    <!-- Start right part -->
                    <button class="bluestar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12.8"
                        class="ipc-icon ipc-icon--star-border-inline"
                        viewBox="0 0 24 24"
                        fill="#40699e"
                        role="presentation"
                      >
                        <path
                          d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"
                        ></path>
                      </svg>
                    </button>
                    <!-- End right part -->
                  </div>
                  <!-- End part 1 -->

                  <!-- Start part 2 -->
                  <div class="child2">
                    <a href="#52525">${elem.seriName}</a>
                  </div>
                  <!-- End part 2 -->

                  <!-- Start part 3 -->
                  <div class="child3">
                    <button>
                      <a href="#76767">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          class="ipc-icon ipc-icon--add ipc-btn__icon ipc-btn__icon--pre"
                          viewBox="0 0 24 24"
                          fill="#4799ef"
                          role="presentation"
                        >
                          <path
                            d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                          ></path>
                        </svg>
                        <span>Watchlist</span>
                      </a>
                    </button>
                  </div>
                  <!-- End part 3 -->

                  <!-- Start part 4 -->
                  <div class="child4">
                    <div class="trailer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        class="ipc-icon ipc-icon--play-arrow ipc-btn__icon ipc-btn__icon--pre"
                        viewBox="0 0 24 24"
                        fill="#fff"
                        role="presentation"
                      >
                        <path
                          d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"
                        ></path>
                      </svg>
                      <span>Trailer</span>
                    </div>
                  </div>
              </div>
          </div>
        `;
    });
    document
      .querySelector(".wrapperPrime")
      .insertAdjacentHTML("afterbegin", prime.join());
  } catch (error) {
    console.log(error.message);
  }
}
export default Prime;
