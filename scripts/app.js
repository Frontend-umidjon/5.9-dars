const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json?key=c1bdf339354a49f197d130248242412&q=Tashkent&days=7&aqi=yes&alerts=yes\'';
const searchInputEl = document.querySelector('.weather-dashboard__search');
const mainEl = document.querySelector('.weather-dashboard__main');
const mainSectionEl = document.querySelector('.weather-dashboard__section');
const forecastEl = document.querySelector('.weather-dashboard__section--forecast');
const detailsEl = document.querySelector('.weather-dashboard__section--details');
const weeklyEl = document.querySelector('.weather-dashboard__weekly');
const weeklyDayEls = document.querySelectorAll('.weekly__day');


async function fetchData() {
    const response = await fetch(`${BASE_URL}`)
    
    response 
        .json()
        .then(res => {
            createWeatherCards(res)
            console.log(res);
            
        })
        .catch(err => console.log(err))
}
window.onload = () => {
    fetchData()
}

function createWeatherCards(data) {
   
}
