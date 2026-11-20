const button = document.getElementById("search_button");
const cityInput = document.getElementById("city_input");

const cityName=document.getElementById("city_name");
const localtime=document.getElementById("localtime");
const temperature=document.getElementById("temperature");

async function getData(cityName) {
   
    const promise = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=864052516eee436c83c125136262011&q=${cityName}&days=3&aqi=no&alerts=yes`);
    return await promise.json();
}

button.addEventListener("click", async () => { 
    const value = cityInput.value;
    const data = await getData(value);
    console.log(data);
    cityName.innerText=`${data.location.name}, ${data.location.region}- ${data.location.country}`;
    localtime.innerText=`${data.location.localtime}`;
    temperature.innerText=`${data.current.temp_c}`;
});