class RestaurantsAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/restaurants'
    }

    getRestaurants() {
        return fetch(this.baseUrl).then(results => results.json()
        )
    }

    createRestaurant(nameValue, cityValue, stateValue) {
        const restaurant = {
            name: nameValue,
            city: cityValue,
            state: stateValue
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ restaurant }),
        }).then(results => results.json())
    }

}