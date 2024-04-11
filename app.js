const key = "a8d188bcfdff94b1be84f3146f346420";
const searchBtn = document.querySelector("#search-btn");
const cityNameInput = document.querySelector("#city-name-input");
const local = document.querySelector("#local");
const temperature = document.querySelector("#temperature");
const icon = document.querySelector("#weather-icon img");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed #speed");
const country = document.querySelector("#country");


async function getCityStats(cityName) {
    const cityStats = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=pt_br`).then( response => response.json());
    console.log(cityStats);
    setCityStats(cityStats);
}

function setCityStats(cityStats) {
    local.innerText = cityStats.name;
    temperature.innerText = `${Math.floor(cityStats.main.temp)}°C`;
    icon.src = `https://openweathermap.org/img/wn/${cityStats.weather[0].icon}.png`;
    description.innerText = cityStats.weather[0].description;
    humidity.innerText = `Umidade: ${cityStats.main.humidity}%`;
    windSpeed.innerText = `${cityStats.wind.speed} km/h`;
    country.innerText = cityStats.sys.country;
}

function getInputName(e) {
    e.preventDefault();
    const cityName = cityNameInput.value;    
    getCityStats(cityName);
}

searchBtn.addEventListener("click", getInputName); 