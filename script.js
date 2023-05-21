// Smooth scrolling code -

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for (let i =0 ; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();  // Get the name of the section
        var targetSection = document.getElementById(targetSectionID); // Get the section with that Id name
        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20);

    });
}
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
}

// Skills auto fill while scrolling animation

var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;

function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}


initialiseBars();
window.addEventListener("scroll", checkScroll);