export function createCityFavoriteCard(cityData,weatherData){
    const card = document.createElement('div');
    card.classList.add('city-card');
    card.innerHTML = `
            <img src="${cityData.picture}" alt="${cityData.picture_alt}" class="city-image">
            <h2 class="city-name-country">${cityData.name} - ${cityData.country}</h2>
            <div class="weather-info">
                <h2>Weather Forecast</h2>
                <div class="forecast-grid">
                <p class="current-weather">Current Temperature: ${weatherData.currentWeather}°F</p>
                <p class="weather-today">Today: Max: ${weatherData.todayMax}°F Min: ${weatherData.todayMin}°F</p>
                <p class="weather-tomorrow">Tomorrow: Max: ${weatherData.tomorrowMax}°F Min: ${weatherData.tomorrowMin}°F</p>
                <p class="weather-2days">In two days: Max: ${weatherData.twoDays}°F Min: ${weatherData.twoDaysMin}°F</p>
                </div>
                <button class="add-favorite-btn">Add to Favorites</button>
            </div>`;
    return card;
}

export function createCityRemoveFavoriteCard(cityData,weatherData){
    const card = document.createElement('div');
    card.classList.add('city-card');
    card.innerHTML = `
            <img src="${cityData.picture}" alt="${cityData.picture_alt}" class="city-image">
            <h2 class="city-name-country">${cityData.name} - ${cityData.country}</h2>
            <div class="weather-info">
                <h2>Weather Forecast</h2>
                <div class="forecast-grid">
                <p class="current-weather">Current Temperature: ${weatherData.currentWeather}°F</p>
                <p class="weather-today">Today: Max: ${weatherData.todayMax}°F Min: ${weatherData.todayMin}°F</p>
                <p class="weather-tomorrow">Tomorrow: Max: ${weatherData.tomorrowMax}°F Min: ${weatherData.tomorrowMin}°F</p>
                <p class="weather-2days">In two days: Max: ${weatherData.twoDays}°F Min: ${weatherData.twoDaysMin}°F</p>
                </div>
                <button class="remove-favorite-btn">Remove from Favorites</button>
            </div>`;
    return card;
}

export function clearCityCards(){
    const container = document.getElementById('city-cards');
    container.innerHTML = '';
}

export function showNotification(message, type = 'info') {
    const notificationContainer = document.querySelector('.notification-container');

    if (!notificationContainer) return;

    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerHTML = `<p>${message}</p><span class="close-btn"> X</span>`;
    notification.addEventListener("click", function (e) {
    if (e.target.classList.contains("close-btn")) {
      notificationContainer.removeChild(this);
    }
  });
    notificationContainer.appendChild(notification);
}

export function removeAllNotifications() {
    const notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) return;
    notificationContainer.innerHTML = '';
}