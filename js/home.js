$(function () {
  // $('#popup_message').modal('show');

  $(".hero_slick").slick({
    autoplay: false,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  const fvGSlick = document.querySelector(".fvG_slick");

  if (fvGSlick) {
    $(fvGSlick).slick({
      autoplay: false,
      // autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
  }

  /* 
  $(".slick_nav")
    .on("init", function (event, slick) {
      $(".slick_nav .slick-slide.slick-current").addClass("is-active");
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      focusOnSelect: false,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });

  $(".hero_slick").on("afterChange", function (event, slick, currentSlide) {
    $(".slick_nav").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.slick_nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".slick_nav .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });

  $(".slick_nav").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");

    $(".hero_slick").slick("slickGoTo", goToSingleSlide);
  });
   */

  $(".hot_slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    nextArrow: '<span class="icon-arrow-right next_arrow"></span>',
    prevArrow: '<span class="icon-arrow-left prev_arrow"></span>',
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".sponsors_car").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<span class="icon-arrow-left"></span>',
      '<span class="icon-arrow-right"></span>',
    ],

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(".store_slick").slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  });

  $(".sponsors_slick").slick({
    arrows: false,
    dots: false,
    draggable: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".home_hero_cards .hero_card").hover(
    function () {
      $(".home_hero_cards .hero_card").removeClass("is_active");
      $(this).addClass("is_active");
    },
    function () {
      // $(this).css("background-color", "pink");
    },
  );

  // bundle flip code

  $(document).on("click", ".flip_btn", function () {
    var thisval = $(this);
    var packages_id = $(this).data("id");
    $(".bundle_wrapper .single_bundle_holder").removeClass("active");
    $(".bundle_wrapper .single_bundle_holder").find(".bundle_back_data");

    // $(this).parents('.bundle_front').toggle();
    $(this).parents(".single_bundle_holder").addClass("active");
    // $(this).parents('.bundle_front').addClass('boom');
  });
  // bundle flip code End

  // back flip button
  $(document).on("click", ".bk_btn", function () {
    $(this).parent().prev(".bundle_front").fadeIn();

    // $('.bundle_wrapper .single_bundle_holder').find('.bundle_front').fadeToggle();

    $(this).parents(".single_bundle_holder").removeClass("active");
  });
});
