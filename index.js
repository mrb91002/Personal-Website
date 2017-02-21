'use strict';

const cloudLayer1 = document.querySelector('.cloud-layer-1');
const cloudLayer2 = document.querySelector('.cloud-layer-2');
const coins = document.querySelector('.coins');
const image2 = document.querySelector('.image2');
const yoshi = document.querySelector('.yoshi');
const yoshiContainer = document.querySelector('.yoshi-container');

var animating = false;
var currentPosition = 0;
var flipped = false;

yoshi.addEventListener('animationend', function() {
  yoshi.classList.toggle('animate-now');
  yoshi.classList.toggle('sprite');
  animating = false;
})

window.addEventListener('scroll', function() {
  cloudLayer1.style.left = `-${window.pageYOffset * .3}px`;
  cloudLayer2.style.left = `-${window.pageYOffset * .2}px`;
  image2.style.left = `-${window.pageYOffset * .4}px`;
  coins.style.left = `-${window.pageYOffset * .4}px`;

  if (animating === false) {
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


// set up text to print, each item in array is new line
var aText = new Array(
"Hi! I heard you want to hire mario... but he's nowhere to be found!", " ", "Perhaps you should just hire the programmer who made this world instead...", " ", "Either way, let's get going!"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
