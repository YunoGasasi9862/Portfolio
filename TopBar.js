var RN1= Math.floor(Math.random() * 255);
var RN2=Math.floor(Math.random() * 255);
var RN3=Math.floor(Math.random() * 255);




$(function(){


$("#navbar1").hover(function()  //if hover execute the first one, otherwise the second one
{
    $(this).css("background-color", "red");  //the first hover condition

}, function()
{
      $(this).css("background-color", "white");  //iif not hover
});

});