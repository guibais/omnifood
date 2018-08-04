$(document).ready(function() {
  // Sticky navigation

  $(".js--section-features").waypoint(
    direction => {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px"
    }
  );

  //  Scroll Buttons
  $(".js--scroll-to-plan").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(() => {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(() => {
    $("a[href*=#]:not([href=#])").click(() => {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          document.querySelector(target).scrollIntoView({
            behavior: "smooth"
          });
          return false;
        }
      }
    });
  });

  // animate scroll
  $(".js--wp-1").waypoint(
    () => {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    () => {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-3").waypoint(
    () => {
      $(".js--wp-3").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-4").waypoint(
    () => {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  // Mobile nav
  $(".js--nav-icon").click(() => {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }
  });

  // end
});
