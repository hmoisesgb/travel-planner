import {getFavorites,removeFromFavorites} from "./favorites.mjs";
import { getCityWeather } from "./city.mjs";
import { createCityRemoveFavoriteCard, clearCityCards } from "./utils.mjs";

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
    for (const cityData of favorites){
        const weatherData = await getCityWeather(cityData);
        const card = createCityRemoveFavoriteCard(cityData, weatherData);
        const removeFavoriteBtn = card.querySelector('.remove-favorite-btn');
        removeFavoriteBtn.addEventListener('click', () => {
            removeFromFavorites(cityData);
            displayFavorites();
        });
        container.appendChild(card);
    };
}