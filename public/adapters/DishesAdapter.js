class DishesAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/api/v1/dishes'
    }

    getDishes() {
        return fetch(this.baseUrl).then(results => results.json()
        )
    }

    createDish(nameValue, restaurant_id) {

        const dish = {
            name: nameValue,
            restaurant_id: restaurant_id
        }
        return fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ dish }),
        }).then(results => results.json())

    }

}