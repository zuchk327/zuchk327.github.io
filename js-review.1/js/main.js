$("body").css("background-color","#07E7ED");
$("body").css("margin", "200px");


for (var increment = 0; increment < 90; increment++) {
    console.log(increment);
    $("body").append("<div class='box'></div>");

    
}



$(".box").mouseleave(function() {
    $(this).css("background-color","#07E7ED");
    $(this).html(counter);
    $(this).css("height",(200+counter));
    $(this).css("width",(200+counter));
    $(this).css("font-size",(30+counter));
    $(this).css("line-height",200+counter+"px");
    $(this).css("transform","translate(-10%, -400%)");
 
});


$(".box").mousedown(function() {
    $(this).toggle("blue");
    $(this).css("font-size","30px",(counter));
   
    
});
