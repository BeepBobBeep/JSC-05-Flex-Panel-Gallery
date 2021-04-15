panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener('click', function () { 
        this.classList.toggle("open");
        // setTimeout( () => {this.classList.toggle("open-active");} , 700);
    });
});

panels.forEach(panel => {
    panel.addEventListener('transitionend', function (event) { 
        if(event.propertyName == 'flex-grow')
            this.classList.toggle("open-active");
    });
});
        