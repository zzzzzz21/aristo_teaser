'use strict';

var $body = $('body');


document.addEventListener('DOMContentLoaded', function () {
	// 初期処理
	function init() {
		drawerNav();
		topCarousel();
		colorbox();
	}

	// 初期処理 呼び出し
	init();
});

// loadイベント(対応ブラウザ向け)
// ----------------------------------------
window.addEventListener('load', function () {
	// 初期処理
	function init() {
		checkScrollDir();
		loadingWindow();
		windowScroll();
		disableLink();
		gallery();
		mapSwitch();
        goPageTop();
        fixedButton();
	}

	// 初期処理 呼び出し
	init();
});


// loading
// ----------------------------------------
var loadingWindow = function loadingWindow () {
	var $loading = $('#data-loading'),
		$loadingImage = $('#data-loading img');
		$loadingImage.css('animation', 'none');
		$loading.delay(500).fadeOut(500);
	$(function() {
		setTimeout(function() {
			$loading.remove();
		}, 5000)});
	$(function() {
		setTimeout(function() {
			$body.removeClass('nowOnLoading');
			if($body.hasClass('home')){
//				$body.addClass('fixed');
			}
		}, 1000)
	});
};

// MENUボタン・ドロワーナビ
// ----------------------------------------
var drawerNav = function drawerNav() {
	var $container = $('#data-page'),
		$menuBtn = $('#data-menuBtn'),
		$drawerBody = $('#data-navDrawer'),
		$drawerMenu = $('#data-navDrawer a'),
		mql_mb = window.matchMedia('(max-width: 767px)');
	var isDrawerOpen = $container.hasClass('no-scroll'),
		initial_position = 0;

	function init() {
		mql_mb.addListener(handleWidthChange);
		handleWidthChange();

		$menuBtn.on('click', toggleDrawer);
		$drawerMenu.on('click', toggleDrawer);
	}

	function changeSet(mode, drawerState) {
		var defer = $.Deferred();

		if (drawerState === 'open') {
			// Mobileモード - ドロワーナビ展開時の場合：1.コンテンツはスクロールNG、2.メニューボタンを表示、3.メニューを表示、4.メニュー内にtabキー移動できるようにする
			$menuBtn.attr('aria-hidden', 'false').attr('aria-expanded', 'true');
			$drawerBody.attr('aria-hidden', 'false');
			controlTabbing('mobile', 'open');
			setTimeout(function () {
				$container.addClass('no-scroll');
			}, 200);
		} else {
			// Mobileモード - ドロワーナビ閉鎖時の場合：1.コンテンツはスクロールOK、2.メニューボタンを表示、3.メニューを非表示、4.メニュー内にtabキー移動できないようにする
			$menuBtn.attr('aria-hidden', 'false').attr('aria-expanded', 'false');
			$drawerBody.attr('aria-hidden', 'true');
			controlTabbing('mobile', 'close');
			$container.removeClass('no-scroll');
		}

		defer.resolve();
		return defer.promise();
	}

	function handleWidthChange() {
		if (mql_mb.matches) {
			changeSet('mobile');
		} else {
			changeSet('pc');
		}
		isDrawerOpen = false;
	}

	function toggleDrawer() {
		var promise = void 0;

		if (isDrawerOpen === 'suspend') {
			return;
		} else if (isDrawerOpen === false) {
			isDrawerOpen = 'suspend';
			initial_position = pageYOffset;
			promise = changeSet('sp', 'open');
			promise.done(function () {
				setTimeout(function () {
					isDrawerOpen = true;
				}, 200);
			});
		} else {
			isDrawerOpen = 'suspend';
			promise = changeSet('sp', 'close');
			promise.done(function () {
				window.scrollTo(0, initial_position);
				setTimeout(function () {
					isDrawerOpen = false;
				}, 200);
			});
		}
	}

	function controlTabbing(mode, drawerState) {
		var $changeTarget = $drawerBody.find('a, button, input'),
			$lastElm = $drawerBody.find('a, button, input').eq($changeTarget.length - 1);

		if (mode === 'pc') {
			$changeTarget.removeAttr('tabindex');
			removeTabRoop();
		} else if (drawerState === 'close') {
			$changeTarget.attr('tabindex', '-1');
			removeTabRoop();
		} else {
			$changeTarget.removeAttr('tabindex');
			addTabRoop();
		}

		// MobileモードでドロワーOpen時、tabキー移動をループさせる処理加える
		function addTabRoop() {
			$menuBtn.on('keydown', function (e) {
				if (e.keyCode === 9 && e.shiftKey) {
					e.preventDefault();
					$lastElm.focus();
				}
			});
			$lastElm.on('keydown', function (e) {
				if (e.keyCode === 9 && !e.shiftKey) {
					e.preventDefault();
					$menuBtn.focus();
				}
			});
		}

		function removeTabRoop() {
			$menuBtn.off('keydown');
			$lastElm.off('keydown');
		}
	}

	init();
};

// カルーセル
// ----------------------------------------
var topCarousel = function topCarousel() {
	var $carousel = $('#data-carousel'),
		slickOption = {
//			centerMode: true,
//			centerPadding: '60px',
//			dots: true,
			cssEase: 'linear',
			speed: 500,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
			zIndex: 1,
			responsive: [{
				breakpoint: 1280,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
//					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}]
		};

	function init() {
		$carousel.slick(slickOption);
	}

	if ($carousel.length > 0) {
		init();
	}

};

// トップアニメーション
// ----------------------------------------
var topLoading = function topLoading() {
	var $loadingClass = 'nowOnLoading';
	function init() {
		$body.addClass($loadingClass);
	}
	init();
};

var topAnimation = function topAnimation() {
	$(function() {
		setTimeout(function() {
			$body.removeClass('nowOnLoading');
		}, 1000)
	});
}

var windowScroll = function windowScroll() {

	
	$(window).scroll(function(){
		var body = $('body'),
			header = $('#data-header'),
			value = $(window).scrollTop(),
			windowH = $(window).height(),
			mainH = $('.page-head').height(),
			headerH = $('#data-header').height(),
			startPos = 0,
			currentPos = $(window).scrollTop();
		
		if (value > mainH - windowH + headerH) {
			if($(window).scrollTop() >= 200) {
				body.addClass('fixed');
//				header.removeClass('fadeInUp');
			}
		} else {
			if(currentPos === 0) {
				body.removeClass('fixed');
//				header.addClass('fadeIn').delay(1200).
//				queue(function() {
//					header.removeClass('fadeIn');
//				});
			}
		}
		startPos = currentPos;
	});
}

var checkScrollDir = function checkScrollDir() {
	var startY = $(window).scrollTop();
	$(window).scroll(function() {
		var presentY = $(window).scrollTop();
		if(startY > presentY) {
			$('body').addClass('scroll-up').removeClass('scroll-down');
		}
		else if(startY < presentY) {
			$('body').addClass('scroll-down').removeClass('scroll-up');
		}
		startY = presentY;
	});
}


// ページトップヘ戻るボタン
// ----------------------------------------
var goPageTop = function goPageTop() {
	var $goTopBtn = $('#data-goPageTop'),
		triggerPosition = window.innerHeight / 2;
	var scroll_position = 0,
		scrollTimer = false;

	function init() {
		$(window).on('scroll', scrollEvent);
		$goTopBtn.on('click', goPageTop);
	}

	function switchDisplay() {
		scroll_position = pageYOffset;
		if (triggerPosition <= scroll_position) {
			$goTopBtn.attr('aria-hidden', 'false').find('a').attr('tabindex', '0');
		} else {
			$goTopBtn.attr('aria-hidden', 'true').find('a').attr('tabindex', '-1');
		}
	}

	function scrollEvent() {
		if (scrollTimer !== false) {
			clearTimeout(scrollTimer);
		}
		scrollTimer = setTimeout(function () {
			switchDisplay();
		}, 20);
	}

	function goPageTop(e) {
		var $htmlBody = $('body, html');

		e.preventDefault();
		$htmlBody.animate({
			scrollTop: '0px'
		}, 400, 'swing', function () {
			$('.siteTitle__logo').find('a').focus();
		});
	}

	init();
};


// fixed-button
// ----------------------------------------
var fixedButton = function fixedButton() {
    var $fixedBtn = $('#data-fixedButton'),
        $goTopBtn = $('#data-goPageTop'),
        triggerPosition = window.innerHeight / 2;
    var scroll_position = 0,
        scrollTimer = false;

    function init() {
        $(window).on('scroll', scrollEvent);
        $goTopBtn.on('click', goPageTop);
    }

    function switchDisplay() {
        scroll_position = pageYOffset;
        if (triggerPosition <= scroll_position) {
            $fixedBtn.attr('aria-hidden', 'false').find('a').attr('tabindex', '0');
        } else {
            $fixedBtn.attr('aria-hidden', 'true').find('a').attr('tabindex', '-1');
        }
    }

    function scrollEvent() {
        if (scrollTimer !== false) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(function () {
            switchDisplay();
        }, 20);
    }

    init();
};


// UA判別
// ----------------------------------------
var checkUA = function checkUA() {
	var userAgent = window.navigator.userAgent.toLowerCase(),
		device = function (ua) {
			return {
				TB: ua.indexOf('windows') != -1 && ua.indexOf('touch') != -1 && ua.indexOf('tablet pc') == -1 || ua.indexOf('ipad') != -1 || ua.indexOf('android') != -1 && ua.indexOf('mobile') == -1 || ua.indexOf('firefox') != -1 && ua.indexOf('tablet') != -1 || ua.indexOf('kindle') != -1 || ua.indexOf('silk') != -1 || ua.indexOf('playbook') != -1,
				SP: ua.indexOf('windows') != -1 && ua.indexOf('phone') != -1 || ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1 || ua.indexOf('android') != -1 && ua.indexOf('mobile') != -1 || ua.indexOf('firefox') != -1 && ua.indexOf('mobile') != -1 || ua.indexOf('blackberry') != -1,
				iOS: ua.indexOf('ipad') != -1 || ua.indexOf('iphone') != -1 || ua.indexOf('ipod') != -1,
				Android: ua.indexOf('android') != -1,
				ltIE11: ua.indexOf('msie') != -1 && ua.indexOf('opera') == -1
			};
		}(userAgent);

	return {
		'TB': device.TB,
		'SP': device.SP,
		'iOS': device.iOS,
		'Android': device.Android,
		'ltIE11': device.ltIE11,
		'UA': userAgent
	};
};

// colorboxでモーダルを表示する
// ----------------------------------------
var colorbox = function colorbox() {
	$('.youtube').colorbox({
		iframe: true,
		scrolling: false,
		maxWidth: '1280px',
		maxHeight: '90%',
		width: '90%',
		height: ($(window).width() * 0.9) * 0.7,
		opacity: 0.9,
		speed: 600,
		fixed: true
	});
}

// PCで電話リンクを無効にする
// ----------------------------------------
var disableLink = function disableLink() {
	if (!checkUA.SP && !checkUA.TB) {
		$('a[href^="tel:"]').on('click', function (e) {
			e.preventDefault();
		});
	}
};

var gallery = function gallery() {
	$(function(){
		$('.gallery-images__thumbnail').each(function(){
			var firstimg = $(this).find('.gallery-images__thumbnail__item:first-child img');
			var defaultimg = "<img src='" + firstimg.attr('src') + "' alt='" + firstimg.attr('alt') + "'>";
			firstimg.parent().parent().prev().html(defaultimg);
		});
		$('.gallery-images__thumbnail li:first-child').addClass('current');

		$('.gallery-images__thumbnail img').on('click', function(){ 
			var main = "<img src='" + $(this).attr('src') + "' alt='" + $(this).attr('alt') + "'  class='data-image-main' style='display: none'>";
			$(this).parent().parent().prev().html(main);
			$('.data-image-main').animate({opacity: 'show'}, 'slow');
			$(this).parent().addClass('current').siblings().removeClass('current');
			return false;
		});    
	});	
};

var mapSwitch = function mapSwitch() {
	var mapMain = $('.unit-map__main'),
		mainImg = $('.unit-map__main img'),
		navItem = $('.unit-map__nav__item a');
	$(function($){
		mainImg.bind('load',function(){
			var ImgHeight = $(this).height();
		});

		navItem.click(function(){
			if($(this).hasClass('-active') == false){
				navItem.removeClass('-active');
				$(this).addClass('-active');
				mainImg.hide().attr('src',$(this).attr('href')).fadeIn();
			};
			return false;
		}).filter(':eq(0)').click();
	});	
};

// smooth scroll
// ----------------------------------------
$('a[href^="#"]').click(function(){
	var speed = 500;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$("html, body").animate({scrollTop:position}, speed, "swing");
	return false;
});

