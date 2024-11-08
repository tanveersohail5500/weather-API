const apikey = "bb0c3272a97bf45123f26b03097cd96b";
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
  try {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  } catch (error) {
    console.error('Error:', error);
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});



// const apikey="bb0c3272a97bf45123f26b03097cd96b";
// const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
// const searchbox = document.querySelector("search input");
// const searchbtn = document.querySelector("search button");
//  async function checkweather(city) {
// try {
//     const response = await fetch (`${apiurl} + city + &appid=${apikey}`);
//      const data = await response.json();
//      console.log(data);
//      document.querySelector(".city").innerHTML = data.name;
//      document.querySelector(".temp").innerHTML = math.round(data.main.temp) + "°C";
//      document.querySelector(".humidity").innerHTML = data.main.humidity; + "%";
//      document.querySelector(".wind").innerHTML = data.wind.speed; + "km/h";
// } catch(error){
//     console.error('Error:',error)
// }
//  }
//  searchbtn.addEventListener("click",()=>{
//     checkweather(searchbox.value);
//  })
// checkweather()
// })



// const apikey = "bb0c3272a97bf45123f26b03097cd96b";
// const apiurl = 'https:api.openweathermap.org/data/2.5/weather?units=metric&q=karachi';

// async function checkWeather() {
//   try {
//     const response = await fetch(`${apiurl}&appid=${apikey}`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// checkWeather();
