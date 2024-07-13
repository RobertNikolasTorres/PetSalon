console.log("Welcome to JQuery Library");
 
//======ID's=====
//document.getElementById("red") //Javascript
//$("red")   //jQuery

//#id   method   key       value
$("#red").css("background","red").css("color","white");
$("#blue").css("background","blue").css("color","yellow");
$("#pink").css("background","green").css("color","aqua");

//===== class ====
$(".title-two").css("color","green").css("font-size","48px");
$(".with-border").css("border", "5px dashed black");

$(".my-border").click(function () {
    console.log("You clicked my-border");
    $(this).css("border", "5px dashed black");
    $(this).addClass("bg-green");
});

//===== TAGS ====
var myTitle = $("h3"); //variable
myTitle.css("background","gray").css("cursor","pointer");
//events
myTitle.mouseover(function () {
    $(this).css("background","green");
});
myTitle.mouseout(function () {
    $(this).css("background","lightgray");
});

