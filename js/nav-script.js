document.body.onload = function () {
    // HIGHLIGHTS ACTIVE PAGE IN THE NAVIGATION    
    var title = document.getElementsByTagName("title")[0].innerHTML;

    if (title == "B2 - about") { 
        document.getElementById('sb-about').classList = "active";
    } else if (title == "B2 - people") {
        document.getElementById('sb-people').classList = "active";
    } else if (title == "B2 - suites") { 
        document.getElementById('sb-suites').classList = "active";
    } else if (title == "B2 - events") {
        document.getElementById('sb-events').classList = "active";
    } else if (title == "B2 - kosher") {
        document.getElementById('sb-kosher').classList = "active";
    }
    // else if (title == "B2 - name") {
    //     document.getElementById('sb-name').classList = "active";
    // }


    // EVENT LISTENER FOR HOVERING OVER THE LOGO
    var logo = document.getElementById("main-logo");
    logo.addEventListener("mouseover", function() { 
        logo.src = "img/main_logo_hover.png" 
    })
    logo.addEventListener("mouseout", function() {   
        logo.src = "img/main_logo.png" 
    })
}


var cutoff;

// FADES IN SMALL NAV WHEN SCROLLING DOWN ON SMALL SCREENS
$(document).ready(function() {
    $(window).scroll(function() {
        if (window.innerWidth > 950) {
            cutoff = 580;
        } else {
            cutoff = 1215;
        }
        if($(window).scrollTop() >= cutoff) {
            $('#mobile-nav').addClass('visible');
            $('#side-box').addClass('invisible');
        }
        else {
            $('#mobile-nav').removeClass('visible');
            $('#side-box').removeClass('invisible');
        }
    });
});
