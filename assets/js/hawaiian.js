
//Variable used to determine which link was clicked for animation purposes
var prevLink;
$('.uk-switcher').off('swiping');

//Runs when the document is loaded
$(document).ready(function () {
    //Get the current date, only play site intro if it is the first visit today.
    var date = new Date();
    /*
        testing purposes
        localStorage.clear();
        console.log('date =' + date.getDate() + date.getMonth() + date.getFullYear() );
    */
    //If the page has not been visited, set lastVisited in localStorage to 000.
    if (!localStorage.getItem("lastVisited")) {
        localStorage.setItem("lastVisited", "000");
    }

    //If the page was last visited earlier today, skip the site intro animations
    if (localStorage.getItem("lastVisited") === (date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString())) {
        siteVisited();

    } else {
        //Otherwise, play the intro animations
        siteIntro();
    }

    //Set lastVisited in localStorage to the current date, after the site has been animated/not animated
    localStorage.setItem("lastVisited", date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString());

});

// When a nav link is clicked this will run
$(document).on("click", ".nav-li", function () {
    navClick('#' + $(this).attr('id'));
});

function navClick(ele) {
    $(ele).addClass("animated bounce");
    //Change bottom border to appear when clicked
    $(ele).css("border-bottom", "2px solid black");

    //Make previous link not have border bottom or animation class
    if (prevLink) {
        $(prevLink).removeClass("animated bounce");
        $(prevLink).css("border-bottom", "");
    }

    //The global variable prevLink is now $(ele)
    prevLink = $(ele);

    //If the shop link is clicked, open the shop
    // if ($(ele).attr("id") === 'shop-link') {
    //     window.open("http://shop.hawaiiancowboysnacks.com", "Shop");
    // }
}

$(window).on("swipe", function( event ) {
    setTimeout(() => {
        console.log($('li.uk-active').attr('id'));
        navClick('#' + $('li.uk-active').attr('id'));
    }, 50);
    
});

//Function to run if the site has already been visited today (No animations)
function siteVisited() {
    //Show the container
    $('#hide-container').show();

    //Set the animation delay for the links to 0s
    $('#navbar-list').children().each(function (index, element) {
        $(element).css('animation-delay', '0s');
    });
}

// Animates the site when it is loaded for the first time today
function siteIntro() {

    //Hide each element in the container
    $('#hide-container').children().each(function (index, element) {
        $(element).hide();
    });
    //Show the hide container
    $('#hide-container').show();

    //Show each item in hide container
    $('#hide-container').children().each(function (index, element) {
        $(element).show();
    });

    //Navbar Animation
    $('#navbar-list').addClass('animated fadeIn delay-4.5');

    //Each link in navbar animation
    $('#navbar-list').children().each(function (index, element) {
        $(element).addClass('animated bounceIn');
    });

    //Animate the paragraph header
    $('#main-paragraph-header').children().each(function (index, element) {
        $(element).addClass('animated fadeInRightBig');
    });

    //Main paragraph, banner, and footer animations
    $('#main-paragraph').addClass('animated fadeIn');
    $('#banner').addClass('animated fadeIn');
    $('#footer').addClass('animated fadeIn');

    //Remove all the classes used for animation after 7 seconds (After intro)
    setTimeout(() => {
        $('#navbar-list').removeClass('animated fadeIn');
        $('#navbar-list').children().each(function (index, element) {
            $(element).removeClass('animated bounceIn');
            $(element).css('animation-delay', '0s');
        });
        $('#main-paragraph-header').children().each(function (index, element) {
            $(element).removeClass('animated fadeInRightBig');
        });
        $('#main-paragraph').removeClass('animated fadeIn');
        $('#banner').removeClass('animated fadeIn');
    }, 7000);

}


