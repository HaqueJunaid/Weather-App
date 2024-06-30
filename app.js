const key = "b573a961134a27ad752186613db8de4b"
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + key;

let input = document.querySelector(".inputsection input");
let search = document.querySelector(".inputsection i");
let city = "";
let weatherImage = document.querySelector(".weather-image img");

search.addEventListener("click", function () {
    city = input.value.toLowerCase();
    showWeather(city);
})

async function showWeather(city) {
    let resp = await fetch(url + `&q=${city}`);
    let data = await resp.json();

    console.log(data);

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
    document.getElementById("feels").innerText = `Feels Like ${Math.round(data.main.feels_like)}°C`;
    document.getElementById("wind").innerText = data.wind.speed + " km/h";
    document.getElementById("humid").innerText = data.main.humidity + "%";

    if (data.weather[0].main == "Clouds") {
        weatherImage.src = "./images/clouds.png"
    } else if (data.weather[0].main == "Rain") {
        weatherImage.src = "./images/rain.png"
    } else if (data.weather[0].main == "Clear") {
        weatherImage.src = "./images/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
        weatherImage.src = "./images/drizzle.png"
    } else if (data.weather[0].main == "Mist") {
        weatherImage.src = "./images/mist.png"
    } else if (data.weather[0].main == "Snow") {
        weatherImage.src = "./images/snow.png"
    } else {
        weatherImage.src = "./images/mist.png"
    }


}

showWeather("delhi")