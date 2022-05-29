// console.log(config.WETHER_API_KEY);

const weather_api_key = config.WETHER_API_KEY;

let weather = {
    'apiKey': weather_api_key,
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + "&units=metric&appid="
            + this.apiKey
        ).then((responce) => responce.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = (data);
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { feels_like } = data.main;
        const { pressure } = data.main;
        const { temp_min, temp_max } = data.main;
        const { deg } = data.wind;
        // console.log(name, icons, description, temp, humidty, speed, feels_like, temp_min, temp_max, pressure, deg);

        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + ".png";
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = Math.round(temp) + "°C";
        document.querySelector('.feels_like').innerText = 'Feels like: ' + Math.round(feels_like) + '°C';
        document.querySelector('.humidty').innerText =
        'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 
        'Wind speed: ' + speed + 'km/h';
        // Удаляем клас loadimg
         document.body.style.backgroundImage =
         `url('http://source.unsplash.com/1600x900/?${name}')`;
         document.querySelector('.pressure').innerText = 'pressure: ' + Math.round(0.75006*pressure) + ' mmHg';
         document.querySelector('.temp_min').innerText = 'temp min: ' + temp_min + '°C';
         document.querySelector('.temp_max').innerText = 'temp max: ' + temp_max + '°C';
         document.querySelector('.deg').innerText = 'deg: ' + deg;
         document.querySelector('.weather').classList.remove('loading');
    },

    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};


document.querySelector('.search-btn').addEventListener("click", function () {
    weather.search();
});

document.querySelector('.search-bar').addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        weather.search();
    }
});

weather.fetchWeather('london');

// console.log(weather.fetchWeather("london"));

// Получение переменной из объекта

// const car = { 'type': "fiat", 'model': "500", 'color': 'white' };
// const { type } = car;

// console.log(type);

// let data = { "coord": { "lon": 46.0333, "lat": 51.5667 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04d" }], "base": "stations", "main": { "temp": 11.43, "feels_like": 10.06, "temp_min": 11.43, "temp_max": 11.43, "pressure": 1010, "humidity": 55, "sea_level": 1010, "grnd_level": 992 }, "visibility": 10000, "wind": { "speed": 6.51, "deg": 145, "gust": 9.32 }, "clouds": { "all": 100 }, "dt": 1649421077, "sys": { "country": "RU", "sunrise": 1649384148, "sunset": 1649432362 }, "timezone": 14400, "id": 498677, "name": "Saratov", "cod": 200 }

