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
          
    slidesPerView: 2,
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

 let swipers = new Swiper(".mySwipers", {
  pagination: {
    el: ".swiper-pagination",
  },
});


/*  let productContent = $(".product-content");

  let cartbtn = $(".cart-btn");

    productContent.hover(function() {

        cartbtn.css("display", "block").slideIn()

    }, function() {

        cartbtn.css("display", "none")

    }) */


        let productInfo = $(".product-information");

         productInfo.on("click", function() {

         let currentImage = $(this).data("image");

         let fullImage = $(".full-image-detail");

         productInfo.removeClass("active");

         fullImage.css("display", "none");

         $("#" + currentImage).css("display", "block");

         $(this).addClass("active")

         });

         $("#default-image").click();


         let clothDetail = $(".cloth-detail");

          clothDetail.on("click", function() {

            $(this).toggleClass("active");

            /* Toggle between hiding and showing the active panel */
       
            let panel = $(this).next();
       
            if(panel.css("display") === "block") {
             
               panel.css("display", "none")
       
            } else{
               panel.css("display", "block")
            }


          });


          let increaseCart = $("#plus-one");

          let decreaseCart = $("#minus-one");

          let qualityAmount = 0;

            increaseCart.on("click", function() {

              qualityAmount++;

              $("#quality-amount").text(qualityAmount);


            });

            decreaseCart.on("click", function() {

              --qualityAmount;

              $("#quality-amount").text(qualityAmount)

            })


})
