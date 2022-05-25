/* apiurl = "https://api.openweathermap.org/data/2.5/weather?lat=30.42018&lon=-9.59815&appid=302696fea5f9baf392e3bc9f7ae3011a"
async function getapiinfo(){
    const response = await fetch(apiurl)
    const data = await response.json()
    console.log(data)
}
getapiinfo()*/
/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
		'X-RapidAPI-Key': '2afd1a219emshb0842455c07c86ap1c7308jsn76d6a89f84a4'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?city=', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));*/












/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
		'X-RapidAPI-Key': '2afd1a219emshb0842455c07c86ap1c7308jsn76d6a89f84a4'}
    };

apiurl = "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=30.42018&lon=-9.59815", options
async function getapiinfo(){
        const response = await fetch(apiurl)
        const data = await response.json()
        console.log(data)
}
getapiinfo()*/


let weather = {
	apiKey: "302696fea5f9baf392e3bc9f7ae3011a",
	fetchWeather: function (city) {
	  fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		  city +
		  "&units=metric&appid=" +
		  this.apiKey
	  )
		.then((response) => {
		  if (!response.ok) {
			alert("No weather found.");
		  }
		  return response.json();
		})
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
	  const { name } = data;
	  const { icon, description } = data.weather[0];
	  const { temp, humidity } = data.main;
	  const { speed } = data.wind;
	  document.querySelector(".city").innerText = "Weather in " + name;
	  document.querySelector(".icon").src =
		"https://openweathermap.org/img/wn/" + icon + ".png";
	 
	  document.querySelector(".temp").innerText = temp + "°C";
	  document.querySelector(".humidity").innerText =
		"Humidity: " + humidity + "%";
	  document.querySelector(".wind").innerText =
		"Wind speed: " + speed + " km/h";
	  document.querySelector(".weather").classList.remove("loading");
	  document.body.style.backgroundImage =
		"url('https://source.unsplash.com/1600x900/?" + name + "')";
	},
	search: function () {
	  this.fetchWeather(document.querySelector(".search-bar").value);
	},
  };
  
  
  document.querySelector(".search button").addEventListener("click", function () {
	weather.search();
  });
  
  document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
	  if (event.key == "Enter") {
		weather.search();
	  }
	});
  
  weather.fetchWeather("laayoune");