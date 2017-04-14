$(".box1").click(function() {
           if (clicked=true) {
           	$(".part1").toggle();
           }
  });

$(".box2").click(function() {
           if (clicked=true) {
           	$(".part2").toggle();
           }
  });

$(".box3").click(function() {
           if (clicked=true) {
           	$(".part3").toggle();
           }
  });

$(".box4").click(function() {
           if (clicked=true) {
           	$(".part1").show();
           	$(".part2").show();
           	$(".part3").show();

           }
  });


$(".box5").click(function() {
           if (clicked=true) {
           	$(".part4").show();

           }
  });

$(".box6").click(function() {
           if (clicked=true) {
           	$(".part6").show();

           }
  });

$(".box7").click(function() {
           if (clicked=true) {
           	$(".part5").show();

           }
  });


$(document).ready(function(){
    $(this).scrollTop(0);
});

var charsTyped = 0;
var lines_typed = 0;
var window_height = $(window).height();
var total_text_height = 1;

$(window).keypress(function(e) {
  
  if (e.which == 97 || e.which == 65) {
  	$(".stage").append($(".capa").clone().removeClass("capa"));
  }


});










