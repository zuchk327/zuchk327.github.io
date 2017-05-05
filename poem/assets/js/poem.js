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

  if (random_object_number < 5) {
    result = '<div class="object"><video autoplay width="320" height=auto loop="true"src="' + object_to_use + '" /></div>';
  } 
  else {
    result = '<div class="object"><video autoplay width="500" height=auto loop="true"src="' + object_to_use + '" /></div>';
  } 

  $('.box').prepend(result);
});


$(".title").mouseenter(function() {
            $("#video-2").show();
        
});

$("#video-2").mouseenter(function() {
            $(".e").show();
        
});


