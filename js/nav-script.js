// When the user scrolls down 170px from the top of the document, 
// fade in smaller navigation bar
// window.onscroll = function() {scrollFunction()};

window.addEventListener("scroll", scrollFunction);



var y, h, nav, navmob, sb, logo, hoverPath;
var hmob = 180;

document.body.onload = function () {
    
    nav = document.getElementById("side-box");
    sb = document.getElementsByClassName("sidebar-item");
    
    var title = document.getElementsByTagName("title")[0].innerHTML;

    if (title == "B2 - about") { 
        document.getElementById('sb-about').classList = "active";
    }
    else if (title == "B2 - people") {
        document.getElementById('sb-people').classList = "active";
    }
    else if (title == "B2 - suites") { 
        document.getElementById('sb-suites').classList = "active";
    }
    else if (title == "B2 - events") {
        document.getElementById('sb-events').classList = "active";
    }
    else if (title == "B2 - kosher") {
        document.getElementById('sb-kosher').classList = "active";
    }
    // else if (title == "B2 - name") {
    //     document.getElementById('sb-name').classList = "active";
    // }


    // navmob = document.getElementById("top");
    h = nav.offsetHeight;
    y = h - hmob;

    var logo = document.getElementById("main-logo");

    logo.addEventListener("mouseover", function() { 
        logo.src = "img/main_logo_hover.png" 
        // highlight the logo
        // logo.style.opacity = "1";
    })
    logo.addEventListener("mouseout", function() {   
        logo.src = "img/main_logo.png" 
        // logo.style.opacity = "0";
})

}





var extra = 45;

function scrollFunction() {
    if (window.innerWidth < 1030) {
        nav = document.getElementById("side-box");
        h = nav.offsetHeight;
        y = h - hmob;
        h = h - extra
        
        let scroll = document.documentElement.scrollTop;

        if (scroll > h) {
            document.getElementById('mobile-nav').style.opacity = '1';
        }
        if (scroll < h) {
            document.getElementById('mobile-nav').style.opacity = '0';
        }
    }    
}

