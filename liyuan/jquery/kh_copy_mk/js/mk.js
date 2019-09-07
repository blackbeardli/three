$('input').focus(function(){
   $('.search-area').css("border-bottom-color","red");
   $('.search-warp .showhide-search').css("background","rgba(240,20,20,0.4)");
});
$('input').blur(function(){
   $ ('.search-area').css("border-bottom-color","#D9DDE1");
    $('.search-warp .showhide-search').css("background","");
});

// $('.item').hover(
//     function() {
//     $('.a').css("display", "block");
//
// },
//     function(){
//     $('.a').css("display", "none");
// }
// );
$('.item').mouseenter(function(){
    $('.a').css("display", "block");
});
$('.item').mouseleave(function(){
    $('.a').css("display","none");
});
$('.a').mouseenter(function(){
    $('.a').css("display", "block");
});
$('.a').mouseleave(function(){
   $('.a').css("display","none");
});
$('.item1').mouseenter(function(){
   $('.b').css("display","block");
});
$('.item1').mouseleave(function(){
    $('.b').css("display","none");
});
$('.b').mouseenter(function(){
    $('.b').css("display", "block");
});
$('.b').mouseleave(function(){
    $('.b').css("display","none");
});
$('.item2').mouseenter(function(){
    $('.c').css("display","block");
});
$('.item2').mouseleave(function(){
    $('.c').css("display","none");
});
$('.c').mouseenter(function(){
    $('.c').css("display", "block");
});
$('.c').mouseleave(function(){
    $('.c').css("display","none");
});

$('.item3').mouseenter(function(){
    $('.d').css("display","block");
});
$('.item3').mouseleave(function(){
    $('.d').css("display","none");
});
$('.d').mouseenter(function(){
    $('.d').css("display", "block");
});
$('.d').mouseleave(function(){
    $('.d').css("display","none");
});

$('.item4').mouseenter(function(){
    $('.e').css("display","block");
});
$('.item4').mouseleave(function(){
    $('.e').css("display","none");
});
$('.e').mouseenter(function(){
    $('.e').css("display", "block");
});
$('.e').mouseleave(function(){
    $('.e').css("display","none");
});

$('.item5').mouseenter(function(){
    $('.f').css("display","block");
});
$('.item5').mouseleave(function(){
    $('.f').css("display","none");
});
$('.f').mouseenter(function(){
    $('.f').css("display", "block");
});
$('.f').mouseleave(function(){
    $('.f').css("display","none");
});

$('.item6').mouseenter(function(){
    $('.g').css("display","block");
});
$('.item6').mouseleave(function(){
    $('.g').css("display","none");
});
$('.g').mouseenter(function(){
    $('.g').css("display", "block");
});
$('.g').mouseleave(function(){
    $('.g').css("display","none");
});

$('.p1').mouseenter(function(){
   $('.div1').css("display","block");
});
$('.p1').mouseleave(function(){
    $('.div1').css("display","none");
});
$('.p2').mouseenter(function(){
    $('.div2').css("display","block");
});
$('.p2').mouseleave(function(){
    $('.div2').css("display","none");
});

$('.p3').mouseenter(function(){
    $('.div3').css("display","block");
});
$('.p3').mouseleave(function(){
    $('.div3').css("display","none");
});

$('.p4').mouseenter(function(){
    $('.div4').css("display","block");
});
$('.p4').mouseleave(function(){
    $('.div4').css("display","none");
});

$('.p5').mouseenter(function(){
    $('.div5').css("display","block");
});
$('.p5').mouseleave(function(){
    $('.div5').css("display","none");
});

$('.p6').mouseenter(function(){
    $('.div6').css("display","block");
});
$('.p6').mouseleave(function(){
    $('.div6').css("display","none");
});
$('.p7').mouseenter(function(){
    $('.div7').css("display","block");
});
$('.p7').mouseleave(function(){
    $('.div7').css("display","none");
});

$('.p8').mouseenter(function(){
    $('.div8').css("display","block");
});
$('.p8').mouseleave(function(){
    $('.div8').css("display","none");
});

$('.p9').mouseenter(function(){
    $('.div9').css("display","block");
});
$('.p9').mouseleave(function(){
    $('.div9').css("display","none");
});

$('.p10').mouseenter(function(){
    $('.div10').css("display","block");
});
$('.p10').mouseleave(function(){
    $('.div10').css("display","none");
});

$('.p11').mouseenter(function(){
    $('.div11').css("display","block");
});
$('.p11').mouseleave(function(){
    $('.div11').css("display","none");
});

$('.p12').mouseenter(function(){
    $('.div12').css("display","block");
});
$('.p12').mouseleave(function(){
    $('.div12').css("display","none");
});

$('.p13').mouseenter(function(){
    $('.div13').css("display","block");
});
$('.p13').mouseleave(function(){
    $('.div13').css("display","none");
});

$('.p14').mouseenter(function(){
    $('.div14').css("display","block");
});
$('.p14').mouseleave(function(){
    $('.div14').css("display","none");
});
$('.footer-sns-weixin').mouseenter(function(){
   $('.footer-sns-weixin-expand').css("display","block");
});
$('.footer-sns-weixin').mouseleave(function(){
    $('.footer-sns-weixin-expand').css("display","none");
});
$('.shop-cart').mouseenter(function(){
    $('.shop-cart .shop-cart-icon span').css("color","red");
});
$('.shop-cart').mouseleave(function(){
    $('.shop-cart .shop-cart-icon span').css("color","#71777d");
});
$('.my-cart').mouseenter(function(){
   $ ('.my-cart').css("display","block");
});

var swiper = new Swiper('.lecturer-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    // autoplay: true,
    // disableOnInteraction:false,

    autoplay: {
        disableOnInteraction: false,
    },
    pagination: {
        el: '.slider-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
});
$('.swiper-slide').mouseenter(function () {
    swiper.autoplay.stop();
});
$('.swiper-slide').mouseleave(function () {
    swiper.autoplay.start();
});

// swiper.el.onmouseover = function(){
//     swiper.autoplay.stop();
// }




window.onscroll = function scrollFunction() {
    if (document.documentElement.scrollTop > 1500) {
        $('.elevator-top').css("display","block");
    } else {
        $(".elevator-top").css("display","none");
    }
};