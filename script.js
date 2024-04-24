'use strict'

$('.openbtn').on('click',function(){
  $(this).toggleClass('open');
  $(this).next('.toggle_contents').slideToggle();
});