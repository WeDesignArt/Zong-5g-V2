const chatBtn = document.querySelector(".chat_in");
const navHeader = document.querySelector("#nav_header");

function headerScrollFunction() {
  if (window.scrollY > 520) {
    navHeader?.classList.add("move_up");
  } else {
    navHeader?.classList.remove("move_up");
  }
}

function scrollFunction() {
  if (window.scrollY > 520) {
    chatBtn?.classList.add("active");
  } else {
    chatBtn?.classList.remove("active");
  }
}

// Initial function calls to handle page load state
headerScrollFunction();
scrollFunction();

// Listen for the scroll event
window.addEventListener("scroll", function () {
  scrollFunction();
  headerScrollFunction();
});

jQuery(document).ready(function ($) {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", () => {
    ScrollTrigger.update();
    AOS.refresh();
  });

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  // insert class in body tag of page name
  var parts = window.location.pathname.split("/").pop();
  document.body.className = parts;
  console.log(parts);

  // blank click function for ios
  $("a, .btn_outline").click(function () {});

  // search trigger
  $(".search_trigger, .close_gbtn").click(function (e) {
    e.stopPropagation();
    $(".search_holder").toggleClass("open");
  });

  // footer accordion
  if ($(window).width() < 575) {
    $(document).on("click", ".footer_single > h5", function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    });
  }

  if ($(window).width() < 1199) {
    console.log("Less than window");
  }

  // desktop menu
  $(".lg_menu ul > li:has(ul)").addClass("has-sub");
  $(".lg_menu ul > li > a").hover(function () {
    $(".lg_menu ul > li").removeClass("active");
    $(this).closest("li").addClass("active");
  });

  // offcanvas menu trigger
  $(".navigation ul > li:has(ul)").addClass("has-dropdown");

  var MobileMenu = new MobileNav({
    initElem: "nav",
    menuTitle: "All Menus",
  });

  $(".offcanvas_menu_trigger").on("click", function (e) {
    e.preventDefault();

    $(".nav-wrapper").toggleClass("show-menu");
    $(".sm_offcanvas_wrapper").toggleClass("active");
  });

  if ($(window).width() < 1199) {
    $(".subnav_single_holder_title").on("click", function (e) {
      e.preventDefault();

      $(this).toggleClass("active");
      $(this).next().slideToggle();
    });
  }

  $(".js-nav-toggle").on("click", function (e) {
    e.preventDefault();

    $(".sm_offcanvas_wrapper").toggleClass("active");
    $(".nav-wrapper").toggleClass("show-menu");
  });

  $(".overlay_toggle, .apply_filter_btn").on("click", function (e) {
    e.preventDefault();

    $(".overlay_filter").toggleClass("active");
    $(".overlay_content_holder").toggleClass("show-menu");
  });

  $(".filter_overaly_trigger").on("click", function (e) {
    e.preventDefault();

    $(".overlay_content_holder").toggleClass("show-menu");
    $(".overlay_filter").toggleClass("active");
  });

  $(".close_widget").on("click", function (e) {
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass("active");
  });

  // sticky filter button
  const collection = document.querySelector(".more_filter_btn");

  if (collection) {
    const observer = new IntersectionObserver(
      function (entries) {
        // isIntersecting is true when element and viewport are overlapping
        // isIntersecting is false when element and viewport don't overlap
        if (entries[0].isIntersecting === true) {
          // console.log('Element has just become visible in screen');
          collection.classList.add("abs");
          // $('.more_filter_btn').addClass('meem');
        } else {
          collection.classList.remove("abs");
          // console.log('Element has not visible in screen');
        }
      },
      { threshold: [0] },
    );

    observer.observe(document.querySelector("footer"));
  }

  const filterOverlay = document.querySelector(".overlay_filter");

  if (filterOverlay) {
    // range slider start
    function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
      const [from, to] = getParsed(fromInput, toInput);
      fillSlider(
        fromInput,
        toInput,
        "#C6C6C6",
        "var(--primary_color)",
        controlSlider,
      );
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromSlider.value = from;
      }
    }

    function controlToInput(toSlider, fromInput, toInput, controlSlider) {
      const [from, to] = getParsed(fromInput, toInput);
      fillSlider(
        fromInput,
        toInput,
        "#C6C6C6",
        "var(--primary_color)",
        controlSlider,
      );
      setToggleAccessible(toInput);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
      }
    }

    function controlFromSlider(fromSlider, toSlider, fromInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(
        fromSlider,
        toSlider,
        "#C6C6C6",
        "var(--primary_color)",
        toSlider,
      );
      if (from > to) {
        fromSlider.value = to;
        fromInput.value = to;
      } else {
        fromInput.value = from;
      }
    }

    function controlToSlider(fromSlider, toSlider, toInput) {
      const [from, to] = getParsed(fromSlider, toSlider);
      fillSlider(
        fromSlider,
        toSlider,
        "#C6C6C6",
        "var(--primary_color)",
        toSlider,
      );
      setToggleAccessible(toSlider);
      if (from <= to) {
        toSlider.value = to;
        toInput.value = to;
      } else {
        toInput.value = from;
        toSlider.value = from;
      }
    }

    function getParsed(currentFrom, currentTo) {
      const from = parseInt(currentFrom.value, 10);
      const to = parseInt(currentTo.value, 10);
      return [from, to];
    }

    function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
      const rangeDistance = to.max - to.min;
      const fromPosition = from.value - to.min;
      const toPosition = to.value - to.min;
      controlSlider.style.background = `linear-gradient(
					to right,
					${sliderColor} 0%,
					${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
					${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
					${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
					${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
					${sliderColor} 100%)`;
    }

    function setToggleAccessible(currentTarget) {
      const toSlider = document.querySelector("#toSlider");
      if (Number(currentTarget.value) <= 0) {
        toSlider.style.zIndex = 2;
      } else {
        toSlider.style.zIndex = 0;
      }
    }

    const fromSlider = document.querySelector("#fromSlider");
    const toSlider = document.querySelector("#toSlider");
    const fromInput = document.querySelector("#fromInput");
    const toInput = document.querySelector("#toInput");
    fillSlider(
      fromSlider,
      toSlider,
      "#C6C6C6",
      "var(--primary_color)",
      toSlider,
    );
    setToggleAccessible(toSlider);

    fromSlider.oninput = () =>
      controlFromSlider(fromSlider, toSlider, fromInput);
    toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
    fromInput.oninput = () =>
      controlFromInput(fromSlider, fromInput, toInput, toSlider);
    toInput.oninput = () =>
      controlToInput(toSlider, fromInput, toInput, toSlider);
  }

  // Define autoplay duration to sync JS with CSS animation
  const autoplayDuration = 5000;

  const swiper = new Swiper(".heroSwiper", {
    effect: "fade",
    loop: true,
    speed: 800,
    autoplay: {
      delay: autoplayDuration,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".custom-pagination",
      clickable: true,
    },

    on: {
      // 1. When the slide transition starts...
      slideChangeTransitionStart: function () {
        // Select ALL bullets and REMOVE the animation class immediately.
        // This resets them to 0% width / empty state.
        const allBullets = document.querySelectorAll(
          ".swiper-pagination-bullet",
        );
        allBullets.forEach((bullet) => {
          bullet.classList.remove("start-animation");
        });
      },

      // 2. When the slide transition ends...
      slideChangeTransitionEnd: function () {
        // Find the currently active bullet
        const activeBullet = document.querySelector(
          ".swiper-pagination-bullet-active",
        );

        // Add the animation class.
        // The browser sees "Class removed" -> "Class added" and restarts the keyframe.
        if (activeBullet) {
          activeBullet.classList.add("start-animation");
        }
      },

      // 3. Special handler for initial load
      init: function () {
        const activeBullet = document.querySelector(
          ".swiper-pagination-bullet-active",
        );
        if (activeBullet) {
          activeBullet.classList.add("start-animation");
        }
      },
    },
  });

  AOS.init({
    duration: 1200,
    // offset: 300,s
    once: true,
  });

  // Scroll Image Transition logic for Power and Connect sections
  // Triggers when the #connect-section is 30% into view (top hits 70% of viewport)
  ScrollTrigger.create({
    trigger: "#connect-section",
    start: "top 50%",
    onToggle: (self) => {
      if (self.isActive) {
        // Scrolling down into Connect section
        gsap.to("#powerImg", {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
        gsap.to("#connectImg", {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.inOut",
        });
      } else {
        // Scrolling up back into Power section
        gsap.to("#powerImg", {
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.inOut",
        });
        gsap.to("#connectImg", {
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.inOut",
        });
      }
    },
  });
});

// offcanvas menu function
(function ($) {
  this.MobileNav = function () {
    (this.curItem,
      (this.curLevel = 0),
      (this.transitionEnd = _getTransitionEndEventName()));

    var defaults = {
      initElem: ".main-menu",
      menuTitle: "Menu",
    };

    // Check if MobileNav was initialized with some options and assign them to the "defaults"
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    // Add to the "defaults" ONLY if the key is already in the "defaults"
    function extendDefaults(source, extender) {
      for (option in extender) {
        if (source.hasOwnProperty(option)) {
          source[option] = extender[option];
        }
      }
    }

    MobileNav.prototype.getCurrentItem = function () {
      return this.curItem;
    };

    MobileNav.prototype.setMenuTitle = function (title) {
      defaults.menuTitle = title;
      _updateMenuTitle(this);
      return title;
    };

    // Init is an anonymous IIFE
    (function (MobileNav) {
      var initElem = $(defaults.initElem).length ? $(defaults.initElem) : false;

      if (initElem) {
        defaults.initElem = initElem;
        _clickHandlers(MobileNav);
        _updateMenuTitle(MobileNav);
      } else {
        console.log(
          defaults.initElem + " element doesn't exist, menu not initialized.",
        );
      }
    })(this);

    function _getTransitionEndEventName() {
      var i,
        undefined,
        el = document.createElement("div"),
        transitions = {
          transition: "transitionend",
          OTransition: "otransitionend", // oTransitionEnd in very old Opera
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd",
        };

      for (i in transitions) {
        if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
          return transitions[i];
        }
      }
    }

    function _clickHandlers(menu) {
      defaults.initElem.on("click", ".has-dropdown > a", function (e) {
        e.preventDefault();
        menu.curItem = $(this).parent();
        _updateActiveMenu(menu);
      });

      defaults.initElem.on("click", ".nav-toggle", function () {
        _updateActiveMenu(menu, "back");
      });
    }

    // TODO: Make this DRY (deal with waiting for transitionend event)
    function _updateActiveMenu(menu, direction) {
      _slideMenu(menu, direction);
      if (direction === "back") {
        /*defaults.initElem.children('ul').one(menu.transitionEnd, function(e) {
						menu.curItem.removeClass('nav-dropdown-open nav-dropdown-active');
						menu.curItem = menu.curItem.parent().closest('li');
						menu.curItem.addClass('nav-dropdown-open nav-dropdown-active');
						_updateMenuTitle(menu);
				});*/

        menu.curItem.removeClass("nav-dropdown-open nav-dropdown-active");
        menu.curItem = menu.curItem.parent().closest("li");
        menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
        _updateMenuTitle(menu);
      } else {
        menu.curItem.addClass("nav-dropdown-open nav-dropdown-active");
        _updateMenuTitle(menu);
      }
    }

    // Update main menu title to be the text of the clicked menu item
    function _updateMenuTitle(menu) {
      var title = defaults.menuTitle;
      if (menu.curLevel > 0) {
        title = menu.curItem.children("a").text();
        defaults.initElem.find(".nav-toggle").addClass("back-visible");
      } else {
        defaults.initElem.find(".nav-toggle").removeClass("back-visible");
      }
      $(".nav-title").text(title);
    }

    // Slide the main menu based on current menu depth
    function _slideMenu(menu, direction) {
      if (direction === "back") {
        menu.curLevel = menu.curLevel > 0 ? menu.curLevel - 1 : 0;
      } else {
        menu.curLevel += 1;
      }
      defaults.initElem.children("ul").css({
        transform: "translateX(-" + menu.curLevel * 100 + "%)",
      });
    }
  };
})(jQuery);

// viewport function
function viewport() {
  var e = window,
    a = "inner";

  if (!("innerWidth" in window)) {
    a = "client";
    e = document.documentElement || document.body;
  }

  return { width: e[a + "Width"], height: e[a + "Height"] };
}
