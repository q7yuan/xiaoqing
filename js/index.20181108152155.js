(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js').attr('src', 'images/2-299.png');
$('.js-2').attr('src', 'images/xi-qing-huo-dong-92.png');
$('.js-3').attr('src', 'images/xiao-qing-zhu-zhan-75.png');
$('.js-4').attr('src', 'images/xi-wang-shou-ye-75.png');
$('.js-5').attr('src', 'images/tkk-design-500.png');
$('.js-6').attr('src', 'images/celebration-activiti-177.png');
$('.js-7').attr('src', 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-693.png');
$('.js-8').attr('src', (dpi>1) ? 'images/yi-jian-fan-kui-48.png' : 'images/yi-jian-fan-kui-24.png');
$('.js-9').attr('src', (dpi>1) ? 'images/shou-huo-de-zhi-44.png' : 'images/shou-huo-de-zhi-22.png');
$('.js-10').attr('src', (dpi>1) ? 'images/shi-jian-52.png' : 'images/shi-jian-26-1.png');
$('.js-11').attr('src', 'images/q-362.jpg');
$('.js-12').attr('src', 'images/w-367.jpg');
$('.js-13').attr('src', 'images/e-368.jpg');
$('.js-14').attr('src', 'images/r-362.jpg');
$('.js-15').attr('src', 'images/t-366.jpg');
$('.js-16').attr('src', 'images/y-369.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/shi-wu-nian-you-ni-770.png' : 'images/shi-wu-nian-you-ni-385.png');
$('.js-18').attr('src', (dpi>1) ? 'images/1-750.jpg' : 'images/1-375.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/2-750.jpg' : 'images/2-375.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/3-750.jpg' : 'images/3-375.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/4-750.jpg' : 'images/4-375.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/5-750.jpg' : 'images/5-375.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/6-750.jpg' : 'images/6-375.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/7-750.jpg' : 'images/7-375.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/8-750.jpg' : 'images/8-375.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/9-750.jpg' : 'images/9-375.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/10-750.jpg' : 'images/10-375.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/11-750.jpg' : 'images/11-375.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/12-750.jpg' : 'images/12-375.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/13-750.jpg' : 'images/13-375.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/14-750.jpg' : 'images/14-375.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/15-750.jpg' : 'images/15-375.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/16-750.jpg' : 'images/16-375.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/17-750.jpg' : 'images/17-375.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/18-750.jpg' : 'images/18-375.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/19-750.jpg' : 'images/19-375.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/20-750.jpg' : 'images/20-375.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/21-750.jpg' : 'images/21-375.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/22-750.jpg' : 'images/22-375.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/23-750.jpg' : 'images/23-375.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/24-750.jpg' : 'images/24-375.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/ye-mian-1-500.png' : 'images/ye-mian-1-250.png');}else{$('.js').attr('src', (dpi>1) ? 'images/2-140.png' : 'images/2-70.png');
$('.js-2').attr('src', (dpi>1) ? 'images/xi-qing-huo-dong-50.png' : 'images/xi-qing-huo-dong-25.png');
$('.js-3').attr('src', (dpi>1) ? 'images/xiao-qing-zhu-zhan-40.png' : 'images/xiao-qing-zhu-zhan-20.png');
$('.js-4').attr('src', (dpi>1) ? 'images/xi-wang-shou-ye-40.png' : 'images/xi-wang-shou-ye-20.png');
$('.js-5').attr('src', (dpi>1) ? 'images/tkk-design-432.png' : 'images/tkk-design-216.png');
$('.js-6').attr('src', (dpi>1) ? 'images/celebration-activiti-126.png' : 'images/celebration-activiti-63.png');
$('.js-7').attr('src', (dpi>1) ? 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-368.png' : 'images/yi-shu-she-ji-xi15zhou-nian-qing-huo-dong-an-pai-184.png');
$('.js-8').attr('src', (dpi>1) ? 'images/yi-jian-fan-kui-24.png' : 'images/yi-jian-fan-kui-12.png');
$('.js-9').attr('src', (dpi>1) ? 'images/shou-huo-de-zhi-20.png' : 'images/shou-huo-de-zhi-10.png');
$('.js-10').attr('src', (dpi>1) ? 'images/shi-jian-26.png' : 'images/shi-jian-13.png');
$('.js-11').attr('src', (dpi>1) ? 'images/q-292.jpg' : 'images/q-146.jpg');
$('.js-12').attr('src', (dpi>1) ? 'images/w-294.jpg' : 'images/w-147.jpg');
$('.js-13').attr('src', (dpi>1) ? 'images/e-292.jpg' : 'images/e-146.jpg');
$('.js-14').attr('src', (dpi>1) ? 'images/r-292.jpg' : 'images/r-146.jpg');
$('.js-15').attr('src', (dpi>1) ? 'images/t-292.jpg' : 'images/t-146.jpg');
$('.js-16').attr('src', (dpi>1) ? 'images/y-292.jpg' : 'images/y-146.jpg');
$('.js-17').attr('src', (dpi>1) ? 'images/shi-wu-nian-you-ni-206.png' : 'images/shi-wu-nian-you-ni-103.png');
$('.js-18').attr('src', (dpi>1) ? 'images/1-200.jpg' : 'images/1-100.jpg');
$('.js-19').attr('src', (dpi>1) ? 'images/2-200.jpg' : 'images/2-100.jpg');
$('.js-20').attr('src', (dpi>1) ? 'images/3-200.jpg' : 'images/3-100.jpg');
$('.js-21').attr('src', (dpi>1) ? 'images/4-200.jpg' : 'images/4-100.jpg');
$('.js-22').attr('src', (dpi>1) ? 'images/5-200.jpg' : 'images/5-100.jpg');
$('.js-23').attr('src', (dpi>1) ? 'images/6-200.jpg' : 'images/6-100.jpg');
$('.js-24').attr('src', (dpi>1) ? 'images/7-200.jpg' : 'images/7-100.jpg');
$('.js-25').attr('src', (dpi>1) ? 'images/8-200.jpg' : 'images/8-100.jpg');
$('.js-26').attr('src', (dpi>1) ? 'images/9-200.jpg' : 'images/9-100.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/10-200.jpg' : 'images/10-100.jpg');
$('.js-28').attr('src', (dpi>1) ? 'images/11-200.jpg' : 'images/11-100.jpg');
$('.js-29').attr('src', (dpi>1) ? 'images/12-200.jpg' : 'images/12-100.jpg');
$('.js-30').attr('src', (dpi>1) ? 'images/13-200.jpg' : 'images/13-100.jpg');
$('.js-31').attr('src', (dpi>1) ? 'images/14-200.jpg' : 'images/14-100.jpg');
$('.js-32').attr('src', (dpi>1) ? 'images/15-200.jpg' : 'images/15-100.jpg');
$('.js-33').attr('src', (dpi>1) ? 'images/16-200.jpg' : 'images/16-100.jpg');
$('.js-34').attr('src', (dpi>1) ? 'images/17-200.jpg' : 'images/17-100.jpg');
$('.js-35').attr('src', (dpi>1) ? 'images/18-200.jpg' : 'images/18-100.jpg');
$('.js-36').attr('src', (dpi>1) ? 'images/19-200.jpg' : 'images/19-100.jpg');
$('.js-37').attr('src', (dpi>1) ? 'images/20-200.jpg' : 'images/20-100.jpg');
$('.js-38').attr('src', (dpi>1) ? 'images/21-200.jpg' : 'images/21-100.jpg');
$('.js-39').attr('src', (dpi>1) ? 'images/22-200.jpg' : 'images/22-100.jpg');
$('.js-40').attr('src', (dpi>1) ? 'images/23-200.jpg' : 'images/23-100.jpg');
$('.js-41').attr('src', (dpi>1) ? 'images/24-200.jpg' : 'images/24-100.jpg');
$('.js-42').attr('src', (dpi>1) ? 'images/ye-mian-1-132.png' : 'images/ye-mian-1-66.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-85').mouseenter(function() { $.loadImages('images/1-2272.jpg', function() { }) });
$('.js-85').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-85-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/1-2272.jpg'; } } });
$('.js-86').mouseenter(function() { $.loadImages('images/2-1000.jpg', function() { }) });
$('.js-86').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-86-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/2-1000.jpg'; } } });
$('.js-87').mouseenter(function() { $.loadImages('images/3-1296.jpg', function() { }) });
$('.js-87').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-87-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/3-1296.jpg'; } } });
$('.js-88').mouseenter(function() { $.loadImages('images/4-1584.jpg', function() { }) });
$('.js-88').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-88-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/4-1584.jpg'; } } });
$('.js-89').mouseenter(function() { $.loadImages('images/5-1584.jpg', function() { }) });
$('.js-89').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-89-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/5-1584.jpg'; } } });
$('.js-90').mouseenter(function() { $.loadImages('images/6-1296.jpg', function() { }) });
$('.js-90').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-90-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/6-1296.jpg'; } } });
$('.js-91').mouseenter(function() { $.loadImages('images/7-1584.jpg', function() { }) });
$('.js-91').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-91-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/7-1584.jpg'; } } });
$('.js-92').mouseenter(function() { $.loadImages('images/8-1296.jpg', function() { }) });
$('.js-92').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-92-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/8-1296.jpg'; } } });
$('.js-93').mouseenter(function() { $.loadImages('images/9-1584.jpg', function() { }) });
$('.js-93').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-93-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/9-1584.jpg'; } } });
$('.js-94').mouseenter(function() { $.loadImages('images/10-1296.jpg', function() { }) });
$('.js-94').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-94-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/10-1296.jpg'; } } });
$('.js-95').mouseenter(function() { $.loadImages('images/11-1701.jpg', function() { }) });
$('.js-95').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-95-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/11-1701.jpg'; } } });
$('.js-96').mouseenter(function() { $.loadImages('images/12-1191.jpg', function() { }) });
$('.js-96').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-96-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/12-1191.jpg'; } } });
$('.js-97').mouseenter(function() { $.loadImages('images/13-1701.jpg', function() { }) });
$('.js-97').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-97-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/13-1701.jpg'; } } });
$('.js-98').mouseenter(function() { $.loadImages('images/14-1176.jpg', function() { }) });
$('.js-98').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-98-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/14-1176.jpg'; } } });
$('.js-99').mouseenter(function() { $.loadImages('images/15-1984.jpg', function() { }) });
$('.js-99').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-99-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/15-1984.jpg'; } } });
$('.js-100').mouseenter(function() { $.loadImages('images/16-1162.jpg', function() { }) });
$('.js-100').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-100-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/16-1162.jpg'; } } });
$('.js-101').mouseenter(function() { $.loadImages('images/17-2000.jpg', function() { }) });
$('.js-101').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-101-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/17-2000.jpg'; } } });
$('.js-102').mouseenter(function() { $.loadImages('images/18-2000.jpg', function() { }) });
$('.js-102').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-102-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/18-2000.jpg'; } } });
$('.js-103').mouseenter(function() { $.loadImages('images/19-1151.jpg', function() { }) });
$('.js-103').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-103-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/19-1151.jpg'; } } });
$('.js-104').mouseenter(function() { $.loadImages('images/20-1151.jpg', function() { }) });
$('.js-104').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-104-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/20-1151.jpg'; } } });
$('.js-105').mouseenter(function() { $.loadImages('images/21-2000.jpg', function() { }) });
$('.js-105').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-105-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/21-2000.jpg'; } } });
$('.js-106').mouseenter(function() { $.loadImages('images/22-2000.jpg', function() { }) });
$('.js-106').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-106-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/22-2000.jpg'; } } });
$('.js-107').mouseenter(function() { $.loadImages('images/23-2000.jpg', function() { }) });
$('.js-107').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-107-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/23-2000.jpg'; } } });
$('.js-108').mouseenter(function() { $.loadImages('images/24-2000.jpg', function() { }) });
$('.js-108').magnificPopup({ type: 'image', closeOnContentClick: true, closeBtnInside: false, mainClass: 'mfp-fade js-108-lightbox mfp-no-margins mfp-with-zoom', image: { verticalFit: true }, zoom: { enabled: true, duration: 300 }, callbacks: { elementParse: function(item) { item.src = 'images/24-2000.jpg'; } } });

});