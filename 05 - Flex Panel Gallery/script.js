const panelElement = document.querySelectorAll('.panel'); 
panelElement.forEach(panel => panel.addEventListener('click', toggleOpen));
panelElement.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
    this.classList.toggle('open'); 
    console.log(this.classList)

}

function toggleActive(e) {
    if (e.propertyName == "font-size") {
        this.classList.toggle('open-active'); 
    }
}