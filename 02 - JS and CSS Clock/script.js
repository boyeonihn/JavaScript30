function setDate() {
    // declaring DOM clock hand elements
    const hourHand = document.querySelector('.hour-hand'); 
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    // declaring time 
    const now = new Date(); 
    const minutes = now.getMinutes(); 
    const seconds = now.getSeconds(); 
    const hours = now.getHours() - 12; 
    console.log(hours); 
    console.log(minutes); 

    // calculating degree of each hand
    const hourDegrees = ((hours / 12) * 360) + 90 ; 
    console.log(hourDegrees)
    const minDegrees = ((minutes / 60) * 360) + 90; 
    const secondDegrees = ((seconds / 60 ) * 360) + 90; 

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`; 
}

setInterval(setDate, 1000); 
