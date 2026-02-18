import { getCityData, getCityWeather } from "./city.mjs";
import { createCityFavoriteCard, clearCityCards } from "./utils.mjs";
import { addToFavorites } from "./favorites.mjs";

const cityNameInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('city-cards');

searchBtn.addEventListener('click', async () => {
    clearCityCards();
    const cityName = cityNameInput.value.trim();
    if (cityName) {
        const loadingSpinner = document.createElement('div');
        loadingSpinner.classList.add('loading-spinner');
        container.appendChild(loadingSpinner);
        const cityData = await getCityData(cityName);
        if (cityData.name !== undefined && cityData.name !== 'undefined') {
            const weatherData = await getCityWeather(cityData);
            const card = createCityFavoriteCard(cityData, weatherData);
            const addFavoriteBtn = card.querySelector('.add-favorite-btn');
            addFavoriteBtn.addEventListener('click', () => {
                addToFavorites(cityData);
            });
            container.removeChild(loadingSpinner);
            container.appendChild(card);
        }
        else{
            console.log('City not found');
        }
    }
    else{
        console.log('Please enter a city name');
    }
});
