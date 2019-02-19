//HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES HTML INCLUDES
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});
//
var card = document.querySelector('.card');
var card_back = document.querySelector('.card--back');
var card_front = document.querySelector('.card--front');
var rsvp = document.querySelector('#rsvp');
var rsvpCard = document.querySelector('.rsvp');
var directions = document.querySelector('#directions');
var directionsCard = document.querySelector(".directions");
var couple = document.querySelector('#couple');
var coupleCard = document.querySelector(".couple");
var dback = document.querySelector(".dback");
var rback = document.querySelector(".rback");
var cback = document.querySelector(".cback");
rsvp.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  rsvpCard.classList.toggle('visible');
});
directions.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  directionsCard.classList.toggle('visible');
});
couple.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  coupleCard.classList.toggle('visible');
});
coupleCard.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  coupleCard.classList.toggle('visible');
});
rback.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  rsvpCard.classList.toggle('visible');
});
directionsCard.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
  directionsCard.classList.toggle('visible');
});
