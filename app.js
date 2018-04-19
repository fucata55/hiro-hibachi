//Sandwhiching navigation bar
let sandwhichNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Generate trigger and function for click and scroll
let scroller = (button, sectionId) => {
    $(`${button}`).click(() =>
        $('html,body').animate({
            scrollTop: $(`${sectionId}`).offset().top
        }, 'slow')
    )
}

scroller('#findUsNav', '#findUsSection');
scroller('#aboutNav', '#aboutSection');
scroller('#cateringNav', '#cateringSection');
scroller('#reviewsNav', '#reviewsSection');
scroller('.viewMenu', '#menuSection');

$('#googleMapButton').click(() => window.open('https://goo.gl/maps/finaZD4ij8r'))
