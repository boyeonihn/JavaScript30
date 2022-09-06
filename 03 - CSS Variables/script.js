const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => input.addEventListener('change', handleUpdate)); 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const updatedValue = this.value; 
    const suffix = this.dataset.sizing || ''; 
    const root = document.querySelector(':root'); 

    const name = this.getAttribute('name'); 
    root.style.setProperty(`--${name}`, updatedValue + suffix);
}