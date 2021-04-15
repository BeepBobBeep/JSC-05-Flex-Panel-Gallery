// Currently When all the panels open and remain opens when we click on them ,
// To make the funcionality of closing all other panel i.e. maximum 1 panel open at a time 
// Change branch to only_one_open with command : git checkout only_one_open
panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener('click', function () { 
        this.classList.toggle("open");
        // Instead of adding another eventlistener as in next statement we can use this 
        // which adds the open-active statement 0.7s after the previous statement
        // setTimeout( () => {this.classList.toggle("open-active");} , 700);
    });
});

panels.forEach(panel => {
    panel.addEventListener('transitionend', function (event) { 
        if(event.propertyName == 'flex-grow')
            this.classList.toggle("open-active");
    });
});
        