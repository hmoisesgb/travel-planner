import {getFavorites,removeFromFavorites} from "./favorites.mjs";
import { getCityWeather } from "./city.mjs";
import { createCityRemoveFavoriteCard, clearCityCards, showNotification , removeAllNotifications} from "./utils.mjs";

const container = document.getElementById('city-cards');
displayFavorites();

async function displayFavorites(){
    clearCityCards();
    const favorites = getFavorites();
    if (favorites.length === 0){
        const message = document.createElement('p');
        message.textContent = 'No favorites added yet.';
        container.appendChild(message);
        return;
    }

    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loading-spinner');
    container.appendChild(loadingSpinner);

    const weatherResults = await Promise.all(favorites.map(cityData => getCityWeather(cityData)));

    container.removeChild(loadingSpinner);
    for (const cityData of favorites){
        const weatherData = weatherResults[favorites.indexOf(cityData)];
        const card = createCityRemoveFavoriteCard(cityData, weatherData);
        const removeFavoriteBtn = card.querySelector('.remove-favorite-btn');
        removeFavoriteBtn.addEventListener('click', () => {
            try {
            const message = removeFromFavorites(cityData);
            showNotification(message, 'success');
            displayFavorites();
            } catch (error) {
            showNotification(error.message, 'error');
            }});
        container.appendChild(card);
    };
}