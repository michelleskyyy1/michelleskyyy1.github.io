function scroll() {
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = 0.25;
    var b = 0;
    
    newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";
}


$(document).ready(function() {
$(window).scroll(function() {
if ($(this).scrollTop() > 20) {
$('#toTopBtn').fadeIn();
} else {
$('#toTopBtn').fadeOut();
}
});

$('#toTopBtn').click(function() {
$("html, body").animate({
scrollTop: 0
}, 1000);
return false;
});
});