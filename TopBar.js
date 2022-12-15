


$(function(){


$(window).bind('resize', function()  //resize the windows
{
    location.reload();
})

$("#navbar1, #navbar2, #navbar3").hover(function()  //if hover execute the first one, otherwise the second one
{
    $(this).css("background-color", "red");  //the first hover condition

}, function()
{
      $(this).css("background-color", "white");  //iif not hover
});

var Height= $(".TopBar").offset().left + $(".TopBar").height();
var BottomHeight= $(".footer-box").offset().top;

console.log(Height);
console.log(BottomHeight);
var ActualHeight= BottomHeight-Height;
console.log(ActualHeight);
$(".sideFloating").css("top", Height);
$(".sideFloating").height(ActualHeight);

});