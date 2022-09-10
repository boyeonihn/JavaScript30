const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let searchWord = document.querySelector('.search')
let resultList = document.querySelector('.suggestions')

const cities = []; 

fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data))


function findMatches(keyword, cities) {
    return cities.filter( place => {
        const regex = new RegExp(keyword, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch() {
    const searchResults = findMatches(this.value, cities);
    const html = searchResults.map( place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); 
        return `
            <li>
                <span class="name"> ${cityName}, ${stateName}</span>
                <span class="population">${numberwithCommas(place.population)}</span>
            </li>
        `; 
    }).join('')
    resultList.innerHTML = html; 
}



searchWord.addEventListener('change', displayMatch);
searchWord.addEventListener('keyup', displayMatch);