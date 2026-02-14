export function createCityFavoriteCard(cityData,weatherData){
    const card = document.createElement('div');
    card.classList.add('city-card');
    card.innerHTML = `
            <img src="${cityData.picture}" alt="${cityData.picture_alt}" class="city-image">
            <h2 class="city-name">${cityData.name}</h2>
            <h2 class="city-country">${cityData.country}</h2>
            <div id="weather-info">
                <h2>Weather Forecast</h2>
                <p class="weather-today">Today: Current: ${weatherData.currentWeather}°F Max: ${weatherData.todayMax}°F Min: ${weatherData.todayMin}°F</p>
                <p class="weather-tomorrow">Tomorrow: Max: ${weatherData.tomorrowMax}°F Min: ${weatherData.tomorrowMin}°F</p>
                <p class="weather-2days">In two days: Max: ${weatherData.twoDays}°F Min: ${weatherData.twoDaysMin}°F</p>
                <button class="add-favorite-btn">Add to Favorites</button>
            </div>`;
    return card;
}

export function createCityRemoveFavoriteCard(cityData,weatherData){
    const card = document.createElement('div');
    card.classList.add('city-card');
    card.innerHTML = `
            <img src="${cityData.picture}" alt="${cityData.picture_alt}" class="city-image">
            <h2 class="city-name">${cityData.name}</h2>
            <h2 class="city-country">${cityData.country}</h2>
            <div id="weather-info">
                <h2>Weather Forecast</h2>
                <p class="weather-today">Today: Current: ${weatherData.currentWeather}°F Max: ${weatherData.todayMax}°F Min: ${weatherData.todayMin}°F</p>
                <p class="weather-tomorrow">Tomorrow: Max: ${weatherData.tomorrowMax}°F Min: ${weatherData.tomorrowMin}°F</p>
                <p class="weather-2days">In two days: Max: ${weatherData.twoDays}°F Min: ${weatherData.twoDaysMin}°F</p>
                <button class="remove-favorite-btn">Remove from Favorites</button>
            </div>`;
    return card;
}

export function clearCityCards(){
    const container = document.getElementById('city-cards');
    container.innerHTML = '';
}