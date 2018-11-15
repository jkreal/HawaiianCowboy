
//Variable used to determine which link was clicked for animation purposes
var prevLink;

//Variable to easily set the animations that will be played, view Animate.css documentation
var animations = {
    navBar: "fadeIn",
    navItem: "bounceInUp",
    mainParagraph: "fadeIn",
    mainParagraphHeader: "flipInX",
    banner: "fadeIn",
    footer: "fadeIn",

    navItemClick: "bounce"
}

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

    // // If the page was last visited earlier today, skip the site intro animations
    if (localStorage.getItem("lastVisited") === (date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString())) {
        siteVisited();

    } else {
        //Otherwise, play the intro animations
        siteIntro();
    }

    // siteIntro();

    //Set lastVisited in localStorage to the current date, after the site has been animated/not animated
    localStorage.setItem("lastVisited", date.getDate().toString() + date.getMonth().toString() + date.getFullYear().toString());

});

// When a nav link is clicked this will run
$(document).on("click", ".nav-li", function () {
    navClick('#' + $(this).attr('id'), false);
});

function navClick(ele, swipe) {
    $(ele).addClass("animated " + animations.navItemClick);
    //Change bottom border to appear when clicked
    $(ele).css("border-bottom", "2px solid black");
    
    //If there is no swipe, change the animations based on index
    if(swipe === false) {
        if($(ele).index() < $(prevLink).index()) {
            //Swipe left
            $(".uk-subnav").attr('uk-switcher', "swiping: true; animation: uk-animation-slide-left, uk-animation-slide-right");
        } else {
            //Swipe right
            $(".uk-subnav").attr('uk-switcher', "swiping: true; animation: uk-animation-slide-right, uk-animation-slide-left");
        }
    }

    if (prevLink) {
        //Make previous link not have border bottom or animation class
        $(prevLink).removeClass("animated " + animations.navItemClick);
        $(prevLink).css("border-bottom", "");
    }

    //The global variable prevLink is now $(ele), set in a timeout because it
    //sets it before the animation is played. Fucking loser
    setTimeout(() => {
        prevLink = $(ele);
    }, 350);
    

    //If the shop link is clicked, open the shop
    // if ($(ele).attr("id") === 'shop-link') {
    //     window.open("http://shop.hawaiiancowboysnacks.com", "Shop");
    // }
}

//Triggers when you swipe left on mobile
$(document).on("swipeleft", function( event ) {
    //Set the animation to swipe left style
    $(".uk-subnav").attr('uk-switcher', "swiping: true; animation: uk-animation-slide-right, uk-animation-slide-left");
});

//Triggers when you swipe right on mobile
$(document).on("swiperight", function( event ) {
    //Set the animation to swipe right style
    console.log('swiperight');
    $(".uk-subnav").attr('uk-switcher', "swiping: true; animation: uk-animation-slide-left, uk-animation-slide-right");
});

//Triggers before the main content is hidden
$(document).on("beforehide.uk.switcher", function () {
    setTimeout(() => {
        navClick("#" + $('li.uk-active').attr('id'));
    }, 200);
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
    $('#navbar-list').addClass('animated ' + animations.navBar);

    //Each link in navbar animation
    $('#navbar-list').children().each(function (index, element) {
        $(element).addClass('animated ' + animations.navItem);
    });

    //Animate the paragraph header
    $('#main-paragraph-header').children().each(function (index, element) {
        $(element).addClass('animated ' + animations.mainParagraphHeader);
    });

    //Main paragraph, banner, and footer animations
    $('#main-paragraph').addClass('animated ' + animations.mainParagraph);
    $('#banner').addClass('animated ' + animations.banner);
    $('#footer').addClass('animated ' + animations.footer);

    //Remove all the classes used for animation after 7 seconds (After intro)
    setTimeout(() => {
        $('#navbar-list').removeClass('animated ' + animations.navBar);
        $('#navbar-list').children().each(function (index, element) {
            $(element).removeClass('animated ' + animations.navItem);
            $(element).css('animation-delay', '0s');
        });
        $('#main-paragraph-header').children().each(function (index, element) {
            $(element).removeClass('animated ' + animations.mainParagraphHeader);
        });
        $('#main-paragraph').removeClass('animated ' + animations.mainParagraph);
        $('#banner').removeClass('animated ' + animations.banner);
    }, 7000);

}


