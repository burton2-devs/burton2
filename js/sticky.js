// var scroll = this.scrollY();
var ht, htMob, stuckHt;
var stuck = false;

window.addEventListener("scroll", scrollFunction2);


function scrollFunction2() {
    var box = document.getElementById("sticky-tab");
    var scroll = this.scrollY;
    ht = box.offsetTop;
    // console.log("scroll: "+ scroll);
    // console.log("ht: "+ ht);
    if (stuck == true) {
        ht = stuckHt;
    }
    
    if (window.innerWidth > 1030) {
        if (scroll >= ht) {
            if (box.classList.contains("fixed") != true){
                box.classList.add("fixed");
                stuck = true;
                stuckHt = ht;
            }
        } 
        else {
            if (box.classList.contains("fixed") == true){
                box.classList.remove("fixed");
                stuck = false;
            }
        }
    }

}    


function toTop() {
    var div = document.getElementById("main-box");
    var ypos = div.offsetTop;
    console.log(ypos);

    window.scrollTo(0,ypos);
}


function year1() {
    var allYears = document.getElementById("sticky-tab").querySelectorAll(".year-tab"); 
    for(var i = 0; i < allYears.length; ++i){
        allYears[i].classList.remove("year-active");
    }    
    var activeYear = document.getElementById("year1");
    activeYear.classList.add("year-active");

    var allDivs = document.getElementById("all-bio-container").querySelectorAll(".biography"); 
    for(var j = 0; j < allDivs.length; ++j){
        allDivs[j].classList.add("visible-year");
    }  
    toTop();
}

function year2() {
    var allYears = document.getElementById("sticky-tab").querySelectorAll(".year-tab"); 
    for(var i = 0; i < allYears.length; ++i){
        allYears[i].classList.remove("year-active");
    }
    var activeYear = document.getElementById("year2");
    activeYear.classList.add("year-active");


    var allDivs = document.getElementById("all-bio-container").querySelectorAll(".visible-year"); 
    for(var j = 0; j < allDivs.length; ++j){
        allDivs[j].classList.remove("visible-year");
    }  
    var activeDiv = document.getElementById("bio2");
    activeDiv.classList.add("visible-year");
    toTop();
}

function year3() {
    var allYears = document.getElementById("sticky-tab").querySelectorAll(".year-tab"); 
    for(var i = 0; i < allYears.length; ++i){
        allYears[i].classList.remove("year-active");
    }
    var activeYear = document.getElementById("year3");
    activeYear.classList.add("year-active");

    
    var allDivs = document.getElementById("all-bio-container").querySelectorAll(".visible-year"); 
    for(var j = 0; j < allDivs.length; ++j){
        allDivs[j].classList.remove("visible-year");
    }  
    var activeDiv = document.getElementById("bio3");
    activeDiv.classList.add("visible-year");
    toTop();
}

function year4() {
    var allYears = document.getElementById("sticky-tab").querySelectorAll(".year-tab"); 
    for(var i = 0; i < allYears.length; ++i){
        allYears[i].classList.remove("year-active");
    }
    var activeYear = document.getElementById("year4");
    activeYear.classList.add("year-active");

    
    var allDivs = document.getElementById("all-bio-container").querySelectorAll(".visible-year"); 
    for(var j = 0; j < allDivs.length; ++j){
        allDivs[j].classList.remove("visible-year");
    }  
    var activeDiv = document.getElementById("bio4");
    activeDiv.classList.add("visible-year");
    toTop();
}

function year5() {
    var allYears = document.getElementById("sticky-tab").querySelectorAll(".year-tab"); 
    for(var i = 0; i < allYears.length; ++i){
        allYears[i].classList.remove("year-active");
    }
    var activeYear = document.getElementById("year5");
    activeYear.classList.add("year-active");

    
    var allDivs = document.getElementById("all-bio-container").querySelectorAll(".visible-year"); 
    for(var j = 0; j < allDivs.length; ++j){
        allDivs[j].classList.remove("visible-year");
    }  
    var activeDiv = document.getElementById("bio5");
    activeDiv.classList.add("visible-year");
    toTop();
}
