// var scroll = this.scrollY();
var ht = 163;
var htMob = 800;


window.addEventListener("scroll", scrollFunction2);


function scrollFunction2() {
    var box = document.getElementById("sticky-tab");
    console.log("SCROLL FUNCCCC");
    var scroll = this.scrollY;
    if (window.innerWidth > 1030) {
        console.log("scroll BIG");
        console.log(scroll >= ht);
        if (scroll >= ht) {
            box.classList.add("fixed");
        } 
        else {
            box.classList.remove("fixed");
        }
        
    } else {
        console.log("scroll smol");
        if (scroll >= htMob) {
            box.classList.add("fixed");
        } else {
            box.classList.remove("fixed");
        }
    }
    console.log(box.classList);

}    
