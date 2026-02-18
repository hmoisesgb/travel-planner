export function addToFavorites(cityData){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === cityData.id)){
        favorites.push(cityData);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    else{
        throw new Error('City already in favorites');
    }
    return "City added to favorites. ";
}

export function removeFromFavorites(cityData){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some(fav => fav.id === cityData.id);
    if (!exists){
        throw new Error('City not in favorites');
    }
    else{
        favorites = favorites.filter(fav => !(fav.id === cityData.id));
        localStorage.setItem('favorites', JSON.stringify(favorites));
        return "City removed from favorites. ";
    }
}

export function getFavorites(){
    return JSON.parse(localStorage.getItem('favorites')) || [];
}