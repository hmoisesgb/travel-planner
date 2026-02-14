const API_KEY = 'R4v0UgBIv7cwfntcgnhNDCiKE00SKq2jyf3rl7HJ6JablGAjqJOycS0U';

export async function getCityData(cityName){
    const cityData = {};
    const location_response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`);
    const location_data = await location_response.json();
    if(location_data.results && location_data.results.length > 0){
        cityData.name = location_data.results[0].name;
        cityData.country = location_data.results[0].country;
        cityData.country_code = location_data.results[0].country_code;
        cityData.latitude = location_data.results[0].latitude;
        cityData.longitude = location_data.results[0].longitude;
        cityData.id = `${cityData.name}-${cityData.country_code}`;
    } else {
        console.log('City not found');
    }
    if (cityData.name !== undefined) {
        await getCityImage(cityData);
    }
    return cityData;
}

export async function getCityImage(cityData){
    const picture_response  = await fetch(`https://api.pexels.com/v1/search?query=${cityData.name}&per_page=1`, {
        method: 'GET',
        headers: {
            Authorization: API_KEY
        }
    });
    const picture_data = await picture_response.json();
    if(picture_data.photos && picture_data.photos.length > 0){
        cityData.picture = picture_data.photos[0].src.medium;
        cityData.picture_alt = picture_data.photos[0].alt;
    } 
    else {
        console.log('Picture not found');
    }
}

export async function getCityWeather(cityData){
    const weatherData = {};
    const weather_response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${cityData.latitude}&longitude=${cityData.longitude}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&timezone=auto&temperature_unit=fahrenheit`);
    if (weather_response.ok){
        const weather_json = await weather_response.json();
        weatherData.currentWeather = weather_json.current.temperature_2m;
        weatherData.todayMax = weather_json.daily.temperature_2m_max[0];
        weatherData.todayMin = weather_json.daily.temperature_2m_min[0];
        weatherData.tomorrowMax = weather_json.daily.temperature_2m_max[1];
        weatherData.tomorrowMin = weather_json.daily.temperature_2m_min[1];
        weatherData.twoDays = weather_json.daily.temperature_2m_max[2];
        weatherData.twoDaysMin = weather_json.daily.temperature_2m_min[2];
    }
    else{
        console.log('Weather data not found');
    }
    return weatherData;
}