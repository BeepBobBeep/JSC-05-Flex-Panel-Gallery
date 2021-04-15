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
        