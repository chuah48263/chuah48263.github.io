'use strict';

$(document).ready(function() {
  $('#fullpage').fullpage({
    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors: ['Home', 'About', 'Portfolio', 'Contact'],
    navigation: true,
    navigationPosition: 'right',
    showActiveTooltip: true,

    //Scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    scrollOverflow: false,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,

    //Design
    controlArrows: true,
    verticalCentered: true,
    resize: false,
    paddingTop: '50px',
    paddingBottom: '0',
    responsiveWidth: 0,
    responsiveHeight: 0,
  });
});

$(window).load(function() {
  $('.portfolio-img').width($('.portfolio-img').width() * 75 / 100);
  $('.portfolio').width($('.portfolio-img').width());
  var margin = ($('.jumbotron').width() - 30 - $('.portfolio-img').width() *
    3) / 2;
  for (var i = 0; i < 9; i += 3) {
    $('.portfolio').eq(i).css('margin-left', margin + 'px');
  }
});
