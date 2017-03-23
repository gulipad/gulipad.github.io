document.addEventListener('DOMContentLoaded', function () {

  $('.main-container').biutifulGradient({color1: '#cc208e',color2: '#6713d2',angleDeg: '180'})

  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 700);
      }
  });

  $(function(){
        $(".element").typed({
            strings: ["fun.^500", "human.^500", "intelligent.^500", "Leia AI.^4000"],
            typeSpeed: 50,
            loop: true,
        })
    })

}, false);
