// Currently When all the panels open and remain opens when we click on them ,
// To make the funcionality of closing all other panel i.e. maximum 1 panel open at a time 
// Change branch to only_one_open with command : git checkout only_one_open
panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener('click', function () {
        
        // If we click the same panel again then close it - so removing the open and open-active classes and return to normal
        if( Array.from(panel.classList).includes("open")){
            panel.classList.remove("open");
            panel.classList.remove("open-active");
            return;
        }
        
        // Now if code is executed till here means we have clicked on another panel So
        // Removing open and open-active classes from all other panels
        panels.forEach( panel => {
            panel.classList.remove("open");
            panel.classList.remove("open-active");
        } );

        // Applying open and open-active to current panel
        this.classList.toggle("open");
        // Instead of adding another eventlistener as in next statement we will use this 
        // method which adds the open-active statement 0.7s after the previous statement
        // as it is difficult to find out after which transition end we have to switch class
        // Using the other method will show bugs when clicking multiple panels
        setTimeout( () => {this.classList.toggle("open-active");} , 700);
    });
});

// panels.forEach(panel => {
//     panel.addEventListener('transitionend', function (event) { 
//         if(event.propertyName == 'flex-grow')
//             this.classList.toggle("open-active");
//     });
// });
        