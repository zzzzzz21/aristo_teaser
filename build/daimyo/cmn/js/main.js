var swiper = new Swiper('.layout__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3,
    },
    // 980px以上の場合
    980: {
      slidesPerView: 3,
    },
    // 1200px以上の場合
    1200: {
      slidesPerView: 3,
    }
  }
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-01', {
  slidesPerView: 'auto',
  spaceBetween: 10,

  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-01', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-02', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-02', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-03', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-03', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-04', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-04', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-05', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-05', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-06', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-06', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
//サムネイル
var sliderThumbnail = new Swiper('.slider-thumbnail-07', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  slideToClickedSlide: true,
});
var swiper = new Swiper('.floor__img__slider-07', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  thumbs: {
    swiper: sliderThumbnail
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
var swiper = new Swiper('.plan__img__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  centermode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});
window.addEventListener('DOMContentLoaded', function() {
  var w = window.innerWidth;
  if (w <= 768){
    var scroll = new SmoothScroll('a[href*="#"]',{
      header: '[data-scroll-header]'
    });
  }else{
    var scroll = new SmoothScroll('a[href*="#"]');
  }
});
$(function(){
　//ローディングエリアを取得
　var loading = $("#loading");
　//ローディングエリアを隠す処理
　var isHidden = function(){
　　loading.fadeOut(500);
　};
　setTimeout(isHidden,5500);
  // if($.cookie("access")){
  //       $('#loading').css({display:'none'});
  //   }
  //   $(window).load(function(){
  //       $.cookie("access",$('body').addClass('access'));
  // })
});
