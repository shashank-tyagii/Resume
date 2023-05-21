var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');

for (let i =0 ; i < navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();  // Get the name of the section
        var targetSection = document.getElementById(targetSectionID); // Get the section with that Id name
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);

        }, 20);

    });
}