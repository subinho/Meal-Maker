const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
},
    get appetizers() {
        return this._courses.appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set appetizers(appetizers) {
        return this._courses.appetizers = appetizers;
    },
    set mains(mains) {
        return this._courses.mains = mains;
    },
    set appetizers(desserts) {
        return this._courses.desserts = desserts;
    },
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomNumber = Math.floor(Math.random() * dishes.length);
        return dishes[randomNumber];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse("appetizers");
        const main = this.getRandomDishFromCourse("mains");
        const dessert = this.getRandomDishFromCourse("desserts");
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your appetizer is ${ appetizer.name }, your mains ${ main.name } and your dessert is ${ dessert.name }.The total price is ${ totalPrice }`;
}
};

menu.addDishToCourse('appetizers', 'salad', 43)
menu.addDishToCourse('mains', 'Beef and Barley Soup', 87)
menu.addDishToCourse('desserts', 'truffle brownies', 24)

const meal = menu.generateRandomMeal()

console.log(meal)