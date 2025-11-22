$(".owl-carousel__product").owlCarousel({
  loop: true,
  margin: 24,
  nav: true,
  dots: false,
  rtl: true,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel__categories").owlCarousel({
  loop: true,
  margin: 15,
  nav: true, // فعلنا الأزرار
  dots: false,
  rtl: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 600,
  navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
  responsive: {
    0: { items: 3 },
    600: { items: 3 },
    900: { items: 4 },
    1200: { items: 7 }
  }
});



$(".owl-carousel__testimonials").owlCarousel({
  loop: true,
  margin: 8,
  nav: true,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  dots: false,
  rtl: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".owl-carousel__projects").owlCarousel({
  loop: true,
  margin: 24,
  nav: true,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  dots: false,
  rtl: true,
  autoplay: false,
  autoplayHoverPause: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 1500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});

$(".owl-carousel__videos").owlCarousel({
  loop: true,
  margin: 24,
  nav: true,
  navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
  dots: false,
  rtl: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 2500,
  autoplaySpeed: 1500,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
