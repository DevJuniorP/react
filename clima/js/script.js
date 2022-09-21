// VARIÁVEIS E SELEÇÃO DE ELEMENTOS
const apiKey = "b660fed156af0f475ade036884e9e3ce";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const countryElement = document.querySelector("#country")
const humidityElement = document.querySelector("#humidity span")
const windElement = document.querySelector("#wind span")
const weatherContainer = document.querySelector("#weather-data")

// FUNÇÕES
const getWeatherData  = async(city) =>{

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data

}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name;
    descElement.innerHTML = data.weather[0].description;
    tempElement.innerHTML = parseInt(data.main.temp);
    weatherIconElement.setAttribute(
        "src", 
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        );
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidityElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}km/h`;

};


//EVENTOS
searchBtn.addEventListener("click", (e) => {

    e.preventDefault()

        const city = cityInput.value;

    showWeatherData(city)
    weatherContainer.classList.remove("hide")

})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        showWeatherData(city);
    }
})
