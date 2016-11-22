$("body").css("background-color","red");

for (var dots = 0; dots < 100; dots++) {
    $("body").append("<div class='circle'></div>");
}


$(".circle").each(function() {
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("height",(100+counter));
    $(this).css("width",(100+counter));
    $(this).css("font-size",(counter));
    $(this).css("line-height",100+counter+"px");
    $(this).css("transform","translate(-50%, -50%) rotate("+ (counter/100)*360 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;
    
    //this code runs for each instance of circle
    
});

$(".circle").click(function() {
    var newCat = cats[Math.floor(Math.random()*cats.length)];
    $("body").append('<img src="' + newCat + '" class="cat">');
});

$(window).resize(function() {
    $(".circle").each(function() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var newTop = Math.floor(Math.random()*winHeight);
        var newLeft = Math.floor(Math.random()*winWidth);
        $(this).css("top", newTop);
        $(this).css("left", newLeft);
    });
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $(".story").css("opacity",$(window).scrollTop()/5000)
})

