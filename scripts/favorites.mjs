export function addToFavorites(cityData){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some(fav => fav.id === cityData.id)){
        favorites.push(cityData);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    else{
        console.log('City is already in favorites');
    }
}

export function removeFromFavorites(cityData){
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(fav => !(fav.id === cityData.id));
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('City removed from favorites');
}

export function getFavorites(){
    return JSON.parse(localStorage.getItem('favorites')) || [];
}