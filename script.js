function weatherFn() {

    var cityName = document.getElementById("city-input").value;

    if(cityName == ""){
        alert("Please enter a city name");
        return;
    }

    var apiKey = "6faa5428c6e8fccf639179440551ed5c";

    var url =
    "https://api.openweathermap.org/data/2.5/weather?q="
    + cityName +
    "&units=metric&appid=" + apiKey;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        if (data.cod == 200) {

            document.getElementById("city-name").innerHTML =
                data.name + ", " + data.sys.country;

            document.getElementById("date").innerHTML =
                moment().format("MMMM Do YYYY, h:mm:ss a");

            document.getElementById("temperature").innerHTML =
                "Temperature: " + data.main.temp + " °C";

            document.getElementById("feels-like").innerHTML =
                "Feels Like: " + data.main.feels_like + " °C";

            document.getElementById("description").innerHTML =
                "Weather: " + data.weather[0].description;

            document.getElementById("humidity").innerHTML =
                "Humidity: " + data.main.humidity + " %";

            document.getElementById("pressure").innerHTML =
                "Pressure: " + data.main.pressure + " hPa";

            document.getElementById("wind-speed").innerHTML =
                "Wind Speed: " + data.wind.speed + " m/s";

            var iconCode = data.weather[0].icon;

            document.getElementById("weather-icon").src =
                "https://openweathermap.org/img/w/" + iconCode + ".png";

        } else {
            alert("City not found! Please try again.");
            clearData();
        }

    })
    .catch(error => {
        alert("Error connecting to weather server");
    });

}
function clearData(){
    document.getElementById("city-name").innerHTML = "";
    document.getElementById("temperature").innerHTML = "";
    document.getElementById("feels-like").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("humidity").innerHTML = "";
    document.getElementById("pressure").innerHTML = "";
    document.getElementById("wind-speed").innerHTML = "";
    document.getElementById("weather-icon").src = "";
}