for (var increment = 0; increment < 100; increment++) {
    console.log(increment);
    $("body").append("<div class='box'></div>");

    
}

var rounding =0;

$(".box").each(function(){
    console.log("I found class box...");
    console.log(rounding);
    var radius = rounding + "px";
    $(this).css("border-radius",radius);
    rounding++;
    
    
});

$(".box").hover(function() {
    $(this).css("background-color","lime");
 
});