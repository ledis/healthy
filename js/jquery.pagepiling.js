!function(n,e,t,o){"use strict";n.fn.pagepiling=function(i){function a(n){n.addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />')}function s(e){var t=n(".pp-section.active").index(".pp-section"),o=e.index(".pp-section");return t>o?"up":"down"}function c(e,t){if(e.html()!=o){var i={destination:e,animated:t,activeSection:n(".pp-section.active"),anchorLink:e.data("anchor"),sectionIndex:e.index(".pp-section"),toMove:e,yMovement:s(e),leavingSection:n(".pp-section.active").index(".pp-section")+1};if(!i.activeSection.is(e)){"undefined"==typeof i.animated&&(i.animated=!0),"undefined"!=typeof i.anchorLink&&u(i.anchorLink,i.sectionIndex),i.destination.addClass("active").siblings().removeClass("active"),i.sectionsToMove=p(i),"down"===i.yMovement?(i.translate3d=W(),i.scrolling="-100%",G.css3||i.sectionsToMove.each(function(e){e!=i.activeSection.index(".pp-section")&&n(this).css(v(i.scrolling))}),i.animateSection=i.activeSection):(i.translate3d="translate3d(0px, 0px, 0px)",i.scrolling="0",i.animateSection=e),n.isFunction(G.onLeave)&&G.onLeave.call(this,i.leavingSection,i.sectionIndex+1,i.yMovement),r(i),A(i.anchorLink),z(i.anchorLink,i.sectionIndex),X=i.anchorLink;var a=(new Date).getTime();F=a}}}function r(e){G.css3?(w(e.animateSection,e.translate3d,e.animated),e.sectionsToMove.each(function(){w(n(this),e.translate3d,e.animated)}),setTimeout(function(){l(e)},G.scrollingSpeed)):(e.scrollOptions=v(e.scrolling),e.animated?e.animateSection.animate(e.scrollOptions,G.scrollingSpeed,G.easing,function(){d(e),l(e)}):(e.animateSection.css(v(e.scrolling)),setTimeout(function(){d(e),l(e)},400)))}function l(e){n.isFunction(G.afterLoad)&&G.afterLoad.call(this,e.anchorLink,e.sectionIndex+1)}function p(e){var t;return t="down"===e.yMovement?n(".pp-section").map(function(t){if(t<e.destination.index(".pp-section"))return n(this)}):n(".pp-section").map(function(t){if(t>e.destination.index(".pp-section"))return n(this)})}function d(e){"up"===e.yMovement&&e.sectionsToMove.each(function(t){n(this).css(v(e.scrolling))})}function v(n){return"vertical"===G.direction?{top:n}:{left:n}}function u(n,e){G.anchors.length?(location.hash=n,f(location.hash)):f(String(e))}function f(e){e=e.replace("#",""),n("body")[0].className=n("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g,""),n("body").addClass("pp-viewing-"+e)}function h(){var e=t.location.hash.replace("#",""),o=e,i=n('.pp-section[data-anchor="'+o+'"]');i.length>0&&c(i,G.animateAnchor)}function m(){var n=(new Date).getTime();return n-F<V+G.scrollingSpeed}function g(){var e=t.location.hash.replace("#","").split("/"),o=e[0];if(o.length&&o&&o!==X){var i;i=isNaN(o)?n('[data-anchor="'+o+'"]'):n(".pp-section").eq(o-1),c(i)}}function S(n){return{"-webkit-transform":n,"-moz-transform":n,"-ms-transform":n,transform:n}}function w(n,e,t){n.toggleClass("pp-easing",t),n.css(S(e))}function y(e){if(!m()){e=t.event||e;var o=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY||-e.detail)),i=n(".pp-section.active"),a=T(i);return o<0?x("down",a):x("up",a),!1}}function x(n,e){var t,o;if("down"==n?(t="bottom",o=O.moveSectionDown):(t="top",o=O.moveSectionUp),e.length>0){if(!b(t,e))return!0;o()}else o()}function b(n,e){return"top"===n?!e.scrollTop():"bottom"===n?e.scrollTop()+1+e.innerHeight()>=e[0].scrollHeight:void 0}function T(n){return n.filter(".pp-scrollable")}function C(){B.get(0).addEventListener?(B.get(0).removeEventListener("mousewheel",y,!1),B.get(0).removeEventListener("wheel",y,!1)):B.get(0).detachEvent("onmousewheel",y)}function M(){B.get(0).addEventListener?(B.get(0).addEventListener("mousewheel",y,!1),B.get(0).addEventListener("wheel",y,!1)):B.get(0).attachEvent("onmousewheel",y)}function k(){if(Q){var n=L();B.off("touchstart "+n.down).on("touchstart "+n.down,P),B.off("touchmove "+n.move).on("touchmove "+n.move,N)}}function E(){if(Q){var n=L();B.off("touchstart "+n.down),B.off("touchmove "+n.move)}}function L(){var n;return n=t.PointerEvent?{down:"pointerdown",move:"pointermove",up:"pointerup"}:{down:"MSPointerDown",move:"MSPointerMove",up:"MSPointerUp"}}function D(n){var e=new Array;return e.y="undefined"!=typeof n.pageY&&(n.pageY||n.pageX)?n.pageY:n.touches[0].pageY,e.x="undefined"!=typeof n.pageX&&(n.pageY||n.pageX)?n.pageX:n.touches[0].pageX,e}function I(n){return"undefined"==typeof n.pointerType||"mouse"!=n.pointerType}function P(n){var e=n.originalEvent;if(I(e)){var t=D(e);R=t.y,j=t.x}}function N(e){var t=e.originalEvent;if(!Y(e.target)&&I(t)){e.preventDefault();var o=n(".pp-section.active"),i=T(o);if(!m()){var a=D(t);H=a.y,K=a.x,"horizontal"===G.direction&&Math.abs(j-K)>Math.abs(R-H)?Math.abs(j-K)>B.width()/100*G.touchSensitivity&&(j>K?x("down",i):K>j&&x("up",i)):Math.abs(R-H)>B.height()/100*G.touchSensitivity&&(R>H?x("down",i):H>R&&x("up",i))}}}function Y(e,t){t=t||0;var o=n(e).parent();return!!(t<G.normalScrollElementTouchThreshold&&o.is(G.normalScrollElements))||t!=G.normalScrollElementTouchThreshold&&Y(o,++t)}function q(){n("body").append('<div id="pp-nav"><ul></ul></div>');var e=n("#pp-nav");e.css("color",G.navigation.textColor),e.addClass(G.navigation.position);for(var t=0;t<n(".pp-section").length;t++){var o="";if(G.anchors.length&&(o=G.anchors[t]),"undefined"!==G.navigation.tooltips){var i=G.navigation.tooltips[t];"undefined"==typeof i&&(i="")}e.find("ul").append('<li data-tooltip="'+i+'"><a href="#'+o+'"><span></span></a></li>')}e.find("span").css("border-color",G.navigation.bulletsColor)}function z(e,t){if(G.navigation)if(n("#pp-nav").find(".active").removeClass("active"),n(".pp-tooltip").remove(),e){var o=n("#pp-nav").find('a[href="#'+e+'"]');o.addClass("active");var i=o.parent().data("tooltip");n('<div class="pp-tooltip '+G.navigation.position+'">'+i+"</div>").hide().appendTo(o.parent()).fadeIn(200)}else{var o=n("#pp-nav").find("li").eq(t).find("a");o.addClass("active");var i=o.parent().data("tooltip");n('<div class="pp-tooltip '+G.navigation.position+'">'+i+"</div>").hide().appendTo(o.parent()).fadeIn(200)}}function A(e){G.menu&&(n(G.menu).find(".active").removeClass("active"),n(G.menu).find('[data-menuanchor="'+e+'"]').addClass("active"))}function U(){var n,i=e.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};e.body.insertBefore(i,null);for(var s in a)i.style[s]!==o&&(i.style[s]="translate3d(1px,1px,1px)",n=t.getComputedStyle(i).getPropertyValue(a[s]));return e.body.removeChild(i),n!==o&&n.length>0&&"none"!==n}function W(){return"vertical"!==G.direction?"translate3d(-100%, 0px, 0px)":"translate3d(0px, -100%, 0px)"}var X,O=n.fn.pagepiling,B=n(this),F=0,Q="ontouchstart"in t||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,R=0,j=0,H=0,K=0,V=600,G=n.extend(!0,{direction:"vertical",menu:null,verticalCentered:!0,sectionsColor:[],anchors:[],scrollingSpeed:700,easing:"easeInQuart",loopBottom:!1,loopTop:!1,css3:!0,navigation:{textColor:"#000",bulletsColor:"#000",position:"right",tooltips:[]},normalScrollElements:null,normalScrollElementTouchThreshold:5,touchSensitivity:5,keyboardScrolling:!0,sectionSelector:".section",animateAnchor:!1,afterLoad:null,onLeave:null,afterRender:null},i);n.extend(n.easing,{easeInQuart:function(n,e,t,o,i){return o*(e/=i)*e*e*e+t}}),O.setScrollingSpeed=function(n){G.scrollingSpeed=n},O.setMouseWheelScrolling=function(n){n?M():C()},O.setAllowScrolling=function(n){n?(O.setMouseWheelScrolling(!0),k()):(O.setMouseWheelScrolling(!1),E())},O.setKeyboardScrolling=function(n){G.keyboardScrolling=n},O.moveSectionUp=function(){var e=n(".pp-section.active").prev(".pp-section");!e.length&&G.loopTop&&(e=n(".pp-section").last()),e.length&&c(e)},O.moveSectionDown=function(){var e=n(".pp-section.active").next(".pp-section");!e.length&&G.loopBottom&&(e=n(".pp-section").first()),e.length&&c(e)},O.moveTo=function(e){var t="";t=isNaN(e)?n('[data-anchor="'+e+'"]'):n(".pp-section").eq(e-1),t.length>0&&c(t)},n(G.sectionSelector).each(function(){n(this).addClass("pp-section")}),G.css3&&(G.css3=U()),n(B).css({overflow:"hidden","-ms-touch-action":"none","touch-action":"none"}),O.setAllowScrolling(!0),n.isEmptyObject(G.navigation)||q();var J=n(".pp-section").length;n(".pp-section").each(function(e){n(this).data("data-index",e),n(this).css("z-index",J),e||0!==n(".pp-section.active").length||n(this).addClass("active"),"undefined"!=typeof G.anchors[e]&&n(this).attr("data-anchor",G.anchors[e]),"undefined"!=typeof G.sectionsColor[e]&&n(this).css("background-color",G.sectionsColor[e]),G.verticalCentered&&!n(this).hasClass("pp-scrollable")&&a(n(this)),J-=1}).promise().done(function(){G.navigation&&(n("#pp-nav").css("margin-top","-"+n("#pp-nav").height()/2+"px"),n("#pp-nav").find("li").eq(n(".pp-section.active").index(".pp-section")).find("a").addClass("active")),n(t).on("load",function(){h()}),n.isFunction(G.afterRender)&&G.afterRender.call(this)}),n(t).on("hashchange",g),n(e).keydown(function(e){if(G.keyboardScrolling&&!m())switch(e.which){case 38:case 33:O.moveSectionUp();break;case 40:case 34:O.moveSectionDown();break;case 36:O.moveTo(1);break;case 35:O.moveTo(n(".pp-section").length);break;case 37:O.moveSectionUp();break;case 39:O.moveSectionDown();break;default:return}}),G.normalScrollElements&&(n(e).on("mouseenter",G.normalScrollElements,function(){O.setMouseWheelScrolling(!1)}),n(e).on("mouseleave",G.normalScrollElements,function(){O.setMouseWheelScrolling(!0)})),n(e).on("click touchstart","#pp-nav a",function(e){e.preventDefault();var t=n(this).parent().index();c(n(".pp-section").eq(t))}),n(e).on({},"#pp-nav li")}}(jQuery,document,window);