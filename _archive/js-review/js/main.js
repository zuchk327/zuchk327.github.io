$("body").css("background-color", "BLACK");

var clicks = 0;

$("button").click(function() {
    clicks = clicks +1;
    $("body").css("background-color","yellow");
    console.log("clicks");
});


 
for (var i = 0; i < 70; i++)  {
    $("body").append("<div class='dot'></div>");
}

var counter = 0;

$(".dot").each(function() {
    counter++;
    console.log("found a dot....");
    $(this).html(counter);
    $(this).css("height",(200+counter));
    $(this).css("width",(200+counter));
    $(this).css("font-size",(30+counter));
    $(this).css("line-height",200+counter+"px");
    $(this).css("transform","translate(-10%, -400%)"); 
});

 



$(".dot").mousedown(function() {
    $(this).toggle("blue");
    $(this).css("font-size","30px",(counter));
   
    
});

 