// var paths = [
//     'img/floorpic.jpg',
//     'img/flounge.jpg',
//     'img/retreat1.jpg',
//     'img/peanuts.jpg',
//     'img/retreat2.jpg'
// ];
var paths = [
    'img/floorpic.jpg',
    'img/wow2.jpeg',
    'img/retreat1.jpg',
    'img/wow1.jpeg',
    'img/retreat2.jpg'
];
const initialLength = paths.length;
const initialTime = 40; //transition time where 10 = 1s
var wowPaths = [
    'img/wow1.jpeg',
    'img/wow2.jpeg',
    'img/wow3.jpeg',
    'img/wow4.jpeg',
    'img/wow5.jpeg',
    'img/wow6.jpeg',
];


var z = 0;
var pic;
// PLAYS IMAGE SLIDESHOW ON MAIN PAGE
$(document).ready(function() {
    pic = document.getElementById("main-pic");
    slideshow();
});


var wow = 0;
var wowwow = 0;
var r = 0;
var removeWow = false;
var time = initialTime;

// PLAYS IMAGE SLIDESHOW ON MAIN PAGE
function slideshow() {
    var i = 0;
    var intervalID = setInterval( function() {
        if (i == time-5) {
            fade_out();
        }
        else if (i == time+1) {
            changeImg();
        }
        else if (i == time+2) {
            fade_in();
        }
        if (removeWow == true) {
            if (wow >= 1) {
                paths.pop();
                removeWow = false;
                r = 0;
            }
        }
        i++;
        if (i >= time+3) {
            i = i - time+3;
        }


    }, 100)
}



function fade_in() {
    $('#main-pic').css('opacity',1);
}
function fade_out() {
    $('#main-pic').css('opacity',0);
}
function changeImg() {
    z += 1;
    if (z >= paths.length) {
        z = z - paths.length;
        wow +=1;
            if (wow == 3) {
                paths.push(wowPaths[wowwow]);
                wowwow +=1;
                if (wowwow >= wowPaths.length) {
                    wowwow = wowwow - wowPaths.length;
                }
                wow = 0;
                removeWow = true;
            }
    }
    
    pic.src = paths[z];
}
