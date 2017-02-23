'use strict';

const cloudLayer1 = document.querySelector('.cloud-layer-1');
const cloudLayer2 = document.querySelector('.cloud-layer-2');
const coins = document.querySelector('.coins');
const image2 = document.querySelector('.image2');
const yoshi = document.querySelector('.yoshi');
const yoshiContainer = document.querySelector('.yoshi-container');
const commentBoxBottom = document.querySelector('.comment-box-bottom');
const coinBlock1 = document.querySelector('.coin-block-1');

var running = false;
var jumping = false;
var currentPosition = 0;
var flipped = false;

// remove all animations and reset animation status
yoshi.addEventListener('animationend', function() {
  yoshi.classList.remove('animate-run');
  yoshi.classList.remove('sprite-run');
  yoshi.classList.remove('animate-jump');
  yoshi.classList.remove('sprite-jump');
  yoshiContainer.classList.remove('animate-jump-vert');
  jumping = false;
  running = false;
  console.log(jumping, running);
})

window.addEventListener('scroll', function() {
  cloudLayer1.style.left = `-${window.pageYOffset * .3}px`;
  cloudLayer2.style.left = `-${window.pageYOffset * .2}px`;
  image2.style.left = `-${window.pageYOffset * .4}px`;
  coins.style.left = `-${window.pageYOffset * .4}px`;

  if (running === false) {
    yoshi.classList.toggle('sprite-run');
    yoshi.classList.toggle('animate-run');
    running = true;
  }

  if (currentPosition > window.pageYOffset && flipped === false) {
    yoshi.classList.toggle('flip');
    flipped = true;
  }

  if (currentPosition < window.pageYOffset && flipped === true) {
    yoshi.classList.toggle('flip');
    flipped = false;
  }

  // if (window.pageYOffset > 1430 && window.pageYOffset < 1590 ) {
  //   console.log('jump');
  //   if (jumping === false) {
  //     jumping = true;
  //     yoshiContainer.classList.toggle('animate-jump-vert')
  //     yoshi.classList.toggle('sprite-jump');
  //     yoshi.classList.toggle('animate-jump');
  //   }
  // }

  if (window.pageYOffset > 2225 && window.pageYOffset < 2475) {
    console.log(window.pageYOffset, yoshiContainer.style );
      yoshiContainer.style.bottom =
        `${((window.pageYOffset - 2225) * .2 ) + 150}px`;
  }

  if (window.pageYOffset > 2476 && window.pageYOffset < 3990) {
      yoshiContainer.style.bottom =
        `${200}px`;
  }

  if (window.pageYOffset > 2000 && window.pageYOffset < 2224) {
      yoshiContainer.style.bottom =
        `${150}px`;
  }

  //3990
  //  else {
  //   yoshiContainer.style.bottom =
  //     `${window.pageYOffset - 2225 + 150}px`;
  // }

  // console.log('yoshibox', yoshi);
  console.log(window.pageYOffset, yoshi.getBoundingClientRect());

  currentPosition = window.pageYOffset
});


// Animate Jump
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    e.preventDefault();

    if (jumping === false) {

      setTimeout(function() {
        console.log(window.pageYOffset);

        if (window.pageYOffset > 1430 && window.pageYOffset < 1590 ) {
          console.log('contact');
          coinBlock1.src = "images/used-coin-block.png"
        }
      }, 200);

      jumping = true;
      yoshiContainer.classList.toggle('animate-jump-vert')
      yoshi.classList.toggle('sprite-jump');
      yoshi.classList.toggle('animate-jump');
    }
  }

  if (e.keyCode === 13) {
    commentBoxBottom.style.display = 'none';
  }
});

// set up text to print, each item in array is new line
var aText = new Array(
"Hi! I heard you want to hire mario... but he's nowhere to be found!", " ", "Perhaps you should just hire the programmer who made this world instead...", " ", "Either way, let's get scrolling!"
);
var iSpeed = 60; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

var finish = 0;

function typewriter() {
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

  if (iArrLength === iTextPos) {
    finish += 1;
    if (finish === 5) {
      console.log('done');
      setTimeout(function() {
        commentBoxBottom.style.display = 'none';
      }, 3000)
    }
  }
}

typewriter();
