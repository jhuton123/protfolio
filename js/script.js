









$(document).ready(function(){
  $('.venobox').venobox(); 
});





// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


















  $(window).on('scroll', function () {

    var scrollPos = $(window).scrollTop();
  
    if (scrollPos > 150) {
        
  $("#up").fadeIn();
    } else {
       
  $("#up").fadeOut();
    }
  });










  // var bc2top = $('.back-top-btn');
  // bc2top.on('click', function () {
  //     htmlBody.animate({
  //         scrollTop: 0
  //     }, 1000);
  // });


$("#up").click(function(){
  $('html, body').animate({
    scrollTop: 0
  },500)
})



$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows:false,
  autoPlay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },

    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});





// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   arrows: false,
//   speed: 300,
//   slidesToShow: 5,
//   // autoplay: true,
//   slidesToScroll: 2,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         // infinite: true,
//         // dots: true
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 575,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });



