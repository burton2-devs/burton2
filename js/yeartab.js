// var scroll = this.scrollY();
var ht = 100;
var htMob = 200;
var box = document.getElementById("sticky-tab");


window.onscroll = function() {scrollFunction()};
console.log("hello yeartab")


document.addEventListener("scroll", function() {
    
    var scroll = this.scrollY;
    scrollFunction(scroll);

});


function scrollFunction(scroll) {
    if (window.innerWidth > 1030) {
        console.log("scroll BIG")
        if (scroll >= ht) {
            box.classList.add("fixed");
        } 
        else {
            box.classList.remove("fixed");
        }
        
    } else {
        console.log("scroll smol")
        if (scroll >= htMob) {
            box.classList.add("fixed")
        } else {
            box.classList.remove("fixed")
        }
    }

}    


