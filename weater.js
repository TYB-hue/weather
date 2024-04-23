const apiKey = "efdf2f12bb1cf7a2ad3e39c91ea85f55";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";
const serchBox = document.querySelector(".search-box input");
const serchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if (response.status == 404){
        document.querySelector('.eror').style.display= "block";
    }
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity +  "%";
    if (data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/clouds.png";
    }
    if (data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/rain.png";
    }
    if (data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/clear.png";
    }
    if (data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/drizzle.png";
        if (data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/mist.png";
        }
    }

    document.querySelector(".weather").style.display="block";
}

serchBtn.addEventListener("click", () => {
    checkWeather(serchBox.value)
})
