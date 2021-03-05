const city = document.getElementById("city");
const formForGettingWeatherData = document.getElementById("form-for-getting-weather-data");
const weatherIconImage = document.getElementById("weather-icon-image");
function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
function updateURLOfImage(imgId, altText) {
    let hours = new Date().getHours();
    if (hours >= 18 || hours <= 5) {
        weatherIconImage.src = `http://openweathermap.org/img/wn/${imgId}n@2x.png`;
        weatherIconImage.alt = altText + " (Night)";
    } else {
        weatherIconImage.src = `http://openweathermap.org/img/wn/${imgId}d@2x.png`;
        weatherIconImage.alt = altText + " (Day)";
    }
}
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        let weatherData = JSON.parse(xhr.responseText);
        try {
            let weatherDescription = weatherData.weather[0].description.toUpperCase();
            let textToPutIntoParagraph = `${titleCase(weatherDescription)}<br />Temperature: ${weatherData.main.temp}° F<br />Humidity: ${weatherData.main.humidity}%`;
            if (weatherDescription === "CLEAR SKY") {
                updateURLOfImage("01", "Clear Sky Weather Icon");
            } else if (weatherDescription === "FEW CLOUDS") {
                updateURLOfImage("02", "Few Clouds Weather Icon");
            } else if (weatherDescription === "SCATTERED CLOUDS") {
                updateURLOfImage("03", "Scattered Clouds Weather Icon");
            } else if (weatherDescription === "BROKEN CLOUDS" || weatherDescription === "OVERCAST CLOUDS") {
                updateURLOfImage("04", "Broken Clouds/Overcast Clouds Weather Icon");
            } else if (weatherDescription === "LIGHT INTENSITY SHOWER RAIN" || weatherDescription === "SHOWER RAIN" || weatherDescription === "HEAVY INTENSITY SHOWER RAIN" || weatherDescription === "RAGGED SHOWER RAIN" || weatherDescription === "LIGHT INTENSITY DRIZZLE" || weatherDescription === "DRIZZLE" || weatherDescription === "HEAVY INTENSITY DRIZZLE" || weatherDescription === "LIGHT INTENSITY DRIZZLE RAIN" || weatherDescription === "DRIZZLE RAIN" || weatherDescription === "HEAVY INTENSITY DRIZZLE RAIN" || weatherDescription === "SHOWER RAIN AND DRIZZLE" || weatherDescription === "HEAVY SHOWER RAIN AND DRIZZLE" || weatherDescription === "SHOWER DRIZZLE") {
                updateURLOfImage("09", "Shower Rain/Drizzle Weather Icon");
            } else if (weatherDescription === "LIGHT RAIN" || weatherDescription === "MODERATE RAIN" || weatherDescription === "HEAVY INTENSTIY RAIN" || weatherDescription === "VERY HEAVY RAIN" || weatherDescription === "EXTREME RAIN") {
                updateURLOfImage("10", "Rain Weather Icon");
            } else if (weatherDescription === "THUNDERSTORM WITH LIGHT RAIN" || weatherDescription === "THUNDERSTORM WITH RAIN" || weatherDescription === "THUNDERSTORM WITH HEAVY RAIN" || weatherDescription === "LIGHT THUNDERSTORM" || weatherDescription === "THUNDERSTORM" || weatherDescription === "HEAVY THUNDERSTORM" || weatherDescription === "RAGGED THUNDERSTORM" || weatherDescription === "THUNDERSTORM WITH LIGHT DRIZZLE" || weatherDescription === "THUNDERSTORM WITH DRIZZLE" || weatherDescription === "THUNDERSTORM WITH HEAVY DRIZZLE") {
                updateURLOfImage("11", "Thunderstorm Weather Icon");
            } else if (weatherDescription === "LIGHT SNOW" || weatherDescription === "SNOW" || weatherDescription === "HEAVY SNOW" || weatherDescription === "SLEET" || weatherDescription === "LIGHT SHOWER SLEET" || weatherDescription === "SHOWER SLEET" || weatherDescription === "LIGHT RAIN AND SNOW" || weatherDescription === "RAIN AND SNOW" || weatherDescription === "LIGHT SHOWER SNOW" || weatherDescription === "SHOWER SNOW" || weatherDescription === "HEAVY SHOWER SNOW" || weatherDescription === "FREEZING RAIN") {
                updateURLOfImage("13", "Snow/Sleet/Freezing Rain Weather Icon");
            } else if (weatherDescription === "MIST" || weatherDescription === "SMOKE" || weatherDescription === "HAZE" || weatherDescription === "SAND/ DUST WHIRLS" || weatherDescription === "FOG" || weatherDescription === "SAND" || weatherDescription === "DUST" || weatherDescription === "VOLCANIC ASH" || weatherDescription === "SQUALLS" || weatherDescription === "TORNADO") {
                updateURLOfImage("50", "Mist/Smoke/Haze/Fog/Sand/Dust/Volcanic Ash/Squalls/Tornado Weather Icon");
            }
            weatherIconImage.style.display = "block";
            if (document.getElementById("paragraph-of-data") === null) {
                let paragraphToPutDataIn = document.createElement("p");
                paragraphToPutDataIn.innerHTML = textToPutIntoParagraph;
                paragraphToPutDataIn.id = "paragraph-of-data";
                document.body.append(paragraphToPutDataIn);
            } else {
                document.getElementById("paragraph-of-data").innerHTML = textToPutIntoParagraph;
            }
        } catch (err) {
            weatherIconImage.style.display = "none";
            if (document.getElementById("paragraph-of-data") === null) {
                let paragraphToPutDataIn = document.createElement("p");
                paragraphToPutDataIn.innerHTML = "Oops! That is not a valid city.";
                paragraphToPutDataIn.id = "paragraph-of-data";
                document.body.append(paragraphToPutDataIn);
            } else {
                document.getElementById("paragraph-of-data").innerHTML = "Oops! That is not a valid city.";
            }
        }
    }
}
formForGettingWeatherData.addEventListener("submit", (e) => {
    e.preventDefault();
    xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&apikey=f1c038a8f5850dda4065980b56297491`);
    xhr.send();
});