$(".marquee").marquee({
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    delayBeforeStart: 100,
    direction: "left",
    duplicated: true,
    duration: 10000,
    gap: 50,
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2.5
      },
      1000: {
        items: 4,
      }
    }
  })
  