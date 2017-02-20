'use strict';

const image = document.querySelector('.image');
const image2 = document.querySelector('.image2');
const yoshi = document.querySelector('.yoshi');
const yoshiContainer = document.querySelector('.yoshi-container');

var animating = false;
var currentPosition = 0;
var flipped = false;

yoshi.addEventListener('animationend', function() {
  yoshi.classList.toggle('animate-now');
  console.log('animation has ended');
  yoshi.classList.toggle('sprite');
  console.log('ended');
  animating = false;
  console.log(animating);
})

window.addEventListener('scroll', function() {
  image.style.left = `-${window.pageYOffset * .2}px`;
  image2.style.left = `-${window.pageYOffset * .4}px`;

  if (animating === false) {
    console.log('here');
    yoshi.classList.toggle('sprite');
    yoshi.classList.toggle('animate-now');
    animating = true;
  }
    // yoshi.animate(yoshiRunRight, yoshiRunRightTiming);
  // }

  // var timer = function() {
  //   setTimeout
  // }



  if (currentPosition > window.pageYOffset && flipped === false) {
    yoshi.classList.toggle('flip');
    flipped = true;
  }

  if (currentPosition < window.pageYOffset && flipped === true) {
    yoshi.classList.toggle('flip');
    flipped = false;
  }


  currentPosition = window.pageYOffset


  console.log('scrolling', window.pageYOffset, window.screenY);
});

const yoshiJump =
[
  {
    transform: 'translate3D(-0%, -0%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 0.929% 20.565%'
  },
  {
    transform: 'translate3D(-0%, -50%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 0.929% 20.565%',
    offset: .25
  },
  {
    transform: 'translate3D(-0%, -50%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 6.574% 20.319%',
    offset: .25
  },
  {
    transform: 'translate3D(-0%, -100%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 6.574% 20.319%',
    offset: .5
  },
  {
    transform: 'translate3D(-0%, -100%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 12.13% 20.079%',
    offset: .5
  },
  {
    transform: 'translate3D(-0%, -0%, 0)',
    background: 'url("images/YoshiTest2.gif") no-repeat 12.13% 20.079%',
    offset: 1
  },
];

const yoshiTiming = {
  duration: 700,
  iterations: 1,
}

document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    e.preventDefault();
    yoshi.animate(yoshiJump, yoshiTiming);
  }
});
