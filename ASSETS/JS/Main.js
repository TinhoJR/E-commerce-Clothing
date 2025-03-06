$(document).ready(function() {

   let prevScroll = $(window).scrollTop();

   $(window).scroll(function() {

    let currentScroll = $(window).scrollTop();

      if(prevScroll > currentScroll) {
        $("nav").css("top", "0px").css("transition", "top 0.7s").css("backgroundColor", "white")
      }else{
        $("nav").css("backgroundColor", "").css("top", "-80px").css("transition", "top 0.8s")
      }

      prevScroll = currentScroll;

   });

   let swiper = new Swiper(".mySwiper", {
          
    slidesPerView: 1,
    spaceBetween: 10,

    /*  navigation: {
      nextEl: "#NextB",
      prevEl: "#prevB",
    },

    */
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  AOS.init({
    offset:400,
    duration:1000,
    
    delay:1000

});


/*  let productContent = $(".product-content");

  let cartbtn = $(".cart-btn");

    productContent.hover(function() {

        cartbtn.css("display", "block").slideIn()




    }, function() {

        cartbtn.css("display", "none")





    }) */


})
