import { getCityData, getCityWeather } from "./city.mjs";
import { createCityFavoriteCard, clearCityCards, showNotification , removeAllNotifications} from "./utils.mjs";
import { addToFavorites } from "./favorites.mjs";

const cityNameInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const container = document.getElementById('city-cards');

searchBtn.addEventListener('click', async () => {
    clearCityCards();
    const cityName = cityNameInput.value.trim();

    if (!cityName) {
        showNotification('Please enter a city name.', 'error');
        return;
    }

    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loading-spinner');
    container.appendChild(loadingSpinner);

    try {
        const cityData = await getCityData(cityName);
        const weatherData = await getCityWeather(cityData);
        const card = createCityFavoriteCard(cityData, weatherData);
        const addFavoriteBtn = card.querySelector('.add-favorite-btn');
        addFavoriteBtn.addEventListener('click', () => {
            try {
                const message = addToFavorites(cityData);
                showNotification(message, 'success');
            } catch (error) {
                showNotification(error.message, 'error');
            }
        });
            container.appendChild(card);
    } catch (error) {
        showNotification(error.message, 'error');
    }
    finally {
        if (container.contains(loadingSpinner)) {
            container.removeChild(loadingSpinner);
        }
    }
});