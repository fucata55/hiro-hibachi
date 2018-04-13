function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('#aboutNav').click(function () {
    $('html,body').animate({
        scrollTop: $('#aboutSection').offset().top
    }, 'slow');
})

$('#findUsNav').click(function () {
    $('html,body').animate({
        scrollTop: $('#findUsSection').offset().top
    }, 'slow');
})

$('#cateringNav').click(function () {
    $('html,body').animate({
        scrollTop: $('#cateringSection').offset().top
    }, 'slow');
})

$('#reviewsNav').click(function () {
    $('html,body').animate({
        scrollTop: $('#reviewsSection').offset().top
    }, 'slow');
})

$('#aboutNav').click(function () {
    $('html,body').animate({
        scrollTop: $('#aboutSection').offset().top
    }, 'slow');
})
