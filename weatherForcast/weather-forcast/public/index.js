const weatherBtn = document.getElementById('get-weather-btn');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const reportDetails = document.getElementById('report-details');
const url = "https://api.weatherstack.com/current?access_key=350fd842c298ba32f175f744f5ab7fa0"//"https://api.open-meteo.com/v1/";
// const key = "350fd842c298ba32f175f744f5ab7fa0";

function geolocation() {
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            let lat = position.coords.latitude.toFixed(4);
            let long = position.coords.longitude.toFixed(4);
            //console.log(lat , long)
        
            latitude.setAttribute('value',`Latitude:${lat}`);
            longitude.setAttribute('value', `Longitude:${long}`);
            weather(url,lat,long);
        })
    } else {
        alert("Not able to get the location");
    };
};

function weather(url,...coord) {
    lat = coord[0];
    long = coord[1];
    const apiUrl = `${url}&query=${lat},${long}`//forecast?latitude=${lat}&longitude=${long}`;
    console.log(apiUrl)
    try {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                let weatherData = data;
                console.log(weatherData);
                changeBackground(weatherData);
            })
            .catch(error => console.log('Error fetching weather data:', error));
    } catch (error) {
        console.log(error);
    }
}

function changeBackground(weatherType) {
    let type = weatherType.current.weather_descriptions[0];
    let country = weatherType.location.country;
    let place = weatherType.location.name;
    let time = weatherType.location.localtime;
    let desc = `Hey the weather seems a ${type} today \n in ${place},${country} at ${time}.\n`
    reportDetails.value = desc;
    let todayWeather = type.toLowerCase();
    if (todayWeather === 'haze') {
        document.body.style.backgroundImage = "url('../backgroundImages/haze.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    }
}

weatherBtn.addEventListener('click',geolocation);