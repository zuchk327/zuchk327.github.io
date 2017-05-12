


$(".title").hover(function(){
    $(".box").show()
    $("*").css("background-color", "black")
    $(".title").css("color", "white")
    $(".title").css("animation-name", "none")
  });

$(".box").mouseover(function(){
    $(".coin_release").show()
    $(".box:hover").show()
  });

$("#c").mouseover(function(){
    $(".box2").show()
    
  });

$("#o").mouseover(function(){
    $(".box3").show()
    
  });

$("#i").mouseover(function(){
    $(".box4").show()
    
  });
$("#n").mouseover(function(){
    $(".box5").show()
    
  });

$(".box2").mouseover(function(){
    $(".num_2").show()
    
  });

$(".box3").mouseover(function(){
    $(".honeymoon").show()
    
  });

$(".box4").mouseover(function(){
    $(".american").show()
    
  });
$(".box5").mouseover(function(){
    $(".everything").show()
    
  });


$(".everything").mouseover(function(){
    $(".box6").show()
    
  });

$(".box6").mouseover(function(){
    $(".waiting").show()
    
  });

$(".waiting").mouseover(function(){
    $(".box7").show()
    
  });

$(".box7").mouseover(function(){
    $(".weed").show()
    
  });

var objects = ['assets/img/video-1.mp4' ,
                'assets/img/video-2.mp4' ,
                'assets/img/video-3.mp4' ,
                'assets/img/video-4.mp4' ,
                'assets/img/video-5.mp4' ,
                'assets/img/video-6.mp4' ,
                'assets/img/video-7.mp4' ,
                'assets/img/video-8.mp4' ,
                'assets/img/video-9.mp4' ,
                'assets/img/video-10.mp4' ,
                'assets/img/video-11.mp4' ,
                'assets/img/video-12.mp4' ,
                'assets/img/video-13.mp4' ,
                'assets/img/video-14.mp4' ,
                'assets/img/video-15.mp4' 

              ];

$('.title').click(function() {
  var random_object_number = Math.floor(Math.random() * objects.length);
  var object_to_use        = objects[random_object_number];

  var result = '';

  if (random_object_number < 7) {
    result = '<div class="object"><img src= "' + object_to_use + ' " /></div>';
  } 

  $('.').box(result);
});

