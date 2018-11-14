//Runs when the document is loaded
var prevLink;

$(document).ready(function () {
    //Animate the site
    // hideSite();
    // $('#contact-link').click();
    // siteIntro();
    var date = new Date();
    console.log('date =' + date.getDate() + date.getMonth() );
    
    if(localStorage.getItem('visitedToday') !== true) {
        //animate
    }

    $('#hide-container').children().each(function (index, element) {
        $(element).hide();
    });
    $('#hide-container').show();

    $('#hide-container').children().each(function (index, element) {
        $(element).show();
    });

    var inOrderElements = ['#navbar-list', '#main-paragraph-header', '#main-paragraph', '#banner'];

    $('#navbar-list').addClass('animated fadeIn');
    $('#navbar-list').children().each(function (index, element) {
        $(element).addClass('animated bounceIn');
    });
    $('#main-paragraph-header').children().each(function (index, element) {
        $(element).addClass('animated fadeInRightBig');
    });
    $('#main-paragraph').addClass('animated fadeIn');
    $('#banner').addClass('animated fadeIn');
    $('#footer').addClass('animated fadeIn');

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

});

// When a nav link is clicked this will run
$(document).on("click", ".nav-li", function () {
    $(this).addClass('animated bounce');
    //Change bottom border to appear when clicked
    $(this).css("border-bottom", "2px solid black");

    //Make previous link not have border bottom
    if (prevLink) {
        $(prevLink).css("border-bottom", "");
    }
    prevLink = $(this);

    if ($(this).attr("id") === 'shop-link') {
        window.open("http://shop.hawaiiancowboysnacks.com", "Shop");
    }
});

// Animates the site when it is loaded
function siteIntro() {
    navbarEntrance();

    var listTimeouts = [];
    $('#navbar-list').children().each(function (index, element) {
        console.log($(element).attr('id'));
    });

}

function hideSite() {
    $('#hide-container').removeClass('hidden');
    $('#hide-container').children().each(function (index, element) {
        console.log('this ' + $(element));
        $(element).show();
    });


}

function navbarEntrance() {
    console.log('navbar entrance');
    $('#navbar-list').show();
    $('#navbar-list').children().each(function (index, element) {
        $(element).show();
    });
    $('#navbar-list').addClass('animated bounceIn');
    $('#home-link').addClass('animated bounceIn');
    console.log($('#header-1').attr('class'));

    console.log("----------------------------\n");

}

function header2Entrance() {

}

function navbarEntrance() {

}

function imageEntrance() {

}


function mainParagraphEntrance() {

}


