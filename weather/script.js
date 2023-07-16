const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const Weather_image = document.querySelector('.Weather-image')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const wind_speed = document.getElementById('wind-speed')
const locaction_not_found = document.querySelector('.locaction-not-found')
const weather_body = document.querySelector('.weather-body')



async function cheakWeather(city) {
    const api_key = "ebd1d1dc41a5e0f834819ec33766f128"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data = await fetch(`${url}`).then(response =>
        response.json()
    );
    console.log(weather_data);

    if (weather_data.cod === '404') {
        locaction_not_found.style.display = "flex"
        weather_body.style.display = "none"
        return;
    }
    {
        locaction_not_found.style.display = "none"
        weather_body.style.display = "flex"
    }
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${(weather_data.weather[0].description)}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch (weather_data.weather[0].main) {
        case 'cloud':
            Weather_image.src = "/assets/cloud.png.jpg"
            break;
        case 'Clear':
            Weather_image.src = "/assets/clear.png.jfif"
            break;
        case 'mist':
            Weather_image.src = "/assets/mist.png.png"
            break;
        case 'Rain':
            Weather_image.src = "/assets/rain.png.png"
            break;
        case 'snow':
            Weather_image.src = "/assets/snow.png.png"
            break;
        case 'Haze':
            Weather_image.src = "/assets/haze.png"
            break
    }

}


searchBtn.addEventListener('click', () => {
    cheakWeather(inputBox.value)
})