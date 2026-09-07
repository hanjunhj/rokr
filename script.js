const rokrItems = [
  {
    title: "ROKR Video",
    type: "video",
    src: "videos/1.mp4",
  },
  {
    title: "Coffee Factory",
    type: "image",
    src: "images/2.jpg",
  },
  {
    title: "Dream Gift Factory",
    type: "image",
    src: "images/3.JPG",
  },

  {
    title: "Eiffel Tower",
    type: "image",
    src: "images/4.jpg",
  },
  {
    title: "London Tour Bus",
    type: "image",
    src: "images/5.JPG",
  },


  {
    title: "Vitascope Movie Projector",
    type: "image",
    src: "images/6.jpg",
  },

  {
    title: "Clock",
    type: "image",
    src: "images/7.jpg",
  },

  {
    title: "Luminours Globe",
    type: "image",
    src: "images/8.jpg",
  },
  {
    title: "Owl Clock",
    type: "image",
    src: "images/9.jpg",
  },

  {
    title: "Magic Cello Music Box",
    type: "image",
    src: "images/10.jpg",
  },

  {
    title: "Christmas Music Box",
    type: "image",
    src: "images/11.jpg",
  },

  {
    title: "Chocolate factory ",
    type: "image",
    src: "images/12.jpg",
  },

  {
    title: "3D Pinball",
    type: "image",
    src: "images/13.jpg",
  },

  {
    title: "Christmas Tree Music Box",
    type: "image",
    src: "images/14.jpg",
  },

  {
    title: "Romantic Note Wall Clock",
    type: "image",
    src: "images/15.jpg",
  },

  {
    title: "My Rokr Collection",
    type: "image",
    src: "images/16.jpg",
  },

  {
    title: "My Rokr Collection",
    type: "image",
    src: "images/17.jpg",
  },

  {
    title: "Gramophone 3D",
    type: "image",
    src: "images/18.jpg",
  },
  {
    title: "My Rokr Collection",
    type: "image",
    src: "images/19.jpg",
  },
   {
    title: "Typewriter",
    type: "image",
    src: "images/20.jpg",
  },
];

const slideWrapper = document.getElementById("slideWrapper");
const slideTitle = document.getElementById("slideTitle");
const backgroundBlur = document.getElementById("backgroundBlur");

rokrItems.forEach(function (item) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  if (item.type === "image") {
    slide.innerHTML = `
      <img src="${item.src}" alt="${item.title}">
    `;
  } else if (item.type === "video") {
    slide.innerHTML = `
      <video controls muted>
        <source src="${item.src}" type="video/mp4">
      </video>
    `;
  }

  slideWrapper.appendChild(slide);
});

backgroundBlur.style.backgroundImage = `url(${rokrItems[0].src})`;

const swiper = new Swiper(".rokrSwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 180,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },

  on: {
    slideChange: function () {
      const index = this.realIndex;
      const currentItem = rokrItems[index];

      slideTitle.textContent = currentItem.title;

      if (currentItem.type === "image") {
        backgroundBlur.style.backgroundImage = `url(${currentItem.src})`;
      }
    },
  },
});
