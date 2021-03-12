const nextIcon = '<img src="./images/left.png">'
const prevIcon = '<img src="./images/right.png">'

$(document).ready(function(){
  $(".slide-one").owlCarousel({
  	items: 4,
  	nav: true,
    dots: false,
    navText: [nextIcon, prevIcon],
    loop: true,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'	
  });

  $(".slide-two").owlCarousel({
  	items: 2,
    nav: true,
    dots: false,
    navText: [nextIcon, prevIcon],
    loop: true,
  });

  $(".slide-three").owlCarousel({
  	items: 4,
  	mouseDrag: false, 
  	touchDrag: false 
  });

  $(".slide-four").owlCarousel({
    items: 3,
    mouseDrag: false, 
    touchDrag: false 
  });
});


