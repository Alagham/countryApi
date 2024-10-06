//for getting all the country card

function apiUrl(){
const api = "https://restcountries.com/v3.1/all"
fetch(api)
.then((response) => response.json())
.then((data )=> {
    
    let card = "";
    data.map((item)=>{
        card += `<div class= "cardname">
                    <img src="${item.flags.svg}" alt="" width="300px"/>
                    <h3 class="country">${item.name.common}</h3>
                    <p  class="population">Population : <span>${item.population}</span></p>
                    <p  class="region">Region: <span>${item.region}</span></p>
                    <p  class="capital">Capital: <span>${item.capital}</span></p>     
                </div>`;
                
    })

    document.querySelector(".card").innerHTML = card;
})
.catch(error=>{
    console.error(error)
})
}
window.onload=apiUrl();


//This section is the drop down list

function dropdown(){
    const region = document.querySelector("#search").value;
    console.log(region);


    const filterRegion = `https://restcountries.com/v3.1/region/${region}`
    fetch(filterRegion)    
    .then(response=>response.json())
    .then(data=>{
        let card = "";
        data.map((item)=>{
            card += `<div class= "cardname">
                        <img src="${item.flags.svg}" alt="" width="300px"/>
                        <h3 class="country">${item.name.common}</h3>
                        <p  class="population">Population : <span>${item.population}</span></p>
                        <p  class="region">Region: <span>${item.region}</span></p>
                        <p  class="capital">Capital: <span>${item.capital}</span></p>     
                    </div>`;
                    
        })
    
        document.querySelector(".card").innerHTML = card;
    })
    .catch(error=>{
        console.error(error)
    })
}
document.querySelector("#search").addEventListener("change",dropdown)

//The toggle section , dark and lighr mode

function swithMode(){

    const body = document.body;
    const nav = document.querySelector("nav");
    const toggleButton = document.getElementById("toggle");
    const searchBox = document.querySelector(".search-box");
    const soft = document.querySelector(".soft");
    

    body.classList.toggle("dark-mode");
    nav.classList.toggle("dark-mode");
    searchBox.classList.toggle("dark-mode");
    soft.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }

    if (nav.classList.contains("dark-mode")) {
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        toggleButton.textContent = "🌙 Dark Mode";
    }

}
document.getElementById("toggle").addEventListener('click', swithMode)

// this section for searching for all the coutries

let allCountries = [];

function apiUrl() {
    const api = "https://restcountries.com/v3.1/all";
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        allCountries = data;  
        displayCountries(allCountries);  
    })
    .catch(error => {
        console.error(error);
    });
}

function displayCountries(data) {
    let card = "";
    data.map((item) => {
        card += `<div class= "cardname">
                    <img src="${item.flags.svg}" alt="" width="300px"/>
                    <h3 class="country">${item.name.common}</h3>
                    <p class="population">Population: <span>${item.population}</span></p>
                    <p class="region">Region: <span>${item.region}</span></p>
                    <p class="capital">Capital: <span>${item.capital ? item.capital[0] : "N/A"}</span></p>     
                </div>`;
    });
    document.querySelector(".card").innerHTML = card;
}

function searchCountry() {
    const searchInput = document.getElementById("search1").value.toLowerCase(); 
    const filteredCountries = allCountries.filter((country) => {
        return country.name.common.toLowerCase().includes(searchInput); 
    });
    displayCountries(filteredCountries);  
}

document.getElementById("search1").addEventListener("input", searchCountry);

window.onload = apiUrl();

// this section is for slecting countries

function apiUrl() {
    const api = "https://restcountries.com/v3.1/all";
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        allCountries = data;  
        displayCountries(allCountries);  
    })
    .catch(error => {
        console.error(error);
    });
}

function displayCountries(data) {
    let card = "";
    data.map((item, index) => {
        card += `<div class="cardname">
                    <img src="${item.flags.svg}" alt="${item.name.common}" class="country-image" data-index="${index}" width="300px"/>
                    <h3 class="country">${item.name.common}</h3>
                    <p class="population">Population: <span>${item.population}</span></p>
                    <p class="region">Region: <span>${item.region}</span></p>
                    <p class="capital">Capital: <span>${item.capital ? item.capital[0] : "N/A"}</span></p>     
                </div>`;
    });
    document.querySelector(".card").innerHTML = card;

    // Add click event listeners to all country images so once clicked it pops up
    const countryImages = document.querySelectorAll(".country-image");
    countryImages.forEach(img => {
        img.addEventListener("click", displaySingleCountry);
    });
}

// Function to display the single country when the image is clicked
function displaySingleCountry(event) {
    const index = event.target.getAttribute("data-index"); // Get the clicked country index
    const selectedCountry = [allCountries[index]]; // Retrieve the clicked country from the array

    // Now, display only the selected country details
    displayCountries(selectedCountry);
}

// Load countries when the page is loaded
window.onload = apiUrl;




//------------------------------------------------------------------------------------------------------------------

// this section the selected country should be flexed

function displaySingleCountry(event) {
    const index = event.target.getAttribute("data-index");
    const selectedCountry = [allCountries[index]];

    //  popup content
    let popupContent = `
            
            <button id="backButton" onclick="apiUrl()">Back</button>
        </div>
        <div class="popup-container">
            <img src="${selectedCountry[0].flags.svg}" alt="${selectedCountry[0].name.common}" class="country-image-popup">
            <div class="country-details">
                <h3 class="country">${selectedCountry[0].name.common}</h3>
                <p class="population">Population: <span>${selectedCountry[0].population}</span></p>
                <p class="region">Region: <span>${selectedCountry[0].region}</span></p>
                <p class="capital">Capital: <span>${selectedCountry[0].capital ? selectedCountry[0].capital[0] : "N/A"}</span></p>   
                <p class="currencies">Currency: <span>${selectedCountry[0].currencies}</span></p> 
                <p class="languages">language: <span>${selectedCountry[0].languages}</span></p>
                <p class="area">Area: <span>${selectedCountry[0].area}</span></p>
            </div>
        </div>`;

    document.querySelector(".card").innerHTML = popupContent;
}


// <img id="arr" src="arrow.png" alt="">