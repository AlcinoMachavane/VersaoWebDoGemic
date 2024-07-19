
var lastScrollTop = 0;
navbar = document.getElementById("navBar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.top= "-100px";
    } else {
        navbar.style.top= "0";
    }
    lastScrollTop = scrollTop;
})

///////////////////////////////////////////////////////////////////////////////////////

$(function () {
    $('.buttonForBar').on('click', function () {
        $('.menuBar').toggleClass('.hideShow');
        $(this).toggleClass('.hideShow');
    });
});

var button = document.getElementsByClassName("buttonForBar");
var sidebar = document.getElementsByClassName("menuBar");
var open = document.getElementsByClassName("hideShow");