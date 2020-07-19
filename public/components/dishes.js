class Dishes {
    constructor() {
        this.dishes = []
        this.adapter = new DishesAdapter()
        this.initBindingsAndEventListeners()
    }

    initBindingsAndEventListeners() {
        this.dishForm = document.getElementById('new-dish-form')
        // this.newDishName = document.getElementById('new-dish-name')
        this.restaurantId = document.getElementById('new-dish-restaurant-id')
        this.restaurantBtn = document.getElementById("dishBtn")
        this.restaurantBtn.addEventListener("click", this.createDish.bind(this))
    }

    createDish(event) {
        event.preventDefault()

        let dishName = document.getElementById("new-dish-name")
        let optionIndex = document.getElementById("restaurant-list")


        let dName = dishName.value
        let restaurantId = optionIndex.options.selectedIndex

        this.adapter.createDish(dName, restaurantId)

        let select = document.getElementById(`${restaurantId}`)
        let dsh = document.createElement("li")
        dsh.textContent = dName
        select.appendChild(dsh)
        dishName.value = ""

        // optionIndex.options.selectedIndex = 0


    }



}