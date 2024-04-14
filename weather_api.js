let btn1=document.querySelector(".search");
let btn2=document.querySelector(".cancel");
let p=document.querySelector("p");
let inp=document.querySelector("input");
let img=document.querySelector(".weather_img");
let windSpeed=document.querySelector(".wind");
let weatherHumid=document.querySelector(".humid");
let weatherKind=document.querySelector(".weather_type");
let temperature=document.querySelector(".temp");
let press=document.querySelector(".press");
let feel_temp=document.querySelector(".feel_temp");
let maxTemp=document.querySelector(".max");
let minTemp=document.querySelector(".min");


async function checkWeather(city){
    const API_KEY=`53d0c447eb261431e7ae92e5603e19f6`;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const weather_data=await fetch(`${url}`).then(response=>response.json());
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    weatherKind.innerHTML=`${weather_data.weather[0].description}`;
    weatherHumid.innerHTML=`${weather_data.main.humidity}%`;
    windSpeed.innerHTML=`${weather_data.wind.speed}km/h`;
    feel_temp.innerHTML=`${Math.round(weather_data.main.feels_like-273.15)}°C`;
    press.innerHTML=`${weather_data.main.pressure}mmHg`;
    maxTemp.innerHTML=`${Math.round(weather_data.main.temp_max-273.15)}°C`;
    minTemp.innerHTML=`${Math.round(weather_data.main.temp_min-273.15)}°C`;

    switch(weather_data.weather[0].main){
        case 'Clouds': img.src="cloud.png";
                        break;
        case 'Clear': img.src="clear.png";
                        break;
        case 'Rain': img.src="rain.png";
                        break;
        case 'Mist': img.src="mist.png";
                        break;
        case 'Snow': img.src="snow.png";
                        break;
    }
    console.log(weather_data);
}
btn1.addEventListener("click",async()=>{
    checkWeather(inp.value);
})
btn2.addEventListener("click",async()=>{
    inp.value="";
})